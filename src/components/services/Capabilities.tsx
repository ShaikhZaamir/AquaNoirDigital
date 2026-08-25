"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const services = [
    {
        number: "(01)",
        title: "Digital Growth Strategy",
        description:
            "We analyse your current digital ecosystem, identify opportunities for improvement, and build a structured growth roadmap aligned with your business objectives",
        image: "/AND0006-Digital-growth-strategy-270-x-210.jpg",
        href: "/services/digital-growth-strategy",
    },
    {
        number: "(02)",
        title: "Demand Generation & Performance Marketing",
        description:
            "We design acquisition systems that attract right audience and convert attention into meaningful enquiries and sales opportunities",
        image: "/AND0006-Demand-generation-performance-marketing-270-x-210.jpg",
        href: "/services/demand-generation-performance-marketing",
    },
    {
        number: "(03)",
        title: "Search & Organic Visibility",
        description:
            "Customers search before they decide. We help your brand appear in those crucial moments through strong search strategy, technical SEO and high-value content.",
        image: "/AND0006-Search-and-organic-visibilty-270-x-210.jpg",
        href: "/services/search-organic-visibility",
    },
    {
        number: "(04)",
        title: "Brand & Content Ecosystems",
        description:
            "Strong brands grow through consistent communication. We build content strategies and social media ecosystems that strengthen your brand authority and deepen customer engagement",
        image: "/AND0006-Brand-and-content-ecosystems-270-x-210.jpg",
        href: "/services/brand-content-ecosystems",
    },
    {
        number: "(05)",
        title: "Digital Experience Platforms",
        description:
            "Your website is one of your most important growth assets. We design digital platforms that are not only visually compelling but also structured to convert visitors into customers",
        image: "/AND0006-Digital-experience-platform-270-x-210.jpg",
        href: "/services/digital-experience-platforms",
    },
];

export default function Capabilities() {
    const serviceRefs = useRef<HTMLAnchorElement[]>([]);

    const handleMouseEnter = (index: number) => {
        serviceRefs.current.forEach((row, rowIndex) => {
            if (!row) return;

            const description = row.querySelector(
                "[data-service-description]"
            );
            const image = row.querySelector("[data-service-image]");

            if (!description || !image) return;

            if (rowIndex === index) {
                gsap.to(row, {
                    height: 180,
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

                gsap.to(image, {
                    scale: 1.5,
                    transformOrigin: "right top",
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

                gsap.to(image, {
                    scale: 1,
                    transformOrigin: "right top",
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
        const image = row.querySelector("[data-service-image]");

        if (!description || !image) return;

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

        gsap.to(image, {
            scale: 1,
            transformOrigin: "right top",
            duration: 0.7,
            ease: "power3.inOut",
            overwrite: true,
        });
    };

    return (
        <section className="w-full bg-[#111111] px-5 pb-20 text-white">
            <div className="flex w-full items-start border-t border-white/10 pt-14">
                {/* Left Label */}
                <div className="w-[38%] shrink-0">
                    <h2 className="text-[30px] font-normal leading-none tracking-[-0.045em]">
                        CAPABILITIES
                    </h2>
                </div>

                {/* Right Content */}
                <div className="w-[62%]">
                    <h3 className="text-[80px] font-normal leading-[0.9] tracking-[-0.085em]">
                        Building the Systems That Power Digital Growth
                    </h3>

                    {/* Services List */}
                    <div className="mt-24 flex flex-col">
                        {services.map((service, index) => (
                            <Link
                                key={`${service.number}-${index}`}
                                href={service.href}
                                prefetch={true}
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
                                className="flex h-[150px] min-h-[110px] w-full cursor-pointer items-start overflow-hidden border-t border-white/10 pt-1 text-white"
                            >
                                {/* Number */}
                                <div className="w-[18%] shrink-0">
                                    <span className="text-[18px] leading-none text-white/60">
                                        {service.number}
                                    </span>
                                </div>

                                {/* Title + Description */}
                                <div className="w-[62%] pr-6">
                                    <h4 className="max-w-[620px] text-[32px] font-normal leading-[1.05] tracking-[-0.045em]">
                                        {service.title}
                                    </h4>

                                    <p
                                        data-service-description
                                        className="mt-3 max-w-100 translate-y-5 text-[20px] leading-[1.2] tracking-[-0.025em] text-[#999999] opacity-0"
                                    >
                                        {service.description}
                                    </p>
                                </div>

                                {/* Image */}
                                <div className="ml-auto w-[184px] shrink-0 overflow-visible rounded-[16px]">
                                    <img
                                        data-service-image
                                        src={service.image}
                                        alt=""
                                        className="pointer-events-none h-[100px] w-full rounded-[16px] object-cover"
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