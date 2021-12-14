import React from "react";
import { Searchbar } from "./searchbar";

export const Splash = () => {

    return (
        <div className="splash-container">
            <div className="img-container">
                <h1 className='img-slogan'>Change starts here</h1>
                <Searchbar />
            </div>
            
            <br/ >  <br/ >  <br/ >  <br/ >

            <div className="slogan-container">
                <p className="slogan">Whether you're buying, selling or renting, we can help you move forward.</p>
            </div>

            <br/ >  <br/ >  

            <div className="panel-container">
                <div className="buy-panel">                 
                    <img src={window.buy} />
                    <p>
                        Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.
                    </p>
                    <button>Search Homes</button>
                </div>
                <div className="sell-panel">
                    <img src={window.sell} />
                    <p>
                        No matter what path you take to sell your home, we can help you navigate a successful sale.
                    </p>
                    <button className="sell-panel-btn">See your options</button>
                </div>
                <div className="rent-panel">
                    <img src={window.rent} />
                    <p>
                        We're creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.
                    </p>
                    <button>Find rentals</button>
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