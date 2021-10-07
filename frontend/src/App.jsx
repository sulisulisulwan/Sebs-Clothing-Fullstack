import React from 'react';
import Header from './widgets/header/Header.jsx'

import ProductDetail from './widgets/product_detail/ProductDetail.jsx';
import RelatedProducts from './widgets/related_products/RelatedProducts.jsx';
import QandA from './widgets/q_and_a/QandA.jsx';
import RatingsAndReviews from './widgets/ratings_and_reviews/RatingsAndReviews.jsx'

const App = () => {
  return (
    <>
      <Header/>
      <hr></hr>
      <ProductDetail/>
      <hr></hr>
      <RelatedProducts/>
      <hr></hr>
      <QandA/>
      <hr></hr>
      <RatingsAndReviews/>
    </>
  )
}

export default App;