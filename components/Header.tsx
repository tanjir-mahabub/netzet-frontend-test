import Image from "next/image";
import Banner from "./Banner"

const Header = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4">
            <div className="text-3xl leading-tight font-bold font-urbanist">
                {/* fame<br />tonic */}
                <Image
                    src="/logo.svg"
                    alt="Fametonic Logo"
                    width={120}
                    height={40}
                    priority
                />
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-medium">
                <a href="#" className="hover:underline">About us</a>
                <a href="#" className="hover:underline">Contact</a>
            </nav>
            <div className="md:hidden">
                {/* Burger icon for mobile */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </header>
    );
}

export default Header