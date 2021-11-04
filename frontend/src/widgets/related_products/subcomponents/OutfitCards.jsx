import React, {useState} from 'react';
import Card from './Card.jsx'
import onClick from '../../../onClickHandlers.js'
import createCardOptions from '../createCardOptions.js';

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
      {myOutfit.map(product => {
        <Card
          key={`outfitCard${product.id}`}
          parentClassName={`${parentClassName}-outfit-cards`}
          productData={currentProduct}
          cardOptions={currentOutfitOptions}
        />})}
    </div>
  )
}

export default OutfitCards;