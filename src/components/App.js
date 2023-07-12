import '../App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import RecipeForm from "./RecipeForm";
import RecipeDetails from "./RecipeDetails";
import ClickMe from "./clickme"

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  // const [ingSearch, setIngSearch] = useState("");
  const [mealFilter, setMealFilter] = useState("All");
  const [displayRecipes, setDisplayRecipes] = useState([]);


  function handleAddRecipe() {
    fetch(`http://localhost:3000/recipes`)
    .then(r => r.json())
    .then(recipes => {
      setRecipes(recipes);
      setDisplayRecipes(recipes)
    });
  }

  useEffect(() => {
    fetch(`http://localhost:3000/recipes`)
    .then(r => r.json())
    .then(recipes => {
      setRecipes(recipes);
      setDisplayRecipes(recipes)
    });
  }, [])

  const searchFilter = recipes.filter((rec) => rec.name.toLowerCase().includes(search.toLowerCase()))

  // const ingFilter = searchFilter.filter((rec) => rec.ingredients.filter((ing) => ing.toLowerCase().includes(ingSearch.toLowerCase())))

  function handleSearchChange() {
    const searchFilter = recipes.filter((rec) => rec.name.toLowerCase().includes(search.toLowerCase()));
    setDisplayRecipes(searchFilter)
  }

  // function handleIngSearchChange() {
  //   const ingSearchFilter = searchFilter.filter((rec) => rec.ingredients.filter((ing) => ing.toLowerCase().includes(ingSearch)));
  //   setDisplayRecipes(ingSearchFilter)
  // }

  function handleFilterChange(mealSelection) {
    if (mealSelection !== "All") {
      const mealFilterArray = searchFilter.filter((rec) => rec.mealtype === mealSelection);
      setDisplayRecipes(mealFilterArray)
    } else {
      setDisplayRecipes(searchFilter)
    }
  }




  return (
    <div>
      {/* <ClickMe /> */}
        <NavBar /> 
        <Routes>
          <Route path="/recipeform" element={<RecipeForm handleAddRecipe={handleAddRecipe} />} />
          <Route 
            path={"/recipes/:id"} 
            element={<RecipeDetails 
                        recipes={recipes} 
                        setRecipes={setRecipes}
                        setDisplayRecipes={setDisplayRecipes}
                      />}
          />
          <Route 
            exact path="/" 
            element={<Home 
              recipes={displayRecipes} 
              setSearch={setSearch}
              onSearchChange={handleSearchChange}
              mealFilter={mealFilter}
              setMealFilter={setMealFilter}
              onFilterChange={handleFilterChange}
              // onRecDetails={handleRecDetails}
              // setIngSearch={setIngSearch}
              // onIngSearchChange={handleIngSearchChange}
            />} />
        </Routes>
    </div>
  );

}


export default App;