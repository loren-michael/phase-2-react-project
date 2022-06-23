import React from "react"
import RecipeCard from "./RecipeCard"

function RecipeContainer({ recipes, onRecDetails }) {


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