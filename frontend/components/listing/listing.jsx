import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListingButton } from "./listing_button";

export const Listing = (props) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.currentUser)
    const currListing = props.listing
    const currListingId = props.listingId;
    
    const saveObj = {
        price: currListing.price,
        address: currListing.address,
        baths: currListing.baths,
        beds: currListing.beds,
        status: currListing.status,
        zipcode: currListing.zipcode,
        realator: currListing.realator,
        style: currListing.style,
        sqft: currListing.sqft,
        description: currListing.description,
        lat: currListing.lat,
        lng: currListing.lng,
        owner_id: currentUser,
        listing_id: currListingId
    }
    
    return(
        <div className="listing-item-container" >
            <div className="listing-photo" onClick={() => window.location = `/#/listings/${currListingId}`}
            style={{backgroundImage: `url(${currListing.photoUrl})`}}></div>
            <p className="listing-price">
                {currListing.price}
            </p>
            <p className="listing-stats" onClick={() => window.location = `/#/listings/${currListingId}`}>
               {currListing.beds} {" bds "}
               {currListing.baths} {" ba "}
               {currListing.sqft} {" sqft - "}
               {currListing.status} 
            </p>
            <p className="listing-address" onClick={() => window.location = `/#/listings/${currListingId}`}>
                {currListing.address}{" - "}{currListing.zipcode}{" - "}{currListing.style}
            </p>
            <p className="listing-realator" onClick={() => window.location = `/#/listings/${currListingId}`}>
                {currListing.realator}
            </p>
            <div className="listing-button-container">
                <ListingButton 
                    saveObj={saveObj}
                />
            </div>
        </div>
    )
}