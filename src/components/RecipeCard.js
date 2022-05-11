import '../card.css';
import React from 'react';
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

function RecipeCard({ recipe, onRecDetails }) {

    // function handleClick(e) {
    //     // this function will bring us to a details page
    //     console.log(recipe.id);
    //     onRecDetails(e.target.id);
    //     <Link to={`/${recipe.id}`} />
    // };


    return (
        <Card className="ui centered card" >
                <div className="image" >
                    <img src={recipe.img} alt={recipe.name} />
                </div>
                <div className="content" >
                    <Link to={`/${recipe.id}`} className="header">{recipe.name}</Link>
                </div>
                <div className="content">
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