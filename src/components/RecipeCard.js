import React from 'react';
import { Card } from "semantic-ui-react";

function RecipeCard({ recipe }) {
    return (
        <Card>
            <h4>{recipe.name}</h4>
        </Card>
    )
}

export default RecipeCard