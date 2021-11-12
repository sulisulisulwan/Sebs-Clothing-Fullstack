import React from 'react';
import { useState, useEffect } from 'react';
import QuestionAndAnswerWrapper from './subcomponents/QuestionAndAnswerWrapper.jsx'
import BoxStyleButton from '../../shared_components/BoxStyleButton.jsx';
import onClickHandlers from '../../onClickHandlers.js';
import api from '../../API_call_functions.js';
import SearchBar from '../../shared_components/SearchBar.jsx'

const QandA = ({ parentClassName, currentProduct }) => {

  const componentClassName = "qa";

  const [currProdQuestions, setCurrProdQuestions] = useState(null);
  const [maxQuestionsShown, setMaxQuestionsShown] = useState(2);
  const [moreThanTwoQuestions, setMoreThanTwoQuestions] = useState(false);


  useEffect(() => {
    if (currProdQuestions === null) {
      return;
    }
    if (currProdQuestions.length > 2) {
      setMoreThanTwoQuestions(true);
    }
  }, [currProdQuestions])

  useEffect(() => {
    if (currentProduct === null) {
      return;
    }
    api.getAllQuestions(currentProduct.id)
      .then(allQuestions => {
        setCurrProdQuestions(allQuestions);
      })
      .catch(err => {
        console.error(err);
      })
  }, [currentProduct]);


  const moreAnsweredQuestionsButton = {
    buttonText: 'MORE ANSWERED QUESTIONS',
    componentDataAndFuncs: { maxQuestionsShown, setMaxQuestionsShown },
    onClickHandler: onClickHandlers.getMoreAnsweredQuestions
  }
  const addAQuestionButton = {
    buttonText: 'ADD A QUESTION +',
    onClickHandler: onClickHandlers.addAQuestion
  }

  const searchBarOptions = {
    placeholder: 'HAVE A QUESTION? SEARCH FOR ANSWERS...',
    dropdownOptions: {
      setStateFuncs: {

      },
      api: {

      }
    },
  }

  return (
    <div className={`${componentClassName}-wrapper`}>
      <div className="widget-title">
        <h2>QUESTIONS & ANSWERS</h2>
      </div>
      <SearchBar parentClassName={componentClassName} searchBarOptions={searchBarOptions}/>
      <QuestionAndAnswerWrapper
        parentClassName={componentClassName}
        currProdQuestions={currProdQuestions}
        maxQuestionsShown={maxQuestionsShown}
        moreThanTwoQuestions={moreThanTwoQuestions}
      />
      { !moreThanTwoQuestions ? null
        : maxQuestionsShown >= currProdQuestions.length ? null
        : <BoxStyleButton buttonOptions={moreAnsweredQuestionsButton}/>
      }
      <BoxStyleButton buttonOptions={addAQuestionButton}/>
    </div>
  )
}

export default QandA;