import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();
export function ThemeContextProvider(props) {

    let [DarkMode, setDarkMode] = useState(false)
    const value = { DarkMode, setDarkMode };

    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}