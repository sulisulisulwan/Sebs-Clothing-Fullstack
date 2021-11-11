import React from 'react';
import Utils from '../../../../utils.js'
const utils = new Utils();

const Response = ({ parentClassName, response }) => {

  if (response === null) {
    return null;
  }
  response = utils.removeQuotes(response)

  return (
    <div className={`${parentClassName} response-wrapper`}>
      <div className={`${parentClassName} response`}>
        <p><strong>Response:</strong></p>
        <p>{response}</p>
      </div>
    </div>
  )
}
export default Response;