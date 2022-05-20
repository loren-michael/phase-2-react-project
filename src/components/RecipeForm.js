import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

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

    function handleRecipeSubmit(e) {
        e.preventDefailt();

        console.log("Hello from recipe submit")
    }


    return (
        <div id="recipe-form" >
            <Form>
                <Form.Field id="add-name" >
                    <label>Recipe Title:  </label>
                    <input required placeholder="recipe name" value={newRecipe.name} />
                </Form.Field>
                <Form.Field id="add-image" >
                    <label>Image URL:  </label>
                    <input required placeholder="image URL" value={newRecipe.img} />
                </Form.Field>
                <Form.Field id="add-author" >
                    <label>Author:  </label>
                    <input placeholder="author's name" value={newRecipe.author} />
                </Form.Field>
                <Form.Field id="add-source" >
                    <label>Source Website:  </label>
                    <input placeholder="link to original recipe" value={newRecipe.source} />
                </Form.Field>
                <Form.Field id="add-mealtype" >
                    <label>Meal Type:  </label>
                    <select required value={newRecipe.mealtype} >
                        <option></option>
                        <option>Dinner</option>
                        <option>Lunch</option>
                        <option>Breakfast</option>
                        <option>Snack</option>
                    </select>
                </Form.Field>
                <Form.Field id="add-preptime" >
                    <label>Prep time:  </label>
                    <input placeholder="prep time" value={newRecipe.preptime} />
                </Form.Field>
                <Form.Field id="add-cooktime" >
                    <label>Cook time:  </label>
                    <input placeholder="cook time" value={newRecipe.cooktime} />
                </Form.Field>
                <Form.Field id="add-servings" >
                    <label>Servings:  </label>
                    <input placeholder="number of servings" value={newRecipe.servings} />
                </Form.Field>
                <Form.Field id="add-ingredient" >
                    <label>Ingredients:  </label>
                    <input type="text" />
                    <br></br>
                    <button type="button" id="btn-add-ingredient" > Add Ingredient </button>
                </Form.Field>
                <Form.Field id="add-instructions" >
                    <label>Instructions:  </label>
                    <input type="text" />
                    <br></br>
                    <button type="button" id="btn-add-instructions" > Add Instruction </button>
                </Form.Field>
                <Form.Field id="init-comm" >
                    <label>Comment:  </label>
                    <input placeholder="leave a note" />
                </Form.Field>
                <br></br>
                <Form.Field>
                    <button type="submit" onClick={handleRecipeSubmit} > Submit this recipe! </button>
                </Form.Field>
            </Form>
        </div>
    )
}

export default RecipeForm