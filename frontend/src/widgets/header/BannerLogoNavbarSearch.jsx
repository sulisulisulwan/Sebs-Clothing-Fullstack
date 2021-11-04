import React from 'react';
import SearchBar from '../../shared_components/SearchBar.jsx'
import Logo from '../../shared_components/Logo.jsx';
import Navbar from './Navbar.jsx';
const BannerLogoNavbarSearch = ({ dropdownFuncs }) => {

  const componentClassName = 'banner-header';

  return (
    <div className={`${componentClassName}-container`}>
        <Logo parentClassName={componentClassName}/>
        <div className="nav-and-searchbar-container">
          <Navbar/>
          <SearchBar
            parentClassName={componentClassName}
            dropdownFuncs={dropdownFuncs}
          />
        </div>
    </div>
  )
}

export default BannerLogoNavbarSearch;