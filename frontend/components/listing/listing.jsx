import React from "react";
import { ListingShow } from "./listing_show";

export const Listing = (props) => {

    console.log(props);

    return(
        <div className="listing-item-container" onClick={() => window.location = `/#/listings/${props.listingId}`}>
            <div className="listing-photo"></div>
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



// onClick={() => window.location = `/#/listings/${props.listingId}`}