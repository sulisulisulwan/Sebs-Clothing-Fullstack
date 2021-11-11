import React from 'react';

const ReviewTextTitle = ({ parentClassName, summary }) => {
  return (
    <div className={`${parentClassName}-title`}>
      {summary}
    </div>
  )
}

export default ReviewTextTitle;