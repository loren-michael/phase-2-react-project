import React, { useState } from 'react';

function RecipeForm({ onRecipeSubmit }) {
    const [newRecipe, setNewRecipe] = useState({
        img: "",
        video: "",
        name: "",
        source: "",
        author: "",
        mealtype: "",
        preptime: "",
        cooktime: "",
        servings: "",
        instructions: [],
        ingredients: [],
        comments: [],
    })

    function handleChange(e) {
        setNewRecipe({...newRecipe, [e.target.name]: e.target.value});
        console.log(newRecipe)
    }

    function handleAddIng(e) {
        const lineBreak = document.createElement("br");
        const newIngBox = document.createElement("input");
        newIngBox.className = "add-ingredient";
        newIngBox.name = "add-ingredient";
        const addButton = e.target.parentNode;
        addButton.insertBefore(newIngBox, e.target);
        addButton.insertBefore(lineBreak, e.target);
    }

    function handleAddIns(e) {
        const lineBreak = document.createElement("br");
        const newInsBox = document.createElement("input");
        newInsBox.className = "add-instructions";
        newInsBox.name = "add-instructions";
        const addButton = e.target.parentNode;
        addButton.insertBefore(newInsBox, e.target);
        addButton.insertBefore(lineBreak, e.target);
    }

    function handleRecipeSubmit(e) {
        e.preventDefault();
        console.log(newRecipe)
    }


    return (
        <div id="recipe-form" >
            <div id="add-name" >
                <label>Recipe Title:  </label>
                <input 
                    name="name"
                    placeholder="recipe name" 
                    value={newRecipe.name} 
                    onChange={handleChange}
                />
            </div>
            <div id="add-image" >
                <label>Image URL:  </label>
                <input 
                    placeholder="image URL"
                    name="img"
                    value={newRecipe.img}
                    onChange={handleChange}
                />
            </div>
            <div id="add-author" >
                <label>Author:  </label>
                <input
                    placeholder="author's name"
                    name="author" 
                    value={newRecipe.author}
                    onChange={handleChange}
                />
            </div>
            <div id="add-source" >
                <label>Source Website:  </label>
                <input 
                    placeholder="link to original recipe"
                    name="source" 
                    value={newRecipe.source}
                    onChange={handleChange}
                />
            </div>
            <div id="add-mealtype" >
                <label>Meal Type:  </label>
                <select name="mealtype" value={newRecipe.mealtype} onChange={handleChange} >
                    <option></option>
                    <option>Dinner</option>
                    <option>Lunch</option>
                    <option>Breakfast</option>
                    <option>Snack</option>
                </select>
            </div>
            <div id="add-preptime" >
                <label>Prep time:  </label>
                <input
                    placeholder="prep time"
                    name="preptime"
                    value={newRecipe.preptime}
                    onChange={handleChange} 
                />
            </div>
            <div id="add-cooktime" >
                <label>Cook time:  </label>
                <input 
                    placeholder="cook time"
                    name="cooktime"
                    value={newRecipe.cooktime}
                    onChange={handleChange} 
                />
            </div>
            <div id="add-servings" >
                <label>Servings:  </label>
                <input 
                    placeholder="number of servings"
                    name="servings"
                    value={newRecipe.servings}
                    onChange={handleChange} 
                />
            </div>
            <div id="add-ingredient" >
                <label>Ingredients:  </label>
                <input type="text" />
                <br></br>
                <button type="button" id="btn-add-ingredient" onClick={handleAddIng} > Add Ingredient </button>
            </div>
            <div id="add-instructions" >
                <label>Instructions:  </label>
                <input type="text" />
                <br></br>
                <button type="button" id="btn-add-instructions" onClick={handleAddIns} > Add Instruction </button>
            </div>
            <div id="init-comm" >
                <label>Comment:  </label>
                <input placeholder="leave a note" />
            </div>
            <br></br>
            <div>
                <button type="submit" onSubmit={handleRecipeSubmit} > Submit this recipe! </button>
            </div>
        </div>
    )
}

export default RecipeForm