import React from "react";
import { Searchbar } from "./searchbar";

export const Splash = () => {
    const handleBuy = (e) => {
        e.preventDefault();
        window.location = "/#/buy"
    }

    const handleRent = (e) => {
        e.preventDefault();
        window.location = "/#/rent"
    }

    const handleSell = (e) => {
        e.preventDefault();
        window.location = "/#/sell/greeting"
    }

    return (
        <div className="splash-container">
            <div className="img-container">
                <h1 className='img-slogan'>
                    Change starts here
                <br />
                <br />
                    Find your place with Zillo
                </h1>
            </div>
            
            <br/ >  <br/ >  <br/ >  <br/ >

            <div className="slogan-container">
                <p className="slogan">Whether you're buying, selling or renting, we can help you move forward.</p>
            </div>

            <br/ >  <br/ >  

            <div className="panel-container">
                <div className="buy-panel" onClick={handleBuy}>                 
                    <img src={window.buy} />
                    <p>
                        Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.
                    </p>
                    <button onClick={handleBuy}>Search Homes</button>
                </div>
                <div className="sell-panel" onClick={handleSell}>
                    <img src={window.sell} />
                    <p>
                        No matter what path you take to sell your home, we can help you navigate a successful sale.
                    </p>
                    {/* <button className="sell-panel-btn">See your options</button> */}
                    <button onClick={handleSell}>See your options</button>
                </div>
                <div className="rent-panel" onClick={handleRent}>
                    <img src={window.rent} />
                    <p>
                        We're creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.
                    </p>
                    <button onClick={handleRent}>Find rentals</button>
                </div>
            </div>

            <br/ >  <br/ >  <br/ >  <br/ >

            <div className="splash-desc">
                <div className="socials">

                </div>
            </div>

            <br/ >  <br/ >  <br/ >  <br/ >
        </div>
    ) 
}