import { createContext, Dispatch, SetStateAction } from "react";

interface ThemeContextType {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {},
});
