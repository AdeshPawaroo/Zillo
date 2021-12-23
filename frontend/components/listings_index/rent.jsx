import React from "react";
import { ListingsMap } from "../map/listing_map";
import { IndexPageNav } from "./index_page_nav";
import { ListingsForRent } from "../listing/listings_rent";

export const RentPage = (props) => {

    return (
        <div className="buy-page-container">
            <IndexPageNav />

            <div className="buy-page-contents">
                <div className="buy-page-left">
                    <ListingsMap />
                </div>

                <div className="buy-page-right">
                    {/* <ListingsIndex /> */}
                    <ListingsForRent />
                </div>
            </div>
        </div>
    )
}
