import React from 'react';
import UserEntryInfo from '../../../shared_components/UserEntryInfo.jsx';
import Answer from './Answer.jsx';
import HelpfulReport from '../../../shared_components/HelpfulReport.jsx'

const AnswerWrapper = ({ parentClassName, answersData }) => {

  if (answersData.answers === null) {
    return <div className={`${parentClassName}-answer-noanswer`}>No answers yet! :/</div>
  }

  const answersDataArray = []

  for (let answerId in answersData.answers ) {
    answersData.answers[answerId].id = answerId
    answersDataArray.push(answersData.answers[answerId]);
  }

  return (

    answersDataArray.map(answerData => {
      const { id, body, date, photos, helpfulness, answerer_name } = answerData
      const userEntryData = { answerer_name, date };
      answerData = { body, photos, helpfulness };
      return (
        <React.Fragment key={`answer-key-${id}`}>
          <div className={`${parentClassName}-answer-wrapper`}>
            <Answer parentClassName={parentClassName} answerData={answerData}/>
            <div className={ `${parentClassName}-answer userentryinfo-helpful-wrapper`}>
              by&nbsp;&nbsp;<UserEntryInfo parentClassName={`${parentClassName}-answer`} userEntryData={userEntryData} componentType={'answer'}/>
              &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
              <HelpfulReport parentClassName={`${parentClassName}-answer`} helpfulness={helpfulness}/>
            </div>
          </div>
        </React.Fragment>
      )
    })
  )
}

export default AnswerWrapper;