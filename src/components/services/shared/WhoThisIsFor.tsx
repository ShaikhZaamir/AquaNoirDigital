type WhoThisIsForItem = {
    title: string;
    description: string;
    image: string;
    imagePosition: "top" | "bottom";
};

type WhoThisIsForProps = {
    items: WhoThisIsForItem[];
};

export default function WhoThisIsFor({
    items,
}: WhoThisIsForProps) {
    return (
        <section className="w-full bg-[#111111] px-10 pt-28 pb-32 text-white">
            {/* Section Heading */}
            <h2 className="text-[30px] font-normal uppercase tracking-[-0.045em]">
                Who This Is For
            </h2>

            {/* Grid */}
            <div className="mt-24 grid grid-cols-4">
                {items.map((item, index) => {
                    const isFirst = index === 0;
                    const isTop = item.imagePosition === "top";

                    return (
                        <div
                            key={item.title}
                            className={`flex min-h-[435px] flex-col justify-between ${isFirst
                                    ? "pr-8"
                                    : index === items.length - 1
                                        ? "border-l border-white/10 pl-8"
                                        : "border-l border-white/10 px-8"
                                }`}
                        >
                            {isTop ? (
                                <>
                                    {/* Top Image */}
                                    <div className="flex items-start">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="h-auto w-[84px] object-contain"
                                        />
                                    </div>

                                    {/* Bottom Text */}
                                    <div>
                                        <h3 className="text-[30px] font-normal leading-[1.05] tracking-[-0.055em]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-7 max-w-[370px] text-[20px] font-normal leading-[1.4] tracking-[-0.025em] text-white/65">
                                            {item.description}
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Top Text */}
                                    <div>
                                        <h3 className="text-[30px] font-normal leading-[1.05] tracking-[-0.055em]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-7 max-w-[370px] text-[20px] font-normal leading-[1.4] tracking-[-0.025em] text-white/65">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Bottom Image */}
                                    <div className="flex items-end">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="h-auto w-[84px] object-contain"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}