import React, { useState } from 'react'

function Search() {
    const[searchText, setsearchText]= useState(" ");
    const handleChange = (event) =>{
        setsearchText(event.target.value);
        console.log("searchText", searchText);

    }

  return (
    <div>
        <h2>Search Text</h2>
        <label htmlFor="search">search:</label>
    <input type="text" id='search' onChange={handleChange}/>
    <p> searching for <strong>{searchText}</strong></p>
    </div>
  )
}

export default Search