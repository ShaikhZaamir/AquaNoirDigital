"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRefs = useRef<HTMLElement[]>([]);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            contentRefs.current.forEach((content) => {
                if (!content) return;

                gsap.fromTo(
                    content,
                    {
                        y: 80,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: content,
                            start: "top 85%",
                            once: true,
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
            className="w-full bg-white pt-11 pb-24 px-5 text-[#111111]"
        >
            <div className="flex w-full items-start">
                {/* Left Content */}
                <div className="relative flex w-1/2 shrink-0 flex-col">
                    <h2
                        ref={(el) => {
                            if (el) contentRefs.current[0] = el;
                        }}
                        className="text-[30px] font-medium leading-[1] tracking-[-0.045em]"
                    >
                        WHO WE ARE?
                    </h2>

                    {/* Decorative Circle */}
                    <div
                        ref={(el) => {
                            if (el) contentRefs.current[1] = el;
                        }}
                        className="mt-8"
                    >
                        <img
                            src="/AND0006-Home-Page-1.png"
                            alt=""
                            className="h-[250px] w-[250px] object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex w-1/2 shrink-0 flex-col">
                    <h2
                        ref={(el) => {
                            if (el) contentRefs.current[2] = el;
                        }}
                        className="max-w-[850px] text-[30px] font-medium leading-[1.05]"
                    >
                        PART OF THE AURAA ECOSYSTEM - STRATEGY,
                        <br />
                        BRAND, AND DIGITAL UNDER ONE ROOF.
                    </h2>

                    <div className="mt-5 max-w-[900px]">
                        <p
                            ref={(el) => {
                                if (el) contentRefs.current[3] = el;
                            }}
                            className="text-[20px] font-normal leading-[1.30]"
                        >
                            Aqua Noir Digital is the digital growth partner within AURAA
                            – a brand strategy and communications group that has
                            partnered with businesses including Meril Life, Axis Bank,
                            Max Life Insurance, DSP Mutual Fund, Edelweiss, Aviva,
                            Britannia, CitiusTech, and Nuvama.
                        </p>

                        <p
                            ref={(el) => {
                                if (el) contentRefs.current[4] = el;
                            }}
                            className="mt-5 text-[20px] font-normal leading-[1.30]"
                        >
                            We bring that strategic depth – 15 years of brand and
                            business thinking across sectors into every digital mandate.
                            AURAA leads on brand strategy, positioning, and
                            communications. We lead on digital performance, acquisition
                            systems, and measurable growth. Together, we are the only
                            integrated strategy-to-digital partner you need.
                        </p>

                        <p
                            ref={(el) => {
                                if (el) contentRefs.current[5] = el;
                            }}
                            className="mt-5 text-[20px] font-normal leading-[1.30]"
                        >
                            We don’t work with everyone. We work with growth-stage
                            businesses who are ready to invest in a partner, not a
                            vendor and who measure success by revenue, not reports.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}