import React from 'react';
import { useState, useEffect } from 'react';
import UserEntryInfo from '../../../shared_components/UserEntryInfo.jsx';
import Answer from './Answer.jsx';
import HelpfulAndOptionalAction from '../../../shared_components/HelpfulAndOptionalAction.jsx'

const AnswerWrapper = ({ parentClassName, answersData }) => {

  const [answersExpanded, setAnswersExpanded] = useState(false);
  const [moreThanTwoAnswers, setMoreThanTwoAnswers] = useState(false);

  if (answersData.answers === null) {
    return <div className={`${parentClassName} answer noanswers`}>No answers yet! :/</div>
  }

  const answersDataArray = []

  for (let answerId in answersData.answers ) {
    answersData.answers[answerId].id = answerId
    answersDataArray.push(answersData.answers[answerId]);
  }

  const loadMoreAnswersClickHandler = () => {
    setAnswersExpanded(!answersExpanded);
  }

  useEffect(() => {
    if (answersDataArray.length > 2) {
      setMoreThanTwoAnswers(true);
    }
  }, [answersData])

  const optionalAction = {
    action: 'Report',
    clickHandler: () => { alert('Reports an answer') }
  }

  return (
    <>
      {answersDataArray.map((answerData, i) => {
        if (moreThanTwoAnswers && !answersExpanded && i > 1) {
          return null;
        }
        const { id, body, date, photos, helpfulness, answerer_name } = answerData
        const userEntryData = { answerer_name, date };
        answerData = { body, photos, helpfulness };
        return (
          <React.Fragment key={`answer-key-${id}`}>
            <div className={`${parentClassName} answer-wrapper`}>
              <Answer parentClassName={parentClassName} answerData={answerData}/>
              <div className={ `${parentClassName} answer userentryinfo-helpful-wrapper`}>
                by&nbsp;&nbsp;<UserEntryInfo parentClassName={`${parentClassName} answer`} userEntryData={userEntryData} componentType={'answer'}/>
                &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                <HelpfulAndOptionalAction parentClassName={`${parentClassName} answer`} helpfulness={helpfulness} optionalAction={optionalAction}/>
              </div>
            </div>
          </React.Fragment>
        )
      })}
      { !moreThanTwoAnswers ? null
          : !answersExpanded ? <div className={`${parentClassName} load-collapse-answers`} onClick={loadMoreAnswersClickHandler}>LOAD MORE ANSWERS</div>
          : <div className={`${parentClassName} load-collapse-answers`} onClick={loadMoreAnswersClickHandler}>COLLAPSE ANSWERS</div>}
    </>
  )
}

export default AnswerWrapper;