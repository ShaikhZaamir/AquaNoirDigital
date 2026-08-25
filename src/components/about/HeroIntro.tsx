"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroIntro() {
    const sectionRef = useRef<HTMLElement>(null);

    const headingLine1Ref = useRef<HTMLSpanElement>(null);
    const headingLine2Ref = useRef<HTMLSpanElement>(null);
    const headingLine3Ref = useRef<HTMLSpanElement>(null);
    const shapeRef = useRef<HTMLImageElement>(null);

    const topContentRef = useRef<HTMLDivElement>(null);
    const bottomContentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        const line1 = headingLine1Ref.current;
        const line2 = headingLine2Ref.current;
        const line3 = headingLine3Ref.current;
        const shape = shapeRef.current;

        const topContent = topContentRef.current;
        const bottomContent = bottomContentRef.current;

        if (
            !section ||
            !line1 ||
            !line2 ||
            !line3 ||
            !shape ||
            !topContent ||
            !bottomContent
        ) {
            return;
        }

        const ctx = gsap.context(() => {
            /* =====================================================
               LEFT HEADING
               SEQUENTIAL LEFT-TO-RIGHT REVEAL
            ===================================================== */

            gsap.set([line1, line2, line3, shape], {
                clipPath: "inset(0 100% 0 0)",
                opacity: 1,
            });

            const headingTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });

            headingTimeline
                .to(line1, {
                    clipPath: "inset(0 0% 0 0)",
                    duration: 1.5,
                    ease: "power3.out",
                })
                .to(line2, {
                    clipPath: "inset(0 0% 0 0)",
                    duration: 1.3,
                    ease: "power3.out",
                }, "+=0.35")
                .to(shape, {
                    clipPath: "inset(0 0% 0 0)",
                    duration: 0.8,
                    ease: "power3.out",
                }, "+=0.35")
                .to(line3, {
                    clipPath: "inset(0 0% 0 0)",
                    duration: 1.5,
                    ease: "power3.out",
                }, "+=0.35");

            /* =====================================================
               RIGHT TOP
               Separate float-up animation
            ===================================================== */

            gsap.set(topContent, {
                y: 70,
                opacity: 0,
            });

            gsap.to(topContent, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: topContent,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            });

            /* =====================================================
               RIGHT BOTTOM
               Separate float-up animation
            ===================================================== */

            gsap.set(bottomContent, {
                y: 70,
                opacity: 0,
            });

            gsap.to(bottomContent, {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: bottomContent,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="mt-50 w-full bg-[#111111] px-4 pb-40 text-white sm:px-6 lg:px-8"
        >
            <div className="flex h-[15vh] w-full">
                {/* LEFT SIDE */}
                <div className="flex w-[63%] items-center">
                    <div className="flex flex-1 items-center pl-20">
                        <h1 className="text-[70px] font-normal leading-[0.9] tracking-[-0.065em]">
                            <span className="block overflow-hidden">
                                <span
                                    ref={headingLine1Ref}
                                    className="block will-change-[clip-path]"
                                >
                                    A Partner in Your
                                </span>
                            </span>

                            <span className="flex items-center">
                                <span className="overflow-hidden">
                                    <span
                                        ref={headingLine2Ref}
                                        className="block mr-1 will-change-[clip-path]"
                                    >
                                        Brand’s
                                    </span>
                                </span>

                                <span className="mx-10 block overflow-hidden">
                                    <img
                                        ref={shapeRef}
                                        src="/ax-hero-shape-01.png"
                                        alt=""
                                        className="h-[48px] w-[80px] shrink-0 object-contain will-change-[clip-path]"
                                    />
                                </span>
                            </span>

                            <span className="block overflow-hidden">
                                <span
                                    ref={headingLine3Ref}
                                    className="block will-change-[clip-path]"
                                >
                                    Growth Journey
                                </span>
                            </span>
                        </h1>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex w-[37%] flex-col justify-center">
                    {/* TOP */}
                    <div
                        ref={topContentRef}
                        className="pb-[35px] flex w-full will-change-transform"
                    >
                        <div className="w-1/2">
                            <span className="text-[70px] font-normal leading-[0.9] tracking-[-0.065em]">
                                98%
                            </span>

                            <p className="mt-4 text-[18px] leading-[1.15] tracking-[-0.035em]">
                                Average clients satisfied
                                <br />
                                and repeating
                            </p>
                        </div>

                        <div className="w-1/2">
                            <span className="text-[70px] font-normal leading-[0.9] tracking-[-0.065em]">
                                120+
                            </span>

                            <p className="mt-4 text-[18px] leading-[1.15] tracking-[-0.035em]">
                                Successfully projects
                                <br />
                                done in 24 countries
                            </p>
                        </div>
                    </div>

                    {/* BOTTOM */}
                    <div
                        ref={bottomContentRef}
                        className="w-full will-change-transform"
                    >
                        <div className="mb-1 w-full border-t border-white/15" />

                        <p className="max-w-[610px] text-[22px] leading-[1.2] tracking-[-0.035em]">
                            We’re a digital products design &amp;
                            development agency that works
                            passionately with the digital
                            experiences.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}