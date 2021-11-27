import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { Link } from "react-router-dom";
import { logout } from "../../actions/session_actions";

export const Navbar = () => {

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(openModal("login"));
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

            {/* LOGO GOES HERE */}

            <div className="navbar-right">
                <Link to="rentals">Manage Rentals</Link>
                <Link to="advertise">Advertise</Link>
                <Link to="/help">Help</Link>
                <button onClick={handleClick}>Sign In</button>
            </div>
        </div>
    )
}