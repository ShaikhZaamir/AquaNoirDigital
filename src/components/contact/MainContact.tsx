"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MainContact() {
    const sectionRef = useRef<HTMLElement>(null);

    const labelRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);

    const leftContentRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const label = labelRef.current;
        const heading = headingRef.current;
        const leftContent = leftContentRef.current;
        const form = formRef.current;

        if (!section || !label || !heading || !leftContent || !form) {
            return;
        }

        const ctx = gsap.context(() => {
            /* =========================================
               TOP LABEL
            ========================================= */

            gsap.fromTo(
                label,
                {
                    y: 50,
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
                        toggleActions: "play none none reverse",
                    },
                }
            );

            /* =========================================
               TOP HEADING
            ========================================= */

            gsap.fromTo(
                heading,
                {
                    y: 70,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            /* =========================================
               LEFT CONTACT CONTENT
            ========================================= */

            gsap.fromTo(
                leftContent,
                {
                    y: 70,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: leftContent,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            /* =========================================
               CONTACT FORM
            ========================================= */

            gsap.fromTo(
                form,
                {
                    y: 70,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: form,
                        start: "top 85%",
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
            className="w-full bg-[#111111] px-4 py-24 text-white"
        >
            {/* Top Row */}
            <div className="flex w-full items-start">
                {/* Left Label */}
                <div
                    ref={labelRef}
                    className="w-[25%] will-change-transform"
                >
                    <span className="text-[30px] font-normal uppercase tracking-[-0.04em]">
                        Contact
                    </span>
                </div>

                {/* Main Heading */}
                <div
                    ref={headingRef}
                    className="w-[75%] justify-end will-change-transform"
                >
                    <h1 className="text-[50px] font-normal leading-[0.95] tracking-[-0.065em]">
                        Let’s connect and get the project started.
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="mt-20 flex w-full">
                {/* Left Contact Information */}
                <div
                    ref={leftContentRef}
                    className="w-[35%] will-change-transform"
                >
                    <h2 className="text-[30px] font-normal tracking-[-0.04em]">
                        Get in touch
                    </h2>

                    <p className="mt-8 max-w-[500px] text-[30px] font-normal leading-[1.08] tracking-[-0.055em]">
                        We’re excited to hear from you
                        <br />
                        and let’s start something special
                        <br />
                        together
                    </p>

                    <div className="mt-4 flex flex-col items-start">
                        <a
                            href="mailto:info@aquanoirdigital.com"
                            className="text-[30px] font-normal leading-[1.35] tracking-[-0.045em] underline underline-offset-8"
                        >
                            info@aquanoirdigital.com
                        </a>

                        <a
                            href="tel:+917030091866"
                            className="mt-2 text-[30px] font-normal leading-[1.35] tracking-[-0.045em] underline underline-offset-8"
                        >
                            +91 70300 91866
                        </a>
                    </div>

                    {/* Follow */}
                    <div className="mt-14">
                        <span className="text-[20px] font-normal">
                            Follow
                        </span>

                        <div className="mt-6 flex flex-col items-start">
                            <a
                                href="#"
                                className="text-[30px] font-normal leading-[1.3] tracking-[-0.045em] underline underline-offset-8"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="#"
                                className="text-[30px] font-normal leading-[1.3] tracking-[-0.045em] underline underline-offset-8"
                            >
                                Facebook
                            </a>

                            <a
                                href="#"
                                className="text-[30px] font-normal leading-[1.3] tracking-[-0.045em] underline underline-offset-8"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Contact Form */}
                <div
                    ref={formRef}
                    className="w-[65%] will-change-transform"
                >
                    <form className="w-full">
                        {/* Name + Email */}
                        <div className="grid grid-cols-2 gap-x-16">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="h-[34px] w-full border-b border-white bg-transparent text-[22px] font-normal tracking-[-0.035em] text-white outline-none placeholder:text-white"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="h-[34px] w-full border-b border-white bg-transparent text-[22px] font-normal tracking-[-0.035em] text-white outline-none placeholder:text-white"
                                />
                            </div>
                        </div>

                        {/* Phone + Company */}
                        <div className="mt-16 grid grid-cols-2 gap-x-16">
                            <div>
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="h-[34px] w-full border-b border-white bg-transparent text-[22px] font-normal tracking-[-0.035em] text-white outline-none placeholder:text-white"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Company"
                                    className="h-[34px] w-full border-b border-white bg-transparent text-[22px] font-normal tracking-[-0.035em] text-white outline-none placeholder:text-white"
                                />
                            </div>
                        </div>

                        {/* Budget + Subject */}
                        <div className="mt-16 grid grid-cols-2 gap-x-16">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Budget"
                                    className="h-[34px] w-full border-b border-white bg-transparent text-[22px] font-normal tracking-[-0.035em] text-white outline-none placeholder:text-white"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="h-[34px] w-full border-b border-white bg-transparent text-[22px] font-normal tracking-[-0.035em] text-white outline-none placeholder:text-white"
                                />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mt-16">
                            <textarea
                                className="h-[100px] w-full resize-none border-b border-white bg-transparent p-0 text-[22px] font-normal text-white outline-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="mt-16 flex h-[72px] w-[203px] items-center justify-center rounded-full bg-white px-[26px] text-[18px] font-normal text-[#111111]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}