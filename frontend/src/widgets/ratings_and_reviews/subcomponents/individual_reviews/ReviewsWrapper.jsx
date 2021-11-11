import React from 'react';

import Review from './Review.jsx';

const ReviewsWrapper = ({ parentClassName, currProductReviews }) => {
  let allReviews = currProductReviews.reviews.results;

  return (
    <div className={`${parentClassName}-reviews-wrapper`}>
      {allReviews.map((review, i) => {
        return <Review key={`${review.id}-${review.date}`} parentClassName={`${parentClassName}-reviews`} review={review} isLastReview={ i === allReviews.length - 1}/>})
      }
    </div>
  )
}

export default ReviewsWrapper;