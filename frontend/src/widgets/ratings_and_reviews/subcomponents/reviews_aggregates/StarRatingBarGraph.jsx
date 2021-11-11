import React from 'react';

const StarRatingBarGraph = ({ parentClassName, currentProduct }) => {

  let { ratings } = currentProduct.reviewsMetaData;

  return (
    <div className={`${parentClassName} rating-bargraph`}>
      <div className={`${parentClassName} rating-bargraph bar`}><u>5 stars</u>{ ratings[5] || null}</div>
      <div className={`${parentClassName} rating-bargraph bar`}><u>4 stars</u>{ ratings[4] || null}</div>
      <div className={`${parentClassName} rating-bargraph bar`}><u>3 stars</u>{ ratings[3] || null}</div>
      <div className={`${parentClassName} rating-bargraph bar`}><u>2 stars</u>{ ratings[2] || null}</div>
      <div className={`${parentClassName} rating-bargraph bar`}><u>1 stars</u>{ ratings[1] || null}</div>
    </div>
  )
}

export default StarRatingBarGraph;