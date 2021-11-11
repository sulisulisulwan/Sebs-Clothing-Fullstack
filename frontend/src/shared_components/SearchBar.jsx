import React from 'react';
import { useState, useEffect, useRef } from 'react';
import API from '../API_call_functions.js';
import DropDownSelect from './DropDownSelect.jsx';
import optionComponent from './DropDownOptionFormats.jsx';


//if searchbar takes in

const SearchBar = ({ parentClassName, dropdownFuncs }) => {

  const searchBarInput = useRef(null);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([]);

  useEffect(async() => {
    if (!searchQuery.length) {
      return;
    }
    try {
      let isExactMatch = await API.getIfSearchResultIsExactMatch(searchQuery);
      if (!isExactMatch) {
        let results = await API.getSearchResults(searchQuery)
        setSearchResults(results)
      } else {
        setSearchResults([]);
      }
    } catch(err) {
      console.error(err);
    }
  }, [searchQuery]);


  const searchBarOnChange = (e, altValue) => {
    let value = e ? e.target.value : altValue;
    setSearchInputValue(value)
    if (value === '') {
      setSearchResults([]);
    }
    setSearchQuery(value)
  }

  const updateSearchBar = (chosenSearchResult) => {
    searchBarOnChange(null, chosenSearchResult);
  }

  dropdownFuncs.setStateFuncs.setSearchQuery = setSearchQuery;
  dropdownFuncs.ref = searchBarInput;
  dropdownFuncs.searchResults = searchResults

  const { SearchResult } = optionComponent;

  return (
    <>
        <div className={`${parentClassName}-searchbar-wrapper`}>
          <input className={`${parentClassName}-searchbar-input`} ref={searchBarInput} type="text" onChange={searchBarOnChange} value={searchInputValue}>
          </input>
          <img className={`${parentClassName}-searchbar-glass`} src="assets/magnifying-glass.png"></img>
          {!searchResults.length ? null :
            <DropDownSelect
              parentClassName={parentClassName}
              optionComponent={searchResults.map(searchResult =>
                <SearchResult
                  key={`${parentClassName}-dropdown-option-${searchResult.value}`}
                  updateSearchBar={updateSearchBar}
                  searchQuery={searchQuery}
                  searchResult={searchResult}
                  parentClassName={parentClassName}
                  dropdownFuncs={dropdownFuncs}
                />)}
            />
          }
        </div>
    </>
  )
}


export default SearchBar;