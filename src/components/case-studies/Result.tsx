"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ResultProps = {
    result: {
        title: string;
        items: readonly string[];
        image: string;
    };
};

export default function CSResult({
    result,
}: ResultProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const content = contentRef.current;
        const image = imageRef.current;

        if (!section || !content || !image) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                content,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            gsap.fromTo(
                image,
                {
                    y: 70,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
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
            className="border-y border-white/10 bg-[#111111] px-20 py-26 text-white"
        >
            <div className="flex w-full">
                {/* Left Content */}
                <div
                    ref={contentRef}
                    className="w-[70%] pr-38 will-change-transform"
                >
                    <h2 className="text-[30px] font-medium leading-none tracking-[-0.055em]">
                        {result.title}
                    </h2>

                    <ul className="mt-16 max-w-[1150px] list-disc space-y-6 pl-5">
                        {result.items.map((item) => (
                            <li
                                key={item}
                                className="pl-1 text-[22px] font-normal leading-[1.15] tracking-[-0.035em] marker:text-[#5d5d5d]"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Image */}
                <div
                    ref={imageRef}
                    className="flex w-[30%] justify-start will-change-transform"
                >
                    <img
                        src={result.image}
                        alt=""
                        className="h-[500px] w-[265px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
}