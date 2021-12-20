import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSaves, createSave, deleteSave } from "../../actions/save_actions";

export const ListingButton = (props) => {

    const dispatch = useDispatch();
    const saves = useSelector(state => state.entities.saves);
    const saveIds = Object.keys(saves);

    const currentListing = props.saveObj;
    let ele2 = {};
    
    const handleSave = (e) => {
        e.preventDefault();

        dispatch(createSave(currentListing));
        dispatch(fetchSaves());
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
                dispatch(fetchSaves());
            }
        }
    }

    const saveButton = (
        <button onClick={handleSave}>
            Save
        </button>
    )

    const deleteButton = (
        <button onClick={handleDelete}>
            Delete
        </button>
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




// currentListing.address === currentSave.address &&
// currentListing.baths === currentSave.baths &&
// currentListing.beds === currentSave.beds &&
// currentListing.description === currentSave.description &&
// currentListing.lat === currentSave.lat &&
// currentListing.lng === currentSave.lng &&
// currentListing.price === currentSave.price &&
// currentListing.realator === currentSave.realator &&
// currentListing.sqft === currentSave.sqft &&
// currentListing.status === currentSave.status &&
// currentListing.style === currentSave.style &&
// currentListing.zipcode === currentSave.zipcode










// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { fetchSaves, createSave } from "../../actions/save_actions"

// export const ListingButton = (props) => {

//     const [saves, setSaves] = useState({
//         saves: {}
//     });

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchSaves())
//             .then(res => setSaves({
//                 saves: res.saves
//             }));
//     }, []);

//     const saveButton = (
//         <button onClick={handleSave}>
//             Save
//         </button>
//     )

//     const deleteButton = (
//         <button>
//             Delete
//         </button>
//     )

//     const ele1 = {
//         address: props.saveObj.address,
//         baths: props.saveObj.baths,
//         beds: props.saveObj.beds,
//         description: props.saveObj.description,
//         lat: props.saveObj.lat,
//         lng: props.saveObj.lng,
//         price: props.saveObj.price,
//         realator: props.saveObj.realator,
//         sqft: props.saveObj.sqft,
//         status: props.saveObj.status,
//         style: props.saveObj.style,
//         zipcode: props.saveObj.zipcode
//     }

//     const handleSave = (e) => {
//         e.preventDefault();

//         dispatch(createSave(props.saveObj))
//     }

//     const handleDelete = (e) => {
//         e.preventDefault();

//         dispatch()
//     }

//     const handleButton = () => {
//         const arrOfSaves = Object.values(saves.saves);
//         let arrOfKeys = {};
//         let ele2 = {};

//         for (let i = 0; i < arrOfSaves.length; i++) {
//             let currentSave = arrOfSaves[i];
//             ele2 = {
//                 address: currentSave.address,
//                 baths: currentSave.baths,
//                 beds: currentSave.beds,
//                 description: currentSave.description,
//                 lat: currentSave.lat,
//                 lng: currentSave.lng,
//                 price: currentSave.price,
//                 realator: currentSave.realator,
//                 sqft: currentSave.sqft,
//                 status: currentSave.status,
//                 style: currentSave.style,
//                 zipcode: currentSave.zipcode
//             }
//             arrOfKeys = Object.keys(ele2);

//             for (let j = 0; j < arrOfKeys.length; j++) {
//                 let currentKey = arrOfKeys[j];

//                 if (ele1[currentKey] !== ele2[currentKey]) {
//                     return saveButton
//                 }
//             }  
//         }

//         return deleteButton
//     }

//     return (
//         handleButton()
//     )
// }


































// import React, { useEffect, useState} from "react";
// import { useDispatch } from "react-redux";
// import { fetchSaves, createSave } from "../../actions/save_actions";

// export const ListingButton = (props) => {

//     const [saves, setSaves] = useState({
//         saves: {}
//     })

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchSaves())
//             .then(res => setSaves({
//                 saves: res.saves
//             }))
//     }, []);

//     const handleSave = (e) => {
//         e.preventDefault();

//         dispatch(createSave(props.saveObj))
//     }

//     const saveButton = (
//         <button onClick={handleSave}>
//             Save
//         </button>
//     )

//     const deleteButton = (
//         <button>Delete</button>
//     )


//     //value1 is an array
//     //value2 is an array
//     const handleCompare = () => {
//         // const value1 = Object.getOwnPropertyNames(props.saveObj);
//         const value1 = Object.values(props.saveObj);
//         const temp = Object.values(saves.saves);

//         for (let i = 0; i < temp.length; i++) {
//             let currentVal = temp[i];
//             let value2 = Object.values(currentVal);
    
//             console.log(value1, "ONEEEEEEEEEEEEEE");
//             console.log(value2, "TWOOOOOOOOOO");

//             if (value1.length !== value2.length) {
//                 return false;
//             }

//             for (let j = 0; j < value1.length; j++) {
            

//                 // if (value1[property] !== value2[property]) {
//                 //     return false;
//                 // }
//             }
//         }

//         return true;
//     }

//     console.log(handleCompare());

//     const handleButton = () => {
//         if (props.saveObj === saves.saves) {
//             return (
//                 deleteButton
//             )
//         } else {
//             return (
//                 saveButton
//             )
//         }
//     }

//     const temp = Object.values(saves.saves);
//     // console.log(temp);

//     // console.log(saves.saves, "saves");

//     return (
//         handleButton()
//     )

// }