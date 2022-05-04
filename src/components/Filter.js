import React from 'react'

function Filter({ setMealFilter, onFilterChange, mealFilter }) {

    function handleFilterChange(e) {
        const mealSelection = e.target.value;
        setMealFilter(mealSelection);
        onFilterChange(mealSelection)
    }

    return (
        <div> Select a meal: <select name="mealtype" id="mealtype" onChange={handleFilterChange} >
                <option value="All">All</option>
                <option value="Dinner">Dinner</option>
                <option value="Lunch">Lunch</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Snack">Snack</option>
            </select>
        </div>
    )
}

export default Filter