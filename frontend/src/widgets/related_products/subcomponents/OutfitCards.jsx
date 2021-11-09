import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import onClick from '../../../onClickHandlers.js'
import createCardOptions from '../createCardOptions.js';
import Card from './Card.jsx'

const OutfitCards = ({ parentClassName, currentProduct }) => {

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

  const addToOutfitOptions = createCardOptions('addToOutfit', { setMyOutfit, setAddOutfitDisabled }, { myOutfit, addOutfitDisabled });
  const currentOutfitOptions = createCardOptions('currentOutfit', { setMyOutfit, setAddOutfitDisabled }, { myOutfit } );

  let addToOutfitCard = <Card
    parentClassName={`${parentClassName}-outfit-cards ${addOutfitDisabled ? 'disabled' : null}`}
    productData={currentProduct}
    cardOptions={addToOutfitOptions}
    >
      <div className={`${parentClassName}-outfit-cards ${addOutfitDisabled ? 'disabled' : null}`}>Add to Outfit</div>
    </Card>;

  return (
    <div className={`${parentClassName}-outfit-cards-container`}>
      {addToOutfitCard}
      <Carousel carouselName="outfit" parentClassName={parentClassName} cardsData={myOutfit} cardOptions={currentOutfitOptions}/>
    </div>
  )
}

export default OutfitCards;


