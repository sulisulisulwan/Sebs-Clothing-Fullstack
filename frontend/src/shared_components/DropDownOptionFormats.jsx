import React from 'react';
import onClick from '../onClickHandlers.js';

const SearchResult = ({ parentClassName, searchResult, searchQuery, updateSearchBar, dropdownOptions }) => {

  const optionOnClick = (e) => {

    updateSearchBar(searchResult.display.name)
    onClick.searchBarResults(e, dropdownOptions).catch(err => {
      console.error(err);
    })
  }
  const formatSearchResult = (result, query) => {
    let name = result.display.name;
    let category = result.display.category;
    let bolded = name.substring(0, query.length)
    let notBolded = name.substring(query.length);
    return (
      <>
        <span className="search-result-name"><span className="thick">{ bolded }</span>{ notBolded } </span>
        <span className="search-result-category">{ category }</span>
      </>
    )
  }

  let formattedSearchResult = formatSearchResult(searchResult, searchQuery);

  return (
    <li
      className="modal-unordered-list-item"
      id={`${parentClassName}-dropdown-option-${searchResult.value}`}
      value={searchResult.value}
      onClick={optionOnClick}
    >
      { formattedSearchResult }
  </li>
  )
}

export default {
  SearchResult
}