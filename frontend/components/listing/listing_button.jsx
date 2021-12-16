import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { fetchSaves, createSave } from "../../actions/save_actions";

export const ListingButton = (props) => {

    const [saves, setSaves] = useState({
        saves: {}
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSaves())
            .then(res => setSaves({
                saves: res.saves
            }))
    }, []);

    const handleSave = (e) => {
        e.preventDefault();

        dispatch(createSave(props.saveObj))
    }

    const saveButton = (
        <button onClick={handleSave}>
            Save
        </button>
    )

    const deleteButton = (
        <button>Delete</button>
    )

    const handleButton = () => {
        if (props.saveObj === saves.saves) {
            return (
                deleteButton
            )
        } else {
            return (
                saveButton
            )
        }
    }

    console.log(props.saveObj, "PROPS");
    console.log(saves.saves, "STATE");

    // FIGURE OUT HOW TO CHECK IF AN OBJECT CONTAINS A SPECIFIC VALUE

    // console.log(props.saveObj.hasOwnProperty(saves.saves)); DOES NOT WORK

    return (
        handleButton()
    )

}

//add check to see if the item is already inside of saves db before saving