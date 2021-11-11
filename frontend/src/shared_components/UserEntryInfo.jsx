import React from 'react';

const UserEntryInfo = ({ parentClassName, userEntryData }) => {

  console.log(userEntryData)
  if (userEntryData === undefined) {
    return null;
  }
  const { reviewer_name, date } = userEntryData;
  return (

    <div className={`${parentClassName} user-entry-info`}>
      {reviewer_name} {date}
    </div>
  )
};

export default UserEntryInfo;

