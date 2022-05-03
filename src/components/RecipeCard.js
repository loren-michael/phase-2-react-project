import '../card.css';
import React from 'react';
import { Card } from "semantic-ui-react";

function RecipeCard({ recipe }) {

    function handleClick(){
        console.log(recipe.name)
    }

    return (
        <Card className="ui centered card" onClick={handleClick} >
                <div className="image" >
                    <img src={recipe.img} alt={recipe.name} />
                </div>
                <div className="content">
                    <h4 className="header">{recipe.name}</h4>
                </div>
                <div className="content">
                    <span>
                        {recipe.mealtype}
                    </span>
                    <span className="right floated">
                        {recipe.favorite ? <p>❤️</p> : <p>🖤</p>}
                    </span>
                </div>
        </Card>
    )
};

export default RecipeCard