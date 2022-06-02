import React, { useEffect, useState } from 'react';

function RecipeForm({ onRecipeSubmit }) {
    const [numIng, setNumIng] = useState([0, 1, 2, 3, 4]);
    const [numInst, setNumInst] = useState([0, 1, 2, 3, 4]);
    const [commArr, setCommArr] = useState([]);
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
        ingredients: [],
        instructions: [],
        comments: commArr
    });

    useEffect(() => {handleIngredientInputs(numIng)}, [numIng]);

    useEffect(() => {handleInstructionInputs(numInst)}, [numInst]);

    function handleIngredientInputs(arr) {
        console.log(arr)
    };

    function handleInstructionInputs(arr) {
        console.log(arr)
    };

    function handleArrayChange(e) {
        const comment = [];
        comment.push(e.target.value)
        setCommArr(comment)
        setNewRecipe({...newRecipe, comments: comment})
    };

    function handleAddIng() {
        const newNum = numIng.length;
        setNumIng([...numIng, newNum], () => {});
    };

    function handleAddInst() {
        const newNum = numInst.length;
        setNumInst([...numInst, newNum], () => {})
    };

    function handleIngredients() {
        const ingElements = document.getElementsByClassName("add-ingredient");
        const convIng = [...ingElements];
        const newIngArr = convIng.filter((ing) => ing.value.length > 0).map((ing) => ing.value)
        console.log(newIngArr);
        setNewRecipe({...newRecipe, ingredients: newIngArr});
    }

    function handleInstructions() {
        const instElements = document.getElementsByClassName("add-instruction");
        const convInst = [...instElements];
        const newInstArr = convInst.filter((inst) => inst.value.length > 0).map((ing) => ing.value);
        console.log(newInstArr);
        setNewRecipe({...newRecipe, instructions: newInstArr});
    }

    function submitRecipe() {
        fetch(`http://localhost:3000/recipes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRecipe)
        },
        )
    }

    return (
        <div id="recipe-form" >
            <div id="add-name" >
                <label>Recipe Title:  </label>
                <input 
                    name="name"
                    placeholder="recipe name" 
                    value={newRecipe.name} 
                    onChange={e => setNewRecipe({...newRecipe, name: e.target.value})}
                />
            </div>
            <div id="add-image" >
                <label>Image URL:  </label>
                <input 
                    placeholder="image URL"
                    name="img"
                    value={newRecipe.img}
                    onChange={e => setNewRecipe({...newRecipe, img: e.target.value})}
                />
            </div>
            <div id="add-author" >
                <label>Author:  </label>
                <input
                    placeholder="author's name"
                    name="author" 
                    value={newRecipe.author}
                    onChange={e => setNewRecipe({...newRecipe, author: e.target.value})}
                />
            </div>
            <div id="add-source" >
                <label>Source Website:  </label>
                <input 
                    placeholder="link to original recipe"
                    name="source" 
                    value={newRecipe.source}
                    onChange={e => setNewRecipe({...newRecipe, source: e.target.value})}
                />
            </div>
            <div id="add-mealtype" >
                <label>Meal Type:  </label>
                <select name="mealtype" value={newRecipe.mealtype} onChange={e => setNewRecipe({...newRecipe, mealtype: e.target.value})} >
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
                    onChange={e => setNewRecipe({...newRecipe, preptime: e.target.value})} 
                />
            </div>
            <div id="add-cooktime" >
                <label>Cook time:  </label>
                <input 
                    placeholder="cook time"
                    name="cooktime"
                    value={newRecipe.cooktime}
                    onChange={e => setNewRecipe({...newRecipe, cooktime: e.target.value})} 
                />
            </div>
            <div id="add-servings" >
                <label>Servings:  </label>
                <input 
                    placeholder="number of servings"
                    name="servings"
                    value={newRecipe.servings}
                    onChange={e => setNewRecipe({...newRecipe, servings: e.target.value})} 
                />
            </div>
            <br></br>
            <div id="ingredients" >
                <label>Ingredients:  </label>
                <br></br>
                {numIng.map((num) => {
                    return (
                        <div>
                            <input type="text" key={num} className="add-ingredient" onChange={handleIngredients}></input>
                        </div>
                    )
                })}
                <br></br>
                <button type="button" id="btn-add-ingredient" onClick={handleAddIng} > Add Ingredient </button>
            </div>
            <br></br>
            <div id="instructions" >
                <label>Instructions:  </label>
                <br></br>
                {numInst.map((num) => {
                    return (
                        <div>
                            <input type="text" key={num} className="add-instruction" onChange={handleInstructions}></input>
                        </div>
                    )
                })}
                <br></br>
                <button type="button" id="btn-add-instructions" onClick={handleAddInst} > Add Instruction </button>
            </div>
            <br></br>
            <div id="init-comm" >
                <label>Comment:  </label>
                <input 
                    type="text"
                    // name="init-comm"
                    // value={newRecipe.comments}
                    onChange={handleArrayChange}
                    placeholder="leave a comment"
                />
            </div>
            <br></br>
            <div>
                {/* <button type="submit" onClick={submitRecipe} > Submit this recipe! </button> */}
            </div>
        </div>
    )
};

export default RecipeForm
