import React, { useState } from 'react';
import Carousel from './Carousel.jsx';
import onClick from '../../../onClickHandlers.js'
import createCardOptions from '../createCardOptions.js';
import Card from './Card.jsx'

const OutfitCards = ({ parentClassName, currentProduct }) => {

  const [myOutfit, setMyOutfit] = useState([]);

  let addToOutfitOptions = createCardOptions('addToOutfit', setMyOutfit);
  let currentOutfitOptions = createCardOptions('currentOutfit', setMyOutfit);

  let addToOutfitCard = <Card
    parentClassName={`${parentClassName}-outfit-cards`}
    productData={currentProduct}
    cardOptions={addToOutfitOptions}
    >
      <div>Add to Outfit</div>
    </Card>;

  return (
    <div className={`${parentClassName}-outfit-cards-container`}>
      {addToOutfitCard}
      <Carousel carouselName="outfit" parentClassName={parentClassName} cardsData={myOutfit} cardOptions={currentOutfitOptions}/>
    </div>
  )
}

export default OutfitCards;


