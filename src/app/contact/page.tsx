import MainContact from "@/components/contact/MainContact";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
    return (<>
        <section
            className="min-h-screen bg-[#111111] text-white"
        >
            <Navbar />

            <Hero />
            <MainContact />

            <Footer />
        </section>
    </>
    );
}