import { styled, Container, Typography } from "@mui/material";

const isFirefox = /Firefox/i.test(navigator.userAgent);

export const StyledDivider = styled("div")`
    height: 0.4rem;
    width: 2rem;
    border-radius: 2rem;
    margin: 1rem;
    background: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledGenericRoot = styled("section")`
    min-height: 100vh;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
`;

export const StyledGenericContainer = styled(Container)`
    display: flex !important;
    flex-direction: column;
    align-items: center;
    align-self: center;
    box-sizing: unset !important;
    max-width: 1000px !important;
`;

export const StyledGenericTitle = styled(Typography)`
    font-weight: bold !important;
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: clamp(32px, 4vw, 56px) !important;
    text-align: ${isFirefox ? "-moz-center" : "-webkit-center"};
    animation: fadeInUp;
    animation-duration: 1s;
`;

export const StyledGenericSubText = styled(Typography)`
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: clamp(20px, 2vw, 26px) !important;
    text-align: center;
    animation: fadeInUp;
    animation-duration: 1s;
`;
