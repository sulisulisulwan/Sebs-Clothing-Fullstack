import React from 'react';
import SearchBar from '../../shared_components/SearchBar.jsx'
import Logo from '../../shared_components/Logo.jsx';
import Navbar from './Navbar.jsx';
const BannerLogoNavbarSearch = ({ searchBarOptions }) => {

  const componentClassName = 'banner-header';

  return (
    <div className={`${componentClassName}-container`}>
        <Logo parentClassName={componentClassName}/>
        <div className="nav-and-searchbar-container">
          <Navbar/>
          <SearchBar
            parentClassName={componentClassName}
            searchBarOptions={searchBarOptions}
          />
        </div>
    </div>
  )
}

export default BannerLogoNavbarSearch;