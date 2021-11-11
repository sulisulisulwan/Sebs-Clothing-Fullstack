import React from 'react';


const ComparisonModal = ({ cardOptions, currentProductData, comparisonProductData, comparisonModalCoords }) => {

  const closeButtonOnClick = () => {
    cardOptions.funcs.setComparisonModalOpen(false);
  }

  const buildComparisonData = (currentProd, comparisonProd) => {
    const comparisonTable = {};
    currentProd.features.forEach(feature => {
      comparisonTable[feature.feature] = {
        currentProd: feature.value,
        comparisonProd: false
      }
    })
    comparisonProd.features.forEach(feature => {
      if (comparisonTable[feature.feature]) {
        comparisonTable[feature.feature].comparisonProd = feature.value;
      } else {
        comparisonTable[feature.feature] = {
          currentProd: false,
          comparisonProd: feature.value
        }
      }
    })
    const comparisonArray = []
    for (let feature in comparisonTable) {
      comparisonArray.push([feature, comparisonTable[feature]])
    }
    return comparisonArray

  }

  const comparisonData = buildComparisonData(currentProductData, comparisonProductData)


  const getViewPort = () => {
    return window.innerWidth !== undefined ? [window.innerWidth, window.innerHeight]
      : document.documentElement !== undefined ? [document.documentElement.clientWidth, document.documentElement.clientHeight]
      : [document.getElementsByTagName('body').clientWidth, document.getElementsByTagName('body').clientHeight]
  }

  const [viewportWidth, viewportHeight] = getViewPort();


  let modalStyle = {
    position: 'absolute',
    top: `${comparisonModalCoords[1]}px`,
    left: `${comparisonModalCoords[0]}px`,
    minWidth: '500px',
    zIndex: '3',
    border: 'lightgray .2px solid',
    borderRadius: '10px',
    backgroundColor: 'white',
    textAlign: 'right',
    padding: '20px'
  };

  console.log(modalStyle)



  return(
    <div className="modal-comparison-wrapper" style={modalStyle}>
      <span className="modal-close" onClick={closeButtonOnClick}>X</span>
      <div className="modal-comparison">
        <table className="modal-comparison-table">
          <thead>
            <tr>
              <td className="modal-comparison-table product-names">{currentProductData.name}</td><td></td><td className="modal-comparison-table product-names">{comparisonProductData.name}</td>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((feature, i) =>
              <tr key={`${feature[1]}-${i}`}>
                <td className="modal-comparison-table current-product-value">{feature[1].currentProd ? `✓  ` + feature[1].currentProd : ''}</td><td>{feature[0]}</td><td className="modal-comparison-table comparison-product-value">{feature[1].comparisonProd ? feature[1].comparisonProd + `  ✓` : ''}</td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ComparisonModal;