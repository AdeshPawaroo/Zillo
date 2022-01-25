import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasFaHeart} from "@fortawesome/free-solid-svg-icons";

export const ListingSaves = (props) => {
    library.add(fasFaHeart);
    const currentSave = props.currentSave;

    const handleDelete  = () => {

    }

    const deleteButton = (
        <FontAwesomeIcon icon={fasFaHeart} onClick={handleDelete} />
    )

    return (
        <div className="save-item-container">
            <div className="save-photo"></div>
            <p className="save-price">
                {currentSave.price}
            </p>
            <p className="save-stats">
                {currentSave.beds} {" bds "}
                {currentSave.baths} {" ba "}
                {currentSave.sqft} {" sqft -"}
                {currentSave.status} 
            </p>
            <p className="save-address">
                {currentSave.address}
            </p>
            <p className="save-realator">
                {currentSave.realator}
            </p>
            {deleteButton}
        </div>
    )
}