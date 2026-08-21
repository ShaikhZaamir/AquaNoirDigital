"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * Full-screen loader.
 *
 * Sequence:
 *  1. Black overlay covers the viewport, a partial-arc ring spins center screen.
 *  2. Once loading is done, the ring fades/shrinks out.
 *  3. The overlay splits into a left and right panel that snap apart like
 *     curtains (fast, front-loaded ease — most motion in the first ~100ms,
 *     settling over ~0.6s), revealing the page underneath.
 *  4. Component unmounts so it stops blocking pointer events / a11y tree.
 *
 * Swap `MIN_DISPLAY_MS` / the `Promise` in `waitForReady` for a real
 * "app is ready" signal (fonts loaded, hero images decoded, etc.) if you
 * have one — right now it just holds for a minimum time so the spinner
 * doesn't flash instantly on fast loads.
 */

const MIN_DISPLAY_MS = 1400;

function waitForReady() {
    const minDelay = new Promise((resolve) => setTimeout(resolve, MIN_DISPLAY_MS));

    const documentReady = new Promise<void>((resolve) => {
        if (document.readyState === "complete") {
            resolve();
            return;
        }
        window.addEventListener("load", () => resolve(), { once: true });
    });

    return Promise.all([minDelay, documentReady]);
}

export default function Loader() {
    const wrapRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    const [isMounted, setIsMounted] = useState(true);

    useLayoutEffect(() => {
        const wrap = wrapRef.current;
        const left = leftRef.current;
        const right = rightRef.current;
        const ring = ringRef.current;

        if (!wrap || !left || !right || !ring) return;

        document.body.style.overflow = "hidden";

        let cancelled = false;

        const tl = gsap.timeline({
            paused: true,
            onComplete: () => {
                document.body.style.overflow = "";
                setIsMounted(false);
            },
        });

        // Ring fade/shrink out.
        tl.to(ring, {
            opacity: 0,
            scale: 0.55,
            duration: 0.35,
            ease: "power2.in",
        });

        // Curtain split — fast, front-loaded ease for that "burst" snap.
        tl.to(
            left,
            {
                xPercent: -100,
                duration: 0.65,
                ease: "power4.out",
            },
            "curtain"
        ).to(
            right,
            {
                xPercent: 100,
                duration: 0.65,
                ease: "power4.out",
            },
            "curtain"
        );

        waitForReady().then(() => {
            if (!cancelled) tl.play();
        });

        return () => {
            cancelled = true;
            tl.kill();
            document.body.style.overflow = "";
        };
    }, []);

    if (!isMounted) return null;

    return (
        <div ref={wrapRef} className="fixed inset-0 z-[999]">
            {/* Ring — stays centered on the viewport, independent of the panels */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div
                    ref={ringRef}
                    className="h-16 w-16 animate-spin rounded-full border-2 border-white/25 border-t-white"
                    style={{ animationDuration: "0.9s" }}
                />
            </div>

            {/* Left curtain panel */}
            <div
                ref={leftRef}
                className="absolute inset-y-0 left-0 w-1/2 bg-[#111111]"
            />

            {/* Right curtain panel */}
            <div
                ref={rightRef}
                className="absolute inset-y-0 right-0 w-1/2 bg-[#111111]"
            />
        </div>
    );
}