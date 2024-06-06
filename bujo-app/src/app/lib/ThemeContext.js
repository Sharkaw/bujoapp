"use client";
import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const [user, setUser] = useState(null);

    // const handleUser = (name) => {
    //     setUser(() => {
    //         return name;
    //     });
    // }

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, user, setUser }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;