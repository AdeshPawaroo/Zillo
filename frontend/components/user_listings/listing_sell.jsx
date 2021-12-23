import React from "react";

export const ListingSell = (props) => {

    const currentSell = props.currentSell;

    return (
        <div className="sell-item-container">
            <div className="sell-photo"></div>
            <p className="sell-price">
                {currentSell.price}
            </p>
            <p className="sell-stats">
                {currentSell.beds} {" bds "}
                {currentSell.baths} {" ba "}
                {currentSell.sqft} {" sqft -"}
                {currentSell.status} 
            </p>
            <p className="sell-address">
                {currentSell.address}
            </p>
            <p className="sell-realator">
                {currentSell.realator}
            </p>
        </div>
    )
}