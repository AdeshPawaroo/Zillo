import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

export const FilteredMap = (props) => {
    
    const listings = Object.values(props.listings);
    const listingIds = Object.keys(props.listingIds);
    const locations = [];

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

    listings.map((listing, i) => {
        const listingObj = {
            key: listingIds[i],
            location: {
                lat: listing.lat,
                lng: listing.lng
            }
        }
        locations.push(listingObj);
    });

    const handleClick = (listingId) => {
        window.location = `#/listings/${listingId}`;
    }

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
                        key={item.key}
                        position={item.location}
                        icon={redCircle}   
                        onClick={() => handleClick(item.key)}                   
                    />
                )})
            }
        </GoogleMap>
    )
}