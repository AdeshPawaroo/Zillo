import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Splash } from './splash/splash';
import { Navbar } from './nav_bar/navbar';
import { BuyPage } from './buy_page/buy';
import Modal from './modal/modal';

const App = () => {
    return (
        <div>
            <Modal />
            <Navbar />
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/buy" element={<BuyPage />} />
            </Routes>
        </div>
    )
}

export default App;