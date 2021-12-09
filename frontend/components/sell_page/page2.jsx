import React from "react";

export class Page2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        const { values, prevStep, nextStep, handleChange } = this.props;
        return (
            <div>
                <form className="page2-form">
                    <label>Beds:</label>
                    <input type="textarea" 
                        placeholder={values.beds}
                        onChange={handleChange("beds")}
                        defaultValue={values.beds}
                    />
                    <br />
                    <label>Baths:</label>
                    <input type="textarea" 
                        placeholder={values.baths}
                        onChange={handleChange("baths")}
                        defaultValue={values.baths}
                    />
                    <br />
                    <label>Style:</label>
                    <input type="textarea" 
                        placeholder={values.style}
                        onChange={handleChange("style")}
                        defaultValue={values.style}
                    />
                    <br />
                    <label>Sqft:</label>
                    <input type="textarea" 
                        placeholder={values.sqft}
                        onChange={handleChange("sqft")}
                        defaultValue={values.sqft}
                    />
                    <br />
                    <label>Description:</label>
                    <input type="text" 
                        placeholder={values.description}
                        onChange={handleChange("description")}
                        defaultValue={values.description}
                    />
                    <br />
                </form>
                <button onClick={prevStep}>Go Back</button>
                <button onClick={nextStep}>Continue</button>
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