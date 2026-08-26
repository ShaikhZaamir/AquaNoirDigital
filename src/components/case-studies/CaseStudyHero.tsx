"use client";

interface CaseStudyHeroProps {
    title: string;
}

export default function CaseStudyHero({
    title,
}: CaseStudyHeroProps) {
    return (
        <section className="w-full bg-[#111111] px-4 text-white">
            <h1 className="max-w-[1800px] text-[90px] font-medium leading-[1.1] tracking-[-0.045em]">
                {title}
            </h1>
        </section>
    );
}