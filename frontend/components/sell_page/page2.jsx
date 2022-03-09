import React from "react";

export const Page2 = (props) => {
    const { values, nextStep, prevStep, handleChange } = props;

    return(
        <div className="page1-container">
            <div className="page1-contents">
                <h1>Post a Listing by Owner</h1>
                <div className="page1-form-container">
                    <form className="page1-form">
                        <label>Beds:</label>
                        <select name="status" id="select2" onChange={handleChange("beds")}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br />
                        <label>Baths:</label>
                        <select name="status" id="select2" onChange={handleChange("baths")}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <br />
                        <label>Style:</label>
                        <select name="status" id="select2" onChange={handleChange("style")}>
                        <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="bungalow">Bungalow</option>
                            <option value="cottage">Cottage</option>
                            <option value="victorian">Victorian</option>
                            <option value="ranch">Ranch</option>
                            <option value="colonial">Colonial</option>
                            <option value="manor">Manor</option>
                            <option value="villa">Villa</option>
                            <option value="chalet">Chalet</option>
                            <option value="apartment">Apartment</option>
                        </select>
                        <br />
                        <label>Sqft:</label>
                        <input type="textarea" 
                            placeholder={values.sqft}
                            onChange={handleChange("sqft")}
                            defaultValue={values.sqft}
                        />
                        <br />
                        <label>Description:</label>
                        <input type="textarea" 
                            placeholder={values.description}
                            onChange={handleChange("description")}
                            defaultValue={values.description}
                        />
                        <br />
                        <div className="page2-buttons">
                            <button onClick={prevStep} className="sell-prev-btn">Go Back</button>
                            <button onClick={nextStep} className="sell-cont-btn">Continue</button>
                        </div>
                    </form>
                </div>
            </div>
            <br />
            <h1>Why post on Zillo?</h1>
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