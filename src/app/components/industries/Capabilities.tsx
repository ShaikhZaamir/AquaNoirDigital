"use client";

import { useState } from "react";

const INITIAL_IMAGE_SIZE = 35;
const FINAL_IMAGE_SIZE = 64;
const POPUP_DURATION = "1.2s";

const capabilities = [
    {
        title: "Real Estate",
        image: "/Reak-Estate.png",
    },
    {
        title: "Financial Services & BFSI",
        image: "/Financial-.png",
    },
    {
        title: "Healthcare",
        image: "/Healthcare.png",
    },
    {
        title: "Technology & SaaS",
        image: "/Technology-.png",
    },
    {
        title: "Consumer & D2C Brands",
        image: "/Consumer-.png",
    },
    {
        title: "Heavy Engineering",
        image: "/Engineering.png",
    },
    {
        title: "Education & Consultant",
        image: "/Education.png",
    },
];

export default function Capabilities() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [imageTop, setImageTop] = useState(0);

    const handleMouseEnter = (
        index: number,
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        const rect = event.currentTarget.getBoundingClientRect();

        setImageTop(rect.top + rect.height / 2);
        setActiveIndex(index);
    };

    return (
        <section className="flex h-screen w-full bg-[#111111] px-5 text-white">
            {/* Left */}
            <div className="flex w-[30%] items-start pt-[22vh]">
                <p className="text-[30px] font-normal uppercase tracking-[-0.04em]">
                    Our Capabilities
                </p>
            </div>

            {/* Full Right List */}
            <div className="flex flex-1 items-center">
                <div className="flex w-full flex-col">
                    {capabilities.map((capability, index) => (
                        <div
                            key={capability.title}
                            onMouseEnter={(event) =>
                                handleMouseEnter(index, event)
                            }
                            onMouseLeave={() => setActiveIndex(null)}
                            className="flex cursor-pointer items-center"
                        >
                            <h2 className="text-[58px] font-normal leading-[1.22] tracking-[-0.055em]">
                                {capability.title}
                            </h2>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hover Image */}
            {activeIndex !== null && (
                <div
                    key={activeIndex}
                    className="pointer-events-none fixed right-5 z-50 overflow-hidden rounded-[18px] opacity-0 animate-[popup_var(--popup-duration)_cubic-bezier(0.16,1,0.3,1)_forwards]"
                    style={
                        {
                            top: `${imageTop}px`,
                            width: `${FINAL_IMAGE_SIZE}px`,
                            height: `${FINAL_IMAGE_SIZE}px`,
                            transform: "translateY(-50%)",
                            transformOrigin: "top right",
                            "--popup-duration": POPUP_DURATION,
                            "--initial-scale":
                                INITIAL_IMAGE_SIZE / FINAL_IMAGE_SIZE,
                        } as React.CSSProperties
                    }
                >
                    <img
                        src={capabilities[activeIndex].image}
                        alt={capabilities[activeIndex].title}
                        className="h-full w-full object-cover"
                    />
                </div>
            )}

            <style jsx>{`
            @keyframes popup {
                0% {
                    opacity: 0;
                    transform: translateY(-50%)
                        scale(var(--initial-scale));
                }

                100% {
                    opacity: 1;
                    transform: translateY(-50%) scale(1);
                }
            }
        `}</style>
        </section>
    );
}