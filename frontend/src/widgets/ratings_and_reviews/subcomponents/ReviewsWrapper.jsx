import React from 'react';
import Stars from '../../../shared_components/Stars.jsx'
import Review from './Review.jsx';

const ReviewsWrapper = ({ parentClassName }) => {
  return (
    <div className={`${parentClassName}-reviews-wrapper`}>
      <Stars parentClassName={`${parentClassName}-reviews`}/>
      <Review parentClassName={`${parentClassName}-reviews`}/>
    </div>
  )
}

export default ReviewsWrapper;