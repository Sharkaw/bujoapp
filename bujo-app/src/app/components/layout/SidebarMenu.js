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
import { logout } from "@/app/actions";
import { redirect } from "next/navigation";

export default function SidebarMenu({ journals }) {
    const handleClick = async () => {
        await logout();
    };

    return (
        <div className="bg-gray-50 h-full border-gray-300 border-solid border-r-8 sidebar">
            <Sidebar className="md:mt-8 md:ml-4 p-2">
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
                            onClick={handleClick}
                        >
                            Logout
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
}
