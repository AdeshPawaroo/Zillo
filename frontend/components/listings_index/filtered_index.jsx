import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";
import { fetchSaves } from "../../actions/save_actions";
import { BuyMap } from "../map/buy_map";

export const FilteredIndex = (props) => {
    const dispatch = useDispatch();
    const optionValues = Object.values(props.options);
    const optionKeys = Object.keys(props.options);
    const allListings = Object.values(useSelector(state => state.entities.listings));
    const allListingsIds = Object.keys(useSelector(state => state.entities.listings));
    let listings = []; 
    let listingsIds = [];
    const currentLocationHash = window.location.hash;

    useEffect(() => {
        dispatch(fetchListings());
    }, []);

    useEffect(() => {
        dispatch(fetchSaves());
    }, []);

    //handles filtering
    if (listings.length === 0) {
        for (let i = 0; i < allListings.length; i++) {
            let listing = allListings[i];
            let id = allListingsIds[i];
            for (let j = 0; j < optionValues.length; j++) {
                let value = optionValues[j];
                let key = optionKeys[j];
                if (value === '') {
                    continue;
                }else if (key === "zipcode" || key === "beds" || key === "baths") {
                    if (listing[key] === parseInt(value)) {
                        listings.push(listing);
                        listingsIds.push(id);
                    }
                }else if (listing[key] === value) {
                    listings.push(listing);
                    listingsIds.push(id);
                }
            }
        }
    }else {
        for (let a = 0; a < listings.length; a++) {
            let listing = listings[a];
            let id = listingsIds[a];
            for (let b = 0; b < optionValues.length; b++) {
                let value = optionValues[b];
                let key = optionKeys[b];
                if (value === '') {
                    continue;
                }else if (key === "zipcode" || key === "beds" || key === "baths") {
                    if (listing[key] !== parseInt(value)) {
                        listings.splice(a, 1);
                        listingsIds.splice(a, 1);
                    }
                }else if (listing[key] !== value) {
                    listings.splice(a, 1);
                    listingsIds.splice(a, 1);
                }
            }
        }
    }

    console.log(listings, "filtered");

    return (
        <div className="buy-page-contents">
            <div className="buy-page-left">
                <BuyMap />
            </div>
            <div className="buy-page-right">
                here
            </div>
        </div>
    )
}

 // handles grabbing the correct listings based off the hash
    // if (currentLocationHash === "#/buy") {
    //     for (let i = 0; i < allListings.length; i++) {
    //         if (allListings[i].status === "for sale") {
    //             listings.push(allListings[i]);
    //             listingsIds.push(allListingsIds[i]);
    //         }
    //     }
    // }

    // if (currentLocationHash === "#/rent") {
    //     for (let i = 0; i < allListings.length; i++) {
    //         if (allListings[i].status === "for rent") {
    //             listings.push(allListings[i]);
    //             listingsIds.push(allListingsIds[i]);
    //         }
    //     }
    // }
