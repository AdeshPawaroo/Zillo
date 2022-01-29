import React from "react";
import { Listing } from "./listing";

export const ListingsIndex = (props) => {

    const listings = props.listings;
    const listingIds = props.listingIds;``  

    return (
        <div className="listings-index">
            {listings.map((listing, i) => (
                <Listing 
                    key={i} 
                    listing={listing} 
                    listingId={listingIds[i]}
                />
            ))}
        </div>
    )
}