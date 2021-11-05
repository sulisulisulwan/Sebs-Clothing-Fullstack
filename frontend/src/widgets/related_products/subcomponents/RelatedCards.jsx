import React from 'react';
import Carousel from './Carousel.jsx';

const RelatedCards = ({ parentClassName, relatedProducts, cardOptions }) => {

  if (!relatedProducts) {
    return null
  }

  return (
    <div className={`${parentClassName}-related-cards-container`}>
      <Carousel carouselName="related" parentClassName={parentClassName} cardsData={relatedProducts} cardOptions={cardOptions}/>
    </div>
  )
};

export default RelatedCards;