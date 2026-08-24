import Hero from "../components/contact/Hero";
import MainContact from "../components/contact/MainContact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function AboutPage() {
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