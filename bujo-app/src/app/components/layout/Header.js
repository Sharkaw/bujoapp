import Link from "next/link";
import profile from "./profile.png";
import Image from "next/image";
import "./styles.css";

export default function Header() {
    return (
        <div className="header flex items-center justify-between p-2 w-full h-24 bg-gray-300 border-b-gray-800 border-solid border-b-8">
            <Link href="/" className="flex-1 text-center">
                <h1 className="text-gray-800 mb-0 p-2">BuJo</h1>
            </Link>
            <Link href="/profile" className="flex-end m-1 p-1">
                <Image
                    src={profile}
                    alt="Profile"
                    width={48}
                    height={48}
                    className="rounded-full"
                />
            </Link>
        </div>
    );
}
