import React from "react";
import { useDispatch } from "react-redux";
import { createSave } from "../../actions/save_actions";

export const ListingButton = (props) => {

    const dispatch = useDispatch();
    const saveObj = props.saveObj;
    const saves = props.saves;
    const ele1 = props.saveObj;
    let ele2 = {};

    const handleSave = (e) => {
        e.preventDefault();

        dispatch(createSave(saveObj));
    }

    //handleDelete

    const saveButton = (
        <button onClick={handleSave}>
            Save
        </button>
    )

    const deleteButton = (
        <button>
            Delete
        </button>
    )

    const handleButton = () => {
        for (let i = 0; i < saves.length; i++) {
            let currentSave = saves[i];
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
                ele1.address === ele2.address &&
                ele1.baths === ele2.baths &&
                ele1.beds === ele2.beds &&
                ele1.description === ele2.description &&
                ele1.lat === ele2.lat &&
                ele1.lng === ele2.lng &&
                ele1.price === ele2.price &&
                ele1.realator === ele2.realator &&
                ele1.sqft === ele2.sqft &&
                ele1.status === ele2.status &&
                ele1.style === ele2.style &&
                ele1.zipcode === ele2.zipcode
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

// }p