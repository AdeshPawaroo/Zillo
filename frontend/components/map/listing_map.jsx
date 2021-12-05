import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { fetchListings } from "../../actions/listing_actions";

export const ListingsMap = (props) => {

    const dispatch = useDispatch();
    const _listings = useSelector(state => state.entities.listings);
    const listings = Object.values(_listings);

    const mapOptions = {
        height: "760px",
        width: "1150px"
    }

    const center = {
        lat: 40.6892,
        lng: -74.0445
    }

    const locations = [];

    // map through listings adding the correct locations for existing listings
    listings.map((listing, i) => {
        const listingObj = {
            id: i + 1,
            location: {
                lat: listing.lat,
                lng: listing.lng
            }
        }

        locations.push(listingObj);
    });

    return (
        <GoogleMap
            mapContainerStyle={mapOptions}
            zoom={11}
            center={center}
        >
            {
                locations.map(item => {
                    return (
                        <Marker 
                            id={item.id}
                            position={item.location}
                        />
                    )
                })
            }
        </GoogleMap>
    )
}