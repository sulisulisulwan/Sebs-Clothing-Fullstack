import React from 'react';

const SearchBar = ({ parentClassName }) => {

  return (
    <input className={`${parentClassName}-searchbar`} type="text">
    </input>
  )
}

export default SearchBar;