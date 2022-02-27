import React from "react";
import { useSelector } from "react-redux";
import { Listing } from "../listing/listing";

export const ListingsIndex = (props) => {
    let listings = props.listings;
    let listingIds = props.listingIds;
    
    // if (listings.length === 0) {
    //     listings = props.listingsForView;
    //     listingIds = props.listingsForViewIds
    // }

    if (listings.length === 0) {
        listings = Object.values(useSelector(state => state.entities.listings));
        listingIds = Object.keys(useSelector(state => state.entities.listings));
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