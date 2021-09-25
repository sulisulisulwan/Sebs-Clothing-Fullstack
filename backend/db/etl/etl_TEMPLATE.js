const fs = require('fs');
const rl = require('readline');
const db = require('../db');
const processLine = require('./etl_LineProcessor');


const template_exe = (options, tablesCompleted) => {
  return new Promise((resolve, reject) => {
    let lineCount = 0;
    let linesProcessed = 0;
    let waterMark = 0;
    let columnsAndValues = {};
    let columnNames = [];
    let readline = rl.createInterface({
      input: fs.createReadStream(__dirname + options.csvFile)
    })

    readline.on('line', (line) => {
      lineCount++
      if (lineCount === 1) {
        line.split(',').forEach((column) => {
          column = column === 'id' ? column.toUpperCase() : column
          columnsAndValues[column] = null
          columnNames.push(column);
        })
        return;
      }
      if (waterMark === 2000) {
        readline.pause();
      }
      waterMark++;
      let query = `INSERT INTO ${options.table} SET ?`;
      columnsAndValues = processLine(line, columnsAndValues, columnNames, options.dataTypes)
      db.query(query, columnsAndValues)
        .then(_=> {
          waterMark--;
          linesProcessed++;
          if (waterMark === 0) {
            readline.resume();
          }
          if (linesProcessed % 50000 === 0) {
            console.log(options.table, linesProcessed, tablesCompleted)
          } else if (linesProcessed % 5000 === 0) {
            console.log(linesProcessed + ` lines processed in ${options.table} --- ${((linesProcessed / options.totalRows) * 100).toString().substring(0, 5)}%`)
          }
          if (linesProcessed === options.totalRows) {
            console.log(linesProcessed + ` lines processed in ${options.table} --- 100%`)
            resolve()
          }
        })
        .catch(err => {
          console.error(err)
          reject(err);
        })

      }).on('resume', () => {
        console.log('WaterMark drained')
      }).on('close', () => {
        `Finished reading ${options.table}
        Data may still be writing to database`
      }).on('pause', () => {
        console.log('WaterMark reached')
      }).on('error', (err) => {
        console.log(err)
        reject(err);
      })
    })
}

module.exports = {
  template_exe
}