import React from 'react';
import QuestionAndAnswerWrapper from './subcomponents/QuestionAndAnswerWrapper.jsx'

const QandA = () => {

  const componentClassName = "qa";
  return (
    <div className={`${componentClassName}-wrapper`}>
      <div className="widget-title">
        <h2>QUESTIONS AND ANSWERS</h2>
      </div>
      <QuestionAndAnswerWrapper parentClassName={componentClassName}/>

    </div>
  )
}

export default QandA;