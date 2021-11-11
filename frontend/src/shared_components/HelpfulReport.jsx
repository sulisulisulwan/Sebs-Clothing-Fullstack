import React from 'react';

//Clicking no does not have a column in reviews table
//maybe we should create one?

const Helpful = ({ parentClassName, helpfulness, reported }) => {
  return (
    <div className={`${parentClassName} helpful-and-report`}>
      Helpful?&nbsp;&nbsp;&nbsp;<a>Yes</a>&nbsp;({helpfulness})&nbsp;<a>No</a>&nbsp;(??)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a>Report</a>
    </div>
  )
}

export default Helpful;