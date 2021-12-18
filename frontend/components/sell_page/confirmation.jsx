import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createListing } from "../../actions/listing_actions";

export const Confirmation = (props) => {

    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.session.currentUser);

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
        zipcode: parseInt(props.values.zipcode),
        owner_id: currentUser
    }


    const handleClick = (e) => {
        e.preventDefault();
        dispatch(createListing(_newListing));
    }

    return (
        <div className="confirmation-container">
            <div className="sell-confirmation">
                <p>Please confirm that this information is correct. If not please go back and correct it.</p>
                <br />
                <br />
                <label>Price:</label>
                <br />
                <span>{_newListing.price}</span>
                <br />
                <br />
                <label>Status:</label>
                <br />
                <span>{_newListing.status}</span>
                <br />
                <br />
                <label>Address:</label>
                <br />
                <span>{_newListing.address}</span>
                <br />
                <br />
                <label>Latitude:</label>
                <br />
                <span>{_newListing.lat}</span>
                <br />
                <br />
                <label>Longitude:</label>
                <br />
                <span>{_newListing.lng}</span>
                <br />
                <br />
                <label>Zipcode:</label>
                <br />
                <span>{_newListing.zipcode}</span>
                <br />
                <br />
                <label>Realator:</label>
                <br />
                <span>{_newListing.realator}</span>
                <br />
                <br />
                <label>Beds:</label>
                <br />
                <span>{_newListing.beds}</span>
                <br />
                <br />
                <label>Baths:</label>
                <br />
                <span>{_newListing.baths}</span>
                <br />
                <br />
                <label>Style:</label>
                <br />
                <span>{_newListing.style}</span>
                <br />
                <br />
                <label>Sqft:</label>
                <br />
                <span>{_newListing.sqft}</span>
                <br />
                <br />
                <label>Description:</label>
                <br />
                <span>{_newListing.description}</span>
                <br />
                <button onClick={props.prevStep} className="sell-prev-btn">Go Back</button>
                <button onClick={handleClick} className="sell-confirm-btn">Submit</button>
            </div>
        </div>
    )
}