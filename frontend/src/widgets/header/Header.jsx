import React from 'react';
import BannerLogoNavbarSearch from './BannerLogoNavbarSearch.jsx'
import BannerAnnouncements from './BannerAnnouncements.jsx'

const Header = ({ searchBarOptions }) => {
  return (
    <>
      <BannerAnnouncements/>
      <BannerLogoNavbarSearch
        searchBarOptions={searchBarOptions}
      />

    </>
  )
}

export default Header;