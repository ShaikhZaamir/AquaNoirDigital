"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

interface LogoItem {
    id: string;
    label: string;
    logoSrc: string;
    bg: string;
}

const LOGO_ITEMS: LogoItem[] = [
    { id: "1", label: "Activepieces", logoSrc: "/partnerlogos/ActivePieces.png", bg: "#FFFFFF" },
    { id: "2", label: "Canva", logoSrc: "/partnerlogos/Canva.png", bg: "#FFFFFF" },
    { id: "3", label: "ChatGPT", logoSrc: "/partnerlogos/ChatGPT.png", bg: "#FFFFFF" },
    { id: "4", label: "Elementor", logoSrc: "/partnerlogos/Elementor.png", bg: "#FFFFFF" },
    { id: "5", label: "ElevenLabs", logoSrc: "/partnerlogos/ElevenLabs.png", bg: "#FFFFFF" },
    { id: "6", label: "Google Ads", logoSrc: "/partnerlogos/GoogleAds.png", bg: "#FFFFFF" },
    { id: "7", label: "HubSpot", logoSrc: "/partnerlogos/HubSpot.png", bg: "#FFFFFF" },
    { id: "8", label: "LinkedIn Ads", logoSrc: "/partnerlogos/LinkedInAds.png", bg: "#FFFFFF" },
    { id: "9", label: "Meta Ads", logoSrc: "/partnerlogos/MetaAds.png", bg: "#FFFFFF" },
    { id: "10", label: "Sprout Social", logoSrc: "/partnerlogos/SproutSocial.png", bg: "#FFFFFF" },
    { id: "11", label: "WATI", logoSrc: "/partnerlogos/WATI.png", bg: "#FFFFFF" },
    { id: "12", label: "WhatsApp", logoSrc: "/partnerlogos/WhatsApp.png", bg: "#FFFFFF" },
    { id: "13", label: "WordPress", logoSrc: "/partnerlogos/WordPress.png", bg: "#FFFFFF" },
    { id: "14", label: "WP Rocket", logoSrc: "/partnerlogos/WPRocket.png", bg: "#FFFFFF" },
    { id: "15", label: "Yoast SEO", logoSrc: "/partnerlogos/YoastSEO.png", bg: "#FFFFFF" },
];

export default function FallingText() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const pillsRef = useRef<(HTMLDivElement | null)[]>([]);

    const [hasFallen, setHasFallen] = useState(false);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHasFallen(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (
            !hasFallen ||
            !containerRef.current ||
            !canvasContainerRef.current
        ) {
            return;
        }

        const {
            Engine,
            Render,
            World,
            Bodies,
            Runner,
            Mouse,
            MouseConstraint,
        } = Matter;

        const containerRect = containerRef.current.getBoundingClientRect();
        const width = containerRect.width;
        const height = containerRect.height;

        if (width <= 0 || height <= 0) return;

        const engine = Engine.create({
            positionIterations: 20,
            velocityIterations: 20,
        });

        engine.world.gravity.y = 0.20;

        const render = Render.create({
            element: canvasContainerRef.current,
            engine,
            options: {
                width,
                height,
                background: "transparent",
                wireframes: false,
            },
        });

        const wallOptions: Matter.IChamferableBodyDefinition = {
            isStatic: true,
            render: { fillStyle: "transparent" },
        };

        const floorHeight = 120;
        
        // Floor height calculations:
        // Decorative lines span ~48px (8 lines * 1px + 7 * 4px gap + pb-2 offset).
        // Placing top surface ~50px above the bottom ensures pills land right on top of the uppermost white line.
        const floorY = height - 50 + floorHeight / 2;

        const floor = Bodies.rectangle(
            width / 2,
            floorY,
            width * 2,
            floorHeight,
            wallOptions
        );

        const leftWall = Bodies.rectangle(-100, height / 2, 200, height * 4, wallOptions);
        const rightWall = Bodies.rectangle(width + 100, height / 2, 200, height * 4, wallOptions);
        const ceiling = Bodies.rectangle(width / 2, -2000, width * 2, 100, wallOptions);

        const pillBodies = pillsRef.current
            .map((elem, i) => {
                if (!elem) return null;

                const pillWidth = 160;
                const pillHeight = 56;

                const columns = Math.min(
                    LOGO_ITEMS.length,
                    Math.max(3, Math.floor(width / 200))
                );

                const column = i % columns;
                const columnWidth = width / columns;

                const startX = columnWidth * column + columnWidth / 2 + (Math.random() * 20 - 10);

                const row = Math.floor(i / columns);
                const startY = -150 - row * 140 - Math.random() * 80;

                const body = Bodies.rectangle(
                    Math.max(pillWidth / 2, Math.min(width - pillWidth / 2, startX)),
                    startY,
                    pillWidth,
                    pillHeight,
                    {
                        chamfer: { radius: pillHeight / 2 },
                        restitution: 0.9,
                        frictionAir: 0.015,
                        friction: 0.5,
                        density: 0.002,
                        slop: 0,
                    }
                );

                Matter.Body.setVelocity(body, {
                    x: (Math.random() - 0.5) * 1.5,
                    y: Math.random() * 2 + 1,
                });

                Matter.Body.setAngularVelocity(
                    body,
                    (Math.random() - 0.5) * 0.04
                );

                return { elem, body };
            })
            .filter(Boolean) as {
                elem: HTMLDivElement;
                body: Matter.Body;
            }[];

        const mouse = Mouse.create(containerRef.current);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false },
            },
        });

        render.mouse = mouse;

        World.add(engine.world, [
            floor,
            leftWall,
            rightWall,
            ceiling,
            mouseConstraint,
            ...pillBodies.map((pb) => pb.body),
        ]);

        const runner = Runner.create();
        Runner.run(runner, engine);
        Render.run(render);

        let animId: number;

        const updateLoop = () => {
            pillBodies.forEach(({ body, elem }) => {
                const { x, y } = body.position;

                elem.style.left = `${x}px`;
                elem.style.top = `${y}px`;
                elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
                elem.style.opacity = "1";
            });

            Engine.update(engine);
            animId = requestAnimationFrame(updateLoop);
        };

        updateLoop();

        return () => {
            cancelAnimationFrame(animId);
            Render.stop(render);
            Runner.stop(runner);

            if (
                render.canvas &&
                canvasContainerRef.current &&
                canvasContainerRef.current.contains(render.canvas)
            ) {
                canvasContainerRef.current.removeChild(render.canvas);
            }

            World.clear(engine.world, false);
            Engine.clear(engine);
        };
    }, [hasFallen]);

    return (
        <section className="relative flex h-[600px] min-h-[450px] w-full select-none flex-col overflow-hidden bg-[#111111] px-4 mt-28 mb-40 pb-6 text-white">
            {/* Header */}
            <div className="w-full shrink-0">
                <h2 className="text-[clamp(1.5rem,2.2vw,2rem)] font-normal uppercase tracking-tight text-white">
                    OUR PARTNERS
                </h2>
            </div>

            {/* Description */}
            <div className="mt-3 flex w-full shrink-0 justify-center">
                <p className="max-w-[420px] text-center text-[22px] font-normal leading-[1.4] text-[#A1A1A1]">
                    Collaborating with trusted partners to deliver stronger digital outcomes
                </p>
            </div>

            {/* Falling Physics Area */}
            <div
                ref={containerRef}
                className="relative mt-4 min-h-0 flex-1 w-full overflow-hidden"
            >
                {/* Canvas Container */}
                <div
                    ref={canvasContainerRef}
                    className="pointer-events-none absolute inset-0 z-0"
                />

                {/* Interactive Logo Image Pills */}
                {LOGO_ITEMS.map((item, index) => (
                    <div
                        key={`${item.id}-${index}`}
                        ref={(el) => {
                            pillsRef.current[index] = el;
                        }}
                        className="pointer-events-auto absolute left-0 top-0 z-10 flex h-[56px] w-[160px] cursor-grab items-center justify-center rounded-full px-4 py-2 shadow-2xl opacity-0 will-change-transform active:cursor-grabbing"
                        style={{ backgroundColor: item.bg }}
                    >
                        <img
                            src={item.logoSrc}
                            alt={item.label}
                            className="h-full max-h-[30px] w-auto object-contain pointer-events-none select-none"
                        />
                    </div>
                ))}

                {/* Floor Decor Lines */}
                <div className="pointer-events-none absolute bottom-0 left-0 z-20 w-full pb-3">
                    <div className="flex w-full flex-col gap-y-1">
                        <div className="h-px w-full bg-white/70" />
                        <div className="h-px w-full bg-white/70" />
                        <div className="h-px w-full bg-white/70" />
                        <div className="h-px w-full bg-white/70" />
                        <div className="h-px w-full bg-white/70" />
                        <div className="h-px w-full bg-white/70" />
                        <div className="h-px w-full bg-white/70" />
                        <div className="h-px w-full bg-white/70" />
                    </div>
                </div>
            </div>
        </section>
    );
}

