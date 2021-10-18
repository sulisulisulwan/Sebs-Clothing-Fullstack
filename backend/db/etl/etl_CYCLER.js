const { template_exe } = require('./etl_Template')
const opt = require('./etl_Options')

async function cycleThroughTables(tables, tablesCompleted) {
  if (tables.length === 0) {
    return;
  }
  let currentTable = tables.pop();
  console.log(`Initializing ETL for ${currentTable}`)
  try {
    await template_exe(opt[currentTable], tablesCompleted)
    console.log(`Completed ETL for ${currentTable}`)
    tablesCompleted.push(currentTable)
    cycleThroughTables(tables, tablesCompleted);
  } catch(err) {
    console.error(`ERROR during ETL of ${currentTable}`, err.message);
    return err;
  }
}

const initTableCycler = () => {
  let tables = Object.keys(opt);
  try {
    await cycleThroughTables(tables, [])
    console.log('ETL PROCESS COMPLETE')
  } catch(err) {
    console.error(err);
    return err;
  }
}


module.exports = {
  initTableCycler,
}