import React from 'react';
import UserEntryInfo from '../../../shared_components/UserEntryInfo.jsx'
import QuestionWrapper from './QuestionWrapper.jsx'
import AnswerWrapper from './AnswerWrapper.jsx'
const QuestionAndAnswerWrapper = ({ parentClassName }) => {

  return (
    <div className={`${parentClassName}-question-and-answer-wrapper`}>
      <QuestionWrapper parentClassName={parentClassName}/>
      <AnswerWrapper parentClassName={parentClassName}/>
    </div>
  )
}

export default QuestionAndAnswerWrapper;