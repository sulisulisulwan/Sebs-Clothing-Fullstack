import React from 'react';
import { useState, useEffect, useRef } from 'react';
import API from '../API_call_functions.js';
import DropDownSelect from './DropDownSelect.jsx';
import optionComponent from './DropDownOptionFormats.jsx';


const SearchBar = ({ parentClassName, dropdownFuncs }) => {

  const searchBarInput = useRef(null);
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([]);

  const searchBarOnChange = (e) => {
    if (e.target.value === '') {
      setSearchResults([]);
    }
    setSearchQuery(e.target.value)
  }

  useEffect(async() => {
    if (!searchQuery.length) {
      return;
    }
    try {
      let results = await API.getSearchResults(searchQuery)
      setSearchResults(results)
    } catch(err) {
      console.error(err);
    }
  }, [searchQuery])


  dropdownFuncs.setStateFuncs.setSearchQuery = setSearchQuery;
  dropdownFuncs.ref = searchBarInput;
  dropdownFuncs.searchResults = searchResults

  const { SearchResult } = optionComponent;

  return (
    <>
        <div className={`${parentClassName}-searchbar-wrapper`}>
          <img className={`${parentClassName}-searchbar-glass`} src="assets/magnifying-glass.png"></img>
          <input className={`${parentClassName}-searchbar-input`} ref={searchBarInput} type="text" onChange={searchBarOnChange}>
          </input>
          {!searchResults.length ? null :
            <DropDownSelect
              parentClassName={parentClassName}
              optionComponent={searchResults.map(searchResult =>
                <SearchResult
                  key={`${parentClassName}-dropdown-option-${searchResult.value}`}
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