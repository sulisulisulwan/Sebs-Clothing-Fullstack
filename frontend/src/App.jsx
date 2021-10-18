import React from 'react';
import { useState, useEffect } from 'react';
import API from './API_call_functions.js'

import Header from './widgets/header/Header.jsx'
import ProductDetail from './widgets/product_detail/ProductDetail.jsx';
import RelatedProducts from './widgets/related_products/RelatedProducts.jsx';
import QandA from './widgets/q_and_a/QandA.jsx';
import RatingsAndReviews from './widgets/ratings_and_reviews/RatingsAndReviews.jsx'

const App = () => {

  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(async () => {
    try {
      let product = await API.getProduct(1);
      product.related = await API.getRelated(1);
      setCurrentProduct(product);
    } catch(err) {
      console.error(err);
    }
  }, [])

  return (
    <>
      <header>
        <Header
          setCurrentProduct={setCurrentProduct}
          dropdownFuncs={
            {
              setStateFuncs: {
                setCurrentProduct
              },
              api: {
                getProduct: API.getProduct,
                getRelated: API.getRelated
              }
            }
          }
        />
      </header>
      <main className="main-content">
        <ProductDetail currentProduct={currentProduct}/>
        <div className="subwidgets-wrapper">
          <div className="subwidgets-indent"></div>
          <div className="subwidgets">
            <RelatedProducts
              currentProduct={currentProduct}
              setCurrentProduct={setCurrentProduct}
            />
            <RatingsAndReviews/>
            <QandA/>
          </div>
        </div>

      </main>
    </>
  )
}

export default App;