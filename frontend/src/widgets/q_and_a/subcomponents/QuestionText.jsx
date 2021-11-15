import React from 'react';
import HelpfulAndOptionalAction from '../../../shared_components/HelpfulAndOptionalAction.jsx'

const QuestionText = ({ parentClassName, questionTextData }) => {

  const optionalAction = {
    action: 'Add Answer',
    clickHandler: () => { alert('adds an answer') }
  }

  const { question_body, question_helpfulness } = questionTextData;
  return (
    <>
      <div className={`${parentClassName} question text`}>Q. {question_body}</div>
      <HelpfulAndOptionalAction parentClassName={`${parentClassName} question `} helpfulness={question_helpfulness} optionalAction={optionalAction}/>
    </>
  )
}

export default QuestionText;