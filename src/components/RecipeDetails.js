import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function RecipeDetails({ recipes }) {
    const [recipe, setRecipe] = useState({});
    // const [favorite, setFavorite] = useState(recipe.favorite);
    const params = useParams();
    console.log(params)
    
    // const recipe = recipes.find((rec) => rec.id === params.id)
    // console.log(recipe)



    useEffect(() => {
        const newRecipe = recipes.find((rec) => rec.id === parseInt(params.id));
        setRecipe(newRecipe)
    }, [])

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
            <img src={recipe.img} alt={recipe.name} className="details-image" />
            <h2 className="center" >{recipe.name}</h2>
            <p className="center" >By {recipe.author}</p>
            <div className="list" >
                <ul>
                    <h3>Ingredients:</h3>
                    {recipe.ingredients.map((ing) => {
                        return <li key={ing}>{ing}</li>
                    })}
                <br></br>
                </ul>
            <br></br>                
            </div>
            <div className="list" >
                <h3>Instructions:</h3>
                {recipe.instructions.map((inst) => {
                    return <li key={inst}>{inst}</li>
                })}
                <br></br>
            </div>
        </div>
    )
}

export default RecipeDetails