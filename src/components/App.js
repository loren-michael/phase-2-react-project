import '../App.css';
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from 'react-router-dom';
import NavBar from "./NavBar";
import Home from "./Home";
import RecipeForm from "./RecipeForm";
import RecipeDetails from "./RecipeDetails";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [mealFilter, setMealFilter] = useState("All");
  const [displayRecipes, setDisplayRecipes] = useState([]);
  const params = useParams();
console.log(params)


  useEffect(() => {
    fetch(`http://localhost:3000/recipes`)
    .then(r => r.json())
    .then(recipes => {
      setRecipes(recipes);
      setDisplayRecipes(recipes)
    });
  }, [])

  const searchFilter = recipes.filter((rec) => rec.name.toLowerCase().includes(search.toLowerCase()))

  function handleSearchChange() {
    const searchFilter = recipes.filter((rec) => rec.name.toLowerCase().includes(search.toLowerCase()));
    setDisplayRecipes(searchFilter)
  }

  function handleFilterChange(mealSelection) {
    if (mealSelection !== "All") {
      const mealFilterArray = searchFilter.filter((rec) => rec.mealtype === mealSelection);
      setDisplayRecipes(mealFilterArray)
    } else {
      setDisplayRecipes(searchFilter)
    }
  }

  function handleRecDetails(id) {
    console.log(id)
  }

  // function handleAddRecipe(newRecipe) {
  //   setRecipes([...recipes, newRecipe])
  // }


  return (
    <div>
        <NavBar /> 
        <Routes>
          <Route path="/recipeform" element={<RecipeForm />} />
          <Route exact path={`/${params}`} element={<RecipeDetails recId={params} />} />
          <Route 
            exact path="/" 
            element={<Home 
              recipes={displayRecipes} 
              setSearch={setSearch}
              onSearchChange={handleSearchChange}
              mealFilter={mealFilter}
              setMealFilter={setMealFilter}
              onFilterChange={handleFilterChange}
              onRecDetails={handleRecDetails}
            />} />
        </Routes>
    </div>
  );

}


export default App;