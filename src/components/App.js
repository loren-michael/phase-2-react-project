import '../App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Filter from "./Filter";
import Search from "./Search";
import RecipeContainer from "./RecipeContainer"

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/recipes`)
    .then(r => r.json())
    .then(recipes => setRecipes(recipes))
  }, [])

  const searchFilter = recipes.filter((rec) => rec.name.toLowerCase().includes(search.toLowerCase()))

  console.log(searchFilter)

  // function handleSearch() {
  //   console.log(search)
  // }

  // function handleAddRecipe(newRecipe) {
  //   setRecipes([...recipes, newRecipe])
  // }

  return (
    <div>
      <NavBar />
      <Search recipes={recipes} search={search} setSearch={setSearch} />
      <Filter recipes={recipes} />
      <RecipeContainer recipes={searchFilter} />
    </div>
  );
}

export default App;
