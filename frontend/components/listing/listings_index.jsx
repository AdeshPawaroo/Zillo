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

    return (
        <div className="listings-index">
            {listings.map((listing, i) => (
                <Listing listing={listing} key={i} />
            ))}
        </div>
    )

}