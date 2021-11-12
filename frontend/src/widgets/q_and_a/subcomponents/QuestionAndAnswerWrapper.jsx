import React from 'react';
import UserEntryInfo from '../../../shared_components/UserEntryInfo.jsx';
import QuestionWrapper from './QuestionWrapper.jsx';
import AnswerWrapper from './AnswerWrapper.jsx';
import SearchBar from '../../../shared_components/SearchBar.jsx';


const QuestionAndAnswerWrapper = ({ parentClassName, currProdQuestions, moreThanTwoQuestions, maxQuestionsShown }) => {

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
      {currProdQuestions.map((questionData, i) => {
        if (moreThanTwoQuestions && i > maxQuestionsShown - 1) {
          return;
        }
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