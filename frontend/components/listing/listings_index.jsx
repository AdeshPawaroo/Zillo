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

    return (
        <div className="listings-index">
            {listings.map((listing, i) => (
                console.log(listing.price)
            ))}
        </div>
    )

}