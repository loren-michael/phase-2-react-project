import React from 'react';
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <div className="navbar" id="navbar">
            <li>
                <NavLink to="/" >Home</NavLink>
            </li>
            <li>
                <NavLink to="/recipeform" >Add New Recipe</NavLink>
            </li>
        </div>
    )
}

export default NavBar