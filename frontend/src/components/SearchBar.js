import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-bar-container" onSubmit={handleSubmit}>
      <FaSearch className="search-bar-icon" />
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search endpoints"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
      />
      <button type="submit" style={{ display: 'none' }} />
    </form>
  );
};

export default SearchBar;
