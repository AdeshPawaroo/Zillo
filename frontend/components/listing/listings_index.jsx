import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { fetchListings } from "../../actions/listing_actions";
import { fetchSaves } from "../../actions/save_actions";
import { Listing } from "./listing";

export const ListingsIndex = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchListings());
    }, []);

    useEffect(() => {
        dispatch(fetchSaves());
    }, []);

    const saves = Object.values(useSelector(state => state.entities.saves));
    const listings = Object.values(useSelector(state => state.entities.listings));
    const listingIds = Object.keys(listings);

    return (
        <div className="listings-index">
            {listings.map((listing, i) => (
                <Listing 
                    key={i} 
                    listing={listing} 
                    listingId={listingIds[i]}
                    saves={saves}
                />
            ))}
        </div>
    )

}