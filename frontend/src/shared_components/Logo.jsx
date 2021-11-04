import React from 'react';

const Logo = ({ parentClassName }) => {


  return (
    <div className={`${parentClassName}-logo-wrapper`}>
      <img className={`${parentClassName}-logo`} src="/assets/SEBSlogo.png" alt="SEBS CLOTHING CO.;"></img>
    </div>
  )
}

export default Logo;