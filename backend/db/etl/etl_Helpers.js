
const removeChars = (line, index) => {
  return line.substring(0, index) + line.substring(index + 1);
}

const processDoubleQuotes = (line) => {
  let doubleQuotedStrings = [];
  let isInQuote = false;
  let quoteString = '';
  let substringStart;

  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') {
      line = removeChars(line, i)
      //possible bug?? check if we need to i-- to correct the iteration count becauwe of char removal
      if (isInQuote) {
        doubleQuotedStrings.push(quoteString);
        quoteString = ''
      } else {
        isInQuote = !isInQuote
        continue;
    }
    if (isInQuote) {
      quoteString += line[i]
      line = removeChars(line, i)
      i--
    }
  }
  return [line, doubleQuotedStrings]
}


module.exports = {
  processDoubleQuotes
}