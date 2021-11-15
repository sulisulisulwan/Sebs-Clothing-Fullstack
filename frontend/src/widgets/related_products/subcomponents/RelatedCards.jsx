import React from 'react';
import Carousel from './Carousel.jsx';

const RelatedCards = ({ relatedProducts, comparisonProductData, currentProduct, cardOptions, comparisonModalCoords }) => {

  if (!relatedProducts) {
    return null
  }

  return (
    <>
      <Carousel
        carouselName="related"
        cardsData={relatedProducts}
        currentProduct={currentProduct}
        comparisonProductData={comparisonProductData}
        cardOptions={cardOptions}
        comparisonModalCoords={comparisonModalCoords}
      />
    </>
  )
};

export default RelatedCards;