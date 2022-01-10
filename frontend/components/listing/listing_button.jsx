import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSaves, createSave, deleteSave } from "../../actions/save_actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasFaHeart} from "@fortawesome/free-solid-svg-icons";

export const ListingButton = (props) => {

    library.add(fasFaHeart, farFaHeart);
    const dispatch = useDispatch();
    const saves = useSelector(state => state.entities.saves);
    const saveIds = Object.keys(saves);
    const currentListing = props.saveObj;
    let ele2 = {};
    
    const handleSave = (e) => {
        e.preventDefault();

        dispatch(createSave(currentListing));
    }

    const handleDelete = (e) => {
        e.preventDefault();

        for (let i = 0; i < saveIds.length; i++) {
            let id = saveIds[i];

            if (
                currentListing.address === saves[id].address &&
                currentListing.baths === saves[id].baths &&
                currentListing.beds === saves[id].beds &&
                currentListing.description === saves[id].description &&
                currentListing.lat === saves[id].lat &&
                currentListing.lng === saves[id].lng &&
                currentListing.price === saves[id].price &&
                currentListing.realator === saves[id].realator &&
                currentListing.sqft === saves[id].sqft &&
                currentListing.status === saves[id].status &&
                currentListing.style === saves[id].style &&
                currentListing.zipcode === saves[id].zipcode
            ) {
                dispatch(deleteSave(id));
            }
        }
    }

    const saveButton = (
        <FontAwesomeIcon icon={farFaHeart} onClick={handleSave} />
    )

    const deleteButton = (
        <FontAwesomeIcon icon={fasFaHeart} onClick={handleDelete} />
    )

    const handleButton = () => {
        let temp = Object.values(saves)
        for (let i = 0; i < temp.length; i++) {
            let currentSave = temp[i];
            ele2 = {
                address: currentSave.address,
                baths: currentSave.baths,
                beds: currentSave.beds,
                description: currentSave.description,
                lat: currentSave.lat,
                lng: currentSave.lng,
                price: currentSave.price,
                realator: currentSave.realator,
                sqft: currentSave.sqft,
                status: currentSave.status,
                style: currentSave.style,
                zipcode: currentSave.zipcode
            }

            if (
                currentListing.address === ele2.address &&
                currentListing.baths === ele2.baths &&
                currentListing.beds === ele2.beds &&
                currentListing.description === ele2.description &&
                currentListing.lat === ele2.lat &&
                currentListing.lng === ele2.lng &&
                currentListing.price === ele2.price &&
                currentListing.realator === ele2.realator &&
                currentListing.sqft === ele2.sqft &&
                currentListing.status === ele2.status &&
                currentListing.style === ele2.style &&
                currentListing.zipcode === ele2.zipcode
            ) {
                return deleteButton;
            }
        }

        return saveButton;
    }

    return (
        handleButton()
    )
}