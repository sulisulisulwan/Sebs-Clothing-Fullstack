import React from 'react';

const BoxStyleButton = ({ buttonOptions }) => {


  const { buttonText, onClickHandler } = buttonOptions;

  const onClickWrapper = (e) => {
    onClickHandler(e)
  }

  return (
    <button className={`boxstyle-button`} onClick={onClickWrapper}>{buttonText}</button>
  )
}

export default BoxStyleButton;