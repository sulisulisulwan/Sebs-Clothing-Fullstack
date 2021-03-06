import onClick from '../../onClickHandlers.js'



const createCardOptions = (className, cardType, funcs, data) => {
  const cardOptions = {
    className: className,
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
    cardOptions.data.actionButton = 'star'
  } else if (cardType === 'currentOutfit') {
    cardOptions.funcs.onClickHandler = onClick.relatedProductCard; //clicking should show the product on product detail right?
    cardOptions.funcs.actionOnClick = onClick.removeFromOutfitAction;
    cardOptions.data.actionButton = 'x'
  }
  return cardOptions;
}

export default createCardOptions;