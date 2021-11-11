import React from 'react';
import ReviewTextTitle from './ReviewTextTitle.jsx';
import ReviewTextBody from './ReviewTextBody.jsx';

const ReviewTextWrapper = ({ parentClassName }) => {
  return (
    <div className={`${parentClassName}-text-wrapper`}>
      <ReviewTextTitle parentClassName={`${parentClassName}-text`}/>
      <ReviewTextBody parentClassName={`${parentClassName}-text`}/>
    </div>
  )
}

export default ReviewTextWrapper;