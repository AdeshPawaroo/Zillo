import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";
import { fetchSaves } from "../../actions/save_actions";
import { FilteredMap } from "../map/filtered_map";
import { ListingsIndex } from "./listings_index";

export const FilteredIndex = (props) => {
    const dispatch = useDispatch();
    const optionValues = Object.values(props.options);
    const optionKeys = Object.keys(props.options);
    const allListings = Object.values(useSelector(state => state.entities.listings));
    const allListingsIds = Object.keys(useSelector(state => state.entities.listings));
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

    // useEffect(() => {
    //     if (listings.listings.length === 0) {
    //         let temp1 = [];
    //         let temp2 = [];
    //         for (let i = 0; i < allListings.length; i++) {
    //             let listing = allListings[i];
    //             let listingId = allListingsIds[i];
    //             for (let j = 0; j < optionValues.length; j++) {
    //                 let value = optionValues[j];
    //                 let key = optionKeys[j];
    //                 if (value === '') {
    //                     continue;
    //                 }else if (key === "zipcode" || key === "beds" || key === "baths") {
    //                     if (listing[key] === parseInt(value)) {
    //                         temp1.push(listing);
    //                         temp2.push(listingId);
    //                     }
    //                 }else if (listing[key] === value) {
    //                     temp1.push(listing);
    //                     temp2.push(listingId);
    //                 }
    //             }
    //         }
    //         setListings({
    //             listings: temp1,
    //             listingsIds: temp2
    //         });
    //     }else {
    //         let flags = {
    //             zipcodeFlag: true,
    //             realatorFlag: true,
    //             styleFlag: true,
    //             bathsFlag: true,
    //             bedsFlag: true
    //         }
    //         let filteredListings = [];
    //         let filteredListingsIds = [];
    //         for (let i = 0; i < listings.listings.length; i++) { 
    //             let listing = listings.listings[i];
    //             let listingId = listings.listings[i];
    //             for (let j = 0; j < optionValues.length; j++) {
    //                 let value = optionValues[j];
    //                 let key = optionKeys[j];
    //                 console.log(value, "value in the else");
    //             }
    //         }
    //     }       
    // }, [props.options]);


     //     }else {
            // let flags = {
            //     zipcodeFlag: true,
            //     realatorFlag: true,
            //     styleFlag: true,
            //     bedsFlag: true,
            //     bathsFlag: true
            // }
    //         let filteredListings = [];
    //         let filteredIds = [];
    //         for (let i = 0; i < listings.listings.length; i++) {
    //             let listing = listings.listings[i];
    //             let id = listings.listingsIds[i];
    //             for (let j = 0; j < optionValues.length; j++) {
    //                 let value = optionValues[j];
    //                 let key = optionKeys[j];
    //                 if (value === '') {
    //                     continue;
    //                 }
    //                 if (key === "zipcode" && listing[key] !== parseInt(value)) {
    //                     flags.zipcodeFlag = false;
    //                 }else {
    //                     flags.zipcodeFlag = true;
    //                 }            
    //                 if (key === "beds" && listing[key] !== parseInt(value)) {
    //                     flags.bedsFlag = false;
    //                 }else {
    //                     flags.bedsFlag = true;
    //                 }
    //                 if (key === "baths" && listing[key] !== parseInt(value)) {
    //                     flags.bathsFlag = false;
    //                 }else {
    //                     flags.bathsFlag = true;
    //                 }
    //                 if (key === "style" && listing[key] !== value) {
    //                     flags.styleFlag = false;
    //                 }else {
    //                     flags.styleFlag = true;
    //                 }
    //                 if (key === "realator" && listing[key] !== value) {
    //                     flags.realatorFlag = false;
    //                 }else {
    //                     flags.realatorFlag = true;
    //                 }
    //             }
    //             if (!Object.values(flags).includes(false)) {
    //                 filteredListings.push(listing);
    //                 filteredIds.push(id);
    //             }
    //         }
    //         setListings({
    //             listings: filteredListings,
    //             listingsIds: filteredIds
    //         });
    //     }
    // }, [props.options]);

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

    return (
        <div className="buy-page-contents">
            <div className="buy-page-left">
                <FilteredMap 
                    listings={listings.listings}
                    listingIds={listings.listingsIds}
                    options={optionValues}
                />
            </div>           
            <div className="buy-page-right">
                <ListingsIndex 
                    listings={listings.listings}
                    listingIds={listings.listingsIds}
                    options={optionValues}
                />
            </div>
        </div>
    )
}