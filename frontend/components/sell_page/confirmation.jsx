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

    const handlePrice = () => {
        if (_newListing.price.length === 0) {
            return (
                <p className="err-message">The price can't be empty</p>
            )
        } else {
            return (
                <span>{_newListing.price}</span>
            )
        }
    }

    const handleStatus = () => {
        if (_newListing.status.length === 0) {
            return (
                <p className="err-message">The status can't be empty</p>
            )
        } else {
            reutrn (
                <span>{_newListing.status}</span>
            )
        }
    }

    const handleAddress = () => {
        if (_newListing.address.length === 0) {
            return (
                <p className="err-message">The address can't be empty</p>
            )
        } else {
            reutrn (
                <span>{_newListing.address}</span>
            )
        }
    }

    const handleLat = () => {
        if (isNaN(_newListing.lat)) {
            return (
                <p className="err-message">The latitude is not a number</p>
            )
        } else {
            reutrn (
                <span>{_newListing.lat}</span>
            )
        }
    }

    
    const handleLng = () => {
        if (isNaN(_newListing.lng)) {
            return (
                <p className="err-message">The longitude is not a number</p>
            )
        } else {
            reutrn (
                <span>{_newListing.lng}</span>
            )
        }
    }

    
    const handleZipcode = () => {
        if (isNaN(_newListing.zipcode)) {
            return (
                <p className="err-message">The zipcode is not a number</p>
            )
        } else {
            reutrn (
                <span>{_newListing.zipcode}</span>
            )
        }
    }

    const handleRealator = () => {
        if (_newListing.realator.length === 0) {
            return (
                <p className="err-message">The realator can't be empty</p>
            )
        } else {
            reutrn (
                <span>{_newListing.realator}</span>
            )
        }
    }

    const handleBeds = () => {
        if (isNaN(_newListing.beds)) {
            return (
                <p className="err-message">The amount of beds is not a number</p>
            )
        } else {
            reutrn (
                <span className="err-message">{_newListing.beds}</span>
            )
        }
    }

    const handleBaths = () => {
        if (isNaN(_newListing.baths)) {
            return (
                <p className="err-message">The amount of baths is not a number</p>
            )
        } else {
            reutrn (
                <span>{_newListing.baths}</span>
            )
        }
    }
 
    const handleStyle = () => {
        if (_newListing.style.length === 0) {
            return (
                <p className="err-message">The style can't be empty</p>
            )
        } else {
            reutrn (
                <span>{_newListing.style}</span>
            )
        }
    }

    const handleSqft = () => {
        if (isNaN(_newListing.sqft)) {
            return (
                <p className="err-message">The sqft is not a number</p>
            )
        } else {
            reutrn (
                <span>{_newListing.sqft}</span>
            )
        }
    }

    const handleDescription = () => {
        if (_newListing.description.length === 0) {
            return (
                <p className="err-message">The description can't be empty</p>
            )
        } else {
            reutrn (
                <span>{_newListing.description}</span>
            )
        }
    }

    return (
        <div className="confirmation-container">
            <div className="sell-confirmation">
                <p>Please confirm that this information is correct. If not please go back and correct it.</p>
                <br />
                <br />
                <label>Price:</label>
                <br />
                {handlePrice()}
                <br />
                <br />
                <label>Status:</label>
                <br />
                {handleStatus()}
                <br />
                <br />
                <label>Address:</label>
                <br />
                {handleAddress()}
                <br />
                <br />
                <label>Latitude:</label>
                <br />
                {handleLat()}
                <br />
                <br />
                <label>Longitude:</label>
                <br />
                {handleLng()}
                <br />
                <br />
                <label>Zipcode:</label>
                <br />
                {handleZipcode()}
                <br />
                <br />
                <label>Realator:</label>
                <br />
                {handleRealator()}
                <br />
                <br />
                <label>Beds:</label>
                <br />
                {handleBeds()}
                <br />
                <br />
                <label>Baths:</label>
                <br />
                {handleBaths()}
                <br />
                <br />
                <label>Style:</label>
                <br />
                {handleStyle()}
                <br />
                <br />
                <label>Sqft:</label>
                <br />
                {handleSqft()}
                <br />
                <br />
                <label>Description:</label>
                <br />
                {handleDescription()}
                <br />
                <button onClick={props.prevStep} className="sell-prev-btn">Go Back</button>
                <button onClick={handleClick} className="sell-confirm-btn">Submit</button>
            </div>
        </div>
    )
}