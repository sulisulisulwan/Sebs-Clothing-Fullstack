import React from 'react';

const ThumbnailPhoto = ({ parentClassName, idAndThumbnail, currentStyle, setCurrentStyle, currentProduct }) => {

  const onClickHandler= (e) => {
    let styleId = e.target.id.split('-')[0];
    let clickedStyle;
    currentProduct.styles.some(style => {
      if (style.style_id === Number(styleId)) {
        clickedStyle = style

        return true;
      }
    })
    setCurrentStyle(clickedStyle);
  }


  const [id, thumbnailURL] = idAndThumbnail
  return (
    <img id={`${id}-style-thumbnail`} className={`${parentClassName} thumbnail ${ id === currentStyle.style_id ? 'current' : null}`} src={thumbnailURL} onClick={onClickHandler}></img>
  )
}

export default ThumbnailPhoto;