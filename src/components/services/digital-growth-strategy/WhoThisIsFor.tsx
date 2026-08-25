export default function WhoThisIsFor() {
    return (
        <section className="w-full bg-[#111111] px-10 pt-28 pb-32 text-white">
            {/* Section Heading */}
            <h2 className="text-[30px] font-normal uppercase tracking-[-0.045em]">
                Who This Is For
            </h2>

            {/* Grid */}
            <div className="mt-24 grid grid-cols-4">
                {/* Column 1 */}
                <div className="flex min-h-[435px] flex-col justify-between pr-8">
                    {/* Top Image */}
                    <div className="flex items-start">
                        <img
                            src="/ax-sd-fet-01.png"
                            alt=""
                            className="h-auto w-[84px] object-contain"
                        />
                    </div>

                    {/* Bottom Text */}
                    <div>
                        <h3 className="text-[30px] font-normal leading-[1.05] tracking-[-0.055em]">
                            Best fit for
                        </h3>

                        <p className="mt-7 max-w-[340px] text-[20px] font-normal leading-[1.4] tracking-[-0.025em] text-white/65">
                            D2C brands, SaaS, EdTech, Fintech,
                            Automotive, Consumer Healthcare,
                            Premium B2B Services
                        </p>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex min-h-[435px] flex-col justify-between border-l border-white/10 px-8">
                    {/* Top Text */}
                    <div>
                        <h3 className="text-[30px] font-normal leading-[1.05] tracking-[-0.055em]">
                            Maturity
                            <br />
                            signal
                        </h3>

                        <p className="mt-7 max-w-[360px] text-[20px] font-normal leading-[1.4] tracking-[-0.025em] text-white/65">
                            Has run digital marketing for 2+ years
                            but spending feels disconnected from
                            revenue
                        </p>
                    </div>

                    {/* Bottom Image */}
                    <div className="flex items-end">
                        <img
                            src="/ax-sd-fet-02.png"
                            alt=""
                            className="h-auto w-[84px] object-contain"
                        />
                    </div>
                </div>

                {/* Column 3 */}
                <div className="flex min-h-[435px] flex-col justify-between border-l border-white/10 px-8">
                    {/* Top Image */}
                    <div className="flex items-start">
                        <img
                            src="/ax-sd-fet-03.png"
                            alt=""
                            className="h-auto w-[84px] object-contain"
                        />
                    </div>

                    {/* Bottom Text */}
                    <div>
                        <h3 className="text-[30px] font-normal leading-[1.05] tracking-[-0.055em]">
                            Budget
                            <br />
                            readiness
                        </h3>

                        <p className="mt-7 max-w-[360px] text-[20px] font-normal leading-[1.4] tracking-[-0.025em] text-white/65">
                            ₹25L–₹75L annual marketing
                            investment; ₹8L–₹20L budget for
                            strategy engagement
                        </p>
                    </div>
                </div>

                {/* Column 4 */}
                <div className="flex min-h-[435px] flex-col justify-between border-l border-white/10 pl-8">
                    {/* Top Text */}
                    <div>
                        <h3 className="text-[30px] font-normal leading-[1.05] tracking-[-0.055em]">
                            You're ready if
                        </h3>

                        <p className="mt-7 max-w-[370px] text-[20px] font-normal leading-[1.4] tracking-[-0.025em] text-white/65">
                            You're entering a new financial year,
                            have a new CMO, or your board is
                            asking why CAC is rising
                        </p>
                    </div>

                    {/* Bottom Image */}
                    <div className="flex items-end">
                        <img
                            src="/ax-sd-fet-04.png"
                            alt=""
                            className="h-auto w-[84px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}