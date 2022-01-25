import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";
import { fetchSaves } from "../../actions/save_actions";
// import { Listing } from "./listing";

export const FilteredIndex = (props) => {
    const dispatch = useDispatch();
    const optionsValues = Object.values(props.options);
    const optionsKeys = Object.keys(props.options);
    const listings = Object.values(useSelector(state => state.entities.listings));
    const listingIds = Object.keys(useSelector(state => state.entities.listings));
    const filteredListings = [];
    const filteredListingsIds = [];

    useEffect(() => {
        dispatch(fetchListings());
    }, []);

    useEffect(() => {
        dispatch(fetchSaves());
    }, []);

    for (let i = 0; i < optionsValues.length; i++) {
        let currentOptionValue = optionsValues[i];
        let currentOptionKey = optionsKeys[i];

        for (let j = 0; j < listings.length; j++) {
            let currentListing = listings[i];
            let currentListingId = listingIds[i];

            if () {

            }

            console.log(currentOptionValue, "value");
            console.log(currentOptionKey, "key");
            console.log(currentListing, "listing");
            console.log(currentListingId, "listing id");
        }
    }

    return (
        <div>
            here
        </div>
    )
}