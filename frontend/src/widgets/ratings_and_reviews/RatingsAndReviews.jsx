import React from 'react';
import ReviewAggregates from './subcomponents/ReviewAggregates.jsx';
import ReviewsWrapper from './subcomponents/ReviewsWrapper.jsx'

const RatingsAndReviews = () => {

  const componentClassName = 'ratings-and-reviews';
  return (
    <div className={`${componentClassName}-wrapper`}>
      <div className="widget-title">
        <h2>RATINGS AND REVIEWS</h2>
      </div>
      <ReviewAggregates parentClassName={componentClassName}/>
      <ReviewsWrapper parentClassName={componentClassName}/>
    </div>
  )
}

export default RatingsAndReviews;