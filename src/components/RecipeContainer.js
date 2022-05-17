import React from "react"
import RecipeCard from "./RecipeCard"

function RecipeContainer({ recipes, onRecDetails }) {

    // return (
    //     recipes.map((rec) => {
    //         return (
    //             <RecipeCard key={rec.id} recipe={rec} onRecDetails={onRecDetails} />
    //         )
    //     })
    // )
    const renderRecipes = Object.keys(recipes).map((recipeId) => (
        <RecipeCard key={recipeId} recipe={recipeId} onRecDetails={onRecDetails} />
    ))

    return (
        <ul>{renderRecipes}</ul>
    )


}

export default RecipeContainer