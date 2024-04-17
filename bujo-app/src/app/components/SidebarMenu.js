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
} from "react-icons/fi";
import { LuStickyNote } from "react-icons/lu";
import { Sidebar } from "flowbite-react";

const userLoggedIn = true;
const itemStyle = " hover:bg-gray-400  focus:bg-gray-400 active:bg-gray-400";

export default function SidebarMenu({ journals }) {
    if (userLoggedIn) {
        return (
            <Sidebar>
                <Sidebar.Items className="bg-red-400 text-gray-800">
                    <Sidebar.ItemGroup>
                        <Sidebar.Collapse icon={FiUser} label="Profile">
                            <Sidebar.Item href="#" className={itemStyle}>
                                Edit Profile
                            </Sidebar.Item>
                            <Sidebar.Item href="#" className={itemStyle}>
                                Friends
                            </Sidebar.Item>
                            <Sidebar.Item href="#" className={itemStyle}>
                                Share
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Collapse icon={FiBook} label="Bookshelf">
                            <Sidebar.Item href="#" icon={FiEdit2}>
                                Create journal
                            </Sidebar.Item>
                            <hr />
                            {journals.map((journal, index) => (
                                <Sidebar.Item href="#" key={index}>
                                    {journal.title}
                                </Sidebar.Item>
                            ))}
                        </Sidebar.Collapse>
                        <Sidebar.Collapse icon={FiPlusCircle} label="Create">
                            <Sidebar.Item href="#" icon={FiFileText}>
                                Entry
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={LuStickyNote}>
                                Sticky note
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={FiEdit}>
                                Checklist
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={FiCalendar}>
                                Calendar
                            </Sidebar.Item>
                        </Sidebar.Collapse>
                        <hr />
                        <Sidebar.Item href="#" icon={FiLogOut}>
                            Logout
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        );
    }
}
