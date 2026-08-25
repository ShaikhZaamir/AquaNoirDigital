import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Clients from "@/components/home/Clients";
import ConvoCTA from "@/components/home/ConvoCTA";
import Navbar from "@/components/Navbar";

import IndustryHero from "@/components/industries/shared/IndustryHero";
import SharedParallax from "@/components/industries/shared/SharedParallax";
import IndustryContext from "@/components/industries/shared/IndustryContext";
import DetailsSection from "@/components/industries/shared/DetailsSection";

import { industries } from "@/app/data/industries";

type IndustryPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function IndustryPage({
    params,
}: IndustryPageProps) {
    const { slug } = await params;

    const industry = industries[slug];

    if (!industry) {
        notFound();
    }

    return (
        <section className="min-h-screen bg-[#111111] text-white">
            <Navbar />

            <IndustryHero title={industry.title} />

            <div className="h-18"></div>

            <Clients />

            <SharedParallax
                descriptionOne={industry.descriptionOne}
                descriptionTwo={industry.descriptionTwo}
                smallImage={industry.smallImage}
                largeImage={industry.largeImage}
            />

            <IndustryContext
                contextNumber={industry.contextNumber}
                contextTitle={industry.contextTitle}
                introText={industry.introText}
                items={industry.contextItems}
            />

            <DetailsSection sections={industry.detailsSections} />

            <div className="h-20"></div>

            <ConvoCTA />

            <Footer />
        </section>
    );
}