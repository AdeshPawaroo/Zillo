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
                    <div className="buy-img"></div>
                    <p>
                        Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.
                    </p>
                    <button>Search Homes</button>
                </div>
                <div className="sell-panel">
                    <div className="sell-img"></div>
                    <p>
                        No matter what path you take to sell your home, we can help you navigate a successful sale.
                    </p>
                    <button>See your options</button>
                </div>
                <div className="rent-panel">
                    <div className="rent-img"></div>
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

            <div className="footer-container">
                <div className="footer"></div>
            </div>

        </div>
    ) 
}