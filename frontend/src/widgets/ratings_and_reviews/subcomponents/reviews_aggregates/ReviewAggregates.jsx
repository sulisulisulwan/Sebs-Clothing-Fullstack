import React from 'react';
import Stars from '../../../../shared_components/Stars.jsx';
import AverageRatingDisplay from './AverageRatingDisplay.jsx';

const ReviewAggregates = ({ parentClassName, currentProduct }) => {
  return(
    <div className={`${parentClassName}-aggregates-wrapper`}>
      <AverageRatingDisplay parentClassName={`${parentClassName}-aggregates`} currentProduct={currentProduct}/>
    </div>
  )
}

export default ReviewAggregates;