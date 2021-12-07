import React, { useState, useRef } from "react";

export const SellForm1 = () => {

    const [values, setValues] = useState({
        beds: null,
        baths: null
    });

    const _beds = useRef(null);
    const _baths = useRef(null);

    const handleBeds = () => {
        _beds.current.focus();
        setValues({
            beds: _beds.current.value,
            baths: values.baths
        });
    }

    const handleBaths = () => {
        _baths.current.focus();
        setValues({
            beds: values.beds,
            baths: _baths.current.value
        });
    }

    console.log(values);
    
    return (
       <div className="form1-container">
            <form className="form1">
                <label>Beds:</label>
                <br />
                <input type="textarea" className="input-beds" name="beds" value={values.beds} ref={_beds} placeholder={values.beds} onChange={handleBeds}/>
                <br />
                <label>Baths:</label>
                <br />
                <input type="textarea" className="input-baths" name="baths" value={values.baths} ref={_baths} placeholder={values.baths} onChange={handleBaths}/>
            </form>
       </div>
    )
}