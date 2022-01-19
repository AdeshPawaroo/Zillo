import React from "react";
import { SellForm } from "./sell_form";

export const SellGreeting = () => {
    const handleClick = () => {
        window.location = "#/sell"
    }

    return (
        <div className="sell-greeting-container">
            <div className="sell-greeting-slogan">
                <h1>
                    Sell your home with confidence
                </h1>
                <br />
                <p>
                    Zillo is making it simpler to sell your home and move forward.
                </p>
            </div>
            <div className="sell-greeting-photo"></div>
            <div className="sell-info-container">
                <div className="sell-info-contents">
                    <h1>
                        Sell traditionally with Zillo
                    </h1>
                    <br />
                    <p>
                        When you work with Zillo, you'll get selling support at every step,
                        <br />
                        from prepping and listing your home to marketing that gets buyers in the door.
                    </p>
                    <br />
                    <br />
                    <button className="sell-info-button" onClick={handleClick}>Post a listing</button>
                </div>
                {/* <div className="sell-info-picture"></div> */}
                <div>
                    <img src={window.sell_info_pic} />    
                </div>
            </div>
        </div>
    )
}