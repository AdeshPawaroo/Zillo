import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteListing } from "../../actions/listing_actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const ListingSell = (props) => {
    library.add(faTrash)
    const dispatch = useDispatch();
    const currentSale = props.currentSell;
    const sales = useSelector(state => state.entities.listings);
    const saleIds = Object.keys(sales);  

    const handleDelete = (e) => {
        e.preventDefault();
        const confirmation = confirm("Are you sure you want to un-list this listing?")
        if (confirmation === true) {
            for (let i = 0; i < saleIds.length; i++) {
                let id = saleIds[i];
                if (
                    currentSale.address === sales[id].address &&
                    currentSale.baths === sales[id].baths &&
                    currentSale.beds === sales[id].beds &&
                    currentSale.description === sales[id].description &&
                    currentSale.lat === sales[id].lat &&
                    currentSale.lng === sales[id].lng &&
                    currentSale.price === sales[id].price &&
                    currentSale.realator === sales[id].realator &&
                    currentSale.sqft === sales[id].sqft &&
                    currentSale.status === sales[id].status &&
                    currentSale.style === sales[id].style &&
                    currentSale.zipcode === sales[id].zipcode
                ) {
                    dispatch(deleteListing(id));
                }
            }
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        window.location = `/#/listings/${props.currentSellId}`
    }

    const trashIcon = (
        <FontAwesomeIcon icon={faTrash} onClick={handleDelete}/>
    );

    return (
        <div className="sell-item-container" onClick={handleClick}>
            <div className="sell-photo"></div>
            <p className="sell-price">
                {currentSale.price}
            </p>
            <p className="sell-stats">
                {currentSale.beds} {" bds "}
                {currentSale.baths} {" ba "}
                {currentSale.sqft} {" sqft -"}
                {currentSale.status} 
            </p>
            <p className="sell-address">
                {currentSale.address}
            </p>
            <p className="sell-realator">
                {currentSale.realator}
            </p>
            {trashIcon}
        </div>
    )
}