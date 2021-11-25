import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Signup } from './temp/signup';
import { Login } from './temp/login';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App;