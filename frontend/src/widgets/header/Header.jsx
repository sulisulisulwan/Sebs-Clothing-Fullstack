import React from 'react';
import BannerSearchAndLogo from './BannerSearchAndLogo.jsx'
import BannerAnnouncements from './BannerAnnouncements.jsx'

const Header = () => {
  return (
    <header>
      <BannerSearchAndLogo/>
      <BannerAnnouncements/>
    </header>
  )
}

export default Header;