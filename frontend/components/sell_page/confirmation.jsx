// import React from "react";
// import { createListing } from "../../actions/listing_actions";

// export class Confirmation extends React.Component {
//     constructor(props) {
//         super(props);

//     }

//     render() {
//         console.log(this.props);
//         const { values, prevStep } = this.props
//         return (
//             <div>
//                 <button onClick={prevStep}>Go Back</button>
                
//             </div>
//         )
//     }
// }

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createListing } from "../../actions/listing_actions";

export const Confirmation = (props) => {

    const dispatch = useDispatch();

    const newListing = {
        price: parseInt(props.values.price),
        baths: parseInt(props.values.price),
        beds: parseInt(props.values.beds),
        description: props.values.description,
        lat: parseFloat(props.values.lat),
        lng: parseFloat(props.values.lng),
        address: props.values.address,
        realator: props.values.realator,
        status: props.values.status,
        style: props.values.style,
        zipcode: parseInt(props.values.zipcode)
    }

    console.log(newListing);

    const handleClick = (e) => {
        dispatch(createListing(newListing))
    }

    return (
        <div>
            <button onClick={handleClick}>Submit</button>
            <h2>confirmation</h2>
        </div>
    )
}