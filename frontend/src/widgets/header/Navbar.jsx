import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import LoginModal from './LoginModal.jsx';


const Navbar = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleLoginClick = () => {
    setModalOpen(true);
  }

  return (
    <>
      <nav className="banner-header-navbar">
        <span className="login-button" onClick={handleLoginClick}>Login</span>
        { modalOpen ? <LoginModal setModalOpen={setModalOpen}/> : null}
      </nav>
    </>
  )
}

export default Navbar;