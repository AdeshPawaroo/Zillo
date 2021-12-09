import React from "react";
import { useDispatch } from "react-redux";
import { createListing } from "../../actions/listing_actions";

export const Confirmation = (props) => {

    const dispatch = useDispatch();

    const newListing = {
        price: props.values.price,
        baths: parseInt(props.values.baths),
        beds: parseInt(props.values.beds),
        description: props.values.description,
        lat: parseFloat(props.values.lat),
        lng: parseFloat(props.values.lng),
        address: props.values.address,
        realator: props.values.realator,
        sqft: parseInt(props.values.sqft),
        status: props.values.status,
        style: props.values.style,
        zipcode: parseInt(props.values.zipcode)
    }

    console.log(newListing);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(createListing(newListing));
    }

    return (
        <div>
            <button onClick={handleClick}>Submit</button>
            <h2>confirmation</h2>
        </div>
    )
}