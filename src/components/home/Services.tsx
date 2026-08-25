"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        number: "(01)",
        title: "Digital Growth Strategy",
        slug: "digital-growth-strategy",
        description:
            "We analyse your current digital ecosystem, identify opportunities for improvement, and build a structured growth roadmap aligned with your business objectives",
        image: "/AND0006-Digital-growth-strategy-270-x-210.jpg",
    },
    {
        number: "(02)",
        title: "Demand Generation & Performance Marketing",
        slug: "demand-generation-performance-marketing",
        description:
            "We design acquisition systems that attract right audience and convert attention into meaningful enquiries and sales opportunities",
        image: "/AND0006-Demand-generation-performance-marketing-270-x-210.jpg",
    },
    {
        number: "(03)",
        title: "Search & Organic Visibility",
        slug: "search-organic-visibility",
        description:
            "Customers search before they decide. We help your brand appear in those crucial moments through strong search strategy, technical SEO and high-value content.",
        image: "/AND0006-Search-and-organic-visibilty-270-x-210.jpg",
    },
    {
        number: "(04)",
        title: "Brand & Content Ecosystems",
        slug: "brand-content-ecosystems",
        description:
            "Strong brands grow through consistent communication. We build content strategies and social media ecosystems that strengthen your brand authority and deepen customer engagement",
        image: "/AND0006-Brand-and-content-ecosystems-270-x-210.jpg",
    },
    {
        number: "(05)",
        title: "Digital Experience Platforms",
        slug: "digital-experience-platforms",
        description:
            "Your website is one of your most important growth assets. We design digital platforms that are not only visually compelling but also structured to convert visitors into customers",
        image: "/AND0006-Digital-experience-platform-270-x-210.jpg",
    },
];

export default function Services() {
    const sectionRef = useRef<HTMLElement>(null);
    const serviceRefs = useRef<HTMLAnchorElement[]>([]);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const content = contentRef.current;

        if (!section || !content) return;

        const ctx = gsap.context(() => {
            /* Viewport entrance animation */
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
                        trigger: section,
                        start: "top 80%",
                        once: true,
                    },
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (index: number) => {
        serviceRefs.current.forEach((row, rowIndex) => {
            if (!row) return;

            const description = row.querySelector(
                "[data-service-description]"
            );
            const imageWrapper = row.querySelector(
                "[data-service-image-wrapper]"
            );

            if (!description || !imageWrapper) return;

            if (rowIndex === index) {
                gsap.to(row, {
                    height: 200,
                    duration: 0.7,
                    ease: "power3.out",
                    overwrite: true,
                });

                gsap.to(description, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: 0.1,
                    ease: "power3.out",
                    overwrite: true,
                });

                gsap.to(imageWrapper, {
                    width: 295,
                    height: 145,
                    duration: 0.7,
                    ease: "power3.out",
                    overwrite: true,
                });
            } else {
                gsap.to(row, {
                    height: 100,
                    duration: 0.6,
                    ease: "power3.inOut",
                    overwrite: true,
                });

                gsap.to(description, {
                    opacity: 0,
                    y: 20,
                    duration: 0.4,
                    ease: "power2.out",
                    overwrite: true,
                });

                gsap.to(imageWrapper, {
                    width: 165,
                    height: 81,
                    duration: 0.6,
                    ease: "power3.inOut",
                    overwrite: true,
                });
            }
        });
    };

    const handleMouseLeave = (index: number) => {
        const row = serviceRefs.current[index];

        if (!row) return;

        const description = row.querySelector(
            "[data-service-description]"
        );
        const imageWrapper = row.querySelector(
            "[data-service-image-wrapper]"
        );

        if (!description || !imageWrapper) return;

        gsap.to(row, {
            height: 100,
            duration: 0.7,
            ease: "power3.inOut",
            overwrite: true,
        });

        gsap.to(description, {
            opacity: 0,
            y: 20,
            duration: 0.45,
            ease: "power2.out",
            overwrite: true,
        });

        gsap.to(imageWrapper, {
            width: 165,
            height: 81,
            duration: 0.7,
            ease: "power3.inOut",
            overwrite: true,
        });
    };

    return (
        <section
            ref={sectionRef}
            className="w-full bg-[#111111] px-5 pb-40 text-white"
        >
            <div
                ref={contentRef}
                className="flex w-full items-start border-t border-white/10 pt-12"
            >
                {/* Left Label */}
                <div className="w-[38%] shrink-0">
                    <h2 className="text-[30px] font-medium leading-none tracking-[-0.045em]">
                        OUR SERVICES
                    </h2>
                </div>

                {/* Right Content */}
                <div className="w-[62%]">
                    <h3 className="text-[30px] uppercase font-medium leading-[0.9] tracking-[-0.025em]">
                        Our services that power your business growth
                    </h3>

                    {/* Services List */}
                    <div className="mt-24 flex flex-col">
                        {services.map((service, index) => (
                            <Link
                                key={`${service.number}-${index}`}
                                href={`/services/${service.slug}`}
                                ref={(el) => {
                                    if (el) {
                                        serviceRefs.current[index] = el;
                                    }
                                }}
                                onMouseEnter={() =>
                                    handleMouseEnter(index)
                                }
                                onMouseLeave={() =>
                                    handleMouseLeave(index)
                                }
                                className="flex h-[100px] min-h-[100px] w-full items-start overflow-hidden border-t border-white/10 pt-2"
                            >
                                {/* Number */}
                                <div className="w-[15%] shrink-0">
                                    <span className="text-[16px] leading-none text-white/60">
                                        {service.number}
                                    </span>
                                </div>

                                {/* Title + Description */}
                                <div className="w-[64%]">
                                    <h4 className="max-w-[620px] text-[32px] font-normal leading-[1.05] tracking-[-0.045em]">
                                        {service.title}
                                    </h4>

                                    <p
                                        data-service-description
                                        className="mt-3 max-w-100 translate-y-5 text-[20px] text-[#999999] leading-[1.2] tracking-[-0.005em] opacity-0"
                                    >
                                        {service.description}
                                    </p>
                                </div>

                                {/* Image */}
                                <div
                                    data-service-image-wrapper
                                    style={{
                                        width: 165,
                                        height: 81,
                                    }}
                                    className="ml-auto shrink-0 overflow-visible rounded-[16px]"
                                >
                                    <img
                                        src={service.image}
                                        alt=""
                                        className="pointer-events-none h-full w-full rounded-[16px] object-cover"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}