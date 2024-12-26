import { useState, useEffect } from "react";
import { styled } from "@mui/material";

import "animate.css";
const StyledLoaderContainer = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    position: "fixed",
    backgroundColor: theme.palette.background.default,
}));

export const Loader = () => {
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHasLoaded(true);
        }, 1800);
    }, []);

    return (
        <StyledLoaderContainer>
            <div className={hasLoaded ? "animate__animated animate__fadeOut" : ""}></div>
        </StyledLoaderContainer>
    );
};
