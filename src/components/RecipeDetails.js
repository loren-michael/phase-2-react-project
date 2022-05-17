import React, { useState } from 'react'

function RecipeDetails({ recipe, recId }) {
    const [recDetails, setRecDetails] = useState(recipe);
    const [favorite, setFavorite] = useState(recipe.favorite);
    console.log(recId)

    // function handleFavorite() {
    //     const newFavorite = !favorite;
    //     setFavorite(newFavorite);
    //     console.log(favorite);
    //     fetch(`http://localhost:3000/recipes/${recipe.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             "favorite": favorite
    //         })
    //     })
    //     .then(r => r.json())
    //     // .then(console.log(recipe.favorite))
    // };

    return (
        <div className="recipe-details" >
            <h2>Recipe details</h2>
        </div>
    )
}

export default RecipeDetails