import React from "react";

export const ListingSaves = (props) => {

    const currentSave = props.currentSave;

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
        </div>
    )
}