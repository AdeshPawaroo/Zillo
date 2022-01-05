import React from "react";

export const Page1 = (props) => {
    
    const { values, nextStep, handleChange } = props;

    return ( 
        <div className="page1-container">
            <h1>Sell Form - Page 1</h1>
            <form className="page1-form">
                <label>Price: (Please include a "$" and ","s)</label>
                <br />
                <input type="textarea"
                    placeholder={values.price}
                    onChange={handleChange("price")}
                    defaultValue={values.price}
                />
                <br />
                <br />
                <label>Status (for sale OR for rent):</label>
                <br />
                <input type="textarea"
                    placeholder={values.status}
                    onChange={handleChange("status")}
                    defaultValue={values.status}
                />
                <br />
                <br />
                <label>Address:</label>
                <br />
                <input type="textarea"
                    placeholder={values.address}
                    onChange={handleChange("address")}
                    defaultValue={values.address}
                />
                <br />
                <br />
                <label>Latitude:</label>
                <br />
                <input type="textarea"
                    placeholder={values.lat}
                    onChange={handleChange("lat")}
                    defaultValue={values.lat}
                />
                <br />
                <br />
                <label>Longitude:</label>
                <br />
                <input type="textarea"
                    placeholder={values.lng}
                    onChange={handleChange("lng")}
                    defaultValue={values.lng}
                />
                <br />
                <br />
                <label>Zipcode:</label>
                <br />
                <input type="textarea"
                    placeholder={values.zipcode}
                    onChange={handleChange("zipcode")}
                    defaultValue={values.zipcode}
                />
                <br />
                <br />
                <label>Realator:</label>
                <br />
                <input type="textarea"
                    placeholder={values.realator}
                    onChange={handleChange("realator")}
                    defaultValue={values.realator}
                />
                <button onClick={nextStep} className="sell-cont-btn">Continue</button>
            </form>
        </div>
    )
}