import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux"; 

import { fetchListings } from "../../actions/listing_actions";

export const ListingsIndex = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchListings());
    }, []);

     const _listings = useSelector(state => state.entities.listings);

     const listings = Object.values(_listings);
     console.log(listings);
     

    return (
        <h2>here</h2>
    )

}