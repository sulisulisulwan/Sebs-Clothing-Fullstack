import React from 'react';
import ActionButton from './ActionButton.jsx'
import Stars from './Stars.jsx'

const Card = ({ parentClassName, productData }) => {

  let {id, category, price, name} = productData;

  return (
    <div className={`${parentClassName}-card`}>
      <img className={`${parentClassName}-card-image-${id}`}alt={'Product Image'}></img>
      <ActionButton className={`${parentClassName}-card`}/>
      <div className={`${parentClassName}-card-category`}>{category}</div>
      <div className={`${parentClassName}-card-name`}>{name}</div>
      <div className={`${parentClassName}-card-price`}>{price}</div>
      <Stars className={`${parentClassName}-card-stars`}/>
    </div>
  )
}

export default Card;