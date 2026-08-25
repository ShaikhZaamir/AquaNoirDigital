"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type IndustryContextItem = {
    number: string;
    title: string;
};

type IndustryContextProps = {
    contextNumber: string;
    contextTitle: string;
    introText: string;
    items: IndustryContextItem[];
};

export default function IndustryContext({
    contextNumber,
    contextTitle,
    introText,
    items,
}: IndustryContextProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRefs = useRef<HTMLElement[]>([]);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            cardRefs.current.forEach((card) => {
                if (!card) return;

                gsap.fromTo(
                    card,
                    {
                        xPercent: 120,
                    },
                    {
                        xPercent: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 125%",
                            end: "top 50%",
                            scrub: 0.8,
                        },
                    }
                );
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#111111] px-8 py-24 text-white"
        >
            <div className="flex w-full items-start">
                {/* Left Content */}
                <div className="w-[40%] shrink-0">
                    <p className="text-[30px] font-normal leading-[1.15] tracking-[-0.04em]">
                        {contextTitle}
                    </p>

                    <div className="mt-4 text-[265px] font-normal leading-[0.75] tracking-[-0.08em]">
                        {contextNumber}
                    </div>

                    <p className="mt-4 text-[30px] font-normal leading-[1.1] tracking-[-0.04em]">
                        {introText}
                    </p>
                </div>

                {/* Right Content */}
                <div className="w-[60%] pt-2">
                    {items.map((item, index) => (
                        <article
                            key={`${item.number}-${item.title}`}
                            ref={(el) => {
                                if (el) {
                                    cardRefs.current[index] = el;
                                }
                            }}
                            className="flex w-full items-start border-t border-dashed border-white/50 pb-10"
                        >
                            {/* Number */}
                            <div className="w-[12%] shrink-0">
                                <span className="text-[18px]">
                                    {item.number}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="w-[88%]">
                                <h3 className="text-[30px] font-normal leading-[1.1] tracking-[-0.045em]">
                                    {item.title}
                                </h3>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}