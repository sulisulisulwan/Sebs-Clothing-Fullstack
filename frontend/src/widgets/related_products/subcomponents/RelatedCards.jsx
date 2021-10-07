import React from 'react';
import Card from '../../../shared_components/Card.jsx'

const RelatedCards = ({ parentClassName, relatedProducts }) => {

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
        />)}
    </div>
  )
}

export default RelatedCards;