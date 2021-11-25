import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Signup } from './temp/signup';
import { Login } from './temp/login';
import { Splash } from './splash/splash';

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