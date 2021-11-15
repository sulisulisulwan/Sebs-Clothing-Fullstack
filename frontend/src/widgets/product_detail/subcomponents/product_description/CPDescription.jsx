import React from 'react';

const CPDescription = ({ currentProduct }) => {
  return (
    <div className={`cpd-container`}>
      <div className={`slogan`}>
        {currentProduct ? currentProduct.slogan : null}
      </div>
      <div className={`description`}>
        {currentProduct ? currentProduct.description : null}
      </div>
    </div>
  )
}

export default CPDescription;