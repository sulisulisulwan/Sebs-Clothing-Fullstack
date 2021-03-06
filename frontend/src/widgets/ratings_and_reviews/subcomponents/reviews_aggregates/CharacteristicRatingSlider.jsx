import React from 'react';

const CharacteristicRatingSlider = ({ parentClassName, currentProduct }) => {

  let { characteristics } = currentProduct.reviewsMetaData;
  let characteristicsArr = Object.entries(characteristics)

  return (
    <div className={`${parentClassName} characteristics-wrapper`}>
      {characteristicsArr.map(characteristic => {
        return (
          <div key={`characteristic-${characteristic[0]}-${characteristic.id}`} className={`${parentClassName} characteristics slider`}>
            <div>{characteristic[0]}</div>
            --------------------------------------------------
            <div>Shitty | Great | Too good?</div>
          </div>
        )
      })}
    </div>
  )
}

export default CharacteristicRatingSlider;