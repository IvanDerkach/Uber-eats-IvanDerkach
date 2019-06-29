import React from 'react';
import './Search.css';

export function Search() {
  return (
  <div className="search_wrapper">
    <label className="search__label">
      <input type="text" className="search" placeholder="Search for restaurant or cuisine"/>
    </label>
  </div>
  )
};