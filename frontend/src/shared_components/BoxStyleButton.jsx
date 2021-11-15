import React from 'react';

const BoxStyleButton = ({ parentClassName, buttonOptions }) => {


  const { buttonText, onClickHandler } = buttonOptions;

  const onClickWrapper = (e) => {
    onClickHandler(e, buttonOptions)
  }

  return (
    <button className={`${parentClassName} ${buttonOptions.customClass} boxstyle-button`} onClick={onClickWrapper}>{buttonText}</button>
  )
}

export default BoxStyleButton;