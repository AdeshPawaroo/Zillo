import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchListing } from "../../actions/listing_actions";

export const ListingShow = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        
    }, []);

    return(
        <div className="listing-show-container">
            HERE    
        </div>
    )
}