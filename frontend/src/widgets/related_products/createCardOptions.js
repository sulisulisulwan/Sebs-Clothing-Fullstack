import onClick from '../../onClickHandlers.js'



const createCardOptions = (cardType, funcs, data) => {
  const cardOptions = {
    type: cardType,
    funcs: funcs || {},
    data: data || {}
  }

  if (cardType === 'addToOutfit') {
    cardOptions.funcs.onClickHandler = onClick.addToOutfitCard;
    cardOptions.funcs.actionOnClick = null; //this card does not have an action button.
  } else if (cardType === 'related') {
    cardOptions.funcs.onClickHandler = onClick.relatedProductCard ;
    cardOptions.funcs.actionOnClick = onClick.productComparisonAction;
  } else if (cardType === 'currentOutfit') {
    cardOptions.funcs.onClickHandler = onClick.relatedProductCard; //clicking should show the product on product detail right?
    cardOptions.funcs.actionOnClick = onClick.removeFromOutfitAction;
  }
  return cardOptions;
}

export default createCardOptions;