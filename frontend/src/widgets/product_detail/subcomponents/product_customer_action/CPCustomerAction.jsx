import React from 'react';
import BoxStyleButton from '../../../../shared_components/BoxStyleButton.jsx';
import StyleSelector from './StyleSelector.jsx'
import CurrentProductReviewData from './CurrentProductReviewData.jsx'
import DropDownSelect from '../../../../shared_components/DropDownSelect.jsx';

const CPCustomerAction = ({ parentClassName, currentProduct, setCurrentStyle, currentStyle }) => {

  if (currentProduct === null) {
    return null;
  }

  let addToBagOptions = {
    buttonText: <><span>ADD TO BAG</span><span>+</span></>,
    customClass: 'addToBag',
    onClickHandler: () => { alert('adds to bag') }
  }
  let favoriteOptions = {
    buttonText: <img className="favorite-star" src="assets/star.png"></img>,
    customClass: 'favorite',
    onClickHandler: () => { alert('adds to favorites') }
  }

  let selectSizeOptions = {
    buttonText: <><span>SELECT SIZE</span></>,
    customClass: 'select-size',
    onClickHandler: () => { alert('drops down select size menu') }
  }

  let amountOptions = {
    buttonText: <><span>AMOUNT</span></>,
    customClass: 'amount',
    onClickHandler: () => { alert('drops down amount menu') }
  }

  return (
    <div className="ca-container">
      {currentProduct.reviewsMetaData === null ? null : <CurrentProductReviewData parentClassName={`ca`} currentProduct={currentProduct}/>}
      <div className="ca category">{currentProduct.category}</div>
      <div className="ca name">{currentProduct.name}</div>
      <div className="ca price">${currentProduct.default_price}</div>
      <StyleSelector
        parentClassName={`ca`}
        currentProduct={currentProduct}
        setCurrentStyle={setCurrentStyle}
        currentStyle={currentStyle}/>
      <div className="ca dropdown-selectors">
        <div className="ca dropdown-selectors select-size wrapper">
          <BoxStyleButton parentClassName={`ca dropdown-selectors`} buttonOptions={selectSizeOptions}/>
          {/* <DropDownSelect/> */}
        </div>
        <div className="ca dropdown-selectors amount wrapper">
          <BoxStyleButton parentClassName={`ca dropdown-selectors`} buttonOptions={amountOptions}/>
        </div>
      </div>
      <div className="ca addtobag-favorite">

        <BoxStyleButton parentClassName={`ca addtobag-favorite`} buttonOptions={addToBagOptions}/>
        <BoxStyleButton parentClassName={`ca addtobag-favorite`} buttonOptions={favoriteOptions}/>
      </div>
    </div>
  )
}

export default CPCustomerAction;