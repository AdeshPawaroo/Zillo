import React from "react";
import { useSelector } from "react-redux";
import { Listing } from "../listing/listing";

export const ListingsIndex = (props) => {
    let listings = props.listings;
    let listingIds = props.listingIds;
    let emptyOptionsflag = true;

    for (let i = 0; i < props.options.length; i++) {
        let currentOption = props.options[i];
        if (currentOption !== "") {
            emptyOptionsflag = false;
        }
    }

    if (emptyOptionsflag === true) {
        listings = Object.values(useSelector(state => state.entities.listings));
        listingIds = Object.keys(useSelector(state => state.entities.listings));
    }

    const handleRender = () => {
        if (listings.length === 0) {
            return (
                <div className="no-listings-found-message">
                    Sorry! No available listings match your search paramaters!
                </div>
            )
        }else {
            return (
                <div className="listings-index">
                    {
                        listings.map((listing, i) => (
                            <Listing 
                                key={i}
                                listing={listing}
                                listingId={listingIds[i]}
                            />
                        ))
                    }
                </div>
            )
        }
    }

    return (
        <div className="listings-index-container">
            {handleRender()}
        </div>
    )
}