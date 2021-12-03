import React from "react";

export const Listing = (props) => {

    return(
        <div className="listing-item-container">
            <p className="listing-price">
                {props.listing.price}
            </p>
            <p className="listing-stats">
               {props.listing.beds} {" bds "}
               {props.listing.baths} {" ba "}
               {props.listing.sqft} {" sqft -"}
               {props.listing.status} 
            </p>
            <p className="listing-address">
                {props.listing.address}
            </p>
            <p className="listing-realator">
                {props.listing.realator}
            </p>
        </div>
    )
}