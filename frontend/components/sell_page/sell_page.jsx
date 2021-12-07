import React from "react";
import { useDispatch } from "react-redux";
import { SellForm1 } from "./sell_form_1";

export const SellPage = (props) => {

    return (  
        // render sell page 1 
        <h2>
            <SellForm1 />
        </h2>
    )
}



// render sell page 1 
// sell page 1 calls sell page 2
// sell page 2 calls sell page 3
// each sell page passes current props to the next
// use ref to keep values present in infoboxes