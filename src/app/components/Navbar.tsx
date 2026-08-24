"use client";

import Link from "next/link";

const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Service", href: "/service" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
];

export default function HomeNav() {
    return (
        <header className="grid grid-cols-2 items-start">
            {/* Logo */}
            <div className="flex items-start pt-3">
                <img
                    src="\logo_Light.png"
                    alt="Aquanoir Logo"
                    className="w-[120px] object-contain sm:w-[135px]"
                />
            </div>

            {/* Navigation */}
            <nav className="flex justify-end">
                <div className="group/nav flex flex-col text-[18px] leading-[1.05]">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-white transition-opacity duration-300 group-hover/nav:opacity-30 hover:!opacity-100"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}