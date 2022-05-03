import '../App.css';
// import { Card } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Filter from "./Filter";
import Search from "./Search";
import RecipeContainer from "./RecipeContainer"

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/recipes`)
    .then(r => r.json())
    .then(recipes => setRecipes(recipes))
  }, [])

  return (
    <div>
      <NavBar />
      <Search recipes={recipes} />
      <Filter recipes={recipes} />
      <RecipeContainer recipes={recipes} />
    </div>
  );
}

export default App;
