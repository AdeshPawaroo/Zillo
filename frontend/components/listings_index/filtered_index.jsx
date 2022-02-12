import React, { useState } from "react";
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
    const currentLocationHash = window.location.hash;

    const [listings, setListings] = useState({
        listings: [],
        listingsIds: []
    });

    useEffect(() => {
        dispatch(fetchListings());
    }, []);

    useEffect(() => {
        dispatch(fetchSaves());
    }, []);

    useEffect(() => {
        if (listings.listings.length === 0) {
            let temp1 = [];
            let temp2 = [];
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
                            temp1.push(listing);
                            temp2.push(id);
                        }
                    }else if (listing[key] === value) {
                        temp1.push(listing);
                        temp2.push(id);
                    }
                }
            }
            setListings({
                listings: temp1,
                listingsIds: temp2
            });
        }else {
            let temp1 = listings.listings;
            let temp2 = listings.listingsIds;
            let flag = false;
            for (let i = 0; i < temp1.length; i++) {
                let listing = temp1[i];
                let id = temp2[i];
                for (let j = 0; j < optionValues.length; j++) {
                    let value = optionValues[j];
                    let key = optionKeys[j]; 
                    if ((key === "zipcode" || key === "baths" || key === "beds") && listing[key] !== parseInt(value) && value !== '') {
                        console.log("in the if");
                        temp1.splice(i, 1);
                        temp2.splice(i, 1);
                    } else {
                        console.log("in the else");
                    }                                                                                                                   
                }
            }
            setListings({
                listings: temp1,
                listingsIds:temp2
            });
        }
    }, [props.options]);

    console.log(listings.listings, "LISTINGS");

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
