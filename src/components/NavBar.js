import React from 'react';
// import { Router } from 'react-router-dom';
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <div className="navbar">
            {/* <Router> */}
                <li>
                    <NavLink to="/" exact >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/recipeform" >Add New Recipe</NavLink>
                </li>
            {/* </Router> */}
        </div>
    )
}

export default NavBar