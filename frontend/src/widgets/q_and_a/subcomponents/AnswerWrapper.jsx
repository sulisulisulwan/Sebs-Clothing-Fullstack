import React from 'react';
import UserEntryInfo from '../../../shared_components/UserEntryInfo.jsx';
import Answer from './Answer.jsx';

const AnswerWrapper = ({ parentClassName }) => {

  return (
      <div className={`${parentClassName}-answer-wrapper`}>
        <Answer parentClassName={parentClassName}/>
        <UserEntryInfo parentClassName={`${parentClassName}-answer`}/>
      </div>
  )
}

export default AnswerWrapper;