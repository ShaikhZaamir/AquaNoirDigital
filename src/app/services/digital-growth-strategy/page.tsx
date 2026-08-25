import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/components/services/digital-growth-strategy/Hero";
import StrategyOverview from "@/components/services/digital-growth-strategy/StrategyOverview";
import WhatsIncluded from "@/components/services/digital-growth-strategy/WhatsIncluded";
import WhoThisIsFor from "@/components/services/digital-growth-strategy/WhoThisIsFor";



export default function DigitalStrategy() {
    return (<>
        <section
            className="min-h-screen bg-[#111111] text-white"
        >
            <Navbar />

            <Hero />
            <StrategyOverview />
            <WhoThisIsFor />
            <WhatsIncluded />

            <Footer />
        </section>
    </>
    );
}