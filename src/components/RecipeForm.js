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

    function handleChange(e) {
        setNewRecipe({...newRecipe, [e.target.name]: e.target.value});
        console.log(newRecipe)
    }

    function handleRecipeSubmit(e) {
        e.preventDefailt();

        console.log("Hello from recipe submit")
    }


    return (
        <div id="recipe-form" >
            <Form>
                <Form.Field id="add-name" >
                    <label>Recipe Title:  </label>
                    <input 
                        name="name"
                        required
                        placeholder="recipe name" 
                        value={newRecipe.name} 
                        onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field id="add-image" >
                    <label>Image URL:  </label>
                    <input required placeholder="image URL" name="img" onChange={handleChange} />
                </Form.Field>
                <Form.Field id="add-author" >
                    <label>Author:  </label>
                    <input placeholder="author's name" name="author" onChange={handleChange} />
                </Form.Field>
                <Form.Field id="add-source" >
                    <label>Source Website:  </label>
                    <input placeholder="link to original recipe" name="source" onChange={handleChange} />
                </Form.Field>
                <Form.Field id="add-mealtype" >
                    <label>Meal Type:  </label>
                    <select required name="mealtype" onChange={handleChange} >
                        <option></option>
                        <option>Dinner</option>
                        <option>Lunch</option>
                        <option>Breakfast</option>
                        <option>Snack</option>
                    </select>
                </Form.Field>
                <Form.Field id="add-preptime" >
                    <label>Prep time:  </label>
                    <input placeholder="prep time" name="preptime" onChange={handleChange} />
                </Form.Field>
                <Form.Field id="add-cooktime" >
                    <label>Cook time:  </label>
                    <input placeholder="cook time" name="cooktime" onChange={handleChange} />
                </Form.Field>
                <Form.Field id="add-servings" >
                    <label>Servings:  </label>
                    <input placeholder="number of servings" name="servings" onChange={handleChange} />
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