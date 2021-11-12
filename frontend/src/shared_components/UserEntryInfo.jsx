import React from 'react';
import Utils from '../utils.js'
const utils = new Utils();

const UserEntryInfo = ({ parentClassName, userEntryData, componentType }) => {


  if (userEntryData === undefined) {
    return null;
  }

  let username;
  const { date } = userEntryData;
  if (componentType === 'question') {
    username = userEntryData.asker_name;
  } else if (componentType === 'answer') {
    username = userEntryData.answerer_name;
  } else if (componentType === 'review') {
    username = userEntryData.reviewer_name;
  }

  let formattedDate = utils.formatDateAndTime('date', date);
  let formattedUsername = utils.removeQuotes(username);

  return (

    <div className={`${parentClassName} userentryinfo`}>
      {formattedUsername}, {formattedDate}
    </div>
  )
};

export default UserEntryInfo;

