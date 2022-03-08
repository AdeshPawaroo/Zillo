import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Splash } from './splash/splash';
import { Navbar } from './nav_bar/navbar';
import { FilteredNavBar } from './listings_index/filtered_navbar.jsx';
import { SellGreeting } from "./sell_page/sell_greeting";
import { SellForm } from './sell_page/sell_form';
import { UserSales } from './user_listings/user_sells';
import { ListingShow } from './listing/listing_show';
import { UserSaves } from "./user_listings/user_saves";
import { Footer } from './footer/footer';
import { ComingSoon } from './coming_soon/coming_soon';
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
                <Route path="/buy" element={<FilteredNavBar />} />
                <Route path="/rent" element={<FilteredNavBar/>} />
                <Route path="/loans" element={<ComingSoon />} />
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