import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

function RecipeDetails({ recipes, setRecipes }) {
    const [recipe, setRecipe] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [comments, setComments] = useState([]);
    const [favorite, setFavorite] = useState(recipe.favorite);
    const params = useParams();


    useEffect(() => {
        const newRecipe = recipes.find((rec) => rec.id === parseInt(params.id));
        const newIng = newRecipe.ingredients;
        const newInstr = newRecipe.instructions;
        const newComm = newRecipe.comments;
        const initialFavorite = newRecipe.favorite
        setRecipe(newRecipe);
        setIngredients(newIng);
        setInstructions(newInstr);
        setFavorite(initialFavorite);
        setComments(newComm);
    }, [])

    function handleFavorite() {
        const newFavorite = !favorite;
        setFavorite(newFavorite);
        console.log(favorite);
        console.log(recipes)
        fetch(`http://localhost:3000/recipes/${recipe.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "favorite": favorite
            })
        })
    };

    function handleNewComment(e) {
        console.log(e.target.value)
    }


    return (
        <div className="recipe-details" >
            <img src={recipe.img} alt={recipe.name} className="details-image" />
            <h2 className="center" >{recipe.name}</h2>
            <p className="center" >By {recipe.author}</p>
            <button className="btn-center" onClick={handleFavorite} >{favorite ? <div>❤️</div> : <div>🖤</div>}</button>
            <div id="list-ing" className="list" >
                <ul>
                    <h3>Ingredients:</h3>
                    {ingredients.map((ing) => {
                        return <li key={ing.index}>{ing}</li>
                    })}
                    <br></br>
                </ul>
            <br></br>                
            </div>
            <div id="list-instr" className="list" >
                <ul>
                    <h3>Instructions:</h3>
                    {instructions.map((inst) => {
                        return <li key={inst.index}>{inst}</li>
                    })}
                    <br></br>
                </ul>
            </div>
            
            <div id="list-comm" className="list" >
                <ul>
                    <h3>Comments:</h3>
                    {comments.length > 0 ? comments.map((comment) => {return <li key={comment}>{comment}</li>}) : <p>No comments yet!</p>}
                </ul>
                <ul>
                    <input id="new-comment" type="textarea" placeholder="leave a comment"></input><button type="submit" onClick={handleNewComment} >Submit</button>
                </ul>
            </div>
        </div>
    )
}

export default RecipeDetails