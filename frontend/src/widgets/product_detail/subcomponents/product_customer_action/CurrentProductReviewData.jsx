import React from 'react';
import Stars from '../../../../shared_components/Stars.jsx';

const CurrentProductReviewData = ({ parentClassName, currentProduct }) => {
  return(
    <div className={`${parentClassName} review-data`}>
      <Stars parentClassName={`${parentClassName} review-data`} productData={currentProduct}/>
      <div className={`${parentClassName} review-data readallreviews`}><a className={`${parentClassName}-sidebar`} href="#ratings-reviews">Read all reviews</a></div>
    </div>
  )
}

export default CurrentProductReviewData