import React from 'react';
import Card from '../../../shared_components/Card.jsx'
import onClick from '../../../onClickHandlers.js';



const RelatedCards = ({ parentClassName, relatedProducts, cardFuncs }) => {

  if (!relatedProducts) {
    return null
  }
  return (
    <div className={`${parentClassName}-related-cards-container`}>
      {relatedProducts.map((relatedProduct) =>
        <Card
          key={`relatedProduct${relatedProduct.id}`}
          parentClassName={`${parentClassName}-related-cards`}
          productData={relatedProduct}
          onClickHandler={onClick.relatedProductCard}
          cardFuncs={cardFuncs}
        />)}
    </div>
  )
}

export default RelatedCards;