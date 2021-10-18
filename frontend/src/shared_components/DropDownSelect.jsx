import React from 'react';
import ReactDom from 'react-dom';
import API from '../API_call_functions.js';
import onClick from '../onClickHandlers.js'

const DropDownSelect = ({ parentClassName, optionComponent, dropdownFuncs }) => {

    return (
      <div className={`${parentClassName}-dropdown-modal-wrapper`}>
        <div className={`${parentClassName}-dropdown-modal-content`}>
          <ul className="modal-unordered-lists">
            {optionComponent}
          </ul>
        </div>
      </div>
    )
}

export default DropDownSelect;