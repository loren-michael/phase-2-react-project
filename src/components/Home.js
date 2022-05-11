import React from 'react';
import Search from "./Search";
import Filter from "./Filter";
import RecipeContainer from "./RecipeContainer";

function Home({ recipes, setSearch, onSearchChange, mealFilter, setMealFilter, onFilterChange, onRecDetails }) {
    return (
        <div>
            <Search setSearch={setSearch} onSearchChange={onSearchChange} />
            <Filter mealFilter={mealFilter} setMealFilter={setMealFilter} onFilterChange={onFilterChange} />
            <RecipeContainer recipes={recipes} onRecDetails={onRecDetails} />
        </div>
    )
}

export default Home