import React from 'react';

const ActionButton = ({ parentClassName }) => {
  let buttonType = parentClassName === 'related-products-related-cards-card' ? 'star' : 'x';
  return (
    <img className={`${parentClassName}-action-button-${buttonType}`} src={`assets/${buttonType}.png`} alt={'X'}></img>
  )
}

export default ActionButton;