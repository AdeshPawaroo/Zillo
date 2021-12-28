import React from "react";
import { RentMap } from '../map/rent_map'
import { IndexPageNav } from "./index_page_nav";
import { ListingsForRent } from "../listing/listings_rent";

export const RentPage = (props) => {

    return (
        <div className="buy-page-container">
            <IndexPageNav />

            <div className="buy-page-contents">
                <div className="buy-page-left">
                    <RentMap />
                </div>

                <div className="buy-page-right">                  
                    <ListingsForRent />
                </div>
            </div>
        </div>
    )
}
