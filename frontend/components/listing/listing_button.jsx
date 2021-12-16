import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";

export const ListingButton = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchListings());
    }, []);

    const SaveButton = (
        <button>Save</button>
    )

    const DeleteButton = (
        <button>Delete</button>
    )

    return (
        
    )

}