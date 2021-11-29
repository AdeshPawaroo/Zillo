import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"; 

import { fetchListings } from "../../actions/listing_actions";

export const ListingsIndex = () => {
    
    // const listings = useSelector(state => state.entities.listings);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchListings());
    });

    return (
        <h2>here</h2>
    )

}