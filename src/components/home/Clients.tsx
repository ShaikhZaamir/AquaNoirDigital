"use client";

import { useEffect, useRef, useState } from "react";
import ClientsMarquee from "./ClientsMarquee";

const logos = [
    "Aditya.png",
    "Burlington.png",
    "Cambridge.png",
    "Craft India.png",
    "F5.png",
    "Fourth Quadrant.png",
    "Galaxy Heights .png",
    "GasSafe.png",
    "Guardian Capital.png",
    "Izels.png",
    "Kanvas.png",
    "Katal Vein.png",
    "McCoy.png",
    "Mickey Links.png",
    "Mody Builders.png",
    "Ombre.png",
    "Osaka.png",
    "SUD.png",
    "Taxiwars.png",
    "Uppercrust.png",
].map((file, index) => ({
    id: index,
    src: `/clientlogos/${encodeURIComponent(file)}`,
}));

export default function Clients() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isVideoOpen) {
            document.body.style.overflow = "hidden";

            const video = videoRef.current;

            if (video) {
                video.play().catch(() => { });
            }
        } else {
            document.body.style.overflow = "";

            const video = videoRef.current;

            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isVideoOpen]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsVideoOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <>
            <section className="w-full overflow-hidden bg-[#111111] px-5 text-white">
                <div className="flex h-[180px] w-full border-t border-b border-white/10">
                    {/* Play Button Area */}
                    <div className="flex pr-7 shrink-0 items-center border-r border-white/10">
                        <div className="relative flex items-center">
                            {/* Image behind play button */}
                            <img
                                src="/left-playbutton.jpeg"
                                alt=""
                                className="relative z-0 h-[80px] w-[80px] rounded-full object-cover"
                            />

                            {/* Play Button */}
                            <button
                                type="button"
                                onClick={() => setIsVideoOpen(true)}
                                className="relative z-10 -ml-[18px] flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full border-[0.1px] border-black bg-[#9bd7e8] shadow-[0_0_0_4px_#111111] transition-transform duration-300 hover:scale-105"
                                aria-label="Play video"
                            >
                                <svg
                                    width="20"
                                    height="26"
                                    viewBox="0 0 384 512"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M73 39c-15-8.7-33.5-8.7-48.5 0S0 64.2 0 81.5v349c0 17.3 9.2 33.5 24.5 42.5s33.5 8.7 48.5 0l288-174.5c14.9-9 24-25.2 24-42.5s-9.1-33.5-24-42.5L73 39z"
                                        fill="black"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Infinite Logos */}
                    <ClientsMarquee logos={logos} />
                </div>
            </section>

            {/* Video Popup */}
            {isVideoOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-5 py-10"
                    onClick={() => setIsVideoOpen(false)}
                >
                    <div
                        className="relative w-full max-w-[1200px]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute -right-2 -top-12 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 hover:scale-105"
                            aria-label="Close video"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M18 6L6 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>

                        {/* Video */}
                        <video
                            ref={videoRef}
                            src="/group-meeting.mp4"
                            controls
                            autoPlay
                            playsInline
                            className="h-auto max-h-[85vh] w-full rounded-[16px] object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
}