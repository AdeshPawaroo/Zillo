import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Splash } from './splash/splash';
import { Navbar } from './nav_bar/navbar';
import { BuyPage } from './buy_page/buy';
import { SellForm } from './sell_page/sell_form';
import { UserSales } from './listing/user_sells';
import { ListingShow } from './listing/listing_show';
import { UserSaves } from "./listing/user_saves";
import { Footer } from './footer/footer';
import Modal from './modal/modal';

const App = () => {
    return (
        <div>
            <Modal />
            <Navbar />
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/buy" element={<BuyPage />} />
                <Route path="/sell" element={<SellForm />} />
                <Route path="/listings/:listingid" element={<ListingShow />} />
                <Route path="/user/listings" element={<UserSales />} />
                <Route path="/user/saves" element={<UserSaves />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;