import React, { useState } from 'react';

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="">
      <input
        type="search"
        placeholder="Search for terms"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </div>
  )
}

export default Search;