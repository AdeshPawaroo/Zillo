import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Signup } from './temp/signup';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/signup" element= { <Signup /> } />
            </Routes>
        </div>
    )
}

export default App;