import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "*::-webkit-scrollbar": {
                    width: "0.4em",
                    height: "0.4em",
                    backgroundColor: "#FFFFFF",
                },
                "*::-webkit-scrollbar-thumb": {
                    backgroundColor: "#5BC0BE",
                },
                "*": {
                    boxSizing: "unset",
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    "color": "#FEFFFF",
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                },
            },
        },
    },
    typography: {
        fontFamily: "'Jost', sans-serif",
    },
    breakpoints: {
        values: {
            xs: 450,
            sm: 960,
            md: 1048,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        background: {
            default: "#FFFFFF",
        },
        secondary: {
            main: "#1EA4D9",
        },
        action: {
            hover: "#22CCF2",
        },
        text: {
            primary: "#000000",
            secondary: "#284259",
        },
    },
});

export const darkTheme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                "*::-webkit-scrollbar": {
                    width: "0.4em",
                    height: "0.4em",
                    backgroundColor: "#0B132B",
                },
                "*::-webkit-scrollbar-thumb": {
                    backgroundColor: "#3A506B",
                },
                "*": {
                    boxSizing: "unset",
                },
            },
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    "color": "#FEFFFF",
                    "&:hover": {
                        backgroundColor: "transparent",
                    },
                },
            },
        },
    },
    typography: {
        fontFamily: "'Jost', sans-serif",
    },
    breakpoints: {
        values: {
            xs: 450,
            sm: 960,
            md: 1048,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        background: {
            default: "#0B132B",
        },
        secondary: {
            main: "#1EA4D9",
        },
        action: {
            hover: "#22CCF2",
        },
        text: {
            primary: "#FEFFFF",
            secondary: "#9BE2F2",
        },
    },
});
