import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

export const Page_2 = (props) => {
    library.add(faArrowLeft, faArrowRight)
    const { values, nextStep, prevStep, handleChange, handleFile } = props;
    
    return (
        <div className="page-container">
            <div className="page-contents">
                <div className="page-form-container">
                    <form className="page-form">
                        <div className="page-form-r1">
                            <div className="page-form-element">
                                <h1>BEDS*</h1>
                                <select name="status" id="select2" defaultValue={values.beds} onChange={handleChange("beds")}>
                                    <option value="none" hidden>Select an Option</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                </select>
                            </div>
                            <div className="page-form-element">
                                <h1>BATHS*</h1>
                                <select name="status" id="select2" defaultValue={values.baths} onChange={handleChange("baths")}>
                                    <option value="none" hidden>Select an Option</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <div className="page-form-r2">
                            <div className="page-form-element">
                                <h1>STYLE*</h1>
                                <select name="status" id="select2" defaultValue={values.style} onChange={handleChange("style")}>
                                    <option value="none" hidden>Select an Option</option>
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
                            </div>
                            <div className="page-form-element">
                                <h1>SQFT*</h1>
                                <input type="textarea"
                                    placeholder={values.sqft}
                                    onChange={handleChange("sqft")}
                                    defaultValue={values.sqft}
                                />
                            </div>
                        </div>
                        <div className="page-form-r3">
                            <div className="page-form-element-desc">
                                <h1>DESCRIPTION*</h1>
                                <input type="textarea"
                                    placeholder={values.description}
                                    onChange={handleChange("description")}
                                    defaultValue={values.description}
                                />
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="page-form-r4">
                            <div className="page-form-element-image">
                                <h1>Add a photo of the listing (optional):</h1>
                                <input type="file"
                                    onChange={handleFile}
                                />
                            </div>
                        </div>
                        <div className="page-form-buttons">
                            <button onClick={nextStep}>CONTINUE
                                {" "}<FontAwesomeIcon icon={faArrowRight} onClick={nextStep} />
                            </button>
                            <button onClick={prevStep}>GO BACK
                                {" "}<FontAwesomeIcon icon={faArrowLeft} onClick={prevStep} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}