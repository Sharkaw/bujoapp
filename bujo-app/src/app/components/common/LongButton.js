"use client";
import "./buttons.css";
export function LongButton({ title, variant, onClick }) {
    return (
        <button
            className={`text-base text-gray-800 m-1 px-3 py-3 w-full min-h-14 border-4 inline-block ${variant}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
