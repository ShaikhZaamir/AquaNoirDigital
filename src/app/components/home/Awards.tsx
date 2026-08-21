"use client";

const awards = [
    {
        title: "Pitch Finovate",
        detail: "BFSI Marketing 2025",
    },
    {
        title: "Realty+",
        detail: "Digital Marketing Campaign 2025",
    },
    {
        title: "Sammie",
        detail: "Best Use of Social Media 2022",
    },
];

export default function Awards() {
    return (
        <section className="w-full bg-[#f6f0ec] px-5 pt-12 pb-36 text-[#111111]">
            <div className="flex w-full items-center">
                {/* Left */}
                <div className="w-1/2 shrink-0">
                    <h2 className="text-[30px] font-medium tracking-[-0.035em]">
                        RECOGNISED BY THE INDUSTRIES WE SERVE.
                    </h2>
                </div>

                {/* Right */}
                <div className="flex w-1/2 flex-col">
                    {awards.map((award) => (
                        <div
                            key={award.title}
                            className="flex items-baseline whitespace-nowrap"
                        >
                            <span className="text-[50px] font-normal leading-[1] tracking-[-0.055em]">
                                {award.title}
                            </span>

                            <span className="ml-2 text-[22px] font-normal leading-[1] tracking-[-0.035em]">
                                {award.detail}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}