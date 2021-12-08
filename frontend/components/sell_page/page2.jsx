import React from "react";

export class Page2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { prevStep } = this.props;
        console.log(this.props);
        return (
            <div>
                <button onClick={prevStep}>Go Back</button>
                <h2>page2</h2>
            </div>
        )
    }
}


// FORM 1
// - PRICE
// - STATUS 
// - ADDRESS 
// - ZIPCODE
// - REALATOR

// FORM 2
// - BEDS
// - BATHS 
// - STYLE 
// - DESCRIPTION 

// FORM 3
// - CONFIRMATION
// - LAT 
// - LNG