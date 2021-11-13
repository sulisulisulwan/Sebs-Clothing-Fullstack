import React from 'react';
import { useState, useEffect } from 'react';
import CurrentProductPhoto from './subcomponents/left_sidebar/CurrentProductPhoto.jsx'
import VerticalPhotoCarousel from './subcomponents/left_sidebar/VerticalPhotoCarousel.jsx'
import CurrentProductSideBar from './subcomponents/right_sidebar/CurrentProductSideBar.jsx'
import CurrentProductLowBar from './subcomponents/lowbar/CurrentProductDescription.jsx'
const ProductDetail = ({ currentProduct }) => {

  const [currentStyle, setCurrentStyle] = useState(null)
  useEffect(() => {
    if (currentProduct === null) {
      return;
    }
    setCurrentStyle(currentProduct.styles[currentProduct.defaultStyleIndex]);
  }, [currentProduct]);


  const componentClassName = "current-product-detail";

  return (
    <div className={`${componentClassName}-container`}>
      <div className={`${componentClassName}-highbar-container`}>
        <VerticalPhotoCarousel
          parentClassName={`${componentClassName}-highbar`}
          currentProduct={currentProduct}/>
        <CurrentProductPhoto
          parentClassName={`${componentClassName}-highbar`}
          currentStyle={currentStyle}/>
        <CurrentProductSideBar
          parentClassName={`${componentClassName}-highbar`}
          currentStyle={currentStyle}
          setCurrentStyle={setCurrentStyle}
          currentProduct={currentProduct}/>
      </div>
      <CurrentProductLowBar
        parentClassName={componentClassName}
        currentProduct={currentProduct}/>
    </div>
  )
}

export default ProductDetail;