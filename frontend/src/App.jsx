import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getProduct } from './API_call_functions.js'

import Header from './widgets/header/Header.jsx'
import ProductDetail from './widgets/product_detail/ProductDetail.jsx';
import RelatedProducts from './widgets/related_products/RelatedProducts.jsx';
import QandA from './widgets/q_and_a/QandA.jsx';
import RatingsAndReviews from './widgets/ratings_and_reviews/RatingsAndReviews.jsx'

const App = () => {

  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    return getProduct(1)
      .then(product => {
        setCurrentProduct(product);
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <>
      <header>
        <Header/>
      </header>
      <main className="main-content">
        <ProductDetail currentProduct={currentProduct}/>
        <div className="subwidgets-wrapper">
          <div className="subwidgets-indent"></div>
          <div className="subwidgets">
            <RelatedProducts currentProduct={currentProduct}/>
            <RatingsAndReviews/>
            <QandA/>
          </div>
        </div>

      </main>
    </>
  )
}

export default App;