import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Signup } from './session_form/signup';
import { Login } from './session_form/login';
import { Splash } from './splash/splash';
import { Modal } from './modal/modal'

const App = () => {
    return (
        <div>

            <Routes>
                <Route path="/" element={ <Splash /> }  />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App;