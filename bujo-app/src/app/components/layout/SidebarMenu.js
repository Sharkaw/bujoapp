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
import { PiBooks } from "react-icons/pi";

//dummy code waiting for more features
const userLoggedIn = true;

export default function SidebarMenu({ journals }) {
    
    if (userLoggedIn) {
        return (
            <>
                <div id="sidebarDiv" className="bg-gray-50 h-full w-full border-slate-300 border-solid border-r-4 sidebar md:border-b-0">
                    <Sidebar id="sidebar" className="md:mt-8 mx-auto p-2 hidden md:flex">
                        <Sidebar.Items className="">
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
{/*                                     
                                    <Sidebar.Item
                                        href="/bookshelf"
                                        icon={PiBooks}
                                        className="itemStyle"
                                    >
                                        All Journals
                                    </Sidebar.Item>
                                    <hr /> */}
                                    <Sidebar.Item
                                        href="#"
                                        icon={FiEdit2}
                                        className="itemStyle"
                                    >
                                        Create journal
                                    </Sidebar.Item>
                                    <hr />
                                    {/* <Sidebar.Item
                                        href="/journal-title"
                                        icon={FiBookOpen}
                                        className="itemStyle"
                                    >
                                        Demo Journal
                                    </Sidebar.Item> */}
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
