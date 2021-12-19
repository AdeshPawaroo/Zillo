import React from "react";
import { useDispatch } from "react-redux";
import { fetchSaves, createSave } from "../../actions/save_actions";

export const ListingButton = (props) => {
    const dispatch = useDispatch();
    const saves = props.saves;
    const currentListing = props.saveObj;
    let ele2 = {};
    
    const handleSave = (e) => {
        e.preventDefault();

        dispatch(createSave(currentListing));
        dispatch(fetchSaves());
    }

    //find the element within the saves array
    //once element is found -> store the index of this element in the array
    // then delete this element using the splice() method
    //re-call dispatch(fetchSaves()) to udpate state
    const handleDelete = (e) => {
        e.preventDefault();

        let i;
        let index = null;
        for (i = 0; i < saves.length; i++) {
            let currentSave = saves[i];

            if (
                currentListing.address === currentSave.address &&
                currentListing.baths === currentSave.baths &&
                currentListing.beds === currentSave.beds &&
                currentListing.description === currentSave.description &&
                currentListing.lat === currentSave.lat &&
                currentListing.lng === currentSave.lng &&
                currentListing.price === currentSave.price &&
                currentListing.realator === currentSave.realator &&
                currentListing.sqft === currentSave.sqft &&
                currentListing.status === currentSave.status &&
                currentListing.style === currentSave.style &&
                currentListing.zipcode === currentSave.zipcode
            ) {
                index = i;
            }
        }
        
        //delete here -- refactor state so it deletes straight from state and not from temp arr
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