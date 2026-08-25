"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StrategyOverview() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const image = imageRef.current;

        if (!section || !image) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(
                image,
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
                    Most companies are running digital marketing. Very few
                    are running it strategically. If your team is busy but
                    your board is asking hard questions about CAC, ROAS,
                    and pipeline — you don’t have an execution problem.
                    You have a strategy problem. That’s exactly what this
                    service solves.
                </p>

                <ul className="mt-10 flex max-w-[520px] list-disc flex-col gap-5 pl-4 text-[18px] font-normal leading-[1.28] tracking-[-0.035em]">
                    <li className="pl-0">
                        A prioritised 12-month digital growth roadmap aligned
                        to your revenue targets
                    </li>

                    <li className="pl-0">
                        CAC benchmarks per channel and a clear paid / owned /
                        earned budget allocation model
                    </li>

                    <li className="pl-0">
                        Your growth levers ranked by effort-to-impact — so you
                        stop wasting budget on what doesn’t move the needle
                    </li>

                    <li className="pl-0">
                        A quarterly operating cadence — reviews, sprint
                        structures, and OKRs that keep your team accountable
                    </li>

                    <li className="pl-0">
                        Executive alignment across marketing, sales, product,
                        and finance — everyone working from one plan
                    </li>
                </ul>
            </div>

            {/* Right Parallax Image */}
            <div className="h-[626px] w-[1053px]">
                <img
                    ref={imageRef}
                    src="/ax-sa-portfolio-04.png"
                    alt=""
                    className="h-full w-full max-w-none object-cover"
                />
            </div>
        </section>
    );
}