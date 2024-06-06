"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HamburgerMenuButton } from "../common/HamburgerMenuButton";
import ProfileImage from "./ProfileImage";
import DropdownMenu from "./DropdownMenu";
import "./styles.css";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
    }, []);

    useEffect(() => {
        document.body.className = isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const handleProfileClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`header flex items-center justify-between p-2 w-full h-24 bg-gray-50 dark:bg-gray-800 border-b-slate-300 border-solid border-b-4`}>
            <Link href="/" className="flex-1 text-center">
                <span className="text-5xl font-kalam text-gray-800 dark:text-gray-200 mb-0 p-2 block">
                    BuJo
                </span>
            </Link>
            <div className="relative flex-end m-1 p-1 hidden md:flex">
                <div onClick={handleProfileClick} className="cursor-pointer">
                    <ProfileImage />
                </div>
                {isDropdownOpen && <DropdownMenu isDarkMode={isDarkMode} toggleTheme={toggleTheme} />}
            </div>
            <HamburgerMenuButton />
        </div>
    );
}
