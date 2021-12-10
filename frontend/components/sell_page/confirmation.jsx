import React from "react";
import { useDispatch } from "react-redux";
import { createListing } from "../../actions/listing_actions";

export const Confirmation = (props) => {

    const dispatch = useDispatch();

    const _newListing = {
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

    const newListing = Object.values(_newListing);
   
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(createListing(newListing));
    }

    return (
        <div>
            <p>Please confirm this information is correct. If not please go back and correct it.</p>
            {newListing.map((value, i) => (
                <span key={i}>{value} <br /> </span> 
                    
            ))}
            <button onClick={props.prevStep}>Go Back</button>
            <button onClick={handleClick}>Submit</button>
            <h2>confirmation</h2>
        </div>
    )
}