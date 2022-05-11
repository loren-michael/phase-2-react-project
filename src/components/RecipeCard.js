import '../card.css';
import React from 'react';
import { Card } from "semantic-ui-react";

function RecipeCard({ recipe, onRecDetails }) {

    function handleClick(){
        onRecDetails(recipe.id)
    }

    function handleFavorite() {
        console.log(recipe.favorite)
    }

    return (
        <Card className="ui centered card" >
                <div className="image" onClick={handleClick} >
                    <img src={recipe.img} alt={recipe.name} />
                </div>
                <div className="content" onClick={handleClick}>
                    <h4 className="header">{recipe.name}</h4>
                </div>
                <div className="content">
                    <span>
                        {recipe.mealtype}
                    </span>
                    <span className="right floated" onClick={handleFavorite}>
                        {recipe.favorite ? <p>❤️</p> : <p>🖤</p>}
                    </span>
                </div>
        </Card>
    )
};

export default RecipeCard