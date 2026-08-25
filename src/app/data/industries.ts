export type IndustryContextItem = {
    number: string;
    title: string;
};

export type IndustryDetailSection = {
    number: string;
    title: string;
    items: string[];
    image: string;
};

export type IndustryData = {
    title: string;

    descriptionOne: string;
    descriptionTwo: string;

    smallImage: string;
    largeImage: string;

    contextNumber: string;
    contextTitle: string;
    introText: string;
    contextItems: IndustryContextItem[];

    detailsSections: IndustryDetailSection[];
};

export const industries: Record<string, IndustryData> = {
    "real-estate": {
        title: "REAL ESTATE",

        descriptionOne:
            "In real estate, decisions are shaped early through what buyers see online - researching locations, comparing projects, and evaluating developers long before visiting a site.",

        descriptionTwo:
            "We create digital systems that bring the right buyers into the funnel, qualify intent, and move them meaningfully towards a site visit.",

        smallImage: "/ax-h2-about-02.png",
        largeImage: "/ax-h2-about-01.png",

        contextNumber: "04",
        contextTitle: "Industry Context",
        introText:
            "Real estate marketing has evolved significantly.",

        contextItems: [
            {
                number: "01",
                title: "Search online before contacting brokers",
            },
            {
                number: "02",
                title: "Compare multiple projects across digital platforms",
            },
            {
                number: "03",
                title: "Evaluate developer credibility through websites and reviews",
            },
            {
                number: "04",
                title: "Rely on digital information before scheduling visits",
            },
        ],

        detailsSections: [
            {
                number: "(01)",
                title: "Key Challenges",
                items: [
                    "Large marketing budgets with unclear ROI",
                    "Lead generation platforms producing low-quality enquiries",
                    "Overdependence on broker networks",
                    "Poorly optimised project websites and landing pages",
                    "Lack of structured digital funnel from enquiry to site visit",
                ],
                image: "/ax-service-01.png",
            },
            {
                number: "(02)",
                title: "Our Approach",
                items: [
                    "Performance marketing",
                    "Search visibility",
                    "Conversion-focused landing pages",
                    "Structured lead management",
                ],
                image: "/ax-service-03.png",
            },
            {
                number: "(03)",
                title: "Solutions We Provide",
                items: [
                    "Google Ads campaign strategy for property searches",
                    "Meta Ads for awareness and lead generation",
                    "Location-based SEO and search optimisation",
                    "Project-specific landing page architecture",
                    "Conversion-focused website development",
                    "Digital remarketing strategies to nurture leads",
                ],
                image: "/ax-service-02.png",
            },
            {
                number: "(04)",
                title: "Expected Results",
                items: [
                    "Higher-quality leads",
                    "Reduced cost per enquiry",
                    "Improved lead-to-site-visit ratios",
                    "Strengthened online project credibility",
                ],
                image: "/ax-service-04.png",
            },
        ],
    },

    "financial-services-bfsi": {
        title: "FINANCIAL SERVICES & BFSI",

        descriptionOne:
            "Trust underpins financial decisions, often shaped before any direct interaction. Customers rely on digital research before engaging with insurance, loan, or investment providers.",

        descriptionTwo:
            "We work with financial institutions to build credibility, generate qualified interest, and strengthen customer relationships.",

        smallImage: "/ax-h2-about-02.png",
        largeImage: "/ax-h2-about-01.png",

        contextNumber: "04",
        contextTitle: "Industry Context",
        introText:
            "Financial services customers today expect:",

        contextItems: [
            {
                number: "01",
                title: "Transparent information",
            },
            {
                number: "02",
                title: "Credible brand presence",
            },
            {
                number: "03",
                title: "Educational content",
            },
            {
                number: "04",
                title: "Marketing in finance sector is inherently governed by strict compliance frameworks",
            },
        ],

        detailsSections: [
            {
                number: "(01)",
                title: "Key Challenges",
                items: [
                    "Generating high-quality leads digitally",
                    "Building trust through digital communication",
                    "Explaining complex products clearly",
                    "Maintaining compliance while marketing effectively",
                    "Integrating digital marketing with sales teams",
                ],
                image: "/ax-service-01.png",
            },
            {
                number: "(02)",
                title: "Our Approach",
                items: [
                    "Financial services lead generation campaigns",
                    "Educational content and thought leadership",
                    "SEO for financial product searches",
                    "Social media communication strategies",
                    "Digital trust-building campaigns",
                ],
                image: "/ax-service-03.png",
            },
            {
                number: "(03)",
                title: "Solutions We Provide",
                items: [
                    "Financial services lead generation campaigns",
                    "Educational content and thought leadership",
                    "SEO for financial product searches",
                    "Social media communication strategies",
                    "Digital trust-building campaigns",
                ],
                image: "/ax-service-02.png",
            },
            {
                number: "(04)",
                title: "Expected Results",
                items: [
                    "Generate qualified product enquiries",
                    "Strengthen brand credibility",
                    "Educate customers through content",
                    "Improve digital customer acquisition",
                ],
                image: "/ax-service-04.png",
            },
        ],
    },

    healthcare: {
        title: "HEALTHCARE",

        descriptionOne:
            "Healthcare decisions are deeply personal. Patients often search online for symptoms, treatments, hospitals, and specialists before making an appointment.",

        descriptionTwo:
            "We help healthcare providers become discoverable, credible and accessible in the digital world.",

        smallImage: "/ax-h2-about-02.png",
        largeImage: "/ax-h2-about-01.png",

        contextNumber: "04",
        contextTitle: "Industry Context",
        introText:
            "Healthcare marketing today must balance:",

        contextItems: [
            {
                number: "01",
                title: "Patient trust",
            },
            {
                number: "02",
                title: "Accurate information",
            },
            {
                number: "03",
                title: "Regulatory responsibility",
            },
            {
                number: "04",
                title: "Digital discoverability",
            },
        ],

        detailsSections: [
            {
                number: "(01)",
                title: "Key Challenges",
                items: [
                    "Limited online discoverability",
                    "Outdated websites and patient journeys",
                    "Lack of educational digital content",
                    "Weak local search presence",
                    "Difficulty converting digital traffic into patient enquiries",
                ],
                image: "/ax-service-01.png",
            },
            {
                number: "(02)",
                title: "Our Approach",
                items: [
                    "Performance marketing",
                    "Search visibility",
                    "Conversion-focused landing pages",
                    "Structured lead management",
                ],
                image: "/ax-service-03.png",
            },
            {
                number: "(03)",
                title: "Solutions We Provide",
                items: [
                    "Healthcare SEO and local search optimisation",
                    "Hospital and clinic website development",
                    "Educational healthcare content strategy",
                    "Appointment conversion optimisation",
                    "Social media credibility campaigns",
                    "Digital reputation management",
                ],
                image: "/ax-service-02.png",
            },
            {
                number: "(04)",
                title: "Expected Results",
                items: [
                    "Increased patient enquiries",
                    "Improved digital visibility",
                    "Trust built through educational content",
                    "Strengthened community presence",
                ],
                image: "/ax-service-04.png",
            },
        ],
    },

    "technology-saas": {
        title: "TECHNOLOGY & SAAS",

        descriptionOne:
            "In technology, decisions are rarely immediate. They are built through exploration, validation and proof.",

        descriptionTwo:
            "We design digital systems that capture this process, driving qualified demand while building sustained category credibility.",

        smallImage: "/ax-h2-about-02.png",
        largeImage: "/ax-h2-about-01.png",

        contextNumber: "04",
        contextTitle: "Industry Context",
        introText:
            "Technology sales cycles are often:",

        contextItems: [
            {
                number: "01",
                title: "Long",
            },
            {
                number: "02",
                title: "Research-driven",
            },
            {
                number: "03",
                title: "Multi-stakeholder",
            },
            {
                number: "04",
                title: "Highly competitive",
            },
        ],

        detailsSections: [
            {
                number: "(01)",
                title: "Key Challenges",
                items: [
                    "Generating consistent inbound demand",
                    "Explaining complex solutions clearly",
                    "Building category authority",
                    "Nurturing long decision cycles",
                    "Aligning marketing and sales pipelines",
                ],
                image: "/ax-service-01.png",
            },
            {
                number: "(02)",
                title: "Our Approach",
                items: [
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                ],
                image: "/ax-service-03.png",
            },
            {
                number: "(03)",
                title: "Solutions We Provide",
                items: [
                    "B2B lead generation campaigns",
                    "LinkedIn advertising strategi",
                    "Content marketing and thought leadership",
                    "SEO for technology solutions",
                    "Landing pages for product and demo conversions",
                    "Marketing automation integration",
                ],
                image: "/ax-service-02.png",
            },
            {
                number: "(04)",
                title: "Expected Results",
                items: [
                    "Qualified sales pipeline generation",
                    "Authority in their category",
                    "Long B2B sales cycles support",
                    "Improved marketing-to-sales alignment",
                ],
                image: "/ax-service-04.png",
            },
        ],
    },

    "consumer-d2c-brands": {
        title: "CONSUMER & D2C BRANDS",

        descriptionOne:
            "Consumer brands operate in environments where attention is fleeting and choice is abundant.",

        descriptionTwo:
            "We build digital systems that drive acquisition, strengthen brand narratives, and improve conversion efficiency.",

        smallImage: "/ax-h2-about-02.png",
        largeImage: "/ax-h2-about-01.png",

        contextNumber: "04",
        contextTitle: "Industry Context",
        introText:
            "Successful consumer brands today rely heavily on:",

        contextItems: [
            {
                number: "01",
                title: "Strong digital presence",
            },
            {
                number: "02",
                title: "Engaging social media",
            },
            {
                number: "03",
                title: "Efficient paid acquisition",
            },
            {
                number: "04",
                title: "Optimised e-commerce experiences",
            },
        ],

        detailsSections: [
            {
                number: "(01)",
                title: "Key Challenges",
                items: [
                    "Rising customer acquisition costs",
                    "Heavy dependence on paid advertising",
                    "Inconsistent brand storytelling",
                    "Low conversion rates on websites",
                    "Difficulty retaining customers",
                ],
                image: "/ax-service-01.png",
            },
            {
                number: "(02)",
                title: "Our Approach",
                items: [
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                ],
                image: "/ax-service-03.png",
            },
            {
                number: "(03)",
                title: "Solutions We Provide",
                items: [
                    "Paid social and performance campaigns",
                    "E-commerce SEO strategies",
                    "Brand storytelling through social media",
                    "Conversion-focused website optimisation",
                    "Remarketing and retention strategies",
                ],
                image: "/ax-service-02.png",
            },
            {
                number: "(04)",
                title: "Expected Results",
                items: [
                    "Scaled customer acquisition",
                    "Improved return on advertising spends",
                    "Strengthened brand identity",
                    "Increased customer lifetime value",
                ],
                image: "/ax-service-04.png",
            },
        ],
    },

    "heavy-engineering": {
        title: "HEAVY ENGINEERING",

        descriptionOne:
            "In technology, decisions are rarely immediate. They are built through exploration, validation and proof.",

        descriptionTwo:
            "We design digital systems that capture this process, driving qualified demand while building sustained category credibility.",

        smallImage: "/ax-h2-about-02.png",
        largeImage: "/ax-h2-about-01.png",

        contextNumber: "04",
        contextTitle: "Industry Context",
        introText:
            "Technology sales cycles are often:",

        contextItems: [],

        detailsSections: [
            {
                number: "(01)",
                title: "Key Challenges",
                items: [
                    "Generating consistent inbound demand",
                    "Explaining complex solutions clearly",
                    "Building category authority",
                    "Nurturing long decision cycles",
                    "Aligning marketing and sales pipelines",
                ],
                image: "/ax-service-01.png",
            },
            {
                number: "(02)",
                title: "Our Approach",
                items: [
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                ],
                image: "/ax-service-03.png",
            },
            {
                number: "(03)",
                title: "Solutions We Provide",
                items: [
                    "B2B lead generation campaigns",
                    "LinkedIn advertising strategi",
                    "Content marketing and thought leadership",
                    "SEO for technology solutions",
                    "Landing pages for product and demo conversions",
                    "Marketing automation integration",
                ],
                image: "/ax-service-02.png",
            },
            {
                number: "(04)",
                title: "Expected Results",
                items: [
                    "Qualified sales pipeline generation",
                    "Authority in their category",
                    "Long B2B sales cycles support",
                    "Improved marketing-to-sales alignment",
                ],
                image: "/ax-service-04.png",
            },
        ],
    },

    "education-consultant": {
        title: "EDUCATION & CONSULTANT",

        descriptionOne:
            "In technology, decisions are rarely immediate. They are built through exploration, validation and proof.",

        descriptionTwo:
            "We design digital systems that capture this process, driving qualified demand while building sustained category credibility.",

        smallImage: "/ax-h2-about-02.png",
        largeImage: "/ax-h2-about-01.png",

        contextNumber: "04",
        contextTitle: "Industry Context",
        introText:
            "",

        contextItems: [],

        detailsSections: [
            {
                number: "(01)",
                title: "Key Challenges",
                items: [
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                ],
                image: "/ax-service-01.png",
            },
            {
                number: "(02)",
                title: "Our Approach",
                items: [
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                ],
                image: "/ax-service-03.png",
            },
            {
                number: "(03)",
                title: "Solutions We Provide",
                items: [
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                ],
                image: "/ax-service-02.png",
            },
            {
                number: "(04)",
                title: "Expected Results",
                items: [
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                    "Lorem Ipsum",
                ],
                image: "/ax-service-04.png",
            },
        ],
    },
};