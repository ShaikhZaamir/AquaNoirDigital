"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const awards = [
    {
        title: "Pitch Finovate",
        detail: "BFSI Marketing 2025",
    },
    {
        title: "Realty+",
        detail: "Digital Marketing Campaign 2025",
    },
    {
        title: "Sammie",
        detail: "Best Use of Social Media 2022",
    },
];

export default function Awards() {
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            const textElements = section.querySelectorAll(
                "[data-award-text]"
            );

            gsap.fromTo(
                textElements,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        once: true,
                    },
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#f6f0ec] px-5 pt-12 pb-36 text-[#111111]"
        >
            <div className="flex w-full items-center">
                {/* Left */}
                <div className="w-1/2 shrink-0">
                    <h2
                        data-award-text
                        className="text-[30px] font-medium tracking-[-0.025em]"
                    >
                        RECOGNISED BY THE INDUSTRIES WE SERVE.
                    </h2>
                </div>

                {/* Right */}
                <div className="flex w-1/2 flex-col">
                    {awards.map((award) => (
                        <div
                            key={award.title}
                            data-award-text
                            className="flex items-baseline whitespace-nowrap"
                        >
                            <span className="text-[50px] font-normal leading-[1.4] tracking-[-0.015em]">
                                {award.title}
                            </span>

                            <span className="ml-2 text-[22px] font-normal leading-[1] tracking-[-0.035em]">
                                {award.detail}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}