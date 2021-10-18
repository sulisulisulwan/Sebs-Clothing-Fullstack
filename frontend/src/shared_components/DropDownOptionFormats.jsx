import React from 'react';
import onClick from '../onClickHandlers.js';

const SearchResult = ({ parentClassName, searchResult, dropdownFuncs }) => {

  const optionOnClick = (e) => {
    onClick.searchBarResults(e, dropdownFuncs).catch(err => {
      console.error(err);
    })
  }

  return (
    <li
      className="modal-unordered-list-item"
      id={`${parentClassName}-dropdown-option-${searchResult.value}`}
      value={searchResult.value}
      onClick={optionOnClick}
    >
      <span className="search-result-name">{searchResult.display.name} </span>
      <span className="search-result-category">{searchResult.display.category}</span>
  </li>
  )
}

export default {
  SearchResult
}