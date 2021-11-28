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
        window.location = "/"
    }   

    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <Link to="/buy">Buy</Link>
                <Link to="/rent">Rent</Link>
                <Link to="/sell">Sell</Link>
                <Link to="/loans">Home Loans</Link>
                <Link to="/agent">Agent Finder</Link>
            </div>

            <img src={window.logo} className="logo" onClick={handleHome}/>
        
            <div className="navbar-right">
                <Link to="rentals">Manage Rentals</Link>
                <Link to="advertise">Advertise</Link>
                <Link to="/help">Help</Link>
                <span onClick={handleClick}>Sign In</span>
                {/* <button onClick={handleClick}>Sign In</button> */}
            </div>
        </div>
    )
}