import React from 'react';

const ThumbnailPhoto = ({ parentClassName, idAndThumbnail, setCurrentStyle, currentProductStyles }) => {

  const onClickHandler= (e) => {
    setCurrentStyle(currentProductStyles[e.target.id.split('-')[0]]);
  }


  const [id, thumbnailURL] = idAndThumbnail
  return (
    <img id={`${id}-style-thumbnail`} className={`${parentClassName} thumbnail`} src={thumbnailURL} onClick={onClickHandler}></img>
  )
}

export default ThumbnailPhoto;