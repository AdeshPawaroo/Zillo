import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api"

export const ListingsMap = (props) => {

    const mapOptions = {
        height: "760px",
        width: "1080px"
    }

    const center = {
        lat: 40.6892,
        lng: -74.0445
    }

    const locations = [];


    return (
        <GoogleMap
            mapContainerStyle={mapOptions}
            zoom={11}
            center={center}
        >
        </GoogleMap>
    )
}