import '../App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Filter from "./Filter";
import Search from "./Search";
import RecipeContainer from "./RecipeContainer"

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [ingSearch, setIngSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/recipes`)
    .then(r => r.json())
    .then(recipes => setRecipes(recipes))
  }, [])

  const searchFilter = recipes.filter((rec) => rec.name.toLowerCase().includes(search.toLowerCase()))

  const ingFilter = searchFilter.filter((rec) => rec.ingredients.filter((ing) => ing.includes(ingSearch.toLowerCase())))

  // function handleAddRecipe(newRecipe) {
  //   setRecipes([...recipes, newRecipe])
  // }

  return (
    <div>
      <NavBar />
      <Search 
        setSearch={setSearch} 
        setIngSearch={setIngSearch}
      />
      <Filter recipes={recipes} />
      <RecipeContainer recipes={ingFilter} />
    </div>
  );
}

export default App;
