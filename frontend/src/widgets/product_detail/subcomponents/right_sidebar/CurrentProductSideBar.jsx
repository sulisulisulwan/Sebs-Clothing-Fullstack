import React from 'react';
import BoxStyleButton from '../../../../shared_components/BoxStyleButton.jsx';
import StyleSelector from './StyleSelector.jsx'
import CurrentProductReviewData from './CurrentProductReviewData.jsx'

const CurrentProductSideBar = ({ parentClassName, currentProduct, setCurrentStyle, currentStyle }) => {

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
      {currentProduct.reviewsMetaData === null ? null : <CurrentProductReviewData parentClassName={`${parentClassName}-sidebar`} currentProduct={currentProduct}/>}
      <div className={`${parentClassName}-sidebar category`}>{currentProduct.category}</div>
      <div className={`${parentClassName}-sidebar name`}>{currentProduct.name}</div>
      <div className={`${parentClassName}-sidebar price`}>${currentProduct.default_price}</div>
      <StyleSelector
        parentClassName={`${parentClassName}-sidebar`}
        currentProduct={currentProduct}
        setCurrentStyle={setCurrentStyle}
        currentStyle={currentStyle}/>
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