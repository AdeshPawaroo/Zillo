import React, { useState } from "react";

export const Page1 = () => {
    const [status, setStatus] = useState({
        status: ""
    });

    const [style, setStyle] = useState({
        style: ""
    });

    const [realator, setRealator] = useState({
        realator: ""
    });

    const [values, setValues] = useState({
        step: 1,
        price: "",
        address: "",
        beds: "",
        baths: "",
        zipcode: "",
        sqft: "",
        description: "",
        lat: "",
        lng: "",
    });

    const nextStep = () => {
        const { step } = this.state;
        setValues({
            step: step + 1
        });
    };

    const prevStep = () => {
        const { step } = this.state;
        setValues({
            step: step - 1
        });
    };

    const handleChange = input => e => {
        setValues({
            [input]: e.target.value
        });
    };

    const handleRealator = (e) => {
        setRealator({
            realator: e.target.value
        });
    };

    const handleStyle = (e) => {
        setStyle({
            style: e.target.value
        });
    };

    const handleStatus = (e) => {
        setStatus({
            status: e.target.value
        });
    };
    console.log(values.price, "asdasd");
    return(
        <div className="page1-container">
            <div className="page1-contents">
                <h1>Post a Listing by Owner</h1>
                <div className="page1-form">
                    <label>Price (Please include a "$" and ","s:</label>
                    <input type="textarea" 
                        placeholder={values.price}
                        onChange={handleChange("price")}
                        defaultValue={values.price}
                    />
                    <label>Status</label>
                    <select name="status" id="select1" onChange={handleStatus}>
                        <option value="for sale">For Sale</option>
                        <option value="for rent">For Rent</option>
                    </select>
                </div>
            </div>
            <br />
            <h1>Why post on Zillo?</h1>
            <br />
            <div className="page1-info">
                <div className="page1-panel">
                    <img src={window.page1img1} />
                    On Zillo, you can post a listing for free!
                </div>
                <div className="page1-panel">
                <img src={window.page1img2} />
                    Your home will be listed on Zillo and Trulia, reaching
                    the largest audience of home shoppers on the Web.
                </div>
                <div className="page1-panel">
                <img src={window.page1img3} />
                    Home shoppers receive instant emails about new listings.
                </div>  
            </div>
        </div>
    )
}