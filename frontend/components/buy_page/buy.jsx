import React from "react";
import { ListingsMap } from "../map/listing_map";
import { ListingsIndex } from "../listing/listings_index";
import { BuyPageNav } from "./buy_page_nav";

export const BuyPage = (props) => {

    return (
        <div className="buy-page-container">
            <BuyPageNav />

            <div className="buy-page-contents">
                <div className="buy-page-left">
                    <ListingsMap />
                </div>

                <div className="buy-page-right">
                    <ListingsIndex />
                </div>
            </div>
        </div>
    )
}