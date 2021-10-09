import React from 'react';
import SearchBar from '../../shared_components/SearchBar.jsx'
import Logo from '../../shared_components/Logo.jsx';

const BannerSearchAndLogo = () => {

  const componentClassName = 'banner-header';

  return (
    <div className={`${componentClassName}-container`}>
        <Logo parentClassName={componentClassName}/>
        <SearchBar parentClassName={componentClassName}/>
    </div>
  )
}

export default BannerSearchAndLogo;