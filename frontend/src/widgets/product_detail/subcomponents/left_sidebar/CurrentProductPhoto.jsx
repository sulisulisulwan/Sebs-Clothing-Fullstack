import React from 'react';

const CurrentProductPhoto = ({ parentClassName, currentStyle }) => {

  if (currentStyle === undefined) {
    return null;
  }

  console.log(currentStyle)

  let photoUrl = currentStyle === null ? ''
    : currentStyle.photos[0].url;

    console.log(currentStyle)
  return (
    <div className={`${parentClassName}-photo-container`}>
      <img className={`${parentClassName}-photo-large`} src={photoUrl}></img>
    </div>
  )
}

export default CurrentProductPhoto;