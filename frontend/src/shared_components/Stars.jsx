import React from 'react';

const getStarImagesArray = (rating) => {
  let [wholeNum, decimal] = rating.toString().split('.')
  decimal = Number(decimal) / 10 || 0;
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (wholeNum > 0) {
      wholeNum--;
      stars.push('StarFILLED.png')
    } else if (decimal > 0) {
      if (decimal >= 0.75) {
        stars.push('Star.75.png')
      } else if (decimal >= 0.5) {
        stars.push('Star.50.png')
      } else if (decimal >= 0.25) {
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

  const { averageRating } = productData.reviewsMetaData;
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