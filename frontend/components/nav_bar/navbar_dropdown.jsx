import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";

export const NavbarDropdown = (props) => {

    const dispatch = useDispatch();

    const handleHouses = (e) => {
        e.preventDefault();

        window.location = "/#/users/listings"
    }

    const handleSaved = (e) => {
        e.preventDefault();
    }

    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(logout());
    }

    const handleClick = (e) => {
        e.preventDefault();

        document.getElementById("theDropdown").classList.toggle("show");

        window.onclick = function(event) {
            if (!event.target.matches(".dropdown-img")) {
                let dropdowns = document.getElementsByClassName("dropdown-items");
                
                for (let i = 0; i < dropdowns.length; i++) {
                    let opened = dropdowns[i];
    
                    if (opened.classList.contains("show")) {
                        opened.classList.remove("show");
                    }
                }
            }
        }
    }

    return (
        <div className="dropdown-container">
            <img src={window.icon} onClick={handleClick} className="dropdown-img"/>
            <div id="theDropdown" className="dropdown-items">
                <Link to="/user/listings">Your Sales</Link>
                <br />
                <Link to="/user/saves">Your Saves</Link>
                <br />
                <span onClick={handleLogout} className="nav-logout">Sign Out</span>
            </div>
        </div>
    )
}