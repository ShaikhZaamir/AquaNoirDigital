
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/services/Hero";
import Capabilities from "../components/services/Capabilities";
import Approach from "../components/home/Approach";
import Partners from "../components/home/Partners";
import ConvoCTA from "../components/home/ConvoCTA";


export default function AboutPage() {
    return (<>
        <section
            className="min-h-screen bg-[#111111] text-white"
        >
            <Navbar />

            <Hero />
            <Capabilities />
            <Approach />
            <Partners />
            <ConvoCTA/>

            <Footer />
        </section>
    </>
    );
}