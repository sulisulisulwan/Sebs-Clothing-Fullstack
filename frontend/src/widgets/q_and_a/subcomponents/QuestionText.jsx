import React from 'react';
import HelpfulAndOptionalAction from '../../../shared_components/HelpfulAndOptionalAction.jsx'

const QuestionText = ({ parentClassName, questionTextData }) => {

  const optionalAction = {
    action: 'Add Answer',
    clickHandler: () => { alert('adds an answer') }
  }

  const { question_body, question_helpfulness } = questionTextData;
  return (
    <div className={`${parentClassName}-text`}>
      <div className={`${parentClassName}-text question`}>Q. {question_body}</div>
      <HelpfulAndOptionalAction parentClassName={`${parentClassName}-text`} helpfulness={question_helpfulness} optionalAction={optionalAction}/>
    </div>
  )
}

export default QuestionText;