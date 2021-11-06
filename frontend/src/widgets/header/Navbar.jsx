import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import LoginSignupModal from './LoginSignupModal.jsx';


const Navbar = () => {

  const [loginSignUpModalOpen, setLoginSignUpModalOpen] = useState(false);

  const handleLoginClick = () => {
    setLoginSignUpModalOpen(true);
  }

  return (
    <>
      <nav className="banner-header-navbar">
        <span className="login-button" onClick={handleLoginClick}>Login</span>
        { loginSignUpModalOpen ? <LoginSignupModal setLoginSignUpModalOpen={setLoginSignUpModalOpen}/> : null}
      </nav>
    </>
  )
}

export default Navbar;