import React from "react";

export const Page1 = (props) => {
    const { values, nextStep, handleChange } = props;

    return(
        <div className="page1-container">
            <div className="page1-contents">
                <h1>Post a Listing by Owner</h1>
                <div className="page1-form-container">
                    <form className="page1-form">
                        <label>Price (Please include a "$" and ","s:</label>
                        <input type="textarea" 
                            placeholder={values.price}
                            onChange={handleChange("price")}
                            defaultValue={values.price}
                        />
                        <br />
                        <label>Status:</label>
                        <select className="realator-select" name="status" id="select2" onChange={handleChange("status")}>
                        <option value="none" selected disabed hidden>Select an Option</option>
                            <option value="for sale">For Sale</option>
                            <option value="for rent">For Rent</option>
                        </select>
                        <br />
                        <label>Address:</label>
                        <input type="textarea" 
                            placeholder={values.address}
                            onChange={handleChange("address")}
                            defaultValue={values.address}
                        />
                        <br />
                        <label>Zipcode:</label>
                        <input type="textarea" 
                            placeholder={values.zipcode}
                            onChange={handleChange("zipcode")}
                            defaultValue={values.zipcode}
                        />
                        <br />
                        <label>Realator:</label>
                        <select className="realator-select" name="status" id="select2" onChange={handleChange("realator")}>
                        <option value="none" selected disabed hidden>Select an Option</option>
                            <option value="Crown Realators">Crown Realators</option>
                            <option value="Empire Estates">Empire Estates</option>
                            <option value="Royalty Regals">Royalty Regals</option>
                            <option value="Sunshine Agency">Sunshine Agency</option>
                        </select>
                        <br />
                        <label>Latitude:</label>
                        <input type="textarea" 
                            placeholder={values.lat}
                            onChange={handleChange("lat")}
                            defaultValue={values.lat}
                        />
                        <br />
                        <label>Longitude:</label>
                        <input type="textarea" 
                            placeholder={values.lng}
                            onChange={handleChange("lng")}
                            defaultValue={values.lng}
                        />
                        <br />
                        <div className="page1-buttons">
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