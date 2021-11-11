export default class Utils {

  constructor() {
    this.monthNumToWord = {
      '01': 'January', '02': 'February', '03': 'March', '04': 'April',
      '05': 'May', '06': 'June', '07': 'July', '08': 'August', '09': 'September',
      '10': 'October', '11': 'November', '12': 'December'
    }
  }

  roundDownToNearestQuarter (decimal) {
    if (decimal === undefined) {
      return 0;
    }
    decimal = Number(decimal)
    return decimal > .75 ? .75
      : decimal > .5 ? .5
      : decimal > .25 ? .25 : 0
  }

  getAverageRating (ratings) {
    let numOfRatings = 0;
    let totalScore = 0;
    for (let rating in ratings) {
      numOfRatings += ratings[rating];
      totalScore += rating * ratings[rating]
    }
    if (numOfRatings === 0) {
      return 'no ratings'
    }
    let average = totalScore / numOfRatings || 0;
    let [wholeNum, decimal] = average.toString().split('.')
    return Number(wholeNum) + this.roundDownToNearestQuarter(decimal);
  }

  removeQuotes (allText) {
    if (Array.isArray(allText)) {
      return allText.map(text => text.substring(1, text.length - 1));
    }
    return allText.substring(1, allText.length - 1);
  }

  formatDateAndTime (format, date) {
    try {
      if (format === 'date') {
        let [year, month, day] = date.split(' ')[0].split('-');
        month = this.monthNumToWord[month]
        day = day[0] === '0' ? day[1] : day;
        return `${month} ${day}, ${year}`;
      } else if (format === 'time') {

      } else if (format === 'date-time') {

      } else {
        throw new Error(`invalid format for formatDateAndTime -- valid formats are 'date', 'time', and 'date-time'`);
      }
    } catch(err) {
      console.error(err);
    }
  }

}
