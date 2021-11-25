import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../actions/session_actions";

export const Login = () => {

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
            email: _email.current.focus(),
            password: user.password
        });
    }

    const handlePassword = () => {
        _password.current.focus();
        setUser({
            email: user.email,
            password: _password.current.focus()
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(user));

        // can have checks here for displaying whether it was a successful login
        //can have checks here for displaying login errors
    }

    return (
        <div className="login-conatiner">
            <h2>Login</h2>
            <form className="login">
                <label>Email:</label>
                <input type="text" className="email-login-input" value={user.email} onChange={handleEmail} ref={_email} />
            
                <label>Password:</label> 
                <input type="password" className="password-login-input" value={user.password} onChange={handlePassword} ref={_password} />

                <button className="login-submit" onClick={handleSubmit}>Login!</button>
            </form>
        </div>
    )
}