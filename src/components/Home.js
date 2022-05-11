import React from 'react';
import Search from "./Search";
import Filter from "./Filter";
import RecipeContainer from "./RecipeContainer";

function Home({ recipes, setSearch, onSearchChange, mealFilter, setMealFilter, onFilterChange }) {
    return (
        <div>
            <Search setSearch={setSearch} onSearchChange={onSearchChange} />
            <Filter mealFilter={mealFilter} setMealFilter={setMealFilter} onFilterChange={onFilterChange} />
            <RecipeContainer recipes={recipes} />
        </div>
    )
}

export default Home