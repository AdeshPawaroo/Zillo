import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchListing } from "../../actions/listing_actions";

export const ListingShow = (props) => {

    const [currListing, setListing] = useState({
        listing: {}
    })

    const params = useParams();
    const dispatch = useDispatch();
    const listingId = params.listingid;
    
    useEffect(() => {
        dispatch(fetchListing(listingId))
            .then(res => setListing({
                listing: res.listing
            }))
    }, []);  

    return (
        <div className="modal-background" onClick={() => window.location = "#/buy"}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <div className="show-container">
                    <div className="show-photos-container">
                        <div className="photo1"></div>    
                        <div className="photo2"></div>    
                        <div className="photo3"></div>    
                        <div className="photo4"></div>   
                    </div>
                    <div className="show-info-container">
                        <div className="show-info-header">
                            <span className="header-price">{currListing.listing.price}</span>
                            <span className="header-info">
                                {currListing.listing.beds} {"bds - "}
                                {currListing.listing.baths} {"ba - "}
                                {currListing.listing.sqft} {" sqft"}
                            </span>
                            <span className="header-address">{currListing.listing.address}</span>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}