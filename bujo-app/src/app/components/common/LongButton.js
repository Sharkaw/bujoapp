"use client";
import "./buttons.css";
export function LongButton({ title, variant, onClick }) {
    return (
        <button
        className={`text-base m-1 px-3 py-3 min-w-40 min-h-14 border-4 inline-block whitespace-nowrap ${variant}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
