"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#111111] text-white">
            {/* Main Footer */}
            <div className="flex min-h-[360px] w-full border-t border-white/10 items-start px-5 pb-24 pt-24 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex w-[40%] shrink-0 items-center justify-center">
                    <Link href="/" aria-label="Go to home page">
                        <Image
                            src="/logo_Light.png"
                            alt="Aqua Noir Digital"
                            width={256}
                            height={82}
                            priority
                            className="h-auto w-[256px]"
                        />
                    </Link>
                </div>

                {/* Company */}
                <div className="w-[30%]">
                    <h3 className="mb-7 text-[20px] leading-none text-[#888888]">
                        Company
                    </h3>

                    <div className="group/footer flex flex-col gap-1 text-[20px] leading-[1.3]">
                        <a
                            href="/about"
                            className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:opacity-100!"
                        >
                            About Us
                        </a>

                        <a
                            href="/services"
                            className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:opacity-100!"
                        >
                            Services
                        </a>

                        <a
                            href="#"
                            className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:opacity-100!"
                        >
                            Industries
                        </a>

                        <a
                            href="#"
                            className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:opacity-100!"
                        >
                            Case Study
                        </a>

                        <a
                            href="/contact"
                            className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:opacity-100!"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Social */}
                <div className="w-[30%]">
                    <h3 className="mb-7 text-[20px] leading-none text-[#888888]">
                        Social
                    </h3>

                    <div className="group/footer flex flex-col gap-1 text-[20px] leading-[1.3]">
                        <a
                            href="#"
                            className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:opacity-100!"
                        >
                            Facebook
                        </a>

                        <a
                            href="#"
                            className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:opacity-100!"
                        >
                            Instagram
                        </a>

                        <a
                            href="#"
                            className="text-white transition-opacity duration-300 group-hover/footer:opacity-30 hover:opacity-100!"
                        >
                            Linkedin
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 px-5 pt-11 pb-7 text-center">
                <p className="text-[24px] leading-none tracking-[-0.035em]">
                    © 2026 Aqua Noir Digital. All right reserved
                </p>
            </div>
        </footer>
    );
}