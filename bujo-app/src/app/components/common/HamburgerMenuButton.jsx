"use client";

import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";



function handleMobileMenu() {
    document.getElementById("sidebar")?.classList.toggle("hidden");
    document.getElementById("openMobileMenuBtn")?.classList.toggle("hidden");
    document.getElementById("closeMobileMenuBtn")?.classList.toggle("hidden");
    document.getElementById("sidebarDiv")?.classList.toggle("border-r-4");
    document.getElementById("sidebarDiv")?.classList.toggle("border-b-4");
    document.getElementById("sidebarDiv")?.classList.toggle("header");
    document.getElementById("headerDiv")?.classList.toggle("bg-gray-50");
}

export function HamburgerMenuButton() {
    return (
        <div id="sidebarMobileBtn" className="flex px-4 cursor-pointer md:hidden">
            <div id="openMobileMenuBtn" onClick={handleMobileMenu}>
                <HiOutlineMenu className="w-8 h-8" />
            </div>
            <div id="closeMobileMenuBtn" className="hidden" onClick={handleMobileMenu}>
                <MdOutlineClose className="w-8 h-8" />
            </div>
        </div>
    );
}