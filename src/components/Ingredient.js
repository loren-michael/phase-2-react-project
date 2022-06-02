import React from 'react';

function Ingredient({ handleIngredients }) {

    return (

        <div className="add-ingredient" id="add-ingredient">
            <input 
                type="text" 
                className="add-ingredient" 
                onChange={handleIngredients}
            />
        </div>
    )
}

export default Ingredient
