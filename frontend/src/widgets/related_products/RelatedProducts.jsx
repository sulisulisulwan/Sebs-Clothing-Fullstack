import React from 'react';
import RelatedCards from './subcomponents/RelatedCards.jsx'
import OutfitCards from './subcomponents/OutfitCards.jsx'

const RelatedProducts = () => {

  const componentClassName = 'related-products'
  return (
    <div className={`${componentClassName}-container`}>
      <div className="widget-title">
        RELATED PRODUCTS
      </div>
      <RelatedCards/>
      <OutfitCards/>
    </div>
  )
}

export default RelatedProducts;