export default function Hero() {
    return (
        <section className="min-h-[360px] w-full bg-[#111111] px-8 pt-8 pb-16 text-white">
            {/* Top Row */}
            <div className="flex w-full items-center">
                <span className="w-[35%] text-[18px] font-normal tracking-[-0.035em]">
                    SERVICE 01
                </span>

                <span className="flex-1 text-[18px] font-normal tracking-[-0.035em]">
                    Digital Growth Strategy
                </span>

                <span className="text-right text-[18px] font-normal tracking-[-0.035em]">
                    [Next]
                </span>
            </div>

            {/* Hero Content */}
            <div className="ml-[35%] mt-[90px]">
                <h1 className="text-[50px] font-normal leading-[1.05] tracking-[-0.065em]">
                    Stop Guessing. Start Growing.
                </h1>

                <p className="mt-5 max-w-[1100px] text-[22px] font-normal leading-[1.05] tracking-[-0.04em] text-[#E5E5E5]">
                    A complete 12-month digital growth roadmap — built around your
                    revenue targets, not a channel checklist.
                </p>
            </div>
        </section>
    );
}