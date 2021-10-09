import React from 'react';

const SearchBar = ({ parentClassName }) => {

  return (
    <>
        <div className={`${parentClassName}-searchbar-wrapper`}>
          <img className={`${parentClassName}-searchbar-glass`} src="assets/magnifying-glass.png"></img>
          <input className={`${parentClassName}-searchbar-input`} type="text">
          </input>
        </div>
    </>
  )
}

export default SearchBar;