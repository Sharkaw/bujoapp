"use client";

function openMobileMenu() {
    // console.log("open menu");
    document.getElementById("sidebar")?.classList.remove("hidden");
    document.getElementById("openMobileMenuBtn")?.classList.add("hidden");
    document.getElementById("closeMobileMenuBtn")?.classList.remove("hidden");
    document.getElementById("sidebarDiv")?.classList.remove("border-r-4");
    document.getElementById("sidebarDiv")?.classList.toggle("border-b-4");
    document.getElementById("sidebarDiv")?.classList.add("header");
    
}
function closeMobileMenu() {
    // console.log("close menu");
    document.getElementById("sidebar")?.classList.add("hidden");
    document.getElementById("openMobileMenuBtn")?.classList.remove("hidden");
    document.getElementById("closeMobileMenuBtn")?.classList.add("hidden");
    document.getElementById("sidebarDiv")?.classList.add("border-r-4");
    document.getElementById("sidebarDiv")?.classList.toggle("border-b-4");
    document.getElementById("sidebarDiv")?.classList.remove("header");
}

function handleMobileMenu() {
    document.getElementById("sidebar")?.classList.toggle("hidden");
    document.getElementById("openMobileMenuBtn")?.classList.toggle("hidden");
    document.getElementById("closeMobileMenuBtn")?.classList.toggle("hidden");
    document.getElementById("sidebarDiv")?.classList.toggle("border-r-4");
    document.getElementById("sidebarDiv")?.classList.toggle("border-b-4");
    document.getElementById("sidebarDiv")?.classList.toggle("header");
}

export function HamburgerMenuButton() {
    return (
        <div id="sidebarMobileBtn" className="flex pl-4 pt-4 cursor-pointer lg:hidden">
            <div id="openMobileMenuBtn" onClick={handleMobileMenu}>
                <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>
            </div>
            <div id="closeMobileMenuBtn" className="hidden h-10" onClick={handleMobileMenu}>
                <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                </svg>
            </div>
        </div>
    );
}