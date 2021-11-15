import React from 'react';
import ActionButton from '../../../shared_components/ActionButton.jsx'

const Card = (props) => {
  let { productData, cardOptions } = props;
  let { id, category, price, name } = productData;
  let defaultStyle = productData.styles[productData.defaultStyleIndex]

  let defaultThumbnailUrl = defaultStyle ? (defaultStyle.photos === null ? 'assets/no_thumbnail.jpg' : defaultStyle.photos[0].thumbnail_url)
    : null;

  const onClickWrapper = (e) => {
    if (e.target.className === 'action-button-star' || e.target.className  === 'action-button-x') {
      return;
    }
    cardOptions.funcs.onClickHandler(id, cardOptions, productData, e);
  }

  return (
    <div id={ id ? `${id}-${cardOptions.type}` : null} className={`card ${cardOptions.className}`} onClick={onClickWrapper}>
      <div className={`card-image-wrapper`}>
        <img className={`card-image`} src={defaultThumbnailUrl} alt={'Product Image'}></img>
      </div>
      {cardOptions.funcs.actionOnClick ? <ActionButton type={cardOptions.data.actionButton} productId={id} cardOptions={cardOptions}/>: null}
      <div className={ `card-details-wrapper`}>
        {props.children}
      </div>
    </div>
  )
}

export default Card;