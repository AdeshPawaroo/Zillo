import React from 'react';

export const Page_1 = (props) => {
    const { values, nextStep, handleChange } = props;

    return (
        <div className='page-container'>
            <div className="page-contents">
                <h1>Post a Listing By Owner</h1>
                <div className='page-form-container'>
                    <form className='page-form'>
                        <div className="page-form-r1">
                            <div className="page-form-address">
                                <h1>ADDRESS*</h1>
                                <input type="textarea"/>
                            </div>
                            <div className="page-form-price">

                            </div>
                        </div>
                    </form>
                </div>
            </div>            
        </div>
    )
}