"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ParallaxLargeProps = {
    showcase: {
        image: string;
    };
};

export default function CSParallaxLarge({
    showcase,
}: ParallaxLargeProps) {
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
                    yPercent: -20,
                },
                {
                    yPercent: 20,
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
            className="relative mx-4 mt-24 h-[90vh] overflow-hidden rounded-[28px] bg-[#111111]"
        >
            <img
                ref={imageRef}
                src={showcase.image}
                alt=""
                className="absolute left-0 top-0 h-[110%] w-full object-cover will-change-transform"
            />
        </section>
    );
}