import React from 'react';
import CurrentProductPhoto from './subcomponents/CurrentProductPhoto.jsx'
import VerticalPhotoCarousel from './subcomponents/VerticalPhotoCarousel.jsx'
import CurrentProductSideBar from './subcomponents/CurrentProductSideBar.jsx'
import CurrentProductLowBar from './subcomponents/CurrentProductDescription.jsx'
const ProductDetail = ({ currentProduct }) => {

  const componentClassName = "current-product-detail";

  return (
    <div className={`${componentClassName}-container`}>
      <div className={`${componentClassName}-highbar-container`}>
        <VerticalPhotoCarousel parentClassName={`${componentClassName}-highbar`} currentProduct={currentProduct}/>
        <CurrentProductPhoto parentClassName={`${componentClassName}-highbar`} currentProduct={currentProduct}/>
        <CurrentProductSideBar parentClassName={`${componentClassName}-highbar`} currentProduct={currentProduct}/>
      </div>
      <CurrentProductLowBar parentClassName={componentClassName} currentProduct={currentProduct}/>
    </div>
  )
}

export default ProductDetail;