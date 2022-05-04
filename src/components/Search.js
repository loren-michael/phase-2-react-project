import React from 'react'

function Search({ setSearch, onSearchChange }) {

    function handleSearchChange(e) {
        const searchInput = e.target.value;
        setSearch(searchInput);
        onSearchChange(searchInput)
    }

    return (
        <div>
            Search for a recipe: <input type="text" onChange={handleSearchChange} />
        </div>
    )
}

export default Search