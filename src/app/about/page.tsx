import AboutIntro from "../components/about/AboutIntro";
import Hero from "../components/about/Hero";
import HeroIntro from "../components/about/HeroIntro";
import StatsStrip from "../components/about/StatsStrip";
import WorkCTA from "../components/about/WorkCTA";
import YoutubeVideo from "../components/about/YoutubeVideo";
import Footer from "../components/Footer";
import Approach from "../components/home/Approach";
import Clients from "../components/home/Clients";
import Partners from "../components/home/Partners";
import WhoWeAre from "../components/home/WhoWeAre";
import Navbar from "../components/Navbar";


export default function AboutPage() {
    return (<>
        <section
            className="min-h-screen bg-[#111111] py-5 text-white"
        >
            <Navbar />
            <Hero />
            <HeroIntro />
            <AboutIntro />

            {/* Temp Comment */}
            {/* < YoutubeVideo /> */}

            <div className="h-10"> </div>
            <WhoWeAre />
            <StatsStrip />
            <Approach />
            <div className="h-[180px]"> </div>
            <Clients />
            <Partners />
            <WorkCTA />

            <Footer />
        </section>
    </>
    );
}