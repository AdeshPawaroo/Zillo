import React, { useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { fetchSaves, createSave } from "../../actions/save_actions";

export const ListingButton = (props) => {

    const dispatch = useDispatch();
    let flag = false;

    useEffect(() => {
        dispatch(fetchSaves());
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
        if (flag === false) {
            return (
                saveButton
            )
        } else {
            return (
                deleteButton
            )
        }
    }

    return (
        handleButton()
    )

}

//add check to see if the item is already inside of saves db before saving