import React from 'react';

const BannerAnnouncements = () => {

  let componentClassName = 'banner-announcements'
  return (
    <div className={`${componentClassName}-container`}>
      <div className={componentClassName}>
        SITE-WIDE ANNOUNCEMENT MESSAGE! --SALE / DISCOUNT <strong>OFFER</strong> - <u>NEW PRODUCT HIGHLIGHT</u>;
      </div>
    </div>
  )
}

export default BannerAnnouncements;