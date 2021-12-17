import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSaves, createSave } from "../../actions/save_actions"

export const ListingButton = (props) => {

    const [saves, setSaves] = useState({
        saves: {}
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSaves())
            .then(res => setSaves({
                saves: res.saves
            }));
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
        <button>
            Delete
        </button>
    )

    const ele1 = {
        address: props.saveObj.address,
        baths: props.saveObj.baths,
        beds: props.saveObj.beds,
        description: props.saveObj.description,
        lat: props.saveObj.lat,
        lng: props.saveObj.lng,
        price: props.saveObj.price,
        realator: props.saveObj.realator,
        sqft: props.saveObj.sqft,
        status: props.saveObj.status,
        style: props.saveObj.style,
        zipcode: props.saveObj.zipcode
    }

    const handleButton = () => {
        const arrOfSaves = Object.values(saves.saves);
        let arrOfKeys = {};
        let ele2 = {};

        for (let i = 0; i < arrOfSaves.length; i++) {
            let currentSave = arrOfSaves[i];
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
            arrOfKeys = Object.keys(ele2);

            for (let j = 0; j < arrOfKeys.length; j++) {
                let currentKey = arrOfKeys[j];

                if (ele1[currentKey] !== ele2[currentKey]) {
                    return false;
                }
            }  
        }

        return true;
    }

    console.log(handleButton());

    return (
        saveButton
    )
}















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