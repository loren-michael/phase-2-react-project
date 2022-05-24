import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function RecipeDetails({ recipes }) {
    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    // const [favorite, setFavorite] = useState(recipe.favorite);
    const params = useParams();
    // const newRecipe = recipes.filter((rec) => rec.id === parseInt(params.id))


    useEffect(() => {
        const newRecipe = recipes.find((rec) => rec.id === parseInt(params.id));
        // debugger;
        const newIng = newRecipe.ingredients;
        const newInstr = newRecipe.instructions;
        setRecipe(newRecipe);
        setIngredients(newIng);
        setInstructions(newInstr)
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


    return (
        <div className="recipe-details" >
            <img src={recipe.img} alt={recipe.name} className="details-image" />
            <h2 className="center" >{recipe.name}</h2>
            <p className="center" >By {recipe.author}</p>
            {/* <p className="center" onClick={handleFavorite} >{recipe.favorite ? <p>❤️</p> : <p>🖤</p>}</p> */}
            <div className="list" >
                <ul>
                    <h3>Ingredients:</h3>
                    {ingredients.map((ing) => {
                        return <li key={ing}>{ing}</li>
                    })}
                    <br></br>
                </ul>
            <br></br>                
            </div>
            <div className="list" >
                <ul>
                    <h3>Instructions:</h3>
                    {instructions.map((inst) => {
                        return <li key={inst}>{inst}</li>
                    })}
                    <br></br>
                </ul>
            </div>
        </div>
    )
}

export default RecipeDetails