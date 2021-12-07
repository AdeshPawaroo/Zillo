import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Splash } from './splash/splash';
import { Navbar } from './nav_bar/navbar';
import { BuyPage } from './buy_page/buy';
import { SellPage } from './sell_page/sell_page';
import Modal from './modal/modal';

const App = () => {
    return (
        <div>
            <Modal />
            <Navbar />
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/buy" element={<BuyPage />} />
                <Route path="/sell" element={<SellPage />} />
            </Routes>
        </div>
    )
}

export default App;