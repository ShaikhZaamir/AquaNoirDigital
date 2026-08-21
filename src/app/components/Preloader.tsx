"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
    onComplete?: () => void;
    minimumShowTime?: number; // Minimum duration in ms (e.g. 2000ms)
}

export default function Preloader({
    onComplete,
    minimumShowTime = 2000,
}: PreloaderProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Keep visible for specified minimum time, then trigger exit transition
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, minimumShowTime);

        return () => clearTimeout(timer);
    }, [minimumShowTime]);

    return (
        <AnimatePresence onExitComplete={onComplete}>
            {isLoading && (
                <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden">
                    {/* Left Curtain */}
                    <motion.div
                        initial={{ x: "0%" }}
                        exit={{
                            x: "-100%",
                            transition: {
                                duration: 0.9,
                                ease: [0.76, 0, 0.24, 1], // Custom smooth cubic-bezier curtain ease
                            },
                        }}
                        className="absolute left-0 top-0 h-full w-1/2 bg-[#111111]"
                    />

                    {/* Right Curtain */}
                    <motion.div
                        initial={{ x: "0%" }}
                        exit={{
                            x: "100%",
                            transition: {
                                duration: 0.9,
                                ease: [0.76, 0, 0.24, 1],
                            },
                        }}
                        className="absolute right-0 top-0 h-full w-1/2 bg-[#111111]"
                    />

                    {/* Spinner Icon */}
                    <motion.div
                        initial={{ opacity: 1, scale: 1 }}
                        exit={{
                            opacity: 0,
                            scale: 0.8,
                            transition: { duration: 0.3, ease: "easeOut" },
                        }}
                        className="relative z-10 flex items-center justify-center"
                    >
                        <svg
                            className="h-20 w-20 animate-spin text-white"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                stroke="currentColor"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray="200"
                                strokeDashoffset="60"
                                className="opacity-90"
                            />
                        </svg>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}