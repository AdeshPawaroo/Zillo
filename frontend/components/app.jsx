import React from 'react';
import { Route, Routes } from 'react-router-dom';

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
            </Routes>
        </div>
    )
}

export default App;