import React from 'react';
import Response from './Response.jsx';
import Utils from '../../../../utils.js';
const utils = new Utils();

const ReviewTextBody = ({ parentClassName, body, recommend, response }) => {

  body = utils.removeQuotes(body)

  return (
    <div className={`${parentClassName}-body`}>
      {body}
      {recommend ? <div className={`${parentClassName}-body recommend`}>✓ I recommend this product</div> : null}
      <Response parentClassName={parentClassName} response={response}/>
    </div>
  )
}

export default ReviewTextBody;