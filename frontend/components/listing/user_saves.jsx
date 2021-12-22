import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSaves } from "../../actions/save_actions";
import { ListingSaves } from "./listing_save";

export const UserSaves = (props) => {

    const dispatch = useDispatch();
    const saves = Object.values(useSelector(state => state.entities.saves));
    const currentUser = useSelector(state => state.session.currentUser);
    const userSaves = [];

    useEffect(() => {
        dispatch(fetchSaves());
    }, []);

    for (let i = 0; i < saves.length; i++) {
        let currentSave = saves[i];

        if (currentSave.owner_id === currentUser) {
            userSaves.push(currentSave);
        }
    }

    return (
        <div className="user-saves-container">
            <span className="saves-slogan">Your currently saved listings: </span>
            <br />
            <br />
            <div className="save-listing-container">
                {userSaves.map((save, i) => (
                    <ListingSaves 
                        currentSave={save}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}