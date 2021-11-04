import onClick from '../../onClickHandlers.js'



const createCardOptions = (cardType, setStateFuncs, data) => {
  const cardOptions = {
    type: cardType,
    setStateFuncs: setStateFuncs || null,
  }
  if (cardType === 'addToOutfit') {
    cardOptions.onClickHandler = onClick.addToOutfitCard;
    cardOptions.actionOnClick = null; //this card does not have an action button.
  } else if (cardType === 'related') {
    cardOptions.onClickHandler = onClick.relatedProductCard ;
    cardOptions.actionOnClick = onClick.productComparisonAction;
  } else if (cardType === 'currentOutfit') {
    cardOptions.myOutfit = data;
    cardOptions.onClickHandler = onClick.relatedProductCard; //clicking should show the product on product detail right?
    cardOptions.actionOnClick = onClick.removeFromOutfitAction;
  }
  return cardOptions;
}

export default createCardOptions;