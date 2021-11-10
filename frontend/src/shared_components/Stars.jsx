import React from 'react';

const getAverageRating = (ratings) => {
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

const getStarImagesArray = (averageRating) => {
  let [wholeNum, decimal] = averageRating.toString().split('.')
  decimal = Number(decimal) / 10 || 0;
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (wholeNum > 0) {
      wholeNum--;
      stars.push('StarFILLED.png')
    } else if (decimal > 0) {
      if (decimal > 0.75) {
        stars.push('Star.75.png')
      } else if (decimal > 0.5) {
        stars.push('Star.50.png')
      } else if (decimal > 0.25) {
        stars.push('Star.25.png')
      } else {
        stars.push('StarUMPAINTED.png')
      }
      decimal = 0;
    } else {
      stars.push('StarUNPAINTED.png')
    }
  }
  return stars;
}

const Stars = ({ parentClassName, productData }) => {

  if (productData === undefined) {
    return null;
  }

  const averageRating = getAverageRating(productData.reviewsMetaData.ratings)
  if (averageRating === 'no ratings') {
    return null;
  }
  const starImages = getStarImagesArray(averageRating)

  return (
    <div className={`${parentClassName}-stars`}>
      {starImages.map((starImage, i) => <img key={`${parentClassName}${productData.id}${i}`} className={'card-star'} src={`assets/${starImage}`} alt={'*'}></img>)}
    </div>
  )
}

export default Stars;