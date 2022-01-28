import React from "react";
import { Listing } from "./listing";

export const ListingsIndex = (props) => {

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchListings());
    // }, []);

    // useEffect(() => {
    //     dispatch(fetchSaves())
    // }, []);

    // const listings = Object.values(useSelector(state => state.entities.listings));
    // const listingIds = Object.keys(useSelector(state => state.entities.listings));

    const listings = props.listings;
    const listingIds = props.listingIds;

    return (
        <div className="listings-index">
            {listings.map((listing, i) => (
                <Listing 
                    key={i} 
                    listing={listing} 
                    listingId={listingIds[i]}
                />
            ))}
        </div>
    )
}