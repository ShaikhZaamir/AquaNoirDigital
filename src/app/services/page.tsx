import Footer from "@/components/Footer";
import Approach from "@/components/home/Approach";
import ConvoCTA from "@/components/home/ConvoCTA";
import Hero from "@/components/services/Hero";
import Partners from "@/components/home/Partners";
import Capabilities from "@/components/services/Capabilities";
import Navbar from "@/components/Navbar";



export default function ServicesPage() {
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