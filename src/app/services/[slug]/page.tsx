import { notFound } from "next/navigation";
import { services } from "@/app/data/services";
import ServiceHero from "@/components/services/service-page/ServiceHero";
import StrategyOverview from "@/components/services/service-page/StrategyOverview";
import WhatsIncluded from "@/components/services/service-page/WhatsIncluded";
import WhoThisIsFor from "@/components/services/service-page/WhoThisIsFor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type ServicePageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ServicePage({
    params,
}: ServicePageProps) {
    const { slug } = await params;
    const service = services[slug];

    if (!service) {
        notFound();
    }

    return (
        <>
            <Navbar />

            <ServiceHero
                serviceNumber={service.serviceNumber}
                title={service.title}
                heroTitle={service.heroTitle}
                heroDescription={service.heroDescription}
            />

            <StrategyOverview
                overview={service.overview}
                overviewItems={service.overviewItems}
                image={service.image}
            />

            <WhoThisIsFor items={service.whoThisIsFor} />

            <WhatsIncluded
                included={service.included}
                notIncluded={service.notIncluded}
            />

            <Footer />
        </>
    );
}