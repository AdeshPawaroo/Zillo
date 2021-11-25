import React from "react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { login, logout } from "../../actions/session_actions";

export const Login = () => {
  
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
    const { email, password } = user;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(user => ({ ...user, [name]: value  }));
    }

    const handleLogout = () => {
        dispatch(logout());
    }
    
    const handleSubmit = () => {
        dispatch(login(user));
        console.log("Success");
    }

    return (
        <div className="login-conatiner">
            <h2>Login</h2>
            <form className="login">
                <label>Email:</label>
                <input type="text" className="email-login-input" name="email" value={email} onChange={handleChange} />
            
                <label>Password:</label> 
                <input type="password" className="password-login-input" name="password" value={password} onChange={handleChange}/>

                <button className="login-submit" onClick={handleSubmit}>Login!</button>

                < br />
                < br />

                <button className='logout-btn' onClick={handleLogout}>Logout!</button>
            </form>
        </div>
    )
}