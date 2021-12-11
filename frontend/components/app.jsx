import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Splash } from './splash/splash';
import { Navbar } from './nav_bar/navbar';
import { BuyPage } from './buy_page/buy';
import { SellForm } from './sell_page/sell_form';
import { UserListings } from './listing/user_listings';
import { ListingShow } from './listing/listing_show';
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
                <Route path="/user/listings" element={<UserListings />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App;