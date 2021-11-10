import React from 'react';
import Carousel from './Carousel.jsx';

const RelatedCards = ({ parentClassName, relatedProducts, comparisonProductData, currentProduct, cardOptions, comparisonModalCoords }) => {

  if (!relatedProducts) {
    return null
  }

  return (
    <div className={`${parentClassName}-related-cards-container`}>
      <Carousel
        carouselName="related"
        parentClassName={parentClassName}
        cardsData={relatedProducts}
        currentProduct={currentProduct}
        comparisonProductData={comparisonProductData}
        cardOptions={cardOptions}
        comparisonModalCoords={comparisonModalCoords}
      />
    </div>
  )
};

export default RelatedCards;