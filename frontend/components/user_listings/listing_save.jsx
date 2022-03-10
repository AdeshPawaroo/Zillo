import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSave } from "../../actions/save_actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as fasFaHeart} from "@fortawesome/free-solid-svg-icons";

export const ListingSaves = (props) => {
    library.add(fasFaHeart);
    const dispatch = useDispatch();
    const currentSave = props.currentSave;
    const saves = useSelector(state => state.entities.saves);
    const saveIds = Object.keys(saves);
  
    const handleDelete = (e) => {
        e.preventDefault();
        const confirmation = confirm("Are you sure you want to un-save this listing?");
        if (confirmation === true) {
            for (let i = 0; i < saveIds.length; i++) {
                let id = saveIds[i];
                if (
                    currentSave.address === saves[id].address &&
                    currentSave.baths === saves[id].baths &&
                    currentSave.beds === saves[id].beds &&
                    currentSave.description === saves[id].description &&
                    currentSave.lat === saves[id].lat &&
                    currentSave.lng === saves[id].lng &&
                    currentSave.price === saves[id].price &&
                    currentSave.realator === saves[id].realator &&
                    currentSave.sqft === saves[id].sqft &&
                    currentSave.status === saves[id].status &&
                    currentSave.style === saves[id].style &&
                    currentSave.zipcode === saves[id].zipcode
                ) {
                    dispatch(deleteSave(id));
                }
            }
        }
    }

    const deleteButton = (
        <FontAwesomeIcon icon={fasFaHeart} onClick={handleDelete} />
    )

    const handleClick = (e) => {
        e.preventDefault();
        window.location = `/#/listings/${props.currentSaveId}`
    }

    return (
        <div className="save-item-container" onClick={handleClick}>
            <div className="save-photo"></div>
            <p className="save-price">
                {currentSave.price}
            </p>
            <p className="save-stats">
                {currentSave.beds} {" bds "}
                {currentSave.baths} {" ba "}
                {currentSave.sqft} {" sqft -"}
                {currentSave.status} 
            </p>
            <p className="save-address">
                {currentSave.address}
            </p>
            <p className="save-realator">
                {currentSave.realator}
            </p>
            {deleteButton}
        </div>
    )
}