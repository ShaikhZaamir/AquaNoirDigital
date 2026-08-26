export const caseStudies = [
    {
        slug: "case-study-1",

        hero: {
            title: "Designing a Multi-Audience EdTech Platform For Burlington English",
        },

        overview: {
            title: "A Multi-Stakeholder Platform",
            description:
                "Burlington English is a global EdTech platform serving English language learning and workforce readiness serving institutions, educators, employers, and learners through a unified experience.",
            image: "/Banner.jpg",
        },

        problemStrategy: {
            problem: {
                title: "The Problem",
                description:
                    "Burlington English needed a digital platform that could serve institutions, educators, employers, and learners, each with different intent, expectations and decision journeys within a single unified system without losing clarity.",
                image: "/The-Problem.jpg",
            },

            strategy: {
                title: "Our Strategy",

                introduction:
                    "Most EdTech sites resolve this tension by either oversimplifying, flattening everything into a single message or overcomplicating, overwhelming every visitor with the full product depth. We designed a third path: controlled clarity through segment-first architecture.",

                subIntroduction:
                    "Three strategic layers shaped the architecture. Each one addressed a specific failure mode in EdTech platform design and each one reinforced the others.",

                items: [
                    {
                        title: "1. Segment-First Navigation Architecture",
                        description:
                            "Instead of product-led navigation, the site was structured around audience type. Institutions, employers, educators, and learners each follow dedicated journeys with relevant proof points, outcomes, and conversion paths, eliminating the need for information translation.",
                    },
                    {
                        title: "2. Conversion + Education Hybrid UX",
                        description:
                            "The UX follows a simple sequence: educate first, build trust through content and proof, then introduce conversion as a natural next step. For B2B institutional buyers with long decision cycles, this aligns with real purchasing behaviour. For learners, it reduces friction by giving clarity before asking for action.",
                    },
                    {
                        title: "3. Scalable Content System Architecture",
                        description:
                            "The content architecture was designed as a system, not a collection of pages. Programs, solutions, resources, case studies, and support content follow consistent templates, enabling new content to be added without disrupting structure. The platform becomes more valuable as it scales across markets, programs, and research.",
                    },
                ],
            },
        },

        showcase: {
            image: "/1.jpg",
        },

        result: {
            title: "The Result",

            items: [
                "Each audience now sees only relevant programs, improving clarity without overload",
                "Clear CTAs and trust-led UX improved engagement and demo readiness",
                "Content is tailored per segment, removing irrelevant information and improving focus",
                "SEO-structured architecture improved discoverability across key education and workforce queries",
                "Scalable system allows easy expansion into new markets and programs without redesign",
                "Proof-led UX strengthened credibility before conversion, especially for institutional users",
            ],

            image: "/The-result.jpg",
        },
    },

    {
        slug: "case-study-2",

        hero: {
            title: "Scaling App Growth with Paid Media Efficiency for TaxiWars",
        },

        overview: {
            title: "A Platform for Smarter City Travel",
            description:
                "TaxiWars is a ride-hailing app that helps people travel across cities with more predictable pricing. It offers minimum fare rides, outstation options, and the flexibility to choose fares, aiming to make every day commuting simpler and more affordable.",
            image: "/1-1.jpg",
        },

        problemStrategy: {
            problem: {
                title: "The Problem",
                description:
                    "TaxiWars had a strong service offering – minimum fare rides, outstation options, and flexible pricing. But people weren’t downloading the app at scale. The challenge was simple: How do we turn this message into low-cost app installs in a market dominated by Ola and Uber?",
                image: "/2-1.jpg",
            },

            strategy: {
                title: "Our Strategy",

                introduction:
                    "The goal was clear – reduce cost per install and hit 5,000 downloads per month.",

                subIntroduction:
                    "We ran campaigns on both Meta and Google UAC, tested multiple creative messages, and quickly identified what was driving the best results. Instead of waiting till the end, we kept optimising in real time, shifting budget towards what worked and cutting what didn’t.",

                items: [
                    {
                        title: "1. Strategic Campaign Testing",
                        description:
                            "Instead of relying on a single message, campaigns tested multiple creative angles to identify which messaging generated the strongest results and lowest-cost installs.",
                    },
                    {
                        title: "2. Outstation Travel Campaigns",
                        description:
                            "Pune to Nashik. Same day return. 20% cashback on outstation routes. Targeted users with scheduled intercity travel. Strong secondary performer.",
                    },
                    {
                        title: "3. Choice to Choose the Fare",
                        description:
                            "Autonomy and control as the message. Targeted users who felt locked into Ola/Uber pricing with no alternatives. Mid-funnel awareness driver.",
                    },
                ],
            },
        },

        showcase: {
            image: "/3-1.jpg",
        },

        result: {
            title: "The Result",

            items: [
                "₹5.92 Final Cost Per Install Down from ₹23.96",
                "10,100 App Downloads In 45 days",
                "2× Monthly Target Exceeded 5,000 target → 10,100 achieved",
                "75.3% CPI Reduction ₹23.96 → ₹5.92",
            ],

            image: "/8.jpg",
        },
    },
] as const;

export function getCaseStudyBySlug(slug: string) {
    return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}