import React from 'react';

import Review from './Review.jsx';

const ReviewsWrapper = ({ parentClassName, currProductReviews }) => {
  let allReviews = currProductReviews.reviews.results;
  return (
    <div className={`${parentClassName}-reviews-wrapper`}>
      {allReviews.map(review => <Review key={`${review.id}-${review.date}`} parentClassName={`${parentClassName}-reviews`} review={review}/>)}
    </div>
  )
}

export default ReviewsWrapper;