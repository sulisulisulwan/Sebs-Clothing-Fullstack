import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RelatedCards from './subcomponents/RelatedCards.jsx'
import OutfitCards from './subcomponents/OutfitCards.jsx'
import axios from 'axios';
import API from '../../API_call_functions.js'
import createCardOptions from './createCardOptions.js';

const RelatedProducts = ({ currentProduct, setCurrentProduct }) => {

  let id = currentProduct === null ? null : currentProduct.id;
  const [relatedProducts, setRelatedProducts] = useState(null);
  const relatedProductsAPICalls = [];
  const relatedProductStylesAPICalls = []
  const formattedRelatedProducts = []


  useEffect( async () => {
    if (id === null) {
      return;
    }
    try {
      let allRelatedProducts = await API.getRelated(id)
      setRelatedProducts(allRelatedProducts);
    } catch(err) {
      console.error(err)
    }
  }, [currentProduct])

  const componentClassName = 'related-products'



  return (
    <div className={`${componentClassName}-container`}>
      <div className="widget-title">
        <h2>RELATED PRODUCTS</h2>
      </div>
      { id === null ? null :
      <>
        <RelatedCards parentClassName={componentClassName} relatedProducts={relatedProducts} cardOptions={createCardOptions('related', { setCurrentProduct })}/>
        <OutfitCards parentClassName={componentClassName} currentProduct={currentProduct}/>
      </>
      }
    </div>
  )
}

export default RelatedProducts;