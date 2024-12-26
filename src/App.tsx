import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeContext } from "contexts/ThemeContext";
import { Landing } from "@routes/Landing";
import { NotFound } from "@routes/NotFound";
import { lightTheme, darkTheme } from "styles/Theme";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const muiTheme = theme === "light" ? lightTheme : darkTheme;

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                <Router>
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default App;
