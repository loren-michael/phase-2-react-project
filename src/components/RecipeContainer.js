import React from "react"
import RecipeCard from "./RecipeCard"

function RecipeContainer({ recipes, onRecDetails }) {

    return (
        recipes.map((rec) => {
            return (
                <RecipeCard key={rec.id} recipe={rec} onRecDetails={onRecDetails} />
            )
        })
    )
}

export default RecipeContainer