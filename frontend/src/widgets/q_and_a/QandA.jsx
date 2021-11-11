import React from 'react';
import QuestionAndAnswerWrapper from './subcomponents/QuestionAndAnswerWrapper.jsx'

const QandA = ({ parentClassName, currentProduct }) => {

  const componentClassName = "qa";
  return (
    <div className={`${componentClassName}-wrapper`}>
      <div className="widget-title">
        <h2>QUESTIONS & ANSWERS</h2>
      </div>

      <QuestionAndAnswerWrapper parentClassName={componentClassName} currentProduct={currentProduct}/>

    </div>
  )
}

export default QandA;