import React from 'react'

function Search({ setSearch, onSearchChange }) {

    function handleSearchChange(e) {
        const searchInput = e.target.value;
        setSearch(searchInput);
        onSearchChange(searchInput)
    }

    // function handleIngSearchChange(e) {
    //     const ingSearchInput = e.target.value;
    //     setIngSearch(ingSearchInput);
    //     onIngSearchChange(ingSearchInput)
    // }

    return (
        <div className="search">
            Search for a recipe: <input type="text" onChange={handleSearchChange} />
            {/* <br></br> */}
            {/* Search for an ingredient: <input type="text" onChange={handleIngSearchChange} /> */}
        </div>
    )
}

export default Search