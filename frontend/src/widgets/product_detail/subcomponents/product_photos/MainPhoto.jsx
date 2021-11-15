import React from 'react';

const CurrentProductPhoto = ({ parentClassName, currentStyle }) => {

  if (currentStyle === undefined) {
    return null;
  }


  let photoUrl = currentStyle === null ? ''
    : currentStyle.photos[0].url;

  return (
    <div className={`${parentClassName} photo-container`}>
      <img className={`${parentClassName} photo-large`} src={photoUrl}></img>
    </div>
  )
}

export default CurrentProductPhoto;