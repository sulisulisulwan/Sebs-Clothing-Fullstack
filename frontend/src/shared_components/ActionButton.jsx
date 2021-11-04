import React from 'react';

const ActionButton = ({ parentClassName, onClickHandler }) => {
  let buttonType = parentClassName === 'related-products-related-cards-card' ? 'star' : 'x';
  return (
    <img className={`${parentClassName}-action-button-${buttonType}`} src={`assets/${buttonType}.png`} alt={'X'} onClick={onClickHandler}></img>
  )
}

export default ActionButton;