import React from 'react';
import Card from './Card.jsx'
import onClick from '../../../onClickHandlers.js';
import Stars from '../../../shared_components/Stars.jsx'

const RelatedCards = ({ parentClassName, relatedProducts, cardOptions }) => {

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
          cardOptions={cardOptions}
        >
          <div className={`${parentClassName}-related-cards-card-category`}>{relatedProduct.category}</div>
          <div className={`${parentClassName}-related-cards-card-name`}>{relatedProduct.name}</div>
          <div className={`${parentClassName}-related-cards-card-price`}>{relatedProduct.price}</div>
          <Stars className={`${parentClassName}-related-cards-card-stars`}/>
        </Card>
          )}
    </div>
  )
}

export default RelatedCards;