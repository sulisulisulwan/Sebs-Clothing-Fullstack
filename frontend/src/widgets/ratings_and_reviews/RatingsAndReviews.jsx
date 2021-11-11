import React from 'react';
import { useState, useEffect } from 'react';
import ReviewAggregates from './subcomponents/ReviewAggregates.jsx';
import ReviewsWrapper from './subcomponents/ReviewsWrapper.jsx'
import API from '../../API_call_functions.js';
const RatingsAndReviews = ({ currentProduct, currProductReviewMetaData }) => {

  const [currProductReviews, setCurrProductReviews] = useState([]);

  useEffect(() => {
    if (currentProduct === null) {
      return;
    }
    API.getCurrentProductReviews(currentProduct.id)
      .then(allReviews  => {
        setCurrProductReviews(allReviews)
      })
      .catch(err => {
        console.error(err);
      })
  }, [currentProduct])

  console.log(currProductReviews)

  const componentClassName = 'ratings-and-reviews';
  return (
    <div className={`${componentClassName}-wrapper`}>
      <div className="widget-title">
        <h2>RATINGS AND REVIEWS</h2>
      </div>
      <div className={`${componentClassName} aggregates-and-reviews-wrapper`}>
        <ReviewAggregates parentClassName={componentClassName} currProductReviews={currProductReviews}/>
        <ReviewsWrapper parentClassName={componentClassName} currProductReviews={currProductReviews}/>
      </div>
    </div>
  )
}

export default RatingsAndReviews;