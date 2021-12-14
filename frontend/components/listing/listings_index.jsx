import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { fetchListings } from "../../actions/listing_actions";
import { Listing } from "./listing";

export const ListingsIndex = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchListings());
    }, []);

    const _listings = useSelector(state => state.entities.listings);
    const listings = Object.values(_listings);
    const listingIds = Object.keys(_listings);

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