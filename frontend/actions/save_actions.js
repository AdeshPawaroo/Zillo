import * as SaveApiUtil from "../util/save_api_util";

export const RECEIVE_ALL_SAVES = "RECEIVE_ALL_SAVES";
export const RECEIVE_SAVE = "RECEIVE_SAVE";
export const REMOVE_SAVE = "REMOVE_SAVE";

const receiveSaves = (saves) => ({
    type: RECEIVE_ALL_SAVES,
    saves
});

const receiveSave = (save) => ({
    type: RECEIVE_SAVE,
    save
});

const removeSave = (save) => ({
    type: REMOVE_SAVE,
    save
});

export const fetchSaves = () => dispatch => (
    SaveApiUtil.fetchSaves()
        .then(saves => dispatch(receiveSaves(saves)))
    
);

export const fetchSave = (saveId) => dispatch => (
    SaveApiUtil.fetchSave(saveId)
        .then(save => dispatch(receiveSave(save)))
);

export const createSave = (save) => dispatch => (
    SaveApiUtil.createSave(save)
        .then(newSave => dispatch(receiveSave(newSave)))
);

export const deleteSave = (saveId) => dispatch => (
    SaveApiUtil.deleteSave(saveId)
        .then((save) => dispatch(removeSave(save)))
); 