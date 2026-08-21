import fs from "fs";
import path from "path";
import ClientsMarquee from "./ClientsMarquee";

export default function Clients() {
    const logosDirectory = path.join(
        process.cwd(),
        "public",
        "clientlogos"
    );

    const files = fs.readdirSync(logosDirectory);

    const logos = files
        .filter((file) =>
            /\.(png|jpg|jpeg|webp|svg)$/i.test(file)
        )
        .sort()
        .map((file, index) => ({
            id: index,
            src: `/clientlogos/${encodeURIComponent(file)}`,
        }));

    return (
        <section className="w-full overflow-hidden bg-[#111111] px-5 text-white">
            <div className="flex h-[180px] w-full border-t border-b border-white/10">
                {/* Play Button Area */}
                <div className="flex w-[220px] shrink-0 items-center border-r border-white/10">
                    <div className="relative flex items-center">
                        {/* Image behind play button */}
                        <img
                            src="/left-playbutton.jpeg"
                            alt=""
                            className="relative z-0 h-[80px] w-[80px] rounded-full object-cover"
                        />

                        {/* Play Button */}
                        <button
                            type="button"
                            className="relative z-10 -ml-[18px] flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full border-[0.1px] border-black bg-[#9bd7e8] shadow-[0_0_0_4px_#111111] transition-transform duration-300 hover:scale-105"
                            aria-label="Play"
                        >
                            <svg
                                width="20"
                                height="26"
                                viewBox="0 0 384 512"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M73 39c-15-8.7-33.5-8.7-48.5 0S0 64.2 0 81.5v349c0 17.3 9.2 33.5 24.5 42.5s33.5 8.7 48.5 0l288-174.5c14.9-9 24-25.2 24-42.5s-9.1-33.5-24-42.5L73 39z"
                                    fill="black"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Infinite Logos */}
                <ClientsMarquee logos={logos} />
            </div>
        </section>
    );
}