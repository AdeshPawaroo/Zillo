import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { fetchListings } from "../../actions/listing_actions";

export const BuyMap = (props) => {

    const dispatch = useDispatch();
    const stateListings = Object.values(useSelector(state => state.entities.listings)) ;
    const stateIds = Object.keys(useSelector(state => state.entities.listings)) ;
    const listingsForSale = [];
    const listingIds = [];
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

    useEffect(() => {
        dispatch(fetchListings());
    }, []);

    for (let i = 0; i < stateListings.length; i++) {
        let currentListing = stateListings[i];

        if (currentListing.status === "for sale") {
            listingsForSale.push(currentListing);
        }
    }

    listingsForSale.map((listing, i) => {
        const listingObj = {
            key: i,
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