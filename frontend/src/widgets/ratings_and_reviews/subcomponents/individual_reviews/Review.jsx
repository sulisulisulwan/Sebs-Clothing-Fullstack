import React from 'react';
import UserEntryInfo from '../../../../shared_components/UserEntryInfo.jsx'
import ReviewTextWrapper from './ReviewTextWrapper.jsx';

const Review = ({ parentClassName }) => {

  return (
    <div className={`${parentClassName}-review`}>
      <ReviewTextWrapper parentClassName={parentClassName}/>
      <UserEntryInfo parentClassName={`${parentClassName}-review`}/>
    </div>

  )
}

export default Review;