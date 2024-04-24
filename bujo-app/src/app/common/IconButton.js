"use client";
import "./buttons.css";
import { FiX } from "react-icons/fi";

export function IconButton({ onClick }) {
    return (
        <button
            className={`bg-white text-base text-gray-800  m-1 px-2 py-2  hover:bg-gray-300 hover:border-gray-300  border-white inline-block`}
            onClick={onClick}
        >
            <FiX />
        </button>
    );
}
