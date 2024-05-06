import Link from 'next/link'
import profile from './profile.png'

export default function Header() {
  return (
    <div>
        <div className="container mx-auto flex items-center px-10 py-2 h-24 bg-gray-300 justify-center">
            <div className="flex items-center gap-6 nd:gap-8 text-gray-800 justify-center">
                <Link href="/">
                    <h1 className="mt-8">BuJo</h1>
                </Link>
                <Link legacyBehavior href="/profile">
                    <a>
                    <img
                    src={profile}
                    alt="Profile"
                    className="h-12 w-12 rounded-full cursor-pointer"
                    />
                    </a>
                </Link>
            </div>
        </div>
    </div>
  );
};