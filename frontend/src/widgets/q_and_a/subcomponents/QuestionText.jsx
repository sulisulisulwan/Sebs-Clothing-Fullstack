import React from 'react';
import HelpfulReport from '../../../shared_components/HelpfulReport.jsx'

const QuestionText = ({ parentClassName, questionTextData }) => {

  const { question_body, question_helpfulness } = questionTextData;
  return (
    <div className={`${parentClassName}-text`}>
      <div className={`${parentClassName}-text question`}>Q. {question_body}</div>
      <HelpfulReport parentClassName={`${parentClassName}-text`} helpfulness={question_helpfulness} />
    </div>
  )
}

export default QuestionText;