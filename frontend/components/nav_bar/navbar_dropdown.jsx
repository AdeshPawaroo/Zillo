import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/session_actions";

export const NavbarDropdown = (props) => {

    const dispatch = useDispatch();

    const handleHouses = (e) => {
        e.preventDefault();
    }

    const handleSaved = (e) => {
        e.preventDefault();
    }

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    return (
        <div className="dropdown-container">
            <select className="nav-dropdown" name="nav_dropdown">
                <option>Your houses for sale</option>
                <option>Your saved houses</option>
                <option onClick={handleLogout}>Log Out</option>
            </select>
        </div>
    )
}