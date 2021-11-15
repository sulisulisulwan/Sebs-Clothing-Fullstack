import React from 'react';
import PhotoGrid from './PhotoGrid.jsx'
import { useState, useEffect } from 'react';

const StyleSelector = ({ currentProduct, parentClassName, currentStyle, setCurrentStyle }) => {

  if (currentStyle === null ) {
    return null;
  }

  return (
    <>
      <div>
        Style > {currentStyle.name}
      </div>
      <div>
        <PhotoGrid
          parentClassName={`${parentClassName} style-selector`}
          currentProduct={currentProduct}
          currentProductStyles={currentProduct.styles}
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}/>
      </div>
    </>
  )
}

export default StyleSelector;