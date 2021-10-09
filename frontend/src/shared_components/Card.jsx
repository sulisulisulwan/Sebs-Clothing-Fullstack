import React from 'react';
import ActionButton from './ActionButton.jsx'
import Stars from './Stars.jsx'

const Card = ({ parentClassName, productData }) => {
  let {id, category, price, name} = productData;
  // console.log('productData', productData)
  let defaultStyle = productData.styles[productData.defaultStyleIndex]
  // console.log('defaultStyle', defaultStyle)
  let defaultThumbnailUrl = defaultStyle.photos === null ? 'assets/no_thumbnail.jpg' : defaultStyle.photos[0].thumbnail_url;


  return (
    <div className={`${parentClassName}-card`}>
      <div className={`${parentClassName}-card-image-wrapper`}>
        <img className={`${parentClassName}-card-image`} src={defaultThumbnailUrl} alt={'Product Image'}></img>
      </div>
        <ActionButton parentClassName={`${parentClassName}-card`}/>
      <div className={ `${parentClassName}-card-details-wrapper`}>
        <div className={`${parentClassName}-card-category`}>{category}</div>
        <div className={`${parentClassName}-card-name`}>{name}</div>
        <div className={`${parentClassName}-card-price`}>{price}</div>
        <Stars className={`${parentClassName}-card-stars`}/>
      </div>
    </div>
  )
}

export default Card;