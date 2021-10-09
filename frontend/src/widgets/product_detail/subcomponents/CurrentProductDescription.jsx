import React from 'react';
import CurrentProductFeatures from './CurrentProductFeatures.jsx';

const CurrentProductLowBar = ({ parentClassName, currentProduct }) => {
  return (
    <div className={`${parentClassName}-lowbar-container`}>
      <div className = {`${parentClassName}-lowbar-left-wrapper`}>
        <div className={`${parentClassName}-lowbar-slogan`}>
          {currentProduct ? currentProduct.slogan : null}
        </div>
        <div className={`${parentClassName}-lowbar-description`}>
          {currentProduct ? currentProduct.description : null}
        </div>
      </div>
      <div className={`${parentClassName}-lowbar-right-wrapper`}>
        <CurrentProductFeatures parentClassName={`${parentClassName}-lowbar`}/>
      </div>
    </div>
  )
}

export default CurrentProductLowBar;