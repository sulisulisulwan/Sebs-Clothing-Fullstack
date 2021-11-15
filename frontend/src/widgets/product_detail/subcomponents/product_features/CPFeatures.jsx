import React from 'react';

const CPFeatures = ({ parentClassName, currentProduct }) => {

  if (currentProduct === null) {
    return null;
  }

  const { features } = currentProduct

  return (
    <div className={`${parentClassName} features`}>
      {features.map((feature, i) => {
        return (
          <React.Fragment key={`${parentClassName}-${i} feature`}>
            <div className={`${parentClassName} feature`}>✓ {feature.feature}: {feature.value}</div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default CPFeatures;