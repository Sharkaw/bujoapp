"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HamburgerMenuButton } from "../common/HamburgerMenuButton";
import ProfileImage from "./ProfileImage";
import DropdownMenu from "./DropdownMenu";
import "./styles.css";
import { toggleTheme } from "@/app/actions";

export default function Header({ initialIsDarkMode }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(initialIsDarkMode);

    useEffect(() => {
        document.body.className = initialIsDarkMode ? "dark" : "light";
    }, [initialIsDarkMode]);

    const handleToggleTheme = async () => {
        const newTheme = await toggleTheme();
        setIsDarkMode(newTheme);
        document.body.className = newTheme ? "dark" : "light";
    };

    const handleProfileClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div
            className={`header flex items-center justify-between p-2 w-full h-24 bg-gray-50 dark:bg-gray-800 border-b-slate-300 border-solid border-b-4`}
        >
            <Link href="/" className="flex-1 text-center">
                <span className="text-5xl font-kalam text-gray-800 dark:text-gray-200 mb-0 p-2 block">
                    BuJo
                </span>
            </Link>
            <div className="relative flex-end m-1 p-1 hidden md:flex">
                <div onClick={handleProfileClick} className="cursor-pointer">
                    <ProfileImage />
                </div>
                {isDropdownOpen && (
                    <DropdownMenu
                        isDarkMode={isDarkMode}
                        toggleTheme={handleToggleTheme}
                    />
                )}
            </div>
            <HamburgerMenuButton />
        </div>
    );
}
