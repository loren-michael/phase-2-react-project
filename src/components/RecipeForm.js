import React, { useState } from 'react';

function RecipeForm({ onRecipeSubmit }) {
    const [instArr, setInstArr] = useState([]);
    const [ingArr, setIngArr] = useState([]);
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
        instructions: instArr,
        ingredients: ingArr,
        comments: commArr,
    });

    function handleArrayChange(e) {
        const comment = [];
        comment.push(e.target.value)
        setCommArr(comment)
        setNewRecipe({...newRecipe, comments: comment})
    }

    function handleAddIng(e) {
        const lineBreak = document.createElement("br");
        const newIngBox = document.createElement("input");
        newIngBox.className = "add-ingredient";
        newIngBox.name = "add-ingredient";
        const addButton = e.target.parentNode;
        addButton.insertBefore(newIngBox, e.target);
        addButton.insertBefore(lineBreak, e.target);
    };

    function handleAddIns(e) {
        const lineBreak = document.createElement("br");
        const newInsBox = document.createElement("input");
        newInsBox.className = "add-instruction";
        newInsBox.name = "add-instructions";
        const addButton = e.target.parentNode;
        addButton.insertBefore(newInsBox, e.target);
        addButton.insertBefore(lineBreak, e.target);
    };

    function handleRecipeSubmit(e) {
        e.preventDefault();
        const ingElements = document.getElementsByClassName("add-ingredient");
        // let ingArray = [];
        for (let i = 0; i < ingElements.length; i++) {
            if (ingElements[i].value !== "") {
                const newIng = ingElements[i].value;
                setIngArr([...ingArr, newIng])
            };
        };
        console.log("ing", ingArr)
        debugger;
        // setNewRecipe({...newRecipe, ingredients: ingArray})

        const instElements = document.getElementsByClassName("add-instruction");
        // let instrArray = [];
        for (let i = 0; i < instElements.length; i++) {
            if (instElements[i].value !== "") {
                const newInst = instElements[i].value;
                setInstArr([...instArr, newInst]);
            };
        };
        console.log("inst", instArr)
        debugger;
        // setNewRecipe({...newRecipe, instructions: instrArray});
        // console.log(newRecipe)

        const initComm = document.getElementsByClassName("init-comm");
        if (initComm.value !== "") {
            const newComm = [];
            newComm.push(initComm.value);
            setCommArr([...commArr, newComm]);
        }

        // console.log("ing arr", ingArr, "inst arr",  instArr, "comm arr", commArr)
        // console.log(newRecipe)
        // setNewRecipe({...newRecipe, ingredients: ingArray})
        // setNewRecipe({...newRecipe, instructions: instrArray})
        console.log(newRecipe)
        debugger;
    };


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
            <div id="add-ingredient" >
                <label>Ingredients:  </label>
                <input type="text" className="add-ingredient" />
                <br></br>
                <button type="button" id="btn-add-ingredient" onClick={handleAddIng} > Add Ingredient </button>
            </div>
            <div id="add-instructions" >
                <label>Instructions:  </label>
                <input type="text" className="add-instruction" />
                <br></br>
                <button type="button" id="btn-add-instructions" onClick={handleAddIns} > Add Instruction </button>
            </div>
            <div id="init-comm" >
                <label>Comment:  </label>
                <input 
                    type="text"
                    // name="init-comm"
                    // value={newRecipe.comments}
                    onChange={handleArrayChange}
                    placeholder="leave a note"
                />
            </div>
            <br></br>
            <div>
                <button type="submit" onClick={handleRecipeSubmit} > Submit this recipe! </button>
            </div>
        </div>
    )
};

export default RecipeForm