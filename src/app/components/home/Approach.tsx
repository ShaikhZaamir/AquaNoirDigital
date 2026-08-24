"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const approaches = [
    {
        number: "01",
        title: "Partnership",
        description:
            "We engage with our clients as partners, not projects. This begins with a considered understanding of the business, its customers and its long-term direction.",
    },
    {
        number: "02",
        title: "Responsibility",
        description:
            "Ownership is not limited to delivery. We stay accountable to the outcome, and till the objective is achieved.",
    },
    {
        number: "03",
        title: "Transparency",
        description:
            "Clarity is a discipline. Our clients always know what is happening, why it matters, and what comes next.",
    },
    {
        number: "04",
        title: "Continuous Improvement",
        description:
            "Digital growth is not static. It responds to shifts in markets, technology and behaviour and our belief lies in continuous learning, improving, and refining our approach.",
    },
];

export default function Approach() {
    const sectionRef = useRef<HTMLElement>(null);

    const headingLine1Ref = useRef<HTMLDivElement>(null);
    const headingLine2Ref = useRef<HTMLDivElement>(null);
    const headingLine3Ref = useRef<HTMLDivElement>(null);
    const headingLine4Ref = useRef<HTMLDivElement>(null);
    const headingLine5Ref = useRef<HTMLDivElement>(null);
    const headingLine6Ref = useRef<HTMLDivElement>(null);
    const headingLine7Ref = useRef<HTMLDivElement>(null);
    const headingLine8Ref = useRef<HTMLDivElement>(null);
    const headingLine9Ref = useRef<HTMLDivElement>(null);

    const cardRefs = useRef<HTMLElement[]>([]);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        const line1 = headingLine1Ref.current;
        const line2 = headingLine2Ref.current;
        const line3 = headingLine3Ref.current;
        const line4 = headingLine4Ref.current;
        const line5 = headingLine5Ref.current;
        const line6 = headingLine6Ref.current;
        const line7 = headingLine7Ref.current;
        const line8 = headingLine8Ref.current;
        const line9 = headingLine9Ref.current;

        if (
            !section ||
            !line1 ||
            !line2 ||
            !line3 ||
            !line4 ||
            !line5 ||
            !line6 ||
            !line7 ||
            !line8 ||
            !line9
        ) {
            return;
        }

        const ctx = gsap.context(() => {
            /* ========================================
               HEADING HANGING ANIMATION
            ======================================== */

            const headingLines = [
                line1,
                line2,
                line3,
                line4,
                line5,
                line6,
                line7,
                line8,
                line9,
            ];

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

            /* ========================================
               CARD SCROLL-LINKED ANIMATION
            ======================================== */

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
            className="bg-[#111111] px-4 text-white"
        >
            {/* Top Container */}
            <div className="flex w-full items-end">
                {/* Left — 35% */}
                <div className="w-[35%]">
                    <p className="text-[30px] font-medium leading-[1.15] tracking-[-0.04em]">
                        OUR APPROACH
                    </p>
                </div>

                {/* Right — 65% */}
                <div className="w-[65%] font-medium">
                    <div style={{ perspective: "1000px" }}>
                        {/* Line 1 */}
                        <div
                            ref={headingLine1Ref}
                            className="origin-top text-[80px] font-medium leading-[0.88] tracking-[-0.065em]"
                        >
                            We build connected
                        </div>

                        {/* Line 2 */}
                        <div
                            ref={headingLine2Ref}
                            className="origin-top text-[80px] font-medium leading-[0.88] tracking-[-0.065em]"
                        >
                            digital growth
                        </div>

                        {/* Line 3 */}
                        <div
                            ref={headingLine3Ref}
                            className="origin-top text-[80px] font-medium leading-[0.88] tracking-[-0.065em]"
                        >
                            systems that bring
                        </div>

                        {/* Line 4 */}
                        <div
                            ref={headingLine4Ref}
                            className="origin-top text-[80px] font-medium leading-[0.88] tracking-[-0.065em]"
                        >
                            together strategy,
                        </div>

                        {/* Line 5 */}
                        <div
                            ref={headingLine5Ref}
                            className="origin-top text-[80px] font-medium leading-[0.88] tracking-[-0.065em]"
                        >
                            brand
                        </div>

                        {/* Line 6 */}
                        <div
                            ref={headingLine6Ref}
                            className="origin-top text-[80px] font-medium leading-[0.88] tracking-[-0.065em]"
                        >
                            communication,
                        </div>

                        {/* Line 7 */}
                        <div
                            ref={headingLine7Ref}
                            className="origin-top text-[80px] font-medium leading-[0.88] tracking-[-0.065em]"
                        >
                            performance
                        </div>

                        {/* Line 8 */}
                        <div
                            ref={headingLine8Ref}
                            className="origin-top text-[80px] font-medium leading-[0.88] tracking-[-0.065em]"
                        >
                            marketing, and digital
                        </div>

                        {/* Line 9 */}
                        <div
                            ref={headingLine9Ref}
                            className="origin-top text-[80px] font-medium leading-[0.88] tracking-[-0.065em]"
                        >
                            infrastructure.
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Container */}
            <div className="mt-20 flex w-full items-start">
                {/* Left — 35% */}
                <div className="w-[35%]">
                    <div className="text-[clamp(10rem,18vw,20rem)] font-normal leading-[0.75] tracking-[-0.08em]">
                        04
                    </div>
                </div>

                {/* Right — 65% */}
                <div className="mt-20 w-[65%]">
                    {approaches.map((approach, index) => (
                        <article
                            key={approach.number}
                            ref={(el) => {
                                if (el) {
                                    cardRefs.current[index] = el;
                                }
                            }}
                            className="flex w-full items-start border-t border-dashed border-white/50 py-6"
                        >
                            {/* Number */}
                            <div className="w-[12%] shrink-0">
                                <span className="text-[18px]">
                                    {approach.number}
                                </span>
                            </div>

                            {/* Title */}
                            <div className="w-[45%] shrink-0">
                                <h3 className="text-[28px] font-normal leading-[1.1] tracking-[-0.04em]">
                                    {approach.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="w-[43%]">
                                <p className="max-w-[390px] text-[18px] leading-[1.45] tracking-[0.02em] text-[#888888]">
                                    {approach.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}