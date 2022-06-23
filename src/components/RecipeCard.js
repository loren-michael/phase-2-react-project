import '../card.css';
import React from 'react';
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

function RecipeCard({ recipe, onRecDetails }) {


    return (
            <Card >
                <Link className="image" to={`/recipes/${recipe.id}`} >
                    <img src={recipe.img} alt={recipe.name} />
                </Link>
                <div className="content" >
                    <Link to={`/recipes/${recipe.id}`} className="header">{recipe.name}</Link>
                </div>
                <div className="content" >
                    <span>
                        {recipe.mealtype}
                    </span>
                    <span className="right floated" >
                        {recipe.favorite ? <p>❤️</p> : <p>🖤</p>}
                    </span>
                </div>
            </Card>
    )

};

export default RecipeCard