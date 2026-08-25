export type ServiceData = {
    serviceNumber: string;
    title: string;
    heroTitle: string;
    heroDescription: string;

    overview: string;
    overviewItems: string[];
    image: string;

    whoThisIsFor: {
        title: string;
        description: string;
        image: string;
        imagePosition: "top" | "bottom";
    }[];

    included: string[];
    notIncluded: string[];
};

export const services: Record<string, ServiceData> = {
    "digital-growth-strategy": {
        serviceNumber: "SERVICE 01",
        title: "Digital Growth Strategy",
        heroTitle: "Stop Guessing. Start Growing.",
        heroDescription:
            "A complete 12-month digital growth roadmap — built around your revenue targets, not a channel checklist.",

        overview:
            "Most companies are running digital marketing. Very few are running it strategically. If your team is busy but your board is asking hard questions about CAC, ROAS, and pipeline — you don’t have an execution problem. You have a strategy problem. That’s exactly what this service solves.",

        overviewItems: [
            "A prioritised 12-month digital growth roadmap aligned to your exact revenue targets",
            "CAC benchmarks per channel and a clear paid / owned / earned budget allocation model",
            "Your growth levers ranked by effort-to-impact — so you stop wasting budget on what doesn't move the needle",
            "A quarterly operating cadence — reviews, sprint structures, and OKRs that keep your team accountable",
            "Executive alignment across marketing, sales, product, and finance — everyone working from one plan",
        ],

        image: "/ax-sa-portfolio-04.png",

        whoThisIsFor: [
            {
                title: "Best fit for",
                description:
                    "D2C brands, SaaS, EdTech, Fintech, Automotive, Consumer Healthcare, Premium B2B Services",
                image: "/ax-sd-fet-01.png",
                imagePosition: "top",
            },
            {
                title: "Maturity signal",
                description:
                    "Has run digital marketing for 2+ years but spending feels disconnected from revenue",
                image: "/ax-sd-fet-02.png",
                imagePosition: "bottom",
            },
            {
                title: "Budget readiness",
                description:
                    "₹25L–₹75L annual marketing investment; ₹8L–₹20L budget for strategy engagement",
                image: "/ax-sd-fet-03.png",
                imagePosition: "top",
            },
            {
                title: "You're ready if",
                description:
                    "You’re entering a new financial year, have a new CMO, or your board is asking why CAC is rising",
                image: "/ax-sd-fet-04.png",
                imagePosition: "bottom",
            },
        ],

        included: [
            "Digital audit across all owned, earned and paid channels",
            "Competitive intelligence and share-of-voice mapping",
            "Customer journey and funnel gap analysis",
            "Channel-level budget allocation framework",
            "12-month growth roadmap with phased milestones",
            "Internal capability gap assessment",
            "Quarterly review cadence — 4 sessions included",
            "Executive presentation deck and C-suite alignment workshop",
        ],

        notIncluded: [
            "Channel execution (covered under separate services)",
            "Brand identity or creative strategy",
            "Product or pricing strategy",
            "Market entry feasibility studies",
            "Technology implementation",
        ],
    },

    "demand-generation-performance-marketing": {
        serviceNumber: "SERVICE 02",
        title: "Demand Generation & Performance Marketing",
        heroTitle: "More Pipeline. Lower CAC. No Excuses.",
        heroDescription:
            "A full-funnel paid media and demand generation system — contracted against pipeline and revenue targets, not impressions.",

        overview:
            "Your paid media should be generating qualified pipeline — not burning budget on traffic that never converts. If your agency is reporting impressions while your CAC climbs and your board is losing patience, this is the engagement that changes the conversation.",

        overviewItems: [
            "CAC reduction of 20–40% within 6 months of engagement — tracked and reported every week",
            "Qualified pipeline growth at agreed MQL and SQL volume targets — not traffic targets",
            "Paid media ROAS consistently above your sector benchmark — we show you the benchmark",
            "Full-funnel attribution — every rupee traced from the first impression to closed revenue",
            "First-party audience assets built and owned by you — not locked inside our tools when you leave",
        ],

        image: "/ax-sa-portfolio-04.png",

        whoThisIsFor: [
            {
                title: "Best fit for",
                description:
                    "D2C brands (₹5Cr+ GMV/month), SaaS (₹10L+ MRR), B2B services, EdTech, Fintech, Auto/EV",
                image: "/ax-sd-fet-01.png",
                imagePosition: "top",
            },
            {
                title: "Spend threshold",
                description:
                    "₹50L–₹5Cr monthly ad spend, or clear ambition to reach that scale within 12 months",
                image: "/ax-sd-fet-02.png",
                imagePosition: "bottom",
            },
            {
                title: "Maturity signal",
                description:
                    "Running paid media but experiencing rising CAC, poor attribution, or flat ROAS over time",
                image: "/ax-sd-fet-03.png",
                imagePosition: "top",
            },
            {
                title: "Budget readiness",
                description:
                    "₹15L–₹2Cr+ annual paid media budget; agency fee ₹8L–₹40L/year",
                image: "/ax-sd-fet-04.png",
                imagePosition: "bottom",
            },
        ],

        included: [
            "Paid media strategy and full channel mix (Meta, Google, LinkedIn, YouTube, Programmatic)",
            "Audience architecture: cold, warm, retargeting, and lookalike segmentation",
            "Campaign structure build and launch across all active channels",
            "Ad creative strategy and copy briefs (production available as add-on)",
            "Weekly performance reporting with specific recommendations — not just a dashboard",
            "Monthly CAC and ROAS benchmarking against verified sector data",
            "Landing page conversion audit and prioritised optimisation recommendations",
            "Full-funnel attribution setup: GA4, pixel configuration, and UTM architecture",
        ],

        notIncluded: [
            "Creative production — ad visuals, video, motion graphics (available as add-on)",
            "CRM integration and sales pipeline management",
            "Organic search and SEO channel management",
            "Influencer or affiliate network management",
            "Below-the-line and offline media planning",
        ],
    },

    "search-organic-visibility": {
        serviceNumber: "SERVICE 03",
        title: "Search & Organic Visibility",
        heroTitle: "Be Found First. Stay Found Always.",
        heroDescription:
            "A full SEO and organic visibility programme that builds category authority and reduces your dependence on paid media — permanently.",

        overview:
            "Right now, your buyers are searching for exactly what you sell — and your competitors are ranking above you. Every day you don’t invest in organic visibility is a day you pay for traffic that should be free. This service changes that, and it compounds over time.",

        overviewItems: [
            "30–60% increase in non-branded organic traffic within 12 months — measured against a defined baseline",
            "Top-3 rankings for 15–30 high-intent, commercially relevant category keywords",
            "A measurable reduction in blended CAC as organic fills the top of your acquisition funnel",
            "Domain authority and topical authority score improvements — tracked against sector benchmarks",
            "AI and SGE readiness — your content structured to appear in Gemini, Perplexity, and AI-powered search",
        ],

        image: "/ax-sa-portfolio-04.png",

        whoThisIsFor: [
            {
                title: "Best fit for",
                description:
                    "SaaS, Financial Services, Healthcare, EdTech, B2B Professional Services, Premium Consumer brands",
                image: "/ax-sd-fet-01.png",
                imagePosition: "top",
            },
            {
                title: "Company stage",
                description:
                    "12+ months of digital presence; ₹10Cr+ revenue or ₹5L+ monthly marketing spend",
                image: "/ax-sd-fet-02.png",
                imagePosition: "bottom",
            },
            {
                title: "Maturity signal",
                description:
                    "Has a website and some content but no deliberate SEO strategy; discovery is driven entirely by paid",
                image: "/ax-sd-fet-03.png",
                imagePosition: "top",
            },
            {
                title: "Budget readiness",
                description:
                    "₹6L–₹30L/year for the organic programme; ₹3L–₹10L/year for content production if required",
                image: "/ax-sd-fet-04.png",
                imagePosition: "bottom",
            },
        ],

        included: [
            "Technical SEO audit with a full remediation roadmap and priority scoring",
            "Complete keyword universe mapping: informational, navigational, commercial and transactional",
            "Topical authority architecture — content gap analysis across your full category",
            "On-page optimisation across up to 50 existing pages (by tier)",
            "Monthly content briefs — 3 to 8 per month depending on tier — writer-ready, no guesswork",
            "Link acquisition strategy and editorial outreach programme",
            "Monthly organic performance report with pipeline and revenue attribution",
            "AI and SGE readiness: schema markup, FAQ optimisation, and entity coverage",
        ],

        notIncluded: [
            "Content writing and production (available as an add-on at ₹80K–₹2L/month)",
            "Paid search and Google Ads management",
            "Website design or development",
            "Social media SEO and platform-specific optimisation",
            "PR and media placement beyond editorial link outreach",
        ],
    },

    "brand-content-ecosystems": {
        serviceNumber: "SERVICE 04",
        title: "Brand & Content Ecosystems",
        heroTitle:
            "Build the Brand That Sells Before the Sales Team Calls.",
        heroDescription:
            "A complete brand positioning and content programme that builds category authority, shortens sales cycles, and makes every other channel work harder.",

        overview:
            "A strong brand isn’t a nice-to-have. It reduces your paid CPCs, improves organic click-through rates, commands a price premium, and means buyers already trust you before the first sales conversation. If your brand looks like everyone else’s in your category — that’s a growth problem, not just a marketing problem.",

        overviewItems: [
            "Clear, ownable brand positioning that passes the 'only we' test — differentiating you from every named competitor",
            "A content ecosystem that generates measurable top-of-funnel pipeline — tracked and reported monthly",
            "Consistent share-of-voice growth in your category — measured quarter-on-quarter against named competitors",
            "Brand and content assets that reduce sales cycle friction and accelerate deal velocity",
            "Your executives positioned as visible category authorities — generating inbound and media opportunities",
        ],

        image: "/ax-sa-portfolio-04.png",

        whoThisIsFor: [
            {
                title: "Best fit for",
                description:
                    "Premium consumer brands, professional services, SaaS, Fintech, Automotive, Healthcare, EdTech",
                image: "/ax-sd-fet-01.png",
                imagePosition: "top",
            },
            {
                title: "Company stage",
                description:
                    "₹25Cr+ revenue; or venture-backed companies needing to build category presence quickly",
                image: "/ax-sd-fet-02.png",
                imagePosition: "bottom",
            },
            {
                title: "Maturity signal",
                description:
                    "Has a product and customers but a generic, underdeveloped, or inconsistent brand presence",
                image: "/ax-sd-fet-03.png",
                imagePosition: "top",
            },
            {
                title: "Budget readiness",
                description:
                    "₹15L–₹60L/year brand and content programme; ₹5L–₹15L for brand strategy engagement",
                image: "/ax-sd-fet-04.png",
                imagePosition: "bottom",
            },
        ],

        included: [
            "Brand positioning framework and messaging architecture — the strategic foundation before any content",
            "Tone of voice guide and content principles — so every piece of content sounds like you",
            "12-month content strategy and editorial calendar — mapped to SEO and buyer journey stages",
            "Content pillar and cluster architecture connected to your commercial priorities",
            "Monthly content production: long-form, short-form, and social content (volume by tier)",
            "Distribution and amplification strategy across owned and earned channels",
            "Brand performance measurement framework: share of voice, share of search, sentiment tracking",
            "Executive thought leadership programme: LinkedIn, media placement, and speaking positioning",
        ],

        notIncluded: [
            "Visual identity, logo design or brand refresh (partner studio referral available)",
            "Video production — scripts and briefs included; production requires separate scope",
            "Paid media amplification of content (covered under Demand Generation service)",
            "Influencer identification, outreach and contracting",
            "Internal brand training or employee culture programmes",
        ],
    },

    "digital-experience-platforms": {
        serviceNumber: "SERVICE 05",
        title: "Digital Experience Platforms",
        heroTitle: "Your Traffic Is Valuable. Make It Count.",
        heroDescription:
            "A systematic conversion rate optimisation and digital experience programme that turns your existing traffic into measurably more revenue.",

        overview:
            "You’re spending on paid media, SEO and content to drive traffic — but if your digital experience wasn’t built to convert, most of that investment leaks out of the funnel before it ever becomes revenue. A 1% improvement in conversion rate on ₹1Cr/month of traffic is worth ₹12Cr/year in equivalent paid media value. This is the highest-leverage service in the entire stack.",

        overviewItems: [
            "20–50% lift in your primary conversion action within 6 months — tracked in rupees, not just percentages",
            "Revenue per visitor — the primary metric — increased and measured monthly across your full funnel",
            "Measurable reduction in bounce and exit rates at your highest-value funnel stages",
            "2–4 validated A/B experiments shipped per month — compounding over the life of the engagement",
            "A test library and institutional knowledge base that stays with your team when the engagement ends",
        ],

        image: "/ax-sa-portfolio-04.png",

        whoThisIsFor: [
            {
                title: "Best fit for",
                description:
                    "D2C e-commerce, SaaS, Financial Services, EdTech, Healthcare, Travel, Real Estate",
                image: "/ax-sd-fet-01.png",
                imagePosition: "top",
            },
            {
                title: "Minimum scale",
                description:
                    "₹10L+ monthly digital revenue or ₹50L+ monthly marketing spend; 50,000+ monthly sessions",
                image: "/ax-sd-fet-02.png",
                imagePosition: "bottom",
            },
            {
                title: "Maturity signal",
                description:
                    "Has traffic but below-benchmark conversion rates, high cart abandonment, or no CRO programme",
                image: "/ax-sd-fet-03.png",
                imagePosition: "top",
            },
            {
                title: "Budget readiness",
                description:
                    "₹8L–₹30L/year for the CX and CRO programme; one-time platform builds from ₹5L",
                image: "/ax-sd-fet-04.png",
                imagePosition: "bottom",
            },
        ],

        included: [
            "Full conversion audit: heatmap analysis, session recordings, and funnel drop-off mapping",
            "Revenue-per-visitor baseline and sector benchmark comparison — so you know exactly where you stand",
            "Prioritised CRO roadmap: test backlog ranked by potential revenue impact, not effort alone",
            "A/B and multivariate test design, build, launch and analysis — 2 to 4 tests per month by tier",
            "Landing page design and copy optimisation with clear conversion hypothesis for each",
            "Form, checkout and onboarding flow optimisation — the highest-value conversion stages",
            "Personalisation strategy and implementation by audience segment",
            "Monthly CRO performance report with every result expressed in rupee revenue impact",
        ],

        notIncluded: [
            "Full website redesign or development — wireframes and recommendations included; build is separate",
            "Native app development or mobile platform development",
            "Backend and product feature development",
            "Paid media management (managed under Demand Generation service)",
            "Post-purchase customer support and service experience design",
        ],
    },
};