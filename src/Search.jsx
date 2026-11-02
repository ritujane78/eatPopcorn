import React, { useEffect, useRef, useState } from 'react'
import { useKey } from './useKey';

function Search({query, setQuery}) {
  const searchEl = useRef(null);
  useKey("Enter", () => {
    if(searchEl.current == document.activeElement) {
          return;
        }
        searchEl.current.focus();
        setQuery("");
      });

  return (
    <>
    <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref = {searchEl}
        />
    </>
  )
}

export default Search
