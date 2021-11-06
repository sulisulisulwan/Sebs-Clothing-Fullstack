import React from 'react';
import { useState } from 'react';
import ReactDom from 'react-dom';
const LoginModal = ({ setModalOpen }) => {


  const openSignUpModal= () => {
    alert('opens sign up modal')
  }

  const closeModalClick = () => {
    setModalOpen(false);
  }


  return ReactDom.createPortal(
    <div className="login-modal-wrapper">
      <div className="login-modal">
        <span className={'login-modal-close'} onClick={closeModalClick}>X</span>
        <form className="login-form">
          <label>
            Username:
            <input type="text"></input>
          </label>
          <label>
            Password:
            <input type="password"></input>
          </label>
        </form>
        Need to create an account?  <span className="signup-link" onClick={openSignUpModal}>Sign up!</span>
      </div>
    </div>, document.getElementById('portal')
  )
}



export default LoginModal;