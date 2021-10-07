import React from 'react';
import QuestionAndAnswerWrapper from './subcomponents/QuestionAndAnswerWrapper.jsx'

const QandA = () => {

  const componentClassName = "qa";
  return (
    <div className={`${componentClassName}-wrapper`}>
      <div className="widget-title">
        QUESTIONS AND ANSWERS
      </div>
      <QuestionAndAnswerWrapper parentClassName={componentClassName}/>

    </div>
  )
}

export default QandA;