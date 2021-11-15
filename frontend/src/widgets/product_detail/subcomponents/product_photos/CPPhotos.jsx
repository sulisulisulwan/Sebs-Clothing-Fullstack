import React from 'react';
import MainPhoto from './MainPhoto.jsx';
import VerticalPhotoCarousel from './VerticalPhotoCarousel.jsx';

const CPPhotos = ({ currentProduct, currentStyle }) => {
  return (
    <>
      <VerticalPhotoCarousel
      parentClassName={`highbar-left`}
      currentProduct={currentProduct}/>
      <MainPhoto
        parentClassName={`highbar-left`}
        currentStyle={currentStyle}/>
    </>
  )
}

export default CPPhotos;