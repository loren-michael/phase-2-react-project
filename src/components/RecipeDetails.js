import React, { useState } from 'react'

function RecipeDetails({ recipe }) {
    const [favorite, setFavorite] = useState(recipe.favorite);


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
        <div>RecipeDetails</div>
    )
}

export default RecipeDetails