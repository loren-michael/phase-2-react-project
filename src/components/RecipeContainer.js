import React from "react"
import { Card } from "semantic-ui-react";
import RecipeCard from "./RecipeCard"

function RecipeContainer({ recipes, onRecDetails }) {

    // return (
    //     recipes.map((rec) => {
    //         return (
    //             <RecipeCard key={rec.id} recipe={rec} onRecDetails={onRecDetails} />
    //         )
    //     })
    // )
    // const renderRecipes = Object.keys(recipes).map((recipe) => (
    //         <Card.Group>
    //             <RecipeCard key={recipe.id} recipe={recipe} onRecDetails={onRecDetails} />
    //         </Card.Group>
    // ))

    return (
        <div className="ui centered link cards" id="rec-container" >
            {recipes.map((recipe) => {
                return (
                    <RecipeCard key={recipe.id} recipe={recipe} onRecDetails={onRecDetails} />
                )
            })}
        </div>

    )


}

export default RecipeContainer