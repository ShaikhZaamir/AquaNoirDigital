"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    {
        top: "Worked across",
        number: "12+",
        description: "industries",
        lane: "left",
    },
    {
        top: "Delivered",
        number: "3.7x",
        description: "Marketing Return On Investment",
        lane: "right",
    },
    {
        top: "Achieved",
        number: "40%",
        description: "Reduction in Cost per Lead",
        lane: "left",
    },
    {
        top: "Generated",
        number: "100K+",
        description: "Qualified Lead for Client Campaign",
        lane: "right",
    },
    {
        top: "Delivered",
        number: "100+",
        description: "Digital Campaigns",
        lane: "left",
    },
];

export default function StatsActivity() {
    const sectionRef = useRef<HTMLElement>(null);
    const activityRef = useRef<HTMLDivElement>(null);

    const statRefs = useRef<HTMLElement[]>([]);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const activity = activityRef.current;

        if (!section || !activity) return;

        const ctx = gsap.context(() => {
            /* =====================================================
               LEFT ACTIVITY PIN
            ===================================================== */

            const lastStat = statRefs.current[statRefs.current.length - 1];

            if (lastStat) {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top top",
                    endTrigger: lastStat,
                    end: "top 20%",
                    pin: activity,
                    pinSpacing: false,
                    anticipatePin: 1,
                });
            }

            /* =====================================================
               STAT COLOR ACTIVATION
            ===================================================== */

            statRefs.current.forEach((stat) => {
                if (!stat) return;

                const top = stat.querySelector(
                    "[data-stat-top]"
                );

                const number = stat.querySelector(
                    "[data-stat-number]"
                );

                const description = stat.querySelector(
                    "[data-stat-description]"
                );

                if (!top || !number || !description) return;

                gsap.set([top, number, description], {
                    color: "#3d3d3d",
                });

                gsap.to([top, number, description], {
                    color: "#ffffff",
                    ease: "none",
                    scrollTrigger: {
                        trigger: stat,
                        start: "top 40%",
                        end: "top 34%",
                        scrub: 0.5,
                    },
                });
            });
        }, section);

        return () => ctx.revert();
    }, []);

    const leftStats = stats.filter((stat) => stat.lane === "left");
    const rightStats = stats.filter((stat) => stat.lane === "right");

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#111111] text-white"
        >
            <div className="flex w-full items-start">

                {/* =====================================================
                    LEFT — PERFECT ACTIVITY
                ===================================================== */}

                <div className="relative w-[45%] shrink-0 border-r border-white/10">
                    <div
                        ref={activityRef}
                        className="flex h-screen w-full items-center px-5 sm:px-8 lg:px-5"
                    >
                        <h2 className="absolute w-[70%] text-[80px] font-medium leading-[0.88] tracking-[-0.065em]">
                            A Strategic Digital Growth Partner Within the AURAA Ecosystem
                        </h2>
                    </div>
                </div>

                {/* =====================================================
                    RIGHT — TWO SCROLLING LANES
                ===================================================== */}

                <div className="flex w-[55%] items-start">

                    {/* =================================================
                        LEFT LANE
                    ================================================= */}

                    <div className="flex w-1/2 flex-col border-l border-white/10">
                        <div className="ml-[38px] flex flex-col border-l border-white/10">
                            {leftStats.map((stat, index) => (
                                <article
                                    key={`${stat.number}-${index}`}
                                    ref={(el) => {
                                        if (el) {
                                            statRefs.current[index] = el;
                                        }
                                    }}
                                    className="flex min-h-screen w-full flex-col justify-start border-white/10 px-5 py-16 sm:px-8 lg:px-5 lg:py-20 last:min-h-0"
                                >
                                    <div className="flex flex-col">
                                        <span
                                            data-stat-top
                                            className="text-[18px] leading-[1.2] tracking-[-0.025em] text-[#3d3d3d]"
                                        >
                                            {stat.top}
                                        </span>

                                        <span
                                            data-stat-number
                                            className="mt-8 text-[clamp(5rem,8vw,8rem)] font-normal leading-[0.82] tracking-[-0.075em] text-[#3d3d3d]"
                                        >
                                            {stat.number}
                                        </span>

                                        <p
                                            data-stat-description
                                            className="mt-8 max-w-[390px] text-[clamp(1.15rem,1.6vw,1.5rem)] leading-[1.25] tracking-[-0.025em] text-[#3d3d3d]"
                                        >
                                            {stat.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* =================================================
                        RIGHT LANE
                    ================================================= */}

                    <div className="flex w-1/2 flex-col border-l border-white/10 pt-[50vh]">
                        <div className="ml-[38px] flex flex-col border-l border-white/10">
                            {rightStats.map((stat, index) => (
                                <article
                                    key={`${stat.number}-${index}`}
                                    ref={(el) => {
                                        if (el) {
                                            statRefs.current[leftStats.length + index] = el;
                                        }
                                    }}
                                    className="flex min-h-screen w-full flex-col justify-start px-5 py-16 sm:px-8 lg:px-5 lg:py-20 last:min-h-0"
                                >
                                    <div className="flex flex-col">
                                        <span
                                            data-stat-top
                                            className="text-[18px] leading-[1.2] tracking-[-0.025em] text-[#3d3d3d]"
                                        >
                                            {stat.top}
                                        </span>

                                        <span
                                            data-stat-number
                                            className="mt-8 text-[clamp(5rem,8vw,8rem)] font-normal leading-[0.82] tracking-[-0.075em] text-[#3d3d3d]"
                                        >
                                            {stat.number}
                                        </span>

                                        <p
                                            data-stat-description
                                            className="mt-8 max-w-[390px] text-[clamp(1.15rem,1.6vw,1.5rem)] leading-[1.25] tracking-[-0.025em] text-[#3d3d3d]"
                                        >
                                            {stat.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

