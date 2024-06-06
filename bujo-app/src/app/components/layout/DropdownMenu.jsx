import Link from "next/link";
import { FiEdit, FiUsers, FiShare2, FiLogOut, FiSun, FiMoon } from "react-icons/fi";

export default function DropdownMenu({ isDarkMode, toggleTheme }) {
    return (
        <div className={`absolute right-0 custom-dropdown-margin w-48 rounded-md shadow-lg z-10 ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-white text-gray-800'}`}>
            <ul className="py-1">
                <li className={`px-4 py-2 cursor-pointer ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`} onClick={toggleTheme}>
                    <div className="flex items-center space-x-2">
                        {isDarkMode ? <FiSun /> : <FiMoon />}
                        <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    </div>
                </li>
                <hr />
                <li className={`px-4 py-2 ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}>
                    <Link href="/edit-profile" className="flex items-center space-x-2">
                        <FiEdit />
                        <span>Edit Profile</span>
                    </Link>
                </li>
                <li className={`px-4 py-2 ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}>
                    <Link href="/friends" className="flex items-center space-x-2">
                        <FiUsers />
                        <span>Friends</span>
                    </Link>
                </li>
                <li className={`px-4 py-2 ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}>
                    <Link href="/share" className="flex items-center space-x-2">
                        <FiShare2 />
                        <span>Share</span>
                    </Link>
                </li>
                <hr />
                <li className={`px-4 py-2 ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}>
                    <Link href="/logout" className="flex items-center space-x-2">
                        <FiLogOut />
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
