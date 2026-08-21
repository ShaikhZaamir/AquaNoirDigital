"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../HomeNav";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
    "Facebook",
    "Instagram",
    "Linkedin",
];

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const heroHeadingRef = useRef<HTMLHeadingElement>(null);
    const growthRef = useRef<HTMLParagraphElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    const hoverImageRef = useRef<HTMLImageElement>(null);
    const mouseMoveHandlerRef = useRef<((event: MouseEvent) => void) | null>(null);

    useLayoutEffect(() => {
        const hero = heroRef.current;
        const heading = heroHeadingRef.current;
        const growth = growthRef.current;
        const description = descriptionRef.current;
        const social = socialRef.current;
        const cta = ctaRef.current;

        if (!hero || !heading || !growth || !description || !social || !cta) {
            return;
        }

        const ctx = gsap.context(() => {
            const timeline = gsap.timeline();

            // Center-out page reveal
            timeline.fromTo(
                hero,
                { clipPath: "circle(0% at 50% 50%)" },
                {
                    clipPath: "circle(100% at 50% 50%)",
                    duration: 5.0,
                    ease: "power3.out",
                }
            );

            // Hero heading entrance
            timeline.fromTo(
                heading,
                { y: 25, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power3.out",
                },
                0
            );

            // Growth text entrance
            timeline.fromTo(
                growth,
                { y: 25, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power3.out",
                },
                0
            );

            // Description entrance
            timeline.fromTo(
                description,
                { y: 25, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power3.out",
                },
                0
            );

            // Hide social & cta for scroll trigger
            gsap.set([social, cta], {
                y: 80,
                opacity: 0,
            });

            ScrollTrigger.create({
                trigger: hero,
                start: "top top",
                onUpdate: (self) => {
                    if (self.direction === 1 && self.progress > 0) {
                        gsap.to([social, cta], {
                            y: 0,
                            opacity: 1,
                            duration: 1.1,
                            ease: "power3.out",
                            overwrite: true,
                        });
                    }
                },
            });
        }, hero);

        return () => ctx.revert();
    }, []);

    const handleHoverImageEnter = (
        event: React.MouseEvent<HTMLElement>
    ) => {
        const image = hoverImageRef.current;

        if (!image) return;

        gsap.killTweensOf(image);

        gsap.set(image, {
            x: event.clientX,
            y: event.clientY,
            xPercent: -50,
            yPercent: -50,
            opacity: 0.4,
            scale: 0.6,
            rotate: 0,
            transformOrigin: "center center",
        });

        gsap.to(image, {
            opacity: 1,
            scale: 1,
            rotate: 0,
            duration: 1,
            ease: "power3.out",
        });

        const moveImage = (moveEvent: MouseEvent) => {
            gsap.to(image, {
                x: moveEvent.clientX,
                y: moveEvent.clientY,
                duration: 2,
                ease: "power2.out",
                overwrite: "auto",
            });
        };

        mouseMoveHandlerRef.current = moveImage;

        window.addEventListener("mousemove", moveImage);
    };

    const handleHoverImageLeave = () => {
        const image = hoverImageRef.current;

        if (!image) return;

        if (mouseMoveHandlerRef.current) {
            window.removeEventListener(
                "mousemove",
                mouseMoveHandlerRef.current
            );

            mouseMoveHandlerRef.current = null;
        }

        gsap.killTweensOf(image);

        gsap.to(image, {
            opacity: 0,
            scale: 0.2,
            rotate: 0,
            duration: 1,
            ease: "power3.in",
        });
    };

    return (
        <>
            <section
                ref={heroRef}
                className="min-h-screen bg-[#111111] px-4 py-5 text-white"
            >
                <Navbar />

                {/* Main Hero Heading */}
                <div className="mt-2">
                    <h1
                        ref={heroHeadingRef}
                        className="max-w-[100%] text-[100px] font-medium leading-[0.8] tracking-[-0.055em]"
                    >
                        We Build the Digital Revenue Systems{" "}
                        <span className="inline">
                            <img
                                src="/AND0006-Home-Page-Title-Icon.png"
                                alt=""
                                className="inline-block h-[clamp(3.5rem,5vw,5.5rem)] w-auto shrink-0 object-contain align-middle"
                            />{" "}
                            that Replace Random Marketing
                        </span>{" "}
                        with{" "}
                        <span
                            className="relative inline-block cursor-pointer text-[#3d3d3d]"
                            onMouseEnter={handleHoverImageEnter}
                            onMouseLeave={handleHoverImageLeave}
                        >
                            Predictable Growth

                            <span className="absolute bottom-[-8px] left-0 h-[6px] w-full bg-[#3d3d3d]" />
                        </span>
                    </h1>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 mt-22 flex w-full items-end">
                    {/* Social Links */}
                    <div ref={socialRef} className="flex w-[46%] items-end">
                        <div className="flex flex-wrap gap-x-4 gap-y-3 text-[18px]">
                            {socialLinks.map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="group/social relative inline-block text-white"
                                >
                                    {social}

                                    <span
                                        className="absolute bottom-1 left-0 h-[2px] w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-hover/social:scale-x-0"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex w-[54%] flex-col">
                        {/* Description */}
                        <div ref={descriptionRef}>
                            <p className="max-w-[900px] text-[20px] leading-[1.3]">
                                Turning marketing spend into structured, measurable, compounding
                                business outcomes, for growth-stage brands that are done with
                                activity-first agencies.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div
                            ref={ctaRef}
                            className="mt-16 flex w-full items-center justify-items-start"
                        >
                            {/* Book Diagnostic */}
                            <a
                                href="#"
                                className="group/cta inline-flex items-center"
                            >
                                <span className="relative z-10 origin-left rounded-full border-2 border-white px-8 py-1.5 text-[18px] font-medium transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:-rotate-[10deg]">
                                    Book a Growth Diagnostic
                                </span>

                                <span className="relative z-0 -ml-[2px] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:-translate-x-[7px]">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M4 16L16 4"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M9 4H16V11"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </a>

                            {/* Results */}
                            <a
                                href="#"
                                className="group/cta inline-flex items-center pl-12"
                            >
                                <span className="relative z-10 origin-left rounded-full border-2 border-white px-8 py-1.5 text-[18px] font-medium transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:-rotate-[10deg]">
                                    See Our Results
                                </span>

                                <span className="relative z-0 -ml-[2px] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:-translate-x-[7px]">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M4 16L16 4"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M9 4H16V11"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating Hover Image */}
            <img
                ref={hoverImageRef}
                src="/hero-hover.jpeg"
                alt=""
                className="pointer-events-none fixed left-0 top-35 z-[5] h-[250px] w-[200px] object-cover opacity-0"
            />
        </>
    );
}