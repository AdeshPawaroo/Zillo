import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSaves, createSave } from "../../actions/save_actions"

export const Listing = (props) => {

    console.log(props, "PROPS");

    const [saves, setSaves] = useState({
        saves: {}
    });

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.currentUser)
    const currListing = props.listing
    const currListingId = props.listingId;

    const saveObj = {
        address: currListing.address,
        baths: currListing.baths,
        beds: currListing.beds,
        description: currListing.description,
        lat: currListing.lat,
        lng: currListing.lng,
        owner_id: currentUser,
        price: currListing.price,
        realator: currListing.realator,
        sqft: currListing.sqft,
        status: currListing.status,
        style: currListing.style,
        zipcode: currListing.zipcode,
        listing_id: currListingId
       }

    console.log(currListing);

    // useEffect (() => {
    //     dispatch(fetchSaves())
    //         .then(res =>  console.log(res, "res"))
    // }, []);

    const handleSave = (e) => {
        e.preventDefault();

        dispatch(createSave(saveObj))
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

            <div className="listing-btn-container">
                <button onClick={handleSave}>SAVE</button>
                <button>UNSAVE</button>
            </div>
        </div>
    )
}



// onClick={() => window.location = `/#/listings/${props.listingId}`}