"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StrategyOverviewProps = {
    overview: string;
    overviewItems: string[];
    image: string;
};

export default function StrategyOverview({
    overview,
    overviewItems,
    image,
}: StrategyOverviewProps) {
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
                    yPercent: -15,
                },
                {
                    yPercent: 15,
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
            className="relative mt-0 flex w-full items-stretch gap-x-5 overflow-hidden bg-[#111111] px-10 pb-20 text-white"
        >
            {/* Left Text Content */}
            <div className="w-[40%] pt-0">
                <p className="max-w-[500px] text-[18px] font-normal leading-[1.28] tracking-[-0.035em]">
                    {overview}
                </p>

                <ul className="mt-10 flex max-w-[520px] list-disc flex-col gap-5 pl-4 text-[18px] font-normal leading-[1.28] tracking-[-0.035em]">
                    {overviewItems.map((item) => (
                        <li key={item} className="pl-0">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Parallax Image */}
            <div className="h-[626px] w-[1053px]">
                <img
                    ref={imageRef}
                    src={image}
                    alt=""
                    className="h-full w-full max-w-none object-cover"
                />
            </div>
        </section>
    );
}