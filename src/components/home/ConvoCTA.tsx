"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ConvoCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    const headingLine1Ref = useRef<HTMLDivElement>(null);
    const headingLine2Ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        const line1 = headingLine1Ref.current;
        const line2 = headingLine2Ref.current;

        if (!section || !line1 || !line2) return;

        const ctx = gsap.context(() => {
            const headingLines = [line1, line2];

            gsap.set(headingLines, {
                rotateX: -90,
                rotateZ: -1.5,
                skewX: 2,
                scaleY: 0.96,
                y: -20,
                opacity: 0,
                transformOrigin: "50% 0%",
            });

            gsap.to(headingLines, {
                rotateX: 0,
                rotateZ: 0,
                skewX: 0,
                scaleY: 1,
                y: 0,
                opacity: 1,
                duration: 2.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play reverse play reverse",
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#111111] px-5 py-6 text-white"
        >
            <div className="flex min-h-[285px] w-full items-start">
                {/* Left Empty Half */}
                <div className="w-1/2 shrink-0" />

                {/* Right Content */}
                <div
                    className="w-1/2 pl-0"
                    style={{ perspective: "1000px" }}
                >
                    <div className="pt-0">
                        {/* Heading */}
                        <div
                            ref={headingLine1Ref}
                            className="origin-top text-[80px] font-medium leading-[0.88] tracking-[-0.065em]"
                        >
                            Let&apos;s Start With
                        </div>

                        <div
                            ref={headingLine2Ref}
                            className="origin-top text-[80px] font-medium leading-[0.88] tracking-[-0.065em]"
                        >
                            a Conversation
                        </div>

                        {/* Get In Touch */}
                        <a
                            href="#"
                            className="group/cta mt-10 inline-flex items-center"
                        >
                            <span className="relative z-10 origin-left rounded-full border-2 border-white px-8 py-1.5 text-[18px] font-medium transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:-rotate-[10deg]">
                                Get In Touch
                            </span>

                            <span className="relative z-0 -ml-[2px] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/cta:-translate-x-[7px]">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M6 16L16 6"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M9.5 6H16V12.5"
                                        stroke="currentColor"
                                        strokeWidth="3"
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
    );
}