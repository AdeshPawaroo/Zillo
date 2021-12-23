import React from "react";
import { ListingsMap } from "../map/listing_map";
import { BuyMap } from '../map/buy_map'
import { IndexPageNav } from "./index_page_nav";
import { ListingsForSale } from "../listing/listings_buy";

export const BuyPage = (props) => {

    return (
        <div className="buy-page-container">
            <IndexPageNav />

            <div className="buy-page-contents">
                <div className="buy-page-left">
                    <BuyMap />
                </div>

                <div className="buy-page-right">
                    {/* <ListingsIndex /> */}
                    <ListingsForSale />
                </div>
            </div>
        </div>
    )
}