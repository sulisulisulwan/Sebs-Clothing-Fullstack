import React from 'react';
import Stars from '../../../../shared_components/Stars.jsx';
import AverageRatingDisplay from './AverageRatingDisplay.jsx';
import StarRatingBarGraph from './StarRatingBarGraph.jsx';
import CharacteristicRatingSlider from './CharacteristicRatingSlider.jsx';

const ReviewAggregates = ({ parentClassName, currentProduct }) => {
  return(
    <div className={`${parentClassName}-aggregates-wrapper`}>
      <AverageRatingDisplay parentClassName={`${parentClassName}-aggregates`} currentProduct={currentProduct}/>
      <div className={`${parentClassName}-aggregates percentage-who-recommend`}>'???%' of reviews recommend this product</div>
      <StarRatingBarGraph parentClassName={`${parentClassName}-aggregates`} currentProduct={currentProduct}/>
      <CharacteristicRatingSlider parentClassName={`${parentClassName}-aggregates`} currentProduct={currentProduct}/>
    </div>
  )
}

export default ReviewAggregates;