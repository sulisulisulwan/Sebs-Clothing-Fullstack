import React from 'react';

const SearchBar = ({ parentClassName }) => {

  return (
    <>
        <div className={`${parentClassName}searchbar-wrapper`}>
          <input className={`${parentClassName}-searchbar`} type="text">
          </input>
        </div>
    </>
  )
}

export default SearchBar;