import React from 'react';
import { FaSearch, FaHome } from 'react-icons/fa'; 

import { PiBuildingOfficeBold } from "react-icons/pi";
const SearchInput = ({ setSearchTerm }) => {
  return (


<div className="input-group mb-3 mt-3 search-bar">
      <div className="input-container">
        <span className="input-icon-left">
          <PiBuildingOfficeBold />
        </span>
        <input
          type="text"
          className="searchInput"
          placeholder="Find an exchange"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="input-icon-right" >
          <FaSearch />
        </span>
      </div>
    </div>
  );
};

export default SearchInput;
