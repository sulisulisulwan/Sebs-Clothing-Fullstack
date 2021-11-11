import React from 'react';
import { useState, useEffect } from 'react';
import UserEntryInfo from '../../../shared_components/UserEntryInfo.jsx';
import QuestionWrapper from './QuestionWrapper.jsx';
import AnswerWrapper from './AnswerWrapper.jsx';
import SearchBar from '../../../shared_components/SearchBar.jsx';
import api from '../../../API_call_functions.js';
const QuestionAndAnswerWrapper = ({ parentClassName, currentProduct }) => {

  const [currProdQuestions, setCurrProdQuestions] = useState(null);

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

  if (currProdQuestions === null) {
    return null;
  }

  return (
    <div className={`${parentClassName}-question-and-answer-wrapper`}>
      {/* <SearchBar
        dropdownFuncs={
          {
            setStateFuncs: {
              setCurrentProduct
            },
            api: {
              getQuestions: API.getQuestions,
            }
          }
      }
      /> */}
      {currProdQuestions.map(questionData => {
        let { asker_name, question_body, question_date, question_helpfulness, question_id, reported, answers } = questionData;
        questionData = { asker_name, question_body, question_date, question_helpfulness, question_id, reported }
        let answersData = { answers };

        return (
          <React.Fragment key={`question-key-${questionData.question_id}`}>
            <QuestionWrapper parentClassName={parentClassName} questionData={questionData}/>
            <AnswerWrapper parentClassName={parentClassName} answersData={answersData}/>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default QuestionAndAnswerWrapper;