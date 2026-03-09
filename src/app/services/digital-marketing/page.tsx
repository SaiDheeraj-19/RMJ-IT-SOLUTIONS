"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Target, Users, Mail, BarChart2, TrendingUp } from "lucide-react";

const pillars = [
    {
        icon: <Search className="w-6 h-6" />,
        title: "Search Engine Optimisation (SEO)",
        brief: "We engineer visibility. Our SEO practice is deeply technical — covering Core Web Vitals, structured data, content architecture, and authoritative link acquisition. The result: sustainable, compounding organic traffic that doesn't disappear when you stop paying.",
        points: [
            "Full technical SEO audit: crawl errors, indexation, canonical issues",
            "Keyword research with SERP intent mapping",
            "On-page optimisation: titles, headings, internal linking",
            "Schema markup for rich snippets and knowledge panels",
            "Backlink analysis and white-hat authority building",
            "Local SEO for Google Business Profile and maps rank",
        ],
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: "Performance Marketing (PPC)",
        brief: "Every rupee must earn its keep. We manage Google Ads, Meta Ads, and LinkedIn campaigns focused entirely on Return on Ad Spend (ROAS) — not vanity metrics like impressions or reach.",
        points: [
            "Google Search, Display, Shopping, and Performance Max campaigns",
            "Meta (Facebook & Instagram) conversion-optimised campaigns",
            "LinkedIn Lead Gen for B2B and institutional audiences",
            "Conversion tracking via GA4 and Meta Pixel",
            "A/B testing ad creatives, headlines, and landing pages",
            "Budget pacing, frequency management, and bid strategies",
        ],
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Social Media Marketing",
        brief: "Social media is a product — not an afterthought. We develop platform-specific strategies for Instagram, LinkedIn, and YouTube with content calendars, community management, and growth analytics built in.",
        points: [
            "Content strategy and editorial calendar management",
            "Platform-specific creative production (Reels, Carousels, Shorts)",
            "Community management and DM response protocols",
            "Influencer identification and partnership management",
            "Social listening and sentiment analysis",
            "Monthly analytics reporting with actionable insights",
        ],
    },
    {
        icon: <Mail className="w-6 h-6" />,
        title: "Email Marketing & CRM Automation",
        brief: "Email delivers the highest ROI of any digital channel. We build automated nurture sequences and transnational flows that convert leads, re-engage dormant customers, and drive repeat purchases — on autopilot.",
        points: [
            "CRM setup: HubSpot, Zoho CRM, or Mailchimp",
            "Lead scoring models and lifecycle stage management",
            "Drip sequences: welcome, nurture, abandon, win-back",
            "Transactional email design and deliverability tuning",
            "A/B testing subject lines, CTAs, and send timing",
            "DMARC, DKIM, SPF configuration for inbox placement",
        ],
    },
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Conversion Rate Optimisation (CRO)",
        brief: "More traffic means nothing if visitors don't convert. We use session recordings, heatmaps, and structured A/B tests to identify why users drop — then methodically remove friction until conversion rates climb.",
        points: [
            "Hotjar or Microsoft Clarity session recording analysis",
            "Funnel drop-off identification and prioritisation",
            "Landing page A/B testing with Optimizely or Google Optimize",
            "Form optimisation: field reduction, progressive disclosure",
            "Trust signal audits: reviews, credentials, testimonials",
            "Mobile UX friction identification and remediation",
        ],
    },
    {
        icon: <BarChart2 className="w-6 h-6" />,
        title: "Analytics & Performance Reporting",
        brief: "We believe in radical transparency. Every campaign we run is tied to measurable business outcomes — leads generated, revenue attributed, ROAS achieved — surfaced in clear, executive-readable dashboards.",
        points: [
            "GA4 implementation with custom event tracking",
            "Looker Studio dashboard with live data integration",
            "Attribution modelling: first-click, last-click, data-driven",
            "Monthly channel performance reviews and strategy pivots",
            "UTM parameter governance and campaign taxonomy",
            "Competitor benchmarking and market share tracking",
        ],
    },
];

const process = [
    { num: "01", title: "Audit & Market Research", desc: "We start with a comprehensive audit of your current digital presence — SEO health, ad account structure, social performance, and email metrics. We then map your competitive landscape and identify the highest-leverage growth opportunities." },
    { num: "02", title: "Growth Strategy Design", desc: "Based on the audit, we develop a 90-day channel strategy with specific KPIs for each initiative. This becomes the contract between us — you always know what we're working toward and how success is measured." },
    { num: "03", title: "Campaign Architecture", desc: "Before launch, we build the full campaign structure — ad groups, content calendar, email sequences, tracking setup — all in parallel. This front-loaded setup ensures we can move fast once live." },
    { num: "04", title: "Launch, Monitor & Optimise", desc: "Campaigns go live with daily performance monitoring in the first two weeks. We make rapid optimisations based on real data — adjusting bids, pausing underperforming ad sets, and scaling winners." },
    { num: "05", title: "Report & Scale", desc: "Monthly strategy reviews with clear attribution data. We identify what's working, eliminate waste, and reinvest in proven channels. Successful strategies are systematised and scaled." },
];

const techStack = [
    "Google Ads", "Meta Ads", "LinkedIn Ads", "HubSpot", "Mailchimp",
    "Google Analytics 4", "Looker Studio", "Hotjar", "Semrush", "Ahrefs",
    "Klaviyo", "Zoho CRM", "Google Search Console", "Meta Business Suite",
];

export default function DigitalMarketingPage() {
    return (
        <main style={{ background: "var(--background)", color: "var(--foreground)" }}>

            {/* ── HERO ── */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-24 px-6 md:px-12 lg:px-24">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full pointer-events-none"
                    style={{ background: "#b05d41", filter: "blur(260px)", opacity: 0.09 }} />
                <div className="absolute bottom-0 left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: "#3150aa", filter: "blur(200px)", opacity: 0.06 }} />

                <div className="relative z-10 max-w-[1400px] mx-auto w-full">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-10">
                        <Link href="/services" className="text-[11px] font-black uppercase tracking-[0.45em] font-mono hover:opacity-100 transition-opacity"
                            style={{ color: "var(--brand)", opacity: 0.8 }}>
                            ← Services
                        </Link>
                        <span className="w-16 h-px" style={{ background: "var(--border)" }} />
                        <span className="text-[11px] font-black uppercase tracking-[0.45em] font-mono"
                            style={{ color: "var(--foreground)", opacity: 0.35 }}>Digital Marketing</span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.9] tracking-tighter mb-10 max-w-5xl"
                        style={{ color: "var(--foreground)", letterSpacing: "-3px" }}>
                        Digital Growth<br />
                        <span style={{ color: "var(--brand)" }}>Engineered.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
                        className="text-xl md:text-2xl max-w-2xl leading-relaxed mb-14"
                        style={{ color: "var(--foreground)", opacity: 0.6 }}>
                        We transform your digital presence into a predictable revenue engine — through data-driven SEO, high-ROAS performance campaigns, CRM automation, and conversion rate optimisation that compounds over time.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
                        className="flex flex-wrap items-center gap-5">
                        <Link href="/contact?service=Digital%20Marketing&type=other" className="btn-glow px-10 py-4 text-base font-bold inline-flex items-center gap-3">
                            Scale My Brand <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full mt-24">
                    <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-4"
                        style={{ color: "var(--foreground)", opacity: 0.3 }}>Platforms & Tools We Deploy</p>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((t) => (
                            <span key={t} className="px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider"
                                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--foreground)", opacity: 0.7 }}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHAT WE DO ── */}
            <section className="px-6 md:px-12 lg:px-24 py-32" style={{ background: "var(--surface)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                        <div className="lg:col-span-5">
                            <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-5"
                                style={{ color: "var(--brand)" }}>{`// Service Breakdown`}</p>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight"
                                style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                Every channel.<br />Every lever.
                            </h2>
                        </div>
                        <div className="lg:col-span-7 flex items-end">
                            <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.55 }}>
                                We don&apos;t do surface-level social media management. We build the entire digital acquisition infrastructure — from how your brand ranks on Google to how it converts visitors into loyal clients. Each channel is owned, measured, and optimised with the same rigour as your core product.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pillars.map((p, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                className="group rounded-[20px] p-8 transition-transform duration-300 hover:-translate-y-1"
                                style={{ background: "var(--surface-soft)", border: "1px solid var(--border)" }}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                                    style={{ background: "var(--background)", color: "var(--brand)", border: "1px solid var(--border)" }}>
                                    {p.icon}
                                </div>
                                <h3 className="text-xl font-black tracking-tight mb-3"
                                    style={{ color: "var(--foreground)" }}>{p.title}</h3>
                                <p className="text-sm leading-relaxed mb-6"
                                    style={{ color: "var(--foreground)", opacity: 0.55 }}>{p.brief}</p>
                                <ul className="space-y-2">
                                    {p.points.map((pt, j) => (
                                        <li key={j} className="text-[12px] font-semibold flex items-start gap-2"
                                            style={{ color: "var(--foreground)", opacity: 0.45 }}>
                                            <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: "var(--brand)" }} />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="px-6 md:px-12 lg:px-24 py-32" style={{ background: "var(--background)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-5"
                        style={{ color: "var(--brand)" }}>{`// How We Grow You`}</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-20"
                        style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                        A system for compounding growth.
                    </h2>

                    <div className="space-y-0">
                        {process.map((step, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="grid grid-cols-12 gap-8 py-10 border-t group transition-colors rounded-xl px-4"
                                style={{ borderColor: "var(--border)" }}>
                                <div className="col-span-2 md:col-span-1">
                                    <span className="text-5xl font-black tabular-nums"
                                        style={{ color: "var(--foreground)", opacity: 0.12 }}>{step.num}</span>
                                </div>
                                <div className="col-span-10 md:col-span-4">
                                    <h3 className="text-xl font-black tracking-tight"
                                        style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                </div>
                                <div className="col-span-12 md:col-span-7">
                                    <p className="text-base leading-relaxed"
                                        style={{ color: "var(--foreground)", opacity: 0.55 }}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-6 md:px-12 lg:px-24 py-24" style={{ background: "var(--surface)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="rounded-[36px] p-14 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
                        style={{ background: "var(--background)", border: "1px solid var(--border)" }}>
                        <div className="absolute right-0 top-0 w-96 h-96 rounded-full pointer-events-none"
                            style={{ background: "#b05d41", filter: "blur(180px)", opacity: 0.1 }} />
                        <div className="relative z-10">
                            <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-4"
                                style={{ color: "var(--brand)" }}>{`// Grow with RMJ IT`}</p>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter"
                                style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                Turn your brand into<br />a growth machine.
                            </h2>
                        </div>
                        <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="btn-glow px-10 py-4 text-base font-bold inline-flex items-center gap-3">
                                Get a Free Audit <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
