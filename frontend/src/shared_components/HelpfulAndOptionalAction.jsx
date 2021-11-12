import React from 'react';

//Clicking no does not have a column in reviews table
//maybe we should create one?

const HelpfulAndOptionalAction = ({ parentClassName, helpfulness, optionalAction }) => {

  const { action, clickHandler } = optionalAction;

  const clickHandlerWrapper = () => {
    clickHandler();
  }

  return (
    <div className={`${parentClassName} helpful-and-report`}>
      Helpful?&nbsp;&nbsp;&nbsp;<span>Yes</span>&nbsp;({helpfulness})&nbsp;<span>No</span>&nbsp;(??)&nbsp;&nbsp;&nbsp;
      |&nbsp;&nbsp;&nbsp;<span onClick={clickHandlerWrapper}>{action}</span>
    </div>
  )
}

export default HelpfulAndOptionalAction;