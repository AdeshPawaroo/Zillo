import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

export const Page_1 = (props) => {
    library.add(faArrowRight);
    const { values, nextStep, handleChange } = props;

    return (
        <div className='page-container'>
            <div className="page-contents">
                <h1>Post a Listing By Owner</h1>
                <div className='page-form-container'>
                    <form className='page-form'>
                        <div className="page-form-r1">
                            <div className="page-form-element">
                                <h1>ADDRESS*</h1>
                                <input type="textarea"
                                    placeholder={values.address}
                                    onChange={handleChange("address")}
                                    defaultValue={values.address}
                                />
                            </div>
                            <div className="page-form-element">
                                <h1>ZIPCODE*</h1>
                                <input type="textarea"
                                    placeholder={values.zipcode}
                                    onChange={handleChange("zipcode")}
                                    defaultValue={values.zipcode}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="page-form-r2">
                            <div className='single-page-form-element'>
                                <h1>PRICE*</h1>
                                <input type="textarea" 
                                    placeholder={values.price}
                                    onChange={handleChange("price")}
                                    defaultValue={values.price}
                                />
                            </div>
                        </div>
                        <br />
                        <div className="page-form-r3">
                            <div className="page-form-element">
                                <h1>STATUS*</h1>
                                <input type="textarea" />
                            </div>
                            <div className="page-form-element">
                                <h1>REALATOR*</h1>
                                <select className="realator-select" name="status" id="select2" onChange={handleChange("realator")}>
                                    <option value="none" selected disabled hidden>Select an Option</option>
                                    <option value="Crown Realators">Crown Realators</option>
                                    <option value="Empire Estates">Empire Estates</option>
                                    <option value="Royalty Regals">Royalty Regals</option>
                                    <option value="Sunshine Agency">Sunshine Agency</option>
                                 </select>
                            </div>
                        </div>
                        <br />
                        <div className="page-form-r4">
                            <div className="page-form-element">
                                <h1>LATITUDE*</h1>
                                <input type="textarea" 
                                    placeholder={values.lat}
                                    onChange={handleChange("lat")}
                                    defaultValue={values.lat}
                                />
                            </div>
                            <div className="page-form-element">
                                <h1>LONGITUDE*</h1>
                                <input type="textarea" 
                                    placeholder={values.lng}
                                    onChange={handleChange("lng")}
                                    defaultValue={values.lng}
                                />
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className='page-form-buttons'>
                            <button onClick={nextStep}>CONTINUE
                                {" "}<FontAwesomeIcon icon={faArrowRight} onClick={nextStep}/>
                            </button>
                        </div>
                    </form>
                </div>
            </div>            
        </div>
    )
}