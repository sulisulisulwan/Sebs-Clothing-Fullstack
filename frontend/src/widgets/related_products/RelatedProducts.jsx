import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RelatedCards from './subcomponents/RelatedCards.jsx'
import OutfitCards from './subcomponents/OutfitCards.jsx'
import axios from 'axios';
import { getRelated } from '../../API_call_functions.js'

const RelatedProducts = ({ currentProduct }) => {

  let id = currentProduct === null ? null : currentProduct.id;
  const [relatedProducts, setRelatedProducts] = useState(null);
  const relatedProductsAPICalls = [];
  const relatedProductStylesAPICalls = []
  const formattedRelatedProducts = []

  useEffect(() => {
    if (id === null) {
      return;
    }
    return getRelated(id)
      .then(allRelatedProducts => {
        setRelatedProducts(allRelatedProducts)
      })
      .catch( err=> {
        console.error(err)
      })
  }, [currentProduct])

  const componentClassName = 'related-products'
  return (
    <div className={`${componentClassName}-container`}>
      <div className="widget-title">
        RELATED PRODUCTS
      </div>
      <RelatedCards parentClassName={componentClassName} relatedProducts={relatedProducts}/>
      <OutfitCards parentClassName={componentClassName}/>
    </div>
  )
}

export default RelatedProducts;