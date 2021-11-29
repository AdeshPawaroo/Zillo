import * as ListingApiUtil from "../util/listing_api_util";

export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS";
export const RECEIVE_LISTING = "RECEIVE_LISTING";

const receiveListings = (listings) => ({
    type: RECEIVE_ALL_LISTINGS,
    listings
    
});

const receiveListing = (listing) => ({
    type: RECEIVE_LISTING,
    listing
});

export const fetchListings = () => dispatch => {
    return (
        ListingApiUtil.fetchListings()
        .then(listings => dispatch(receiveListings(listings)))
    )
};

export const fetchListing = (listingId) => dispatch => (
    ListingApiUtil.fetchListing(listingId)
        .then(listing => dispatch(receiveListing(listing)))
);

export const createListing = (listing) => dispatch => (
    ListingApiUtil.createListing(listing)
        .then(newListing => dispatch(receiveListing(newListing)))
);