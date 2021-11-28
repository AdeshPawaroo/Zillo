import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";

export const Navbar = () => {

    const dispatch = useDispatch();
    const currUser = useSelector(state => state.session.currentUser);

    const handleRender = () => {
        if (currUser) {
            return (
                <span onClick={handleLogout}>Logout</span>
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
                {handleRender()}
            </div>
        </div>
    )
}