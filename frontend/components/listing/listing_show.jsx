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
            // .then(res => console.log(res.listing.price, "promise"))
            .then(res => setListing({
                listing: res.listing
            }))
    }, []);  
    
    console.log(currListing.listing.price, "state");

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
                    
                    </div>
                </div>   
            </div>
        </div>
    )
}