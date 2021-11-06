import React from 'react';
import ReactDom from 'react-dom';
import { useState } from 'react';
import axios from 'axios';

const LoginSignupModal = ({ setLoginSignUpModalOpen }) => {

  const [modalContentType, setModalContentType] = useState('login');

  const toggleLoginSignUpModalClick= () => {
    modalContentType === 'login' ? setModalContentType('signup') : setModalContentType('login');
  }

  const closeModalClick = () => {
    setLoginSignUpModalOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
    modalContentType === 'login' ? loginUser(e.target) : createUser(e.target)
  }

  const loginUser = async(eTarget) => {
    let username = eTarget[0]
    let password = eTarget[1]
    try {
      await axios.post('/users/login', { username, password })
    } catch(err) {
      console.error(err)
    }
  }

  const createUser = async(eTarget) => {
    let username = eTarget[0]
    let password = eTarget[1]
    try {
      await axios.post('/users/create', { username, password })
    } catch(err) {
      console.error(err);
    }
  }

  let textLink1 = modalContentType === 'login' ? 'Need to create an account?  ' : 'Already have an accout?  ';
  let textLink2 = modalContentType === 'login' ? 'Sign up!' : 'Log in!';
  let submitButtonText = modalContentType === 'login' ? 'Log in' : 'Sign up';


  return ReactDom.createPortal(
    <div className={`modal-wrapper ${modalContentType}`}>
      <div className={`modal ${modalContentType}`}>
        <span className={`modal-close ${modalContentType}`} onClick={closeModalClick}>X</span>
        <form className={`modal-form ${modalContentType}`} onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text"></input>
          </label>
          <label>
            Password:
            <input type="password"></input>
          </label>
          <input type="submit" value={submitButtonText}></input>
        </form>
        {textLink1}<span className={`modal-text-link ${modalContentType}`} onClick={toggleLoginSignUpModalClick}>{textLink2}</span>
      </div>
    </div>, document.getElementById('portal')
  )
}



export default LoginSignupModal;