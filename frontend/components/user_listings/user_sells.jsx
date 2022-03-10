import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";
import { Listing } from "../listing/listing";
import { ListingSell } from "./listing_sell";

export const UserSales = (props) => {

    const dispatch = useDispatch();
    const listings = Object.values(useSelector(state => state.entities.listings));
    const listingIds = Object.keys(useSelector(state => state.entities.listings));
    const currentUser = useSelector(state => state.session.currentUser)
    const userListings = [];
    const userListingsIds = [];

    useEffect(() => {
        dispatch(fetchListings());
    }, []);

    for (let i = 0; i < listings.length; i++) {
        let currentListing = listings[i];
        let currentListingId = listingIds[i];
        if (currentListing.owner_id === currentUser) {
            userListings.push(currentListing);
            userListingsIds.push(currentListingId);
        } 
    }

    return (
        <div className="user-listings-container">
            <span className="sells-slogan">Your currently posted listings: </span>
            <br />
            <br />
            <div className="sell-listing-container">
                {userListings.map((listing, i) => (
                    <ListingSell 
                        currentSell={listing}
                        currentSellId={userListingsIds[i]}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}
