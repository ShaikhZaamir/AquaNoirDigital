"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CSParallaxProps {
    title: string;
    description: string;
    image: string;
}

export default function CSParallax({
    title,
    description,
    image,
}: CSParallaxProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const imageElement = imageRef.current;

        if (!section || !imageElement) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                imageElement,
                {
                    yPercent: -50,
                },
                {
                    yPercent: 50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    },
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#111111] px-4 pb-20 pt-50 text-white"
        >
            {/* Top Border */}
            <div className="w-full border-t border-white/15" />

            {/* Top Text Row */}
            <div className="flex w-full pt-14">
                {/* Left Title */}
                <div className="w-[38%]">
                    <h2 className="max-w-[400px] text-[30px] font-medium leading-[1.25] tracking-[-0.055em]">
                        {title}
                    </h2>
                </div>

                {/* Right Description */}
                <div className="w-[60%]">
                    <p className="max-w-[1100px] text-[20px] font-medium leading-[1.2] tracking-[-0.045em]">
                        {description}
                    </p>
                </div>
            </div>

            {/* Large Space Before Image */}
            <div className="mt-18 w-full">
                {/* Parallax Image */}
                <div className="relative h-[550px] w-full overflow-hidden">
                    <img
                        ref={imageRef}
                        src={image}
                        alt=""
                        className="absolute left-0 top-[-12%] h-[120%] w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}