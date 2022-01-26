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
    
    for (let i = 0; i < listings.length; i++) {
        let currentListing = listings[i];
        let currentListingId = listingIds[i];
        let flag = false;
       
        for (let j = 0; j < optionsValues.length; j++) {
            let currentOptionValue = optionsValues[j];
            let currentOptionKey = optionsKeys[j];

            if (currentOptionKey === "zipcode") {
                currentOptionValue = parseInt(currentOptionValue);
            }

            if (currentListing[currentOptionKey] === currentOptionValue) {
                flag = true;
            } else if (currentOptionValue === "") {
                continue;
            } else {
                flag = false;
            }
        }
        

        if (flag === true) {
            filteredListings.push(currentListing);
        }
    }
    console.log(filteredListings, "filtered listings");
    return (
        <div>
            here
        </div>
    )
}