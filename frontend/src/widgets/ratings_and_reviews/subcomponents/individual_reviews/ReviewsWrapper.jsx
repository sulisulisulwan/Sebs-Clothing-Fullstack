import React from 'react';

import Review from './Review.jsx';

const ReviewsWrapper = ({ parentClassName, currProductReviews }) => {
  let allReviews = currProductReviews.reviews.results;

  return (
    <div className={`${parentClassName} allreviews-wrapper`}>
      {allReviews === null ?
      <div className={`${parentClassName} review`}>No Reviews yet for this product</div>
      : allReviews.map((review, i) => {
        return <Review key={`${review.id}-${review.date}`} parentClassName={parentClassName} review={review} isLastReview={ i === allReviews.length - 1}/>})
      }
    </div>
  )
}

export default ReviewsWrapper;