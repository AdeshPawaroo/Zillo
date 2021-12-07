import React from "react";

export const NavbarDropdown = (props) => {

    return (
        <div className="dropdown-container">
            <select className="nav-dropdown" name="nav_dropdown">
                <option>Your houses for sale</option>
                <option>Your saved houses</option>
                <option>Log Out</option>
            </select>
        </div>
    )
}