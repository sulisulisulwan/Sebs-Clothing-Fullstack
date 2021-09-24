const convertDataType = {
  string: (str) => {
    return str;
  },
  int: (str) => {
    return parseInt(str);
  },
  boolean: (str) => {
    return (str === '1' || str === 'true') ? true : false
  },
  datetime: (str) => {
    // let [date, time] = new Date(Number(str)).toISOString().split('T')
    // let datetime = date.concat(' ', time.substring(0, 8))
    // return datetime;
    return new Date(str);
  }
}

module.exports = (line, columnsObj, columnNames, dataTypes) => {
  let columns = line.split(',');
  columns.forEach((column, i) => {
    columnsObj[columnNames[i]] = convertDataType[dataTypes[i]](column);
  })
  return columnsObj;
}