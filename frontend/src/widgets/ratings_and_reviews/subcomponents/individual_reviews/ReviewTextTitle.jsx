import React from 'react';
import Utils from '../../../../utils.js'
const utils = new Utils();

const ReviewTextTitle = ({ parentClassName, summary }) => {
  let title = utils.removeQuotes(summary)
  return (
    <div className={`${parentClassName} title`}>
      {title}
    </div>
  )
}

export default ReviewTextTitle;