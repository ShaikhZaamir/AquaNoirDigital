import { notFound } from "next/navigation";
import CaseStudyHero from "@/components/case-studies/CaseStudyHero";
import CSParallax from "@/components/case-studies/CSParallax";
import ParallaxLarge from "@/components/case-studies/ParallaxLarge";
import ProblemStrategy from "@/components/case-studies/ProblemStrategy";
import Result from "@/components/case-studies/Result";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getCaseStudyBySlug } from "@/app/data/caseStudies";

type CaseStudyPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function CaseStudyPage({
    params,
}: CaseStudyPageProps) {
    const { slug } = await params;

    const caseStudy = getCaseStudyBySlug(slug);

    if (!caseStudy) {
        notFound();
    }

    return (
        <section className="min-h-screen bg-[#111111] text-white">
            <Navbar />

            <CaseStudyHero title={caseStudy.hero.title} />
            <CSParallax
                title={caseStudy.overview.title}
                description={caseStudy.overview.description}
                image={caseStudy.overview.image}
            />
            <ProblemStrategy
                problem={caseStudy.problemStrategy.problem}
                strategy={caseStudy.problemStrategy.strategy}
            />
            <ParallaxLarge showcase={caseStudy.showcase} />
            <Result result={caseStudy.result} />

            <Footer />
        </section>
    );
}