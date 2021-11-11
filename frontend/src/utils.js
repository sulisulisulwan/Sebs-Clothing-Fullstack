const utils = {
  getAverageRating: (ratings) => {
    let numOfRatings = 0;
    let totalScore = 0;
    for (let rating in ratings) {
      numOfRatings += ratings[rating];
      totalScore += rating * ratings[rating]
    }
    if (numOfRatings === 0) {
      return 'no ratings'
    }
    return totalScore / numOfRatings || 0;
  }
}


export default utils