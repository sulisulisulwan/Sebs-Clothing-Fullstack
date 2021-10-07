import React from 'react';
import ReviewAggregates from './subcomponents/ReviewAggregates.jsx';
import ReviewsWrapper from './subcomponents/ReviewsWrapper.jsx'

const RatingsAndReviews = () => {

  const componentClassName = 'ratings-and-reviews';
  return (
    <div className={`${componentClassName}`}>
      <div className="widget-title">
        RATINGS AND REVIEWS
      </div>
      <ReviewAggregates parentClassName={componentClassName}/>
      <ReviewsWrapper parentClassName={componentClassName}/>
    </div>
  )
}

export default RatingsAndReviews;