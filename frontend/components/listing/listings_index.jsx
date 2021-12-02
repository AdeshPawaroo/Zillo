import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux"; 

import { fetchListings } from "../../actions/listing_actions";

export const ListingsIndex = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchListings());
    });

    // const listings = useSelector(state => state.entities.listings);

    return (
        
        <h2>here</h2>
    )

}