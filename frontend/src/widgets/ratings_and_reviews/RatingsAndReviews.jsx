import React from 'react';
import { useState, useEffect } from 'react';
import ReviewAggregates from './subcomponents/reviews_aggregates/ReviewAggregates.jsx';
import ReviewsWrapper from './subcomponents/individual_reviews/ReviewsWrapper.jsx'
import API from '../../API_call_functions.js';

const RatingsAndReviews = ({ currentProduct }) => {

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

  const componentClassName = 'ratings-and-reviews';
  if (currentProduct === null) {
    return null;
  }
  return (
    <div className={`${componentClassName}-wrapper`}>
      <div className="widget-title">
        <h2>RATINGS AND REVIEWS</h2>
      </div>
      <div className={`${componentClassName} aggregates-and-reviews-wrapper`}>
        <ReviewAggregates parentClassName={componentClassName} currentProduct={currentProduct}/>
        <ReviewsWrapper parentClassName={componentClassName} currProductReviews={currProductReviews}/>
      </div>
    </div>
  )
}

export default RatingsAndReviews;