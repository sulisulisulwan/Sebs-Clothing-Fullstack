import React from 'react';
import Response from './Response.jsx';
const ReviewTextBody = ({ parentClassName, body, recommend, response }) => {
  return (
    <div className={`${parentClassName}-body`}>
      {body}
      {recommend}
      <Response parentClassName={parentClassName} response={response}/>
    </div>
  )
}

export default ReviewTextBody;