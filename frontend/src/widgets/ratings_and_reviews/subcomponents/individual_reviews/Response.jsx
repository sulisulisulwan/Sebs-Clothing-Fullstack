import React from 'react';
import Utils from '../../../../utils.js'
const utils = new Utils();

const Response = ({ parentClassName, response }) => {

  if (response === null) {
    return null;
  }
  response = utils.removeQuotes(response)

  return (
    <div>Response: {response}</div>
  )
}
export default Response;