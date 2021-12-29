import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";
import { fetchSaves } from "../../actions/save_actions";
import { Listing } from "./listing";

export const ListingsForRent = () => {

    const dispatch = useDispatch();
    const listings = Object.values(useSelector(state => state.entities.listings));
    const listingIds = Object.keys(useSelector(state => state.entities.listings));
    const listingsForRent = [];
    const listingsForRentIds = [];

    useEffect(() => {
        dispatch(fetchListings());
    }, []);

    useEffect(() => {
        dispatch(fetchSaves());
    }, [])

    for (let i = 0; i < listings.length; i++) {
        let currentListing = listings[i];

        if (currentListing.status === "for rent") {
            listingsForRent.push(currentListing);
            listingsForRentIds.push(listingIds[i]);
        }
    }

    return (
        <div className="listings-index">
            {listingsForRent.map((listing, i) => (
                <Listing 
                    key={i}
                    listing={listing}
                    listingId={listingsForRentIds[i]}
                />
            ))}
        </div>
    )
}