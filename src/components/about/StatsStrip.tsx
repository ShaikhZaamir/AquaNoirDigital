"use client";

import { useLayoutEffect, useRef } from "react";
import { Inter } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const inter = Inter({
    subsets: ["latin"],
    weight: ["400"],
});

const stats = [
    {
        label: "Industries we serve",
        value: 12,
        suffix: "+",
        decimals: 0,
    },
    {
        label: "Marketing ROI",
        value: 3.7,
        suffix: "K",
        decimals: 1,
    },
    {
        label: "Reduction in CPL",
        value: 40,
        suffix: "%",
        decimals: 0,
    },
    {
        label: "Client satisfaction",
        value: 95,
        suffix: "%",
        decimals: 0,
    },
];

export default function StatsStrip() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const cards = cardsRef.current;

        if (!section || !cards) {
            return;
        }

        const ctx = gsap.context(() => {
            const cardElements = Array.from(
                cards.querySelectorAll<HTMLElement>(".who-we-are-card")
            );

            // Individual card animations + number counters
            cardElements.forEach((card, index) => {
                const valueElement =
                    card.querySelector<HTMLElement>(".stat-value");

                if (!valueElement) {
                    return;
                }

                // Card entrance
                gsap.fromTo(
                    card,
                    {
                        y: 50,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            once: true,
                            onEnter: () => {
                                const stat = stats[index];

                                const counter = {
                                    value: 0,
                                };

                                gsap.to(counter, {
                                    value: stat.value,
                                    duration: 1.8,
                                    ease: "power2.out",
                                    onUpdate: () => {
                                        valueElement.textContent =
                                            counter.value.toFixed(
                                                stat.decimals
                                            ) + stat.suffix;
                                    },
                                });
                            },
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
            className="border-t border-white/10 bg-[#111111] px-4 pb-32 pt-24 text-white"
        >
            <div
                ref={cardsRef}
                className="flex w-full gap-6"
            >
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="who-we-are-card flex flex-1 flex-col justify-between rounded-[22px] bg-[#1d1d1d] px-10 py-8 gap-6"
                    >
                        <p className="text-[18px] leading-[1.2] text-[#9b9b9b]">
                            {stat.label}
                        </p>

                        <p className={`stat-value ${inter.className} text-[50px] font-normal leading-none tracking-[-0.055em]`}>
                            0
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}