"use client";
import "./buttons.css";
// import { FiX } from "react-icons/fi";

export function IconButton({ onClick }) {
    return (
        <button
            className={`bg-white text-base text-gray-800  m-1 px-3 py-1  hover:bg-gray-300 hover:border-gray-300  border-white shadow inline-block`}
            onClick={onClick}
        >
            x{/* <FiX /> */}
        </button>
    );
}
