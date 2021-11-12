import React from 'react';
import Stars from '../../../shared_components/Stars.jsx';
import BoxStyleButton from '../../../shared_components/BoxStyleButton.jsx';
import StyleSelector from './StyleSelector.jsx'


const CurrentProductSideBar = ({ parentClassName, currentProduct }) => {

  if (currentProduct === null) {
    return null;
  }

  let addToBagOptions = {
    buttonText: <><span>ADD TO BAG</span><span>+</span></>,
    onClickHandler: () => { alert('adds to bag') }
  }
  let favoriteOptions = {
    buttonText: <img className="favorite-star" src="assets/star.png"></img>,
    onClickHandler: () => { alert('adds to favorites') }
  }

  return (
    <div className={`${parentClassName}-sidebar-container`}>
      <div className={`${parentClassName}-sidebar review-data`}>
        <Stars parentClassName={`${parentClassName}-sidebar`} productData={currentProduct}/>
        <div className={`${parentClassName}-sidebar readallreviews`}><u>Read all reviews</u></div>
      </div>
      <div className={`${parentClassName}-sidebar category`}>{currentProduct.category}</div>
      <div className={`${parentClassName}-sidebar name`}>{currentProduct.name}</div>
      <div className={`${parentClassName}-sidebar price`}>${currentProduct.default_price}</div>
      <StyleSelector/>
      <div className={`${parentClassName}-sidebar dropdown-selectors`}>
        <div>SELECT SIZE v</div>
        <div>AMOUNT</div>
      </div>
      <div className={`${parentClassName}-sidebar addtobag-favorite`}>
        <BoxStyleButton buttonOptions={addToBagOptions}/>
        <BoxStyleButton buttonOptions={favoriteOptions}/>
      </div>
    </div>
  )
}

export default CurrentProductSideBar;