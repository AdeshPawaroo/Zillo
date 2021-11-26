import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Signup } from './session_form/signup';
import { Login } from './session_form/login';
import { Splash } from './splash/splash';
import Modal from './modal/modal';
import { Navbar } from './nav_bar/navbar';

const App = () => {
    return (
        <div>
            <Modal />
            <Navbar />
            <Routes>
                <Route path="/" element={<Splash />}  />
                
                {/* <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} /> */}
            </Routes>
        </div>
    )
}

export default App;