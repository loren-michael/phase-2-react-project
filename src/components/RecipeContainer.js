import React from "react"
import RecipeCard from "./RecipeCard"

function RecipeContainer({ recipes }) {
    return (
        recipes.map((rec) => {
            return (
                <RecipeCard key={rec.id} recipe={rec} />
            )
        })
    )
}

export default RecipeContainer