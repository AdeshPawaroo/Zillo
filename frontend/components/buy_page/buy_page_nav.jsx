import React from "react";

export const BuyPageNav = (props) => {

    return (
        <div className="buy-nav-container">
            <input type="textarea" 
                className="buy-nav-searchbar"
            />
            <button>For Sale</button>
            <button>Price</button>
            <button>Beds & Baths</button>
            <button>Home Type</button>
        </div>
    )
}