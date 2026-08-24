"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Anton } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const anton = Anton({
    variable: "--font-anton",
    subsets: ["latin"],
    weight: "400",
});

export default function AboutIntro() {
    const sectionRef = useRef<HTMLElement>(null);
    const redoxRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const redox = redoxRef.current;
        const content = contentRef.current;

        if (!section || !redox || !content) return;

        const ctx = gsap.context(() => {
            gsap.set(redox, {
                scale: 800 / 100,
                color: "#A2D8E5",
                transformOrigin: "center center",
                force3D: true,
            });

            gsap.set(content, {
                y: "45vh",
                opacity: 0.1,
            });

            const tl = gsap.timeline({
                defaults: {
                    ease: "none",
                },
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "+=100%",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });

            tl.to(
                redox,
                {
                    scale: 1,
                    color: "#ffffff",
                    duration: 1,
                },
                0
            );

            tl.to(
                content,
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                },
                0
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#111111] px-6 text-white"
        >
            <div className="flex w-full max-w-[1000px] flex-col items-center gap-y-28 pt-96 text-center">
                <h2
                    ref={redoxRef}
                    className={`select-none whitespace-nowrap text-center text-[80px] font-normal uppercase leading-[0.8] tracking-[-0.055em] will-change-transform ${anton.className}`}
                >
                    ANDPL
                </h2>

                <div
                    ref={contentRef}
                    className="flex flex-col items-center will-change-transform"
                >
                    <p className="max-w-[850px] text-[clamp(1.2rem,2vw,2.1rem)] font-normal leading-[1.2] tracking-[-0.03em] text-white">
                        We’re a dynamic startup agency specializing in
                        innovative solutions for businesses looking to
                        elevate their brand presence. We offer a range of
                        services including digital marketing, branding, web
                        development, and creative strategy to help company
                    </p>

                    <button
                        type="button"
                        className="mt-6 flex h-[56px] min-w-[150px] items-center justify-center rounded-full bg-white px-8 text-[16px] font-medium tracking-[-0.01em] text-[#111111] transition-transform duration-300 hover:scale-[1.05] active:scale-[0.97]"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
