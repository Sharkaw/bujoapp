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

const journals = [
    { title: "2024", url: "#" },
    { title: "2023", url: "#" },
    { title: "2022", url: "#" },
];
const userLoggedIn = true;

const SidebarMenu = () => {
    if (userLoggedIn) {
        return (
            <Sidebar className="text-gray-900">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Collapse icon={FiUser} label="Profile">
                            <Sidebar.Item href="#">Edit Profile</Sidebar.Item>
                            <Sidebar.Item href="#">Friends</Sidebar.Item>
                            <Sidebar.Item href="#">Share</Sidebar.Item>
                        </Sidebar.Collapse>
                        <Sidebar.Collapse icon={FiBook} label="Bookshelf">
                            <Sidebar.Item href="#" icon={FiEdit2}>
                                Create journal
                            </Sidebar.Item>
                            <hr />
                            {journals.map((journal) => (
                                <Sidebar.Item href={journal.url}>
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
};

export default SidebarMenu;
