import React from "react";
// import { Page1 } from "./page1";
// import { Page2 } from "./page2";
import { Page_1 } from "./page_1";
import { Page_2 } from "./page_2";
import { Confirm } from "./confirm";

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
            lng: "",
            photoFile: null
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

    handleFile = e => {
        this.setState({
            photoFile: e.target.files[0]
        })
    }

    render () {
        const { step } = this.state;
        console.log(this.state, "VALUES");
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
                    <Page_1 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleFile={this.handleFile}
                        values={values}
                    />
                )
            case 2:
                return (
                    <Page_2 
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleFile={this.handleFile}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirm 
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
        }  

    }
}