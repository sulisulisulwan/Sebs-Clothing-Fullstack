import React from 'react';

const  ActionButton = ({ type, productId, cardOptions }) => {

  const onClickWrapper = (e) => {
    cardOptions.funcs.actionOnClick(productId, cardOptions, e)
  }

  return (
    <img className={`action-button-${type}`} src={`assets/${type}.png`} alt={'X'} onClick={onClickWrapper}></img>
  )
}

export default ActionButton;