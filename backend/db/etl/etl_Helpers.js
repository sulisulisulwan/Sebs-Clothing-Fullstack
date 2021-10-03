const processDoubleQuotes = (str) => {
  let doubleQuotedStrings = []
  let isInDoubleQuote = false;
  let startIndex;
  let endIndex;
  let i = 0
  while (str[i] !== undefined) {
    if (str[i] === '"') {
      isInDoubleQuote = !isInDoubleQuote;
      if (isInDoubleQuote) {
        startIndex = i + 1
      } else {
        endIndex = i
        doubleQuotedStrings.push(str.substring(startIndex, endIndex))
        str = str.slice(0, startIndex - 1) + str.slice(endIndex + 1)
        i = i - (endIndex - startIndex) - 1
      }
    }
    i++
  }
  return [str, doubleQuotedStrings]
}


module.exports = {
  processDoubleQuotes
}