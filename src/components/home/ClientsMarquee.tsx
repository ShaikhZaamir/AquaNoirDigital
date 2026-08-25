"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type ClientLogo = {
    id: number;
    src: string;
};

export default function ClientsMarquee({
    logos,
}: {
    logos: ClientLogo[];
}) {
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = trackRef.current;

        if (!track) return;

        const ctx = gsap.context(() => {
            const totalWidth = track.scrollWidth / 2;

            gsap.to(track, {
                x: -totalWidth,
                duration: 25,
                ease: "none",
                repeat: -1,
            });
        }, track);

        return () => ctx.revert();
    }, []);

    return (
        <div className="relative flex min-w-0 flex-1 items-center overflow-hidden">
            <div
                ref={trackRef}
                className="flex w-max shrink-0 items-center"
            >
                {[...logos, ...logos].map((logo, index) => (
                    <div
                        key={`${logo.id}-${index}`}
                        className="client-logo flex h-[224px] w-[300px] shrink-0 items-center justify-center px-10"
                    >
                        <img
                            src={logo.src}
                            alt=""
                            className="h-[100px] w-auto object-contain opacity-30"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}