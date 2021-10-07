import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RelatedCards from './subcomponents/RelatedCards.jsx'
import OutfitCards from './subcomponents/OutfitCards.jsx'
import axios from 'axios';

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
    return axios.get(`/product/${id}/related`)
      .then(result => {
        result.data.forEach(relatedProductId => {
          relatedProductsAPICalls.push(axios.get(`product/${relatedProductId}`))
          relatedProductStylesAPICalls.push(axios.get(`product/${relatedProductId}/styles`))
        })
        return Promise.all(relatedProductsAPICalls)
      })
      .then(relatedProductsResults => {
        relatedProductsResults.forEach(relatedProduct => {
          formattedRelatedProducts.push(relatedProduct.data)
        })
        return Promise.all(relatedProductStylesAPICalls)
      })
      .then(relatedProductStylesResults => {
        relatedProductStylesResults.forEach((relatedProductStyles, i) => {
          formattedRelatedProducts[i].styles = relatedProductStyles.data.results;
        })
        setRelatedProducts(formattedRelatedProducts);
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