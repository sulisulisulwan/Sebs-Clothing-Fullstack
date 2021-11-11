import React from 'react';
import Utils from '../utils.js'
const utils = new Utils();

const UserEntryInfo = ({ parentClassName, userEntryData }) => {

  if (userEntryData === undefined) {
    return null;
  }
  const { reviewer_name, date } = userEntryData;
  let formattedDate = utils.formatDateAndTime('date', date);
  let formattedReviewerName = utils.removeQuotes(reviewer_name);

  return (

    <div className={`${parentClassName} userentryinfo`}>
      {formattedReviewerName}, {formattedDate}
    </div>
  )
};

export default UserEntryInfo;

