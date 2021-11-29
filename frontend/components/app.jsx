import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Splash } from './splash/splash';
import { Navbar } from './nav_bar/navbar';
import { ListingsIndex } from './listing/listings_index';
import Modal from './modal/modal';

const App = () => {
    return (
        <div>
            <Modal />
            <Navbar />
            <Routes>
                <Route path="/" element={<Splash />}  />
                <Route path="/buy" element={<ListingsIndex />}  />
            </Routes>
        </div>
    )
}

export default App;