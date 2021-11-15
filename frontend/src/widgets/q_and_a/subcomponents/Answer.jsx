import React from 'react';

const Answer = ({ parentClassName, answerData }) => {
  const { body, photos, helpfulness } = answerData;
  return (
    <div className={`${parentClassName} answer`}>
      <span className={`${parentClassName} answer-A`}>A.</span> {body}
    </div>
  )
}

export default Answer;