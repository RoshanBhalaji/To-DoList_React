import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchItem = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value); // Update the search state with the input value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any search-related actions if needed on form submission
  };

  return (
    <form className='searchForm' onSubmit={handleSubmit}>
      <label htmlFor='search' style={{ display: 'none' }}>Search</label>
      <input
        id='search'
        type="text"
        role='searchbox'
        placeholder='Search Items'
        value={search} // Controlled input value set to search state
        onChange={handleSearch} // On change, update the search state
      />
      <button type="submit" aria-label="Search">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchItem;
