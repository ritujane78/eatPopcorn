import React, { useEffect, useRef, useState } from 'react'

function Search({query, setQuery}) {
  const searchEl = useRef(null);

  useEffect(() => {
    const callback = (e) => {
      if(searchEl.current == document.activeElement) {
        return;
      }
      if(e.code === "Enter"){
        searchEl.current.focus();
        setQuery("");
      }
    }
    document.addEventListener("keydown", callback);
    return () => {
      document.removeEventListener("keydown", callback);
    }
  }, [setQuery]);

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
