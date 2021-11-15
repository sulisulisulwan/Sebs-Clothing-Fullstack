import React from 'react';
import { useState, useEffect } from 'react';
import CPPhotos from './subcomponents/product_photos/CPPhotos.jsx';
import CPCustomerAction from './subcomponents/product_customer_action/CPCustomerAction.jsx'
import CPDescription from './subcomponents/product_description/CPDescription.jsx'
import CPFeatures from './subcomponents/product_features/CPFeatures.jsx';

const ProductDetail = ({ currentProduct }) => {

  const [currentStyle, setCurrentStyle] = useState(null)
  useEffect(() => {
    if (currentProduct === null) {
      return;
    }
    setCurrentStyle(currentProduct.styles[currentProduct.defaultStyleIndex]);
  }, [currentProduct]);


  return (
    <div className={`product-detail-container`}>
      <div className={`highbar-container`}>
        <div className="highbar-left">
          <CPPhotos parentClassName={`highbar-left`}
            currentProduct={currentProduct}
            currentStyle={currentStyle}/>
        </div>
        <div className="highbar-right">
          <CPCustomerAction
            currentStyle={currentStyle}
            setCurrentStyle={setCurrentStyle}
            currentProduct={currentProduct}/>
        </div>
      </div>
      <div className={`lowbar-container`}>
        <div className={`lowbar-left`}>
          <div className={`indent`}></div>
          <div>
            <CPDescription currentProduct={currentProduct}/>
          </div>
        </div>
        <div className={`lowbar-right`}>
          <CPFeatures currentProduct={currentProduct}/>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail;