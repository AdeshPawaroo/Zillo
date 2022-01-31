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
    const listings = [];
    const listingsIds = [];
    let currentFilteredListings = [];
    let currentFilteredListingsIds = [];
    const currentLocationHash = window.location.hash;

    useEffect(() => {
        dispatch(fetchListings());
    }, []);

    useEffect(() => {
        dispatch(fetchSaves());
    }, []);

    //handles grabbing the correct listings based off the hash
    if (currentLocationHash === "#/buy") {
        for (let i = 0; i < allListings.length; i++) {
            if (allListings[i].status === "for sale") {
                listings.push(allListings[i]);
                listingsIds.push(allListingsIds[i]);
            }
        }
    }

    if (currentLocationHash === "#/rent") {
        for (let i = 0; i < allListings.length; i++) {
            if (allListings[i].status === "for rent") {
                listings.push(allListings[i]);
                listingsIds.push(allListingsIds[i]);
            }
        }
    }

    // for (let i = 0; i < listings.length; i++) {
    //     let currentListing = listings[i];
    //     let currentListingId = listingsIds[i];
    //     let flag = false;
    //     for (let j = 0; j < optionValues.length; j++) {
    //         let currentOption = optionValues[j];
    //         let currentKey = optionKeys[j]
    //         if (currentOption === '') {
    //             continue;
    //         }else if (currentKey === "zipcode" || currentKey === "beds" || currentKey === "baths") {
    //             if (currentListing[currentKey] === parseInt(currentOption)) {
    //                 flag = true;
    //             }
    //         }else if (currentListing[currentKey] === currentOption) {
    //             flag = true;
    //         }else {
    //             flag = false;
    //         }
    //         if (flag === true) {
    //             currentFilteredListings.push(currentListing);
    //             currentFilteredListingsIds.push(currentListingId);
    //         } 
    //     }
    // }

    
    // handles iterating through our current listings, and filtering through
    // them based on the options prop
    // for (let i = 0; i < listings.length; i++) {
    //     let flag = false;
    //     for (let j = 0; j < optionValues.length; j++) {
    //         if (optionValues[j] === '') {
    //             continue;
    //         }else if (optionKeys[j] === "zipcode" || optionKeys[j] === "beds" || optionKeys[j] === "baths" ) {
    //             if (listings[i][optionKeys[j]] === parseInt(optionValues[j])) {
    //                 flag = true;
    //             }
    //         }else if (listings[i][optionKeys[j]] === optionValues[j]) {
    //             flag = true;
    //         }else {
    //             flag = false;
    //         }  
    //         if (flag === true && currentFilteredListings.indexOf(listings[i] === -1)) {
    //             currentFilteredListings.push(listings[i]);
    //             currentFilteredListingsIds.push(listingsIds[i]);
    //         }
    //     }
    // }

    for (let i = 0; i < listings.length; i++) {
        let currentListing = listings[i];
        let currentListingId = listingsIds[i];
        for (let j = 0; j < optionValues.length; j++) {
            let currentValue = optionValues[j];
            let currentKey = optionKeys[j];
            if (currentKey === '') continue;
            if (currentKey === "zipcode" || currentKey === "beds" || currentKey === "baths") {
                if (currentListing[currentKey] === parseInt(currentValue)) {
                    currentFilteredListings.push(currentListing);
                    currentFilteredListingsIds.push(currentListingId);
                }
            }
            if (currentListing[currentKey] === currentValue) {
                currentFilteredListings.push(currentListing);
                currentFilteredListingsIds.push(currentListingId);
            }
        }
    }

    

    console.log(currentFilteredListings, "FILTERED");

    return(
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






// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchListings } from "../../actions/listing_actions";
// import { fetchSaves } from "../../actions/save_actions";
// import { Listing } from "../listing/listing";

// export const FilteredIndex = (props) => {
//     const dispatch = useDispatch();
//     const optionsValues = Object.values(props.options);
//     const optionsKeys = Object.keys(props.options);
//     const listings = Object.values(useSelector(state => state.entities.listings));
//     const listingIds = Object.keys(useSelector(state => state.entities.listings));
//     const filteredListings = [];
//     const filteredListingsIds = [];
    
//     useEffect(() => {
//         dispatch(fetchListings());
//     }, []);

//     useEffect(() => {
//         dispatch(fetchSaves());
//     }, []);

//     //get the url
//     console.log(window.location.hash);
    
//     //get the location hash
//     //if it is /buy, get listings for sale, then store into a variable
//     //if it is /rent, get listings for rent, then store into a variable

//     const handleEmptyCheck = () => {
//         for (let i = 0; i < optionsValues.length; i++) {
//             if (optionsValues[i] !== "") {
//                 return false;
//             }
//         }
//         return true;
//     };

//     const handleEmptyIndex = () => {
//         if (filteredListings.length === 0) {
//             return (
//                 <div className="empty-filtered-index">
//                     <h1>No listings match your current search.</h1>
//                 </div>
//             );
//         }
//     }

//     if (handleEmptyCheck() === true) {
//         return (
//             <div className="listings-index">
//                 {listings.map((listing, i) => (
//                     <Listing 
//                         key={i}
//                         listing={listing}
//                         listingId={listingIds[i]}
//                     />
//                 ))}
//             </div>
//         )
//     }else {
//         return (
//             <div className="listings-index">
//                 {filteredListings.map((listing, i) => (
//                     <Listing
//                         key={i}
//                         listing={listing}
//                         listingId={listingIds[i]}
//                     />
//                 ))}
//                 {handleEmptyIndex()}
//             </div>
//         )
//     }
// }

   // for (let i = 0; i < listings.length; i++) {
    //     let currentListing = listings[i];
    //     let currentListingId = listingIds[i];
    //     let flag = false;

    //     for (let j = 0; j < optionsValues.length; j++) {
    //         let currentOptionValue = optionsValues[j];
    //         let currentOptionKey = optionsKeys[j];
        
    //         if (currentOptionKey === "zipcode" || currentOptionKey === "beds" || currentOptionKey === "baths") {
    //             currentOptionValue = parseInt(currentOptionValue);
    //             if (currentListing[currentOptionKey] === currentOptionValue) {
    //                 flag = true;
    //             }
    //         } else if (currentListing[currentOptionKey] === currentOptionValue) {
    //             flag = true;
    //         } else if (currentOptionValue === "") {
    //             continue;
    //         } else {
    //             flag = false;
    //         }
    //     }
        
    //     if (flag === true) {
    //         filteredListings.push(currentListing);
    //         filteredListingsIds.push(currentListingId);
    //     }
    // }