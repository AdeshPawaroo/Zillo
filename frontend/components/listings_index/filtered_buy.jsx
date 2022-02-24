import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";
import { fetchSaves } from "../../actions/save_actions";
import { FilteredMap } from "../map/filtered_map";
import { ListingsIndex } from "./listings_index";

export const FilteredBuy = (props) => {
    const dispatch = useDispatch();
    const optionValues = Object.values(props.options);
    const optionKeys = Object.keys(props.options);
    const allListings = Object.values(useSelector(state => state.entities.listings));
    const allListingsIds = Object.keys(useSelector(state => state.entities.listings));
    const listingsForView = [];
    const listingsForViewIds = [];
    const locationHash = window.location.hash;

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

    if (locationHash === "#/buy") {
        for (let i = 0; i < allListings.length; i++) {
            let listing = allListings[i];
            let id = allListingsIds[i];
            if (listing.status === "for sale") {
                listingsForView.push(listing);
                listingsForViewIds.push(id);
            }
        }
    }

    if (locationHash === "#/rent") {
        for (let i = 0; i < allListings.length; i++) {
            let listing = allListings[i];
            let id = allListingsIds[i];
            if (listing.status === "for rent") {
                listingsForView.push(listing);
                listingsForViewIds.push(id);
            }
        }
    }

    useEffect(() => {
        if (listings.listings.length == 0) {
            let temp1 = [];
            let temp2 = [];
            for (let i = 0; i < listingsForView.length; i++) {
                let listing = listingsForView[i];
                let id = listingsForViewIds[i];
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
            let flags = {
                zipcodeFlag: true,
                realatorFlag: true,
                styleFlag: true,
                bedsFlag: true,
                bathsFlag: true
            }
            let filteredListings = [];
            let filteredIds = [];
            for (let i = 0; i < listings.listings.length; i++) {
                let listing = listings.listings[i];
                let id = listings.listingsIds[i];
                for (let j = 0; j < optionValues.length; j++) {
                    let value = optionValues[j];
                    let key = optionKeys[j];
                    if (value === '') {
                        continue;
                    }
                    if (key === "zipcode" && listing[key] !== parseInt(value)) {
                        flags.zipcodeFlag = false;
                    }else {
                        flags.zipcodeFlag = true;
                    }            
                    if (key === "beds" && listing[key] !== parseInt(value)) {
                        flags.bedsFlag = false;
                    }else {
                        flags.bedsFlag = true;
                    }
                    if (key === "baths" && listing[key] !== parseInt(value)) {
                        flags.bathsFlag = false;
                    }else {
                        flags.bathsFlag = true;
                    }
                    if (key === "style" && listing[key] !== value) {
                        flags.styleFlag = false;
                    }else {
                        flags.styleFlag = true;
                    }
                    if (key === "realator" && listing[key] !== value) {
                        flags.realatorFlag = false;
                    }else {
                        flags.realatorFlag = true;
                    }
                }
                if (!Object.values(flags).includes(false)) {
                    filteredListings.push(listing);
                    filteredIds.push(id);
                }
            }
            setListings({
                listings: filteredListings,
                listingsIds: filteredIds
            });
        }
    }, [props.options]);

    console.log(props, "PROPS");
    console.log(listings, "LISTINGS");

    return (
        <div className="buy-page-contents">
            <div className="buy-page-left">
                <FilteredMap 
                    listingsForView={listingsForView}
                    listingsForViewIds={listingsForViewIds}
                    listings={listings.listings}
                    listingIds={listings.listingsIds}
                />
            </div>           
            <div className="buy-page-right">
                <ListingsIndex 
                    listingsForView={listingsForView}
                    listingsForViewIds={listingsForViewIds}
                    listings={listings.listings}
                    listingIds={listings.listingsIds}
                />
            </div>
        </div>
    )
}