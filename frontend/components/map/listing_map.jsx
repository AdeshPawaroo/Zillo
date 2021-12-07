import React from "react";
import { useSelector } from "react-redux";
import { GoogleMap, Marker } from "@react-google-maps/api";

export const ListingsMap = (props) => {

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

    const redCircle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "red",
        fillOpacity: 10,
        scale: 7.5,
        strokeColor: "white",
        strokeWeight: 3,
    }

    const greenCircle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "green",
        fillOpacity: 10,
        scale: 7.5,
        strokeColor: "white",
        strokeWeight: 3
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
                        icon={redCircle}
                    />
                )})
            }
        </GoogleMap>
    )
}