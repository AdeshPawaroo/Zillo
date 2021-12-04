import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

export const GoogleMap = (props) => {

    const mapOptions = {
        height: "785px",
        width: "1150px"
    };

    const center = {
        lat: 40.683264,
        lng: -73.79687
    }

    const locations = [];

    const itemId = 

    const handleClick = (item) => {
        props.history.push(`/listings/${item.id}`);
    }

    return ( 
        <GoogleMap>
            mapContainerStyle={mapOptions}
            zoom={11}
            cetner={center}
            {locations.map(item => {
                return (
                    <Marker
                        id={item.id}
                        position={item.location}
                        onClick={() => handleClick(item)}
                    />
                )
            })}
        </GoogleMap>
    )
}   