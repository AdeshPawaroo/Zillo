import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Splash } from './splash/splash';
import { Navbar } from './nav_bar/navbar';
import { BuyPage } from './listings_index/buy';
import { RentPage } from './listings_index/rent';
import { SellGreeting } from "./sell_page/sell_greeting";
import { SellForm } from './sell_page/sell_form';
import { UserSales } from './user_listings/user_sells';
import { ListingShow } from './listing/listing_show';
import { UserSaves } from "./user_listings/user_saves";
import { Footer } from './footer/footer';
import { ScrollToTop } from './scroll/scroll';
import Modal from './modal/modal';

const App = () => {
    return (
        <div>
            <Modal />
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/buy" element={<BuyPage />} />
                <Route path="/rent" element={<RentPage />} />
                <Route path="/sell/greeting" element={<SellGreeting />} />
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