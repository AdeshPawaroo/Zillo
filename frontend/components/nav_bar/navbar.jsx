import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const dispatch = useDispatch();
   
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(openModal("login"));
    }

    const handleHome = (e) => {
        e.preventDefault();
        
        //refactor this later ?
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
                <Link to="/agent">Portfolio</Link>
            </div>

            <img src={window.logo} className="logo" onClick={handleHome}/>
        
            <div className="navbar-right">
                <span onClick={handleGH}>GitHub</span>
                <span onClick={handleLI}>LinkedIn</span>
                <span onClick={handleAL}>AngelList</span>
                <span onClick={handleClick}>Sign In</span>
                {/* <button onClick={handleClick}>Sign In</button> */}
            </div>
        </div>
    )
}