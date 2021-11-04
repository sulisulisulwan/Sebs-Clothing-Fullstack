import React from 'react';
import BannerSearchAndLogo from './BannerSearchAndLogo.jsx'
import BannerAnnouncements from './BannerAnnouncements.jsx'

const Header = ({ dropdownFuncs }) => {
  return (
    <>
      <BannerAnnouncements/>
      <BannerSearchAndLogo
        dropdownFuncs={dropdownFuncs}
      />

    </>
  )
}

export default Header;