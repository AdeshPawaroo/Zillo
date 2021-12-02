import React from "react";

export const Listing = (props) => {

    return(
        <div className="listing-item-container">
            <p>{props.listing.price}</p>
            <br />
            <p>
               {props.listing.beds} 
               {props.listing.baths} 
               {props.listing.sqft} 
               {props.listing.status} 
            </p>
            <br />
            <p>
                {props.listing.address}
            </p>
        </div>
    )
}