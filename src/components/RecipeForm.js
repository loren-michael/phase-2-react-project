import React from 'react'
import { Form } from 'semantic-ui-react'

function RecipeForm() {
    return (
        <div id="recipe-form" >
            <Form>
                <Form.Field>
                    <label>Recipe Title:  </label>
                    <input required placeholder="recipe name" />
                </Form.Field>
                <Form.Field>
                    <label>Image URL:  </label>
                    <input required placeholder="image URL" />
                </Form.Field>
                <Form.Field>
                    <label>Author:  </label>
                    <input placeholder="author's name" />
                </Form.Field>
                <Form.Field>
                    <label>Source Website:  </label>
                    <input placeholder="link to original recipe" />
                </Form.Field>
                <Form.Field>
                    <label>Meal Type:  </label>
                    <select required>
                        <option></option>
                        <option>Dinner</option>
                        <option>Lunch</option>
                        <option>Breakfast</option>
                        <option>Snack</option>
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Prep time:  </label>
                    <input placeholder="prep time" />
                </Form.Field>
                <Form.Field>
                    <label>Cook time:  </label>
                    <input placeholder="cook time" />
                </Form.Field>
                <Form.Field>
                    <label>Servings:  </label>
                    <input placeholder="number of servings" />
                </Form.Field>
                <Form.Field>
                    <label>Ingredients:  </label>
                    <input/>
                    <br></br>
                    <button type="button" id="btn-add-ingredient" > Add Ingredient </button>
                </Form.Field>
                <Form.Field>
                    <label>Instructions:  </label>
                    <input/>
                    <br></br>
                    <button type="button" id="btn-add-instructions" > Add Instruction </button>
                </Form.Field>
                <Form.Field>
                    <label>Comment:  </label>
                    <input placeholder="leave a note" />
                </Form.Field>
            </Form>
        </div>
    )
}

export default RecipeForm