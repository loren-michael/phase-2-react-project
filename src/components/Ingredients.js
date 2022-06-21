import React from 'react'

function Ingredient({ ingredients }) {


    return (
        <div>
            {ingredients.map((ing) => {
                return <li key={ing}>{ing}</li>
            })}
        </div>
    )
}

export default Ingredient