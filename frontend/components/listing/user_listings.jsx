import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";
import { Listing } from "./listing";

export const UserListings = (props) => {

    const dispatch = useDispatch();
    const listings = Object.values(useSelector(state => state.entities.listings));
    const currentUser = useSelector(state => state.session.currentUser)
    const userListings = [];

    useEffect(() => {
        dispatch(fetchListings());
    }, []);

    for (let i = 0; i < listings.length; i++) {
        let currentListing = listings[i];
        
        if (currentListing.owner_id === currentUser) {
            userListings.push(currentListing)
        } 
    }

    return (
        <div>
            {userListings.map((listing, i) => (
                <Listing 
                    listing={listing}
                    key={i}
                />
            ))}
        </div>
    )
}
