type WhatsIncludedProps = {
    included: string[];
    notIncluded: string[];
};

export default function WhatsIncluded({
    included,
    notIncluded,
}: WhatsIncludedProps) {
    return (
        <section className="w-full bg-[#111111] px-10 py-25 text-white">
            {/* Top Divider */}
            <div className="h-px w-full bg-white/10" />

            {/* Section Heading */}
            <h2 className="pt-12 text-[30px] font-normal uppercase tracking-[-0.045em]">
                What's Included
            </h2>

            {/* Content */}
            <div className="mt-20 flex w-full gap-12">
                {/* Included */}
                <div className="w-1/2 border-t border-white/10 pt-8">
                    <h3 className="text-[30px] font-normal uppercase tracking-[-0.055em]">
                        Included
                    </h3>

                    <ul className="mt-8 flex flex-col gap-5 text-[18px] font-normal leading-[1.25] tracking-[-0.03em]">
                        {included.map((item) => (
                            <li
                                key={item}
                                className="relative pl-3 before:absolute before:left-0 before:top-[0.58em] before:h-[4px] before:w-[4px] before:rounded-full before:bg-white"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Not Included */}
                <div className="w-1/2 border-t border-white/10 pt-8">
                    <h3 className="text-[30px] font-normal uppercase tracking-[-0.055em]">
                        Not Included
                    </h3>

                    <ul className="mt-8 flex flex-col gap-5 text-[18px] font-normal leading-[1.25] tracking-[-0.03em]">
                        {notIncluded.map((item) => (
                            <li
                                key={item}
                                className="relative pl-3 before:absolute before:left-0 before:top-[0.58em] before:h-[4px] before:w-[4px] before:rounded-full before:bg-white"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}