import React from 'react';
import QuestionText from './QuestionText.jsx';
import UserEntryInfo from '../../../shared_components/UserEntryInfo.jsx'

const QuestionWrapper = ({ parentClassName, questionData }) => {
  const { asker_name, question_body, question_date, question_helpfulness, question_id } = questionData;
  const questionTextData = { question_body, question_helpfulness }
  const userEntryInfoData = { asker_name, question_date }

  return (
    <div className={`${parentClassName} question-wrapper`}>
      {/* <UserEntryInfo parentClassName={`${parentClassName}-question`} userEntryInfoData={userEntryInfoData} componentType={'question'}/> */}
      <QuestionText parentClassName={parentClassName} questionTextData={questionTextData}/>
    </div>
  )
}
export default QuestionWrapper;