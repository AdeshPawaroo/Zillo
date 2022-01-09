import React from "react";

export const Page2 = (props) => {

    const { values, nextStep, prevStep, handleChange } = props;

    return (
        <div className="page2-container">
            <h1>Sell Form - Page 2</h1>
            <form className="page2-form">
                <label>Beds:</label>
                <br />
                <input type="textarea" 
                    placeholder={values.beds}
                    onChange={handleChange("beds")}
                    defaultValue={values.beds}
                />
                <br />
                <br />
                <label>Baths:</label>
                <br />
                <input type="textarea" 
                    placeholder={values.baths}
                    onChange={handleChange("baths")}
                    defaultValue={values.baths}
                />
                <br />
                <br />
                <label>Style:</label>
                <input type="textarea" 
                    placeholder={values.style}
                    onChange={handleChange("style")}
                    defaultValue={values.style}
                />
                <br />
                <br />
                <label>Sqft:</label>
                <br />
                <input type="textarea" 
                    placeholder={values.sqft}
                    onChange={handleChange("sqft")}
                    defaultValue={values.sqft}
                />
                <br />
                <br />
                <label>Description:</label>
                <input type="text" 
                    placeholder={values.description}
                    onChange={handleChange("description")}
                    defaultValue={values.description}
                />
                <br />
                <button onClick={nextStep} className="sell-cont-btn">Continue</button>
                <button onClick={prevStep} className="sell-prev-btn">Back</button>
            </form>
        </div>
    )
}