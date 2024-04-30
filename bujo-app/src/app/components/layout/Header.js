import Link from 'next/link'
import profile from './profile.png'

const Header = () => {
  return (
    <div>
        <div className="container mx-auto flex items-center px-10 py-2 h-24 bg-gray-800">
            <div className="flex items-center justify-center gap-6 nd:gap-8">
                <Link href="/">BuJo</Link>
                <Link legacyBehavior href="/profile">
                    <a>
                    <img
                    src={profile}
                    alt="Profile picture"
                    className="h-12 w-12 rounded-full cursor-pointer"
                    />
                    </a>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Header;