import Image from "next/image";

const Header = () => {
    return (
        <header className="flex items-center md:items-start justify-between md:justify-start h-[46px] lg:h-[24.95px] px-6 py-4 mt-7 relative">
            {/* Logo container */}
            <div className="absolute md:static left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0">
                <div className="relative w-[107.78px] h-[46.07px] lg:w-[173.12px] lg:h-[74px]">
                    <Image
                        src="/logo.svg"
                        alt="Fametonic Logo"
                        fill
                        priority
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex gap-8 text-sm font-medium ml-auto">
                <a href="#" className="hover:underline">About us</a>
                <a href="#" className="hover:underline">Contact</a>
            </nav>

            {/* Mobile burger */}
            <div className="md:hidden ml-auto">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
        </header>
    );
};

export default Header;
