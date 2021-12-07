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
                <span onClick={handleHouses}>Your Sales</span>
                <br />
                <span onClick={handleSaved}>Your Saves</span>
                <br />
                <span onClick={handleLogout} className="nav-logout">Sign Out</span>
            </div>
        </div>
    )
}