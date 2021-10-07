import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import Header from './widgets/header/Header.jsx'
import ProductDetail from './widgets/product_detail/ProductDetail.jsx';
import RelatedProducts from './widgets/related_products/RelatedProducts.jsx';
import QandA from './widgets/q_and_a/QandA.jsx';
import RatingsAndReviews from './widgets/ratings_and_reviews/RatingsAndReviews.jsx'

const App = () => {

  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    return axios.get('/product/1')
      .then(result => {
        setCurrentProduct(result.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <>
      <Header/>
      <hr></hr>
      <ProductDetail currentProduct={currentProduct}/>
      <hr></hr>
      <RelatedProducts currentProduct={currentProduct}/>
      <hr></hr>
      <QandA/>
      <hr></hr>
      <RatingsAndReviews/>
    </>
  )
}

export default App;