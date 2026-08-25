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
                            className="group/contact-link relative text-[30px] font-normal leading-[1.35] tracking-[-0.045em]"
                        >
                            info@aquanoirdigital.com

                            <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-hover/contact-link:scale-x-0" />
                        </a>

                        <a
                            href="tel:+917030091866"
                            className="group/contact-link relative mt-2 text-[30px] font-normal leading-[1.35] tracking-[-0.045em]"
                        >
                            +91 70300 91866

                            <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-hover/contact-link:scale-x-0" />
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
                                className="group/contact-link relative text-[30px] font-normal leading-[1.3] tracking-[-0.045em]"
                            >
                                Facebook

                                <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-hover/contact-link:scale-x-0" />
                            </a>

                            <a
                                href="#"
                                className="group/contact-link relative text-[30px] font-normal leading-[1.3] tracking-[-0.045em]"
                            >
                                Twitter

                                <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-hover/contact-link:scale-x-0" />
                            </a>

                            <a
                                href="#"
                                className="group/contact-link relative text-[30px] font-normal leading-[1.3] tracking-[-0.045em]"
                            >
                                LinkedIn

                                <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-hover/contact-link:scale-x-0" />
                            </a>
                            <a
                                href="#"
                                className="group/contact-link relative text-[30px] font-normal leading-[1.3] tracking-[-0.045em]"
                            >
                                Instagram

                                <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-hover/contact-link:scale-x-0" />
                            </a>
                            <a
                                href="#"
                                className="group/contact-link relative text-[30px] font-normal leading-[1.3] tracking-[-0.045em]"
                            >
                                Dribbble

                                <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-hover/contact-link:scale-x-0" />
                            </a>
                            <a
                                href="#"
                                className="group/contact-link relative text-[30px] font-normal leading-[1.3] tracking-[-0.045em]"
                            >
                                Behance

                                <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-hover/contact-link:scale-x-0" />
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
                            <div className="relative group/form-field">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="h-[34px] w-full bg-transparent text-[22px] font-normal tracking-[-0.035em] text-white outline-none placeholder:text-white"
                                />

                                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-focus-within/form-field:scale-x-0" />
                            </div>

                            <div className="relative group/form-field">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="h-[34px] w-full bg-transparent text-[22px] font-normal tracking-[-0.035em] text-white outline-none placeholder:text-white"
                                />

                                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-focus-within/form-field:scale-x-0" />
                            </div>
                        </div>

                        {/* Phone + Company */}
                        <div className="mt-16 grid grid-cols-2 gap-x-16">
                            <div className="relative group/form-field">
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="h-[34px] w-full bg-transparent text-[22px] font-normal tracking-[-0.035em] text-white outline-none placeholder:text-white"
                                />

                                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-focus-within/form-field:scale-x-0" />
                            </div>

                            <div className="relative group/form-field">
                                <input
                                    type="text"
                                    placeholder="Company"
                                    className="h-[34px] w-full bg-transparent text-[22px] font-normal tracking-[-0.035em] text-white outline-none placeholder:text-white"
                                />

                                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-focus-within/form-field:scale-x-0" />
                            </div>
                        </div>

                        {/* Budget + Subject */}
                        <div className="mt-16 grid grid-cols-2 gap-x-16">
                            <div className="relative group/form-field">
                                <input
                                    type="text"
                                    placeholder="Budget"
                                    className="h-[34px] w-full bg-transparent text-[22px] font-normal tracking-[-0.035em] text-white outline-none placeholder:text-white"
                                />

                                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-focus-within/form-field:scale-x-0" />
                            </div>

                            <div className="relative group/form-field">
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="h-[34px] w-full bg-transparent text-[22px] font-normal tracking-[-0.035em] text-white outline-none placeholder:text-white"
                                />

                                <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-focus-within/form-field:scale-x-0" />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="relative mt-16 group/form-field">
                            <textarea className="h-[100px] w-full resize-none bg-transparent p-0 text-[22px] font-normal text-white outline-none" />

                            <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-100 bg-white transition-transform duration-500 ease-in-out group-focus-within/form-field:scale-x-0" />
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