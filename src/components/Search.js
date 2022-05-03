import React from 'react'

function Search({ setSearch }) {

    return (
        <div>
            Search for a recipe: <input type="text" onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}

export default Search