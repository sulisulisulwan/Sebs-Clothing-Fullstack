import React from 'react';

//Clicking no does not have a column in reviews table
//maybe we should create one?

const Helpful = ({ parentClassName, helpfulness }) => {
  return (
    <div className={`${parentClassName} helpful-and-report`}>
      Helpful?&nbsp;&nbsp;&nbsp;<span>Yes</span>&nbsp;({helpfulness})&nbsp;<span>No</span>&nbsp;(??)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>Report</span>
    </div>
  )
}

export default Helpful;