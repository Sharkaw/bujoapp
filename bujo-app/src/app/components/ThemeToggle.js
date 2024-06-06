"use client";
import { useContext } from "react";
import ThemeContext from "../lib/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme, setUser } = useContext(ThemeContext);
    

    return (
        <>
        <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded ${
                theme === "light"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-200"
            }`}
        >
            Toggle Theme
        </button>
        <button
            onClick={() => {
                setUser(() => "seppo");
            }}>
            Change name
        </button>
        </>
    );
};

export default ThemeToggle;