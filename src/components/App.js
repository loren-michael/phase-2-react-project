import '../App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Filter from "./Filter";
import Search from "./Search";
import RecipeContainer from "./RecipeContainer"

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  // const [ingSearch, setIngSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/recipes`)
    .then(r => r.json())
    .then(recipes => setRecipes(recipes))
  }, [])

  const searchFilter = recipes.filter((rec) => rec.name.toLowerCase().includes(search.toLowerCase()))

  // function handleAddRecipe(newRecipe) {
  //   setRecipes([...recipes, newRecipe])
  // }


  // FUTURE IMPLEMENTATION: Ingredient search
  // function filterByIngredients(ingSearch) {
      // if recipe ingredients include ingSearch, return recipe
  // }

  // const ingFilter = searchFilter.filter((recipe) => recipe.ingredients.includes(ingSearch.toLowerCase()))


  return (
    <div>
      <NavBar />
      <Search 
        setSearch={setSearch} 
        // setIngSearch={setIngSearch}
        // filterByIngredients={filterByIngredients}
      />
      <Filter recipes={recipes} />
      <RecipeContainer recipes={searchFilter} />
    </div>
  );
}

export default App;
