import React from "react";
import { useSelector } from "react-redux";
import { GoogleMap, Marker } from "@react-google-maps/api";

export const ListingsMap = (props) => {

    const _listings = useSelector(state => state.entities.listings);
    const listings = Object.values(_listings);

    // if flag -> redCircle / if true -> greenCircle
    let flag = false;

    const redCircle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "red",
        fillOpacity: 10,
        scale: 7.5,
        strokeColor: "white",
        strokeWeight: 3
    }

    const greenCircle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "green",
        fillOpacity: 10,
        scale: 7.5,
        strokeColor: "white",
        strokeWeight: 3
    }

    const infoWindow = new google.maps.InfoWindow({
        content: "<h2>test</h2>"
    });

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

    //determines which circle to render
    const handleRender = () => {
        if (flag === false) {
            return redCircle;
        } else {
            return greenCircle;
        }
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
                            id={item.id}
                            position={item.location}
                            icon={handleRender()}
                        />
                    )
                })
            }
        </GoogleMap>
    )
}