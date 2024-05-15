"use client";
import {
    FiUser,
    FiBook,
    FiLogOut,
    FiPlusCircle,
    FiEdit2,
    FiFileText,
    FiCalendar,
    FiEdit,
    FiBookmark, //saved for journal's items
    FiBookOpen,
} from "react-icons/fi";
import { LuStickyNote } from "react-icons/lu";
import { Sidebar } from "flowbite-react";
import "./styles.css";

//dummy code waiting for more features
const userLoggedIn = true;

function openMobileMenu() {
    console.log("open menu");
    document.getElementById("sidebar")?.classList.remove("hidden");
    document.getElementById("sidebarMobileBtn")?.classList.add("bg-gray-50");
    document.getElementById("openMobileMenuBtn")?.classList.add("hidden");
    document.getElementById("closeMobileMenuBtn")?.classList.remove("hidden");
}
function closeMobileMenu() {
    console.log("close menu");
    document.getElementById("sidebar")?.classList.add("hidden");
    document.getElementById("sidebarMobileBtn")?.classList.remove("bg-gray-50");
    document.getElementById("openMobileMenuBtn")?.classList.remove("hidden");
    document.getElementById("closeMobileMenuBtn")?.classList.add("hidden");    
}

export default function SidebarMenu({ journals }) {
    
    if (userLoggedIn) {
        return (
            <>
                <div id="sidebarMobileBtn" className="flex pl-4 pt-4 cursor-pointer lg:hidden">
                    <div id="openMobileMenuBtn" onClick={openMobileMenu}>
                        <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                        </svg>
                    </div>
                    <div id="closeMobileMenuBtn" className="hidden h-10" onClick={closeMobileMenu}>
                        <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                        </svg>
                    </div>
                </div>
                <div className="bg-gray-50 h-full border-slate-300 border-solid border-r-4 sidebar">
                    <Sidebar id="sidebar" className="md:mt-8 md:ml-4 p-2 hidden lg:flex">
                        <Sidebar.Items className="text-gray-800">
                            <Sidebar.ItemGroup>
                                <Sidebar.Collapse
                                    icon={FiUser}
                                    label="Profile"
                                    className="itemStyle"
                                >
                                    <Sidebar.Item href="#" className="itemStyle">
                                        Edit Profile
                                    </Sidebar.Item>
                                    <Sidebar.Item href="#" className="itemStyle">
                                        Friends
                                    </Sidebar.Item>
                                    <Sidebar.Item href="#" className="itemStyle">
                                        Share
                                    </Sidebar.Item>
                                </Sidebar.Collapse>
                                <Sidebar.Collapse
                                    icon={FiBook}
                                    label="Bookshelf"
                                    className="itemStyle"
                                >
                                    <Sidebar.Item
                                        href="#"
                                        icon={FiEdit2}
                                        className="itemStyle"
                                    >
                                        Create journal
                                    </Sidebar.Item>
                                    <hr />
                                    {journals.map((journal, index) => (
                                        <Sidebar.Item
                                            href="#"
                                            icon={FiBookOpen}
                                            key={index}
                                            className="itemStyle"
                                        >
                                            {journal.title}
                                        </Sidebar.Item>
                                    ))}
                                </Sidebar.Collapse>
                                <Sidebar.Collapse
                                    icon={FiPlusCircle}
                                    label="Create"
                                    className="itemStyle"
                                >
                                    <Sidebar.Item
                                        href="#"
                                        icon={FiFileText}
                                        className="itemStyle"
                                    >
                                        Entry
                                    </Sidebar.Item>
                                    <Sidebar.Item
                                        href="#"
                                        icon={LuStickyNote}
                                        className="itemStyle"
                                    >
                                        Sticky note
                                    </Sidebar.Item>
                                    <Sidebar.Item
                                        href="#"
                                        icon={FiEdit}
                                        className="itemStyle"
                                    >
                                        Checklist
                                    </Sidebar.Item>
                                    <Sidebar.Item
                                        href="#"
                                        icon={FiCalendar}
                                        className="itemStyle"
                                    >
                                        Calendar
                                    </Sidebar.Item>
                                </Sidebar.Collapse>
                                <hr />
                                <Sidebar.Item
                                    href="#"
                                    icon={FiLogOut}
                                    className="itemStyle"
                                >
                                    Logout
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>
            </>
        );
    }
}
