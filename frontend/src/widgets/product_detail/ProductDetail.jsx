import React from 'react';
import CurrentProductPhoto from './subcomponents/CurrentProductPhoto.jsx'
import VerticalPhotoCarousel from './subcomponents/VerticalPhotoCarousel.jsx'
import CurrentProductDetails from './subcomponents/CurrentProductDetails.jsx'
const ProductDetail = () => {

  const componentClassName = "product-detail";
  return (
    <div className={`${componentClassName}-container`}>
      PRODUCT DETAIL
      <VerticalPhotoCarousel parentClassName={componentClassName}/>
      <CurrentProductPhoto parentClassName={componentClassName}/>
      <CurrentProductDetails parentClassName={componentClassName}/>
    </div>
  )
}

export default ProductDetail;