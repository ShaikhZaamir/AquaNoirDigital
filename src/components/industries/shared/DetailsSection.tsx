"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type DetailsSectionItem = {
    number: string;
    title: string;
    items: string[];
    image: string;
};

type DetailsSectionProps = {
    sections: DetailsSectionItem[];
};

export default function DetailsSection({
    sections,
}: DetailsSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const imageRefs = useRef<HTMLImageElement[]>([]);
    const imageWrapperRefs = useRef<HTMLDivElement[]>([]);

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const ctx = gsap.context(() => {
            imageRefs.current.forEach((image, index) => {
                const wrapper = imageWrapperRefs.current[index];

                if (!image || !wrapper) return;

                gsap.set(wrapper, {
                    width: 191,
                    height: 265,
                    clipPath: "inset(0 0% 0 0 round 18px)",
                });

                gsap.set(image, {
                    xPercent: 0,
                    force3D: true,
                });

                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: image,
                        start: "top 101%",
                        end: "top 50%",
                        scrub: 0.8,
                    },
                });

                timeline.to(wrapper, {
                    width: 545,
                    height: 265,
                    duration: 2,
                    ease: "none",
                });
            });
        }, section);

        return () => ctx.revert();
    }, [sections]);

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#111111] px-4 py-0 text-white sm:px-6 lg:px-4"
        >
            <div className="w-full">
                {sections.map((service, index) => (
                    <article
                        key={`${service.number}-${service.title}`}
                        className="flex w-full flex-col border-t border-white/10 py-8 lg:min-h-[326px] lg:flex-row lg:items-start lg:py-8"
                    >
                        {/* Number */}
                        <div className="flex w-full shrink-0 lg:w-[21.5%]">
                            <span className="text-[30px] font-normal leading-none tracking-[-0.04em]">
                                {service.number}
                            </span>
                        </div>

                        {/* Service Information */}
                        <div className="mt-8 flex w-full flex-col lg:mt-0 lg:w-[38.5%]">
                            <h3 className="text-[30px] font-normal leading-[1] tracking-[-0.04em]">
                                {service.title}
                            </h3>

                            <div className="mt-7 flex flex-col">
                                {service.items.map((item, itemIndex) => (
                                    <span
                                        key={`${item}-${itemIndex}`}
                                        className="text-[18px] font-normal leading-[1.55] tracking-[-0.025em]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="mt-8 flex w-full justify-end pr-3 lg:mt-0 lg:w-[40%]">
                            <div
                                ref={(el) => {
                                    if (el) {
                                        imageWrapperRefs.current[index] = el;
                                    }
                                }}
                                className="overflow-hidden rounded-[18px]"
                            >
                                <img
                                    ref={(el) => {
                                        if (el) {
                                            imageRefs.current[index] = el;
                                        }
                                    }}
                                    src={service.image}
                                    alt={service.title}
                                    className="block h-full w-full object-cover will-change-transform"
                                />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}