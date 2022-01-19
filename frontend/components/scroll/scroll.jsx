import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
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