import React from 'react';

const ActionButton = ({ parentClassName, productId, cardOptions }) => {

  const onClickWrapper = () => {
    cardOptions.funcs.actionOnClick(productId, cardOptions)
  }

  let buttonType = parentClassName === 'related-products-related-cards-card' ? 'star' : 'x';
  return (
    <img className={`${parentClassName}-action-button-${buttonType}`} src={`assets/${buttonType}.png`} alt={'X'} onClick={onClickWrapper}></img>
  )
}

export default ActionButton;