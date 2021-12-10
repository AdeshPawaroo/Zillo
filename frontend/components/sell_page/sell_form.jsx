import React from "react";
import { Page1 } from "./page1";
import { Page2 } from "./page2";
import { Confirmation } from "./confirmation";

export class SellForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            price: "",
            address: "",
            beds: "",
            baths: "",
            status: "",
            zipcode: "",
            realator: "",
            style: "",
            sqft: "",
            description: "",
            lat: "",
            lng: ""
        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    render () {
        const { step } = this.state;

        const {
            price,
            address,
            beds,
            baths,
            status,
            zipcode,
            realator,
            style,
            sqft,
            description,
            lat,
            lng
        } = this.state;

        const values = {
            price,
            address,
            beds,
            baths,
            status,
            zipcode,
            realator,
            style,
            sqft,
            description,
            lat,
            lng
        }

        switch(step) {
            case 1:
                return (
                    <Page1 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <Page2 
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirmation 
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
        }  

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