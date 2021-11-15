import React from 'react';
import ReviewTextTitle from './ReviewTextTitle.jsx';
import ReviewTextBody from './ReviewTextBody.jsx';

const ReviewTextWrapper = ({ parentClassName, reviewTextData }) => {
  let { body, summary, recommend, response } = reviewTextData;
  return (
    <div className={`${parentClassName}-text-wrapper`}>
      <ReviewTextTitle parentClassName={parentClassName} summary={summary} />
      <ReviewTextBody parentClassName={parentClassName} body={body} response={response} recommend={recommend}/>
    </div>
  )
}

export default ReviewTextWrapper;