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
                                <input type="textarea"/>
                            </div>
                            <div className="page-form-element">
                                <h1>ZIPCODE*</h1>
                                <input type="textarea"/>
                            </div>
                        </div>
                        <br />
                        <div className="page-form-r2">
                            <div className='single-page-form-element'>
                                <h1>PRICE*</h1>
                                <input type="textarea" />
                            </div>
                        </div>
                        <br />
                        <div className="page-form-r3">
                            <div className="page-form-element">
                                <h1>STATUS*</h1>
                            </div>
                            <div className="page-form-element">
                                <h1>REALATOR*</h1>
                            </div>
                        </div>
                        <br />
                        <div className="page-form-r4">
                            <div className="page-form-element">
                                <h1>LATITUDE*</h1>
                            </div>
                            <div className="page-form-element">
                                <h1>LONGITUDE*</h1>
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