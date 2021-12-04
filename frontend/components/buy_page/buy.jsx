import { GoogleMap } from "@react-google-maps/api";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ListingsMap } from "../map/listing_map";
import { ListingsIndex } from "../listing/listings_index";

export const BuyPage = (props) => {

    return (
        <div className="buy-page-container">
            <div className="buy-page-left">
                <ListingsMap />
            </div>

            <div className="buy-page-right">
                <ListingsIndex />
            </div>
        </div>
    )
}