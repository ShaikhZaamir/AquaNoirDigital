"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Anton } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const anton = Anton({
    subsets: ["latin"],
    weight: "400",
});

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const heading = headingRef.current;

        if (!section || !heading) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                heading,
                {
                    y: 100,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full overflow-hidden bg-[#111111] px-5 text-white"
        >
            <div className="flex w-full flex-col justify-start pb-20 pt-10">
                <h1
                    ref={headingRef}
                    className={`${anton.className} text-center text-[325px] leading-[0.78] tracking-[-0.035em] will-change-transform`}
                >
                    INDUSTRIES
                </h1>
            </div>
        </section>
    );
}