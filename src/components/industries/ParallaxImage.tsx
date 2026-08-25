"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxImage() {
    const sectionRef = useRef<HTMLElement>(null);
    const laptopImageRef = useRef<HTMLImageElement>(null);
    const meetingImageRef = useRef<HTMLImageElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const laptopImage = laptopImageRef.current;
        const meetingImage = meetingImageRef.current;

        if (!section || !laptopImage || !meetingImage) return;

        const ctx = gsap.context(() => {
            const images = [laptopImage, meetingImage];

            images.forEach((image) => {
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
            });
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative mt-20 h-[110vh] min-h-[500px] overflow-hidden bg-[#111111]"
        >
            {/* Small Meeting Image */}
            <div className="absolute left-[31.5%] top-[8%] z-10 h-[300px] w-[235px] overflow-hidden">
                <img
                    ref={meetingImageRef}
                    src="/ax-h2-about-02.png"
                    alt=""
                    className="absolute left-0 top-0 h-[116%] w-full max-w-none object-cover"
                />
            </div>

            {/* Large Laptop Image */}
            <div className="absolute left-[54.5%] top-0 h-full w-[45.5%] overflow-hidden">
                <img
                    ref={laptopImageRef}
                    src="/ax-h2-about-01.png"
                    alt=""
                    className="absolute left-0 top-0 h-[110vh] w-full max-w-none object-cover"
                />
            </div>
        </section>
    );
}

