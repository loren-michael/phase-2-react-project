import React, { useState, useEffect } from 'react'

function RecipeDetails({ recId }) {
    // const [recDetails, setRecDetails] = useState(recipe);
    // const [favorite, setFavorite] = useState(recipe.favorite);
    console.log(recId)

    // useEffect(() => {
    //     fetch(`http://localhost:3000/recipes/${recId}`)
    //     .then(r => r.json())
    //     .then((recipe) =>console.log(recipe))
    // })

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

    // const renderRecipe = () => {
    //     fetch(`http://localhost:3000/recipes/${recId}`)
    //     .then(r => r.json())
    //     .then(recipe => console.log(recipe))
    // }

    return (
        <div className="recipe-details" >
            {recId}
        </div>
    )
}

export default RecipeDetails