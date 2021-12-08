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
        console.log(this.props);
        return (
            <div>
                <form className="page1-form">
                    <label>Price</label>
                    <input type="textarea"
                        placeholder={values.price}
                        onChange={handleChange("price")}
                        defaultValue={values.price}
                    />
                    <br />
                    <label>Status:</label>
                    <input type="textarea"
                        placeholder={values.status}
                        onChange={handleChange("status")}
                        defaultValue={values.status}
                    />
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
                    <input type="textarea"
                        placeholder={values.realator}
                        onChange={handleChange("realator")}
                        defaultValue={values.realator}
                    />

                </form>
                <button onClick={nextStep}>Continue</button>
                <h2>page1</h2>
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