import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchListings } from "../../actions/listing_actions";

export const UserListings = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchListings());
    }, []);
}