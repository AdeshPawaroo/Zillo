import React from "react";

export class Page1 extends React.Component {
    constructor(props) {
        super(props);
    }

    continue = (e) => {
        e.preventDefault();

        this.props.nextStep();
    }

    render() {
        const { values, nextStep, handleChange } = this.props
        return ( 
            <div className="page1-container">
                <form className="page1-form">
                    <label>Price:</label>
                    <br />
                    <input type="textarea"
                        placeholder={values.price}
                        onChange={handleChange("price")}
                        defaultValue={values.price}
                    />
                    <br />
                    <br />
                    <label>Status:</label>
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
                    <button onClick={nextStep} className="sell-cont-btn">continue</button>
                </form>
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