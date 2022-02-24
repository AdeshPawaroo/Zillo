import React from "react";
import { Listing } from "../listing/listing";

export const ListingsIndex = (props) => {
    let listings = props.listings;
    let listingIds = props.listingIds;
    
    if (listings.length === 0) {
        listings = props.listingsForView;
        listingIds = props.listingsForView
    }

    return (
        <div className="listings-index">
            {
                listings.map((listing, i) => (
                    <Listing 
                        key={i}
                        listing={listing}
                        listingId={listingIds[i]}
                    />
                ))
            }
        </div>
    );
}