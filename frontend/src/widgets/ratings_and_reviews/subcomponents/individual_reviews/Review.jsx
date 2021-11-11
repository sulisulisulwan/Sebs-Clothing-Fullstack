import React from 'react';
import Stars from '../../../../shared_components/Stars.jsx'
import UserEntryInfo from '../../../../shared_components/UserEntryInfo.jsx'
import ReviewTextWrapper from './ReviewTextWrapper.jsx';
import Helpful from '../../../../shared_components/Helpful.jsx'

const Review = ({ parentClassName, review, isLastReview }) => {

  let { body, date, helpfulness, photos, rating, recommend, response, reviewer_name, summary} = review;
  let userEntryData = { reviewer_name, date }
  let reviewTextData = { summary, body, recommend, response }
  let productData = { reviewsMetaData: { averageRating: rating } }

  return (
    <div className={`${parentClassName}-review`}>
      <div className={`${parentClassName}-review star-userentryinfo-wrapper`}>
        <Stars parentClassName={`${parentClassName}-review`} productData={productData}/>
        <UserEntryInfo parentClassName={`${parentClassName}-review`} userEntryData={userEntryData}/>
      </div>
      <ReviewTextWrapper parentClassName={`${parentClassName}-review`} reviewTextData={reviewTextData}/>
      <Helpful parentClassName={`${parentClassName}-review`}/>
      { isLastReview ? null : <hr></hr>}
    </div>

  )
}

export default Review;