import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createListing } from "../../actions/listing_actions";
import { openModal } from "../../actions/modal_actions";

export const Confirm = (props) => {
    const { prevStep } = props;
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.currentUser);

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
        zipcode: parseInt(props.values.zipcode),
        owner_id: currentUser
    }

    const handleCheck = (obj) => {
        if (newListing.price.length === 0) {
            return false;
        }
        if (newListing.status.length === 0) {
            return false;
        }
        if (newListing.address.length === 0) {
            return false;
        }
        if (isNaN(newListing.lat)) {
            return false;
        }
        if (isNaN(newListing.lng)) {
            return false;
        }
        if (isNaN(newListing.zipcode)) {
            return false;
        }
        if (newListing.realator.length === 0) {
            return false;
        }
        if (isNaN(newListing.baths)) {
            return false;
        }
        if (isNaN(newListing.beds)) {
            return false;
        }
        if (isNaN(newListing.sqft)) {
            return false;
        }
        if (newListing.style.length === 0) {
            return false;
        }
        if (newListing.description.length === 0) {
            return false;
        }
        return true;
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (handleCheck === true) {
            dispatch(createListing(newListing));
            alert("Thanks! Your listing has been created!")
        }else {
           alert("Please enter the correct information.")
        }
    }
  
    const handlePrice = () => {
        if (newListing.price.length === 0) {
            return (
                <p className="err-message">The price can't be empty</p>
            )
        } else {
            return (
                <span>{newListing.price}</span>
            )
        }
    }

    const handleStatus = () => {
        if (newListing.status.length === 0) {
            return (
                <p className="err-message">The status can't be empty</p>
            )
        } else {
            return (
                <span>{newListing.status}</span>
            )
        }
    }

    const handleAddress = () => {
        if (newListing.address.length === 0) {
            return (
                <p className="err-message">The address can't be empty</p>
            )
        } else {
            return (
                <span>{newListing.address}</span>
            )
        }
    }
    
    const handleLat = () => {
        if (isNaN(newListing.lat)) {
            return (
                <p className="err-message">The latitude is not a number</p>
            )
        } else {
            return (
                <span>{newListing.lat}</span>
            )
        }
    }

    const handleLng = () => {
        if (isNaN(newListing.lng)) {
            return (
                <p className="err-message">The longitude is not a number</p>
            )
        } else {
            return (
                <span>{newListing.lng}</span>
            )
        }
    }

    const handleZipcode = () => {
        if (isNaN(newListing.zipcode)) {
            return (
                <p className="err-message">The zipcode is not a number</p>
            )
        } else {
            return (
                <span>{newListing.zipcode}</span>
            )
        }
    }

    const handleRealator = () => {
        if (newListing.realator.length === 0) {
            return (
                <p className="err-message">The realator can't be empty</p>
            )
        } else {
           return (
                <span>{newListing.realator}</span>
            )
        }
    }

    const handleBeds = () => {
        if (isNaN(newListing.beds)) {
            return (
                <p className="err-message">The amount of beds is not a number</p>
            )
        } else {
            return (
                <span className="err-message">{newListing.beds}</span>
            )
        }
    }

    const handleBaths = () => {
        if (isNaN(newListing.baths)) {
            return (
                <p className="err-message">The amount of baths is not a number</p>
            )
        } else {
            return (
                <span>{newListing.baths}</span>
            )
        }
    }
 
    const handleStyle = () => {
        if (newListing.style.length === 0) {
            return (
                <p className="err-message">The style can't be empty</p>
            )
        } else {
            return (
                <span>{newListing.style}</span>
            )
        }
    }

    const handleSqft = () => {
        if (isNaN(newListing.sqft)) {
            return (
                <p className="err-message">The sqft is not a number</p>
            )
        } else {
            return (
                <span>{newListing.sqft}</span>
            )
        }
    }

    const handleDescription = () => {
        if (newListing.description.length === 0) {
            return (
                <p className="err-message">The description can't be empty</p>
            )
        } else {
            return (
                <span>{newListing.description}</span>
            )
        }
    }

    return (
        <div className="confirm-container">
            <div className="confirm-sell">
            <h1>Please confirm that this information is correct. If not please go back and correct it.</h1>
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
                <br />
                <div className="confirm-buttons">
                    <button onClick={prevStep} className="sell-prev-btn">Go Back</button>
                    <button onClick={handleClick} className="sell-cont-btn">Submit</button>
                </div>
            </div>
        </div>
    )
}