import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
    // useEffect(() => {
    //     const scroll = (history.listen(() => {
    //         window.scrollTo(0, 0);
    //     }));
    //     return() => {
    //         scroll();
    //     }
    // }, []);

    const path = useLocation()

    const scroll = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        scroll();
    }, [path]);

    return (
        null
    );
}