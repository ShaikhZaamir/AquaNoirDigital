import Hero from "../components/industries/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Clients from "../components/home/Clients";
import Approach from "../components/home/Approach";
import ConvoCTA from "../components/home/ConvoCTA";
import Capabilities from "../components/industries/Capabilities";
import ParallaxImage from "../components/industries/ParallaxImage";


export default function AboutPage() {
    return (<>
        <section
            className="min-h-screen bg-[#111111] text-white"
        >
            <Navbar />

            <Hero />
            <div className="py-10"></div>
            <Clients />
            <ParallaxImage />
            <div className="py-15"></div>
            <Approach />
            <Capabilities />
            <div className="py-10"></div>
            <ConvoCTA />

            <Footer />
        </section>
    </>
    );
}