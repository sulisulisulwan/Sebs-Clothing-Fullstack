import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import onClick from '../../../onClickHandlers.js'
import createCardOptions from '../createCardOptions.js';
import Card from './Card.jsx'

const OutfitCards = ({ currentProduct }) => {

  const [myOutfit, setMyOutfit] = useState([]);
  const [addOutfitDisabled, setAddOutfitDisabled] = useState(false);

  for (let i = 0; i < myOutfit.length; i++) {
    if (myOutfit[i].id === currentProduct.id) {
      if (!addOutfitDisabled) {
        setAddOutfitDisabled(true)
      }
      break;
    }
    if (i === myOutfit.length - 1) {
      if (addOutfitDisabled) {
        setAddOutfitDisabled(false);
      }
    }
  }

  const addToOutfitOptions = createCardOptions(`addToOutfit${addOutfitDisabled ? ' disabled' : ''}`, 'addToOutfit', { setMyOutfit, setAddOutfitDisabled }, { myOutfit, addOutfitDisabled });
  const currentOutfitOptions = createCardOptions('currentOutfit', 'currentOutfit', { setMyOutfit, setAddOutfitDisabled }, { myOutfit } );

  let addToOutfitCard = <Card
    productData={currentProduct}
    cardOptions={addToOutfitOptions}
    >
      <div>Add to Outfit</div>
    </Card>;

  return (
    <div className={`outfit-cards-container`}>
      {addToOutfitCard}
      <Carousel carouselName="outfit" cardsData={myOutfit} cardOptions={currentOutfitOptions}/>
    </div>
  )
}

export default OutfitCards;


