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
    
    let valueCount = 0;
    optionValues.map(value => {
        if (value !== '') {
            valueCount++;
        }
    });

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
                    console.log(listing, "CURR");
                    console.log(flags, "FLAGS");
                    console.log(filteredListings, "FILTERED");
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

    // useEffect(() => {
    //         if (listings.listings.length === 0) {
    //             let temp1 = [];
    //             let temp2 = [];
    //             for (let i = 0; i < allListings.length; i++) {
    //                 let listing = allListings[i];
    //                 let id = allListingsIds[i];
    //                 for (let j = 0; j < optionValues.length; j++) {
    //                     let value = optionValues[j];
    //                     let key = optionKeys[j];
    //                     if (value === '') {
    //                         continue;
    //                     }else if (key === "zipcode" || key === "beds" || key === "baths") {
    //                         if (listing[key] === parseInt(value)) {
    //                             temp1.push(listing);
    //                             temp2.push(id);
    //                         }
    //                     }else if (listing[key] === value) {
    //                         temp1.push(listing);
    //                         temp2.push(id);
    //                     }
    //                 }
    //             }
    //             setListings({
    //                 listings: temp1,
    //                 listingsIds: temp2
    //             });
    //         }else {
    //             let temp1 = listings.listings;
    //             let temp2 = listings.listingsIds;
    //             for (let i = 0; i < temp1.length; i++) {
    //                 let listing = temp1[i];
    //                 let id = temp2[i];
    //                 for (let j = 0; j < optionValues.length; j++) {
    //                     let value = optionValues[j];
    //                     let key = optionKeys[j]; 
    //                     if ((key === "zipcode" || key === "baths" || key === "beds") && listing[key] !== parseInt(value) && value !== '') {
    //                         console.log(temp1, "CURRENT");
    //                         temp1.splice(i, 1);
    //                         temp2.splice(i, 1);
    //                     } else {
    //                         if (listing[key] !== value && value !== '') {
    //                             // temp1.splice(i, 1);
    //                             // temp2.splice(i, 1);
    //                         }
    //                     }                                                                                                                   
    //                 }
    //             }
    //             setListings({
    //                 listings: temp1,
    //                 listingsIds:temp2
    //             });
    //         }
    //     }, [props.options]);



        // let temp1 = [];
        //     let temp2 = [];
        //     let flag = false;
        //     console.log(temp1.length);
        //     for (let i = 0; i < listings.listings.length; i++) {
        //         let listing = listings.listings[i];
        //         let id = listings.listingsIds[i];
        //         for (let j = 0; j < optionValues.length; j++) {
        //             let value = optionValues[j];
        //             let key = optionKeys[j];
        //             if (value === '') {
        //                 continue;
        //             }else if ((key === "zipcode" || key === "baths" || key === "beds") && listing[key] === parseInt(value)) {
        //                 flag = true;
        //             }else if ((key === "realator" || key === "style") && listing[key] === value) {
        //                 flag = true;
        //             }else {
        //                 flag = false;
        //             }
        //         }
        //         if (flag === true) {
        //             temp1.push(listing);
        //             temp2.push(id);
        //             setListings({
        //                 listings: temp1,
        //                 listingsIds: temp2
        //             });
        //         }
        //     }