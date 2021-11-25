import React from "react";
import { useState, useEffect, useRef  } from "react";
import { useDispatch, useSelector } from "react-redux";

import { signup } from "../../actions/session_actions";

export const Signup = () => {
    
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
    const _email = useRef(null);
    const _password = useRef(null);

    const handleEmail = () => {
        _email.current.focus();
        setUser({
            email: _email.current.value,
            password: user.password
        });
    }

    const handlePassword = () => {
        _password.current.focus();
        setUser({
            email: user.email,
            password: _password.current.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(user));
    }
    
    return (
        <div className="signup-container">
            <h2>Register</h2>
            <form className="signup">
                <label>Email:</label>
                <input type="text" className="email-signup-input" value={user.email} onChange={handleEmail} ref={_email} placeholder="Please enter your email" />

                <label>Password:</label>
                <input type="text" className="password-signup-input" value={user.password} onChange={handlePassword} ref={_password} placeholder="Please enter your password" />

                <button className="signup-submit" onClick={handleSubmit}>Signup!</button>
            </form>
        </div>
    )
}