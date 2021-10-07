import React from 'react';

const BannerAnnouncements = () => {

  let componentClassName = 'banner-announcements'
  return (
    <div className={`${componentClassName}-container`}>
      SITE-WIDE ANNOUNCEMENT MESSAGE! --SALE / DISCOUNT <strong>OFFER</strong> - <u>NEW PRODUCT HIGHLIGHT</u>;
    </div>
  )
}

export default BannerAnnouncements;