import React from 'react';
import BannerLogoNavbarSearch from './BannerLogoNavbarSearch.jsx'
import BannerAnnouncements from './BannerAnnouncements.jsx'

const Header = ({ dropdownFuncs }) => {
  return (
    <>
      <BannerAnnouncements/>
      <BannerLogoNavbarSearch
        dropdownFuncs={dropdownFuncs}
      />

    </>
  )
}

export default Header;