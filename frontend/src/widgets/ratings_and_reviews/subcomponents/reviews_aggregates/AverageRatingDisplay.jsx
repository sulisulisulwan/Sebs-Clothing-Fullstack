import React from 'react';
import Stars from '../../../../shared_components/Stars.jsx';

const AverageRatingDisplay = ({ parentClassName, currentProduct }) => {
  let { averageRating } = currentProduct.reviewsMetaData;

  return (
    <>
      <div className={`${parentClassName} average-rating-wrapper`}>
        <div className={`${parentClassName} average-rating-number`}>
          {averageRating}
        </div>
        <Stars parentClassName={`${parentClassName} average-rating`} productData={currentProduct}/>
      </div>
    </>
  )
}

export default AverageRatingDisplay