import React from "react";

export const Page1 = () => {
    return(
        <div className="page1-container">
            <div className="page1-contents">

            </div>
            <br />
            <h1>Why post on Zillo?</h1>
            <br />
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