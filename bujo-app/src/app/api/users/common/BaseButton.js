"use client";
import "./buttons.css";
export function BaseButton({ title, variant, onClick }) {
    return (
        <button
            className={`text-base  m-1 px-6 py-3 border-4 inline-block ${variant}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
}
