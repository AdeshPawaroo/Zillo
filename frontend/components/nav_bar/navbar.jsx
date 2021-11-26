import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../actions/modal_actions";
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
        <div>
            <button onClick={handleClick}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}