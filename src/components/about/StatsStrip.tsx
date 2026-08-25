"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    {
        label: "35+ Google reviews",
        value: 4.9,
        suffix: "",
        decimals: 1,
    },
    {
        label: "Clients world-wide",
        value: 1.8,
        suffix: "K",
        decimals: 1,
    },
    {
        label: "Completed projects",
        value: 1.7,
        suffix: "K",
        decimals: 1,
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

            // ---------------------------------------------------------
            // Individual card animations + number counters
            // ---------------------------------------------------------
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
            className="border-t border-white/10 bg-[#111111] px-4 pb-32 pt-16 text-white"
        >
            <div
                ref={cardsRef}
                className="flex w-full items-stretch gap-6"
            >
                {stats.map((stat) => (
                    <div
                        key={stat.label}
                        className="who-we-are-card flex min-h-[188px] flex-1 flex-col justify-between rounded-[22px] bg-[#1d1d1d] px-8 py-8 sm:min-h-[190px] sm:px-10 sm:py-9"
                    >
                        <p className="text-[18px] leading-[1.2] text-[#9b9b9b]">
                            {stat.label}
                        </p>

                        <p className="stat-value text-[56px] font-normal leading-none tracking-[-0.055em] sm:text-[58px] lg:text-[60px]">
                            0
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}