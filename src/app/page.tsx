import Hero from "@/components/home/Hero";
import Footer from "@/components/Footer";
import Approach from "@/components/home/Approach";
import Awards from "@/components/home/Awards";
import Clients from "@/components/home/Clients";
import ConvoCTA from "@/components/home/ConvoCTA";
import Partners from "@/components/home/Partners";
import Services from "@/components/home/Services";
import StatsActivity from "@/components/home/StatsActivity";
import WhoWeAre from "@/components/home/WhoWeAre";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <Hero />
      <Clients />
      <StatsActivity />
      <Awards />
      <WhoWeAre />
      <div className="pb-5"></div>
      <Services />
      <Approach />
      <div className="pb-15"></div>
      <Partners />
      <ConvoCTA />
      <Footer />
    </main>
  );
}