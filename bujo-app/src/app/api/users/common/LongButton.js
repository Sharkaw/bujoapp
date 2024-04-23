"use client";
import "./buttons.css";
export function LongButton({ title, variant, onClick }) {
    return (
        <button
            className={`text-base text-gray-800  m-1 px-32 py-3 border-4 inline-block ${variant}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
