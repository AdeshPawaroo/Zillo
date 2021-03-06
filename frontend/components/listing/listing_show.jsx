import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { fetchListing } from "../../actions/listing_actions";

export const ListingShow = (props) => {

    const [currListing, setListing] = useState({
        listing: {
            lat: 0,
            lng: 0
        }
    });

    // for map position
    const mapOptions = {
        height: "100%",
        width: "100%"
    }

    const center = {
        lat: currListing.listing.lat,   
        lng: currListing.listing.lng
    }

    //for marker position
    const markerPos = {
        lat: currListing.listing.lat,
        lng: currListing.listing.lng
    }

    const redCircle = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: "red",
        fillOpacity: 10,
        scale: 7.5,
        strokeColor: "white",
        strokeWeight: 3,
    }

    const params = useParams();
    const dispatch = useDispatch();
    const listingId = params.listingid;
    
    useEffect(() => {
        dispatch(fetchListing(listingId))
            .then(res => setListing({
                listing: res.listing
            }))
    }, []);  

    return (
        <div className="modal-background" onClick={() => window.location = "#/buy"}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                <div className="show-container">
                    <div className="show-photos-container">
                        <div className="photo1"></div>    
                        <div className="photo2"></div>    
                        <div className="photo3"></div>    
                        <div className="photo4"></div>   
                    </div>
                    <div className="show-info-container">

                        <div className="show-info-header">
                            <span className="header-price">{currListing.listing.price}</span>
                            <span className="header-info">
                                {currListing.listing.beds} {"bds - "}
                                {currListing.listing.baths} {"ba - "}
                                {currListing.listing.sqft} {" sqft"}
                            </span>
                            <span className="header-address">{currListing.listing.address}{" - "}{currListing.listing.zipcode}{" - "}{currListing.listing.style}</span>
                        </div>

                        <div className="show-map-container">
                            <GoogleMap
                                mapContainerStyle={mapOptions}
                                zoom={11}
                                center={center}
                            >
                                <Marker 
                                    position={markerPos}
                                    icon={redCircle}
                                />
                            </GoogleMap>
                        </div>
                        <br />
                        <div className="show-overview-container">
                            <span className="overview-title">Overview</span>
                            <br />
                            <br />
                            <span className="overview-realator">Listing by: {currListing.listing.realator}</span>
                            <br />
                            <br />
                            <span className="overview-description">{currListing.listing.description}</span>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}