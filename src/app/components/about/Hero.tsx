"use client";

import { Anton } from "next/font/google";

const anton = Anton({
    subsets: ["latin"],
    weight: "400",
});

export default function Hero() {
    return (
        <section className="w-full overflow-hidden bg-[#111111] px-5 text-white">
            <div className="flex w-full flex-col justify-start pt-10 pb-20">
                <h1
                    className={`${anton.className} text-[325px] text-center font-normal leading-[0.78] tracking-[-0.035em]`}
                >
                    SINCE 2012
                </h1>
            </div>
        </section>
    );
}