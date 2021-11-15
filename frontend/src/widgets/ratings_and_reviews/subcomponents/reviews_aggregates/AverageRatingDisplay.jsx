import React from 'react';
import Stars from '../../../../shared_components/Stars.jsx';

const AverageRatingDisplay = ({ parentClassName, currentProduct }) => {
  let { averageRating } = currentProduct.reviewsMetaData;
  return (
    <>
      <div className={`${parentClassName} rating-wrapper`}>
        <div className={`${parentClassName} rating number`}>
          {averageRating}
        </div>
        <Stars parentClassName={`${parentClassName} rating`} productData={currentProduct}/>
      </div>
    </>
  )
}

export default AverageRatingDisplay