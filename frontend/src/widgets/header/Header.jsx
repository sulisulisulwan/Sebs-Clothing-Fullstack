import React from 'react';
import BannerSearchAndLogo from './BannerSearchAndLogo.jsx'
import BannerAnnouncements from './BannerAnnouncements.jsx'

const Header = ({ dropdownFuncs }) => {
  return (
    <>
      <BannerSearchAndLogo
        dropdownFuncs={dropdownFuncs}
      />
      <BannerAnnouncements/>
    </>
  )
}

export default Header;