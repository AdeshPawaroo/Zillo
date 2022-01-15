import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { Link } from "react-router-dom";
import { NavbarDropdown } from "./navbar_dropdown";
import { logout } from "../../actions/session_actions";

export const Navbar = () => {

    const dispatch = useDispatch();
    const currUser = useSelector(state => state.session.currentUser);

    const handleRender = () => {
        if (currUser) {
            return (
                <NavbarDropdown />
            )
        }else {
            return (
                <span onClick={handleClick}>Sign In</span>
            )
        }
    }

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout())
    }
   
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(openModal("login"));
    }

    const handleHome = (e) => {
        e.preventDefault();
        
        window.location = "/";
    }   

    //socials
    const handleGH = () => {
        window.location = "https://github.com/AdeshPawaroo/Zillo";
    }

    const handleLI = () => {
        window.location = "https://www.linkedin.com/in/adesh-pawaroo-997394226/";
    }

    const handleAL = () => {
        window.location = "https://angel.co/u/adesh-pawaroo";
    }

    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <Link to="/buy">Buy</Link>
                <Link to="/rent">Rent</Link>
                <Link to="/sell">Sell</Link>
                <Link to="/loans">Home Loans</Link>
                <Link to="/agent">Portfolio Site</Link>
            </div>

            <img src={window.logo} className="logo" onClick={handleHome}/>
        
            <div className="navbar-right">
                <span onClick={handleGH}>GitHub</span>
                <span onClick={handleLI}>LinkedIn</span>
                <span onClick={handleAL}>AngelList</span>
                {handleRender()}
            </div>
        </div>
    )
}