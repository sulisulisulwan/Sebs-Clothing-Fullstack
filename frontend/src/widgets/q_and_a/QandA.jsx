import React from 'react';
import QuestionAndAnswerWrapper from './subcomponents/QuestionAndAnswerWrapper.jsx'
import BoxStyleButton from '../../shared_components/BoxStyleButton.jsx';
import onClickHandlers from '../../onClickHandlers.js';

const QandA = ({ parentClassName, currentProduct }) => {

  const componentClassName = "qa";

  const moreAnsweredQuestionsButton = {
    buttonText: 'MORE ANSWERED QUESTIONS',
    onClickHandler: onClickHandlers.getMoreAnsweredQuestions
  }
  const addAQuestionButton = {
    buttonText: 'ADD A QUESTION +',
    onClickHandler: onClickHandlers.addAQuestion
  }

  return (
    <div className={`${componentClassName}-wrapper`}>
      <div className="widget-title">
        <h2>QUESTIONS & ANSWERS</h2>
      </div>
      <QuestionAndAnswerWrapper parentClassName={componentClassName} currentProduct={currentProduct}/>
      <BoxStyleButton buttonOptions={moreAnsweredQuestionsButton}/>
      <BoxStyleButton buttonOptions={addAQuestionButton}/>
    </div>
  )
}

export default QandA;