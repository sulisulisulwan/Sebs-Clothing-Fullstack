import React from 'react';
import QuestionText from './QuestionText.jsx';
import UserEntryInfo from '../../../shared_components/UserEntryInfo.jsx'

const QuestionWrapper = ({ parentClassName }) => {
  return (
    <div className={`${parentClassName}-question-wrapper`}>
      <QuestionText parentClassName={`${parentClassName}-question`}/>
      <UserEntryInfo parentClassName={`${parentClassName}-question`}/>
    </div>
  )
}
export default QuestionWrapper;