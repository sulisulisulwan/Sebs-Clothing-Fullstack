import React from 'react';

const Answer = ({ parentClassName, answerData }) => {
  const { body, photos, helpfulness } = answerData;
  return (
    <div className={`${parentClassName}-answer`}>
      <div className={`${parentClassName}-answer answer`}>
        <span className={`${parentClassName}-answer answer-A`}>A.</span> {body}
      </div>
    </div>
  )
}

export default Answer;