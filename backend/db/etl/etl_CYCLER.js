const { template_exe } = require('./etl_Template')
const opt = require('./etl_Options')

const cycleThroughTables = (tables, tablesCompleted) => {
  return new Promise ((resolve, reject) => {
    if (tables.length === 0) {
      resolve();
    }
    let currentTable = tables.pop();

    console.log(`Initializing ETL for ${currentTable}`)
    template_exe(opt[currentTable], tablesCompleted)
      .then(_=>{
        console.log(`Completed ETL for ${currentTable}`)
        tablesCompleted.push(currentTable)
        cycleThroughTables(tables, tablesCompleted);
      })
      .catch(err => {
        console.error(`ERROR during ETL of ${currentTable}`, err.message);
        reject(err);
        })
      })
}

const initTableCycler = () => {
  let tables = Object.keys(opt);
  cycleThroughTables(tables, [])
    .then(_=> {
      console.log('ETL PROCESS COMPLETE')
    })
    .catch(err => {
      console.error(err)
    })
}


module.exports = {
  initTableCycler,
}