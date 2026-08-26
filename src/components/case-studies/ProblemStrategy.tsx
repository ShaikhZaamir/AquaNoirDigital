"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StrategyItem = {
    title: string;
    description: string;
};

type ProblemStrategyProps = {
    problem: {
        title: string;
        description: string;
        image: string;
    };
    strategy: {
        title: string;
        introduction: string;
        subIntroduction: string;
        items: readonly StrategyItem[];
    };
};

export default function ProblemStrategy({
    problem,
    strategy,
}: ProblemStrategyProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const leftContentRef = useRef<HTMLDivElement>(null);
    const rightContentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const leftContent = leftContentRef.current;
        const rightContent = rightContentRef.current;

        if (!section || !leftContent || !rightContent) {
            return;
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(
                leftContent,
                {
                    y: 60,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 75%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            gsap.fromTo(
                rightContent,
                {
                    y: 60,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.1,
                    ease: "power3.out",
                    delay: 0.1,
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
            className="w-full bg-[#111111] px-4 py-12 text-white"
        >
            <div className="flex w-full">
                {/* LEFT SIDE - THE PROBLEM */}
                <div
                    ref={leftContentRef}
                    className="w-[50%] pl-[7%] will-change-transform"
                >
                    <h2 className="text-[30px] font-medium leading-[1.1] tracking-[-0.055em]">
                        {problem.title}
                    </h2>

                    <p className="mt-8 max-w-[670px] pr-10 text-[18px] leading-[1.2] tracking-[-0.025em] text-white">
                        {problem.description}
                    </p>

                    <div className="mt-6 flex justify-start">
                        <img
                            src={problem.image}
                            alt=""
                            className="h-[450px] w-[318px] object-cover"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE - STRATEGY */}
                <div
                    ref={rightContentRef}
                    className="w-[50%] pr-[9%] will-change-transform"
                >
                    <h2 className="text-[30px] font-medium leading-[1.1] tracking-[-0.055em]">
                        {strategy.title}
                    </h2>

                    <p className="mt-5 max-w-[1500px] text-[19px] leading-[1.2] tracking-[-0.035em] text-white">
                        {strategy.introduction}
                    </p>

                    <p className="mt-4 max-w-[900px] text-[19px] leading-[1.2] tracking-[-0.035em] text-white">
                        {strategy.subIntroduction}
                    </p>

                    {strategy.items.map((item) => (
                        <div
                            key={item.title}
                            className="mt-5"
                        >
                            <h3 className="text-[30px] font-normal leading-[1.1] tracking-[-0.055em]">
                                {item.title}
                            </h3>

                            <p className="mt-4 max-w-[900px] text-[19px] leading-[1.2] tracking-[-0.035em] text-white">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}