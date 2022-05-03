import React from 'react'

function Search({ setSearch, setIngSearch }) {

    return (
        <div>
            Search for a recipe: <input type="text" onChange={(e) => setSearch(e.target.value)} />
            <br></br> 
            Search for an ingredient: <input type="text" onChange={(e) => setIngSearch(e.target.value)} />
        </div>
    )
}

export default Search