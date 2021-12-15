import React from "react";
import { useDispatch } from "react-redux";
import { createSave } from "../../actions/save_actions";
import { deleteSave } from "../../actions/save_actions";

export const Listing = (props) => {

    const dispatch = useDispatch();
    const currListing = props.listing
    const currListingId = props.listingId;

    const saveListing = {
        address: currListing.address,
        baths: currListing.baths,
        beds: currListing.beds,
        description: currListing.description,
        lat: currListing.lat,
        lng: currListing.lng,
        owner_id: currListing.owner_id,
        price: currListing.price,
        realator: currListing.realator,
        sqft: currListing.sqft,
        status: currListing.status,
        style: currListing.style,
        zipcode: currListing.zipcode,
        listing_id: parseInt(currListingId)
    }

    const handleSave = (e) => {
        e.preventDefault();

        dispatch(createSave(saveListing));
    }

    const handleDelete = (e) => {
        e.preventDefault();

        console.log(currListingId);
        dispatch(deleteSave(currListingId));
    }

    return(
        // <div className="listing-item-container" onClick={() => window.location = `/#/listings/${currListingId}`}>
        <div className="listing-item-container" >
            <div className="listing-photo"></div>
            <p className="listing-price">
                {currListing.price}
            </p>
            <p className="listing-stats">
               {currListing.beds} {" bds "}
               {currListing.baths} {" ba "}
               {currListing.sqft} {" sqft -"}
               {currListing.status} 
            </p>
            <p className="listing-address">
                {currListing.address}
            </p>
            <p className="listing-realator">
                {currListing.realator}
            </p>

            <button onClick={handleSave}>SAVE</button>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}



// onClick={() => window.location = `/#/listings/${props.listingId}`}