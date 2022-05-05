import '../App.css';
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./NavBar";
import Filter from "./Filter";
import Search from "./Search";
import RecipeContainer from "./RecipeContainer"
import RecipeForm from "./RecipeForm"
// import RecipeDetails from './RecipeDetails';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [mealFilter, setMealFilter] = useState("All");
  const [displayRecipes, setDisplayRecipes] = useState([]);


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

  // function handleAddRecipe(newRecipe) {
  //   setRecipes([...recipes, newRecipe])
  // }





  return (
    <div>
      <Router>
      <NavBar />
        <Switch>
          <Route path="/recipeform">
            <RecipeForm />
          </Route>
          <Route exact path="/">
            <Search 
              setSearch={setSearch} 
              onSearchChange={handleSearchChange}
            />
            <Filter 
              mealFilter={mealFilter}
              setMealFilter={setMealFilter}
              onFilterChange={handleFilterChange}
            />            
            <RecipeContainer recipes={displayRecipes}/>
          </Route>      
        </Switch>
      </Router>  
    </div>
  );

}


export default App;