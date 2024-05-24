import Link from "next/link";
import profile from "./profile.png";
import Image from "next/image";
import { HamburgerMenuButton } from "../common/HamburgerMenuButton";

import "./styles.css";
import { Span } from "next/dist/trace";

export default function Header() {
    return (
        <div className="header flex items-center justify-between p-2 w-full h-24 bg-gray-50 border-b-slate-300 border-solid border-b-4">
            <Link href="/" className="flex-1 text-center">
                <span className="text-5xl font-kalam text-gray-800 mb-0 p-2 block">BuJo</span>
                {/* <h1 className="text-gray-800 mb-0 p-2">BuJo</h1> */}
            </Link>
            <Link href="/profile" className="flex-end m-1 p-1 hidden md:flex">
                <Image
                    src={profile}
                    alt="Profile"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
            </Link>
            <HamburgerMenuButton />
        </div>
    );
}
