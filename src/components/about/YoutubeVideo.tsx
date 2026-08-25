"use client";

export default function MeetingVideo() {
    return (
        <section className="pt-20 w-full bg-[#111111]">
            <iframe
                src="https://www.youtube.com/embed/-o43R1R7Xtk?autoplay=1&mute=1&loop=1&playlist=-o43R1R7Xtk&controls=1&playsinline=1&rel=0"
                className="block h-[94vh] w-full border-0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
            />
        </section>
    );
}
