"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import HorizontalLine from "@/components/ui/HorizontalLine";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const capabilitySuites = [
    {
        title: "Web Applications & Portals",
        result: "Replaced 5 separate tools with 1 integrated platform for a university with 8,000 students.",
        desc: "We build student portals, admin dashboards, and public-facing platforms that handle 10K+ concurrent users. If your current systems are slow, fragmented, or require manual data transfers between tools — this is what we fix.",
        points: ["React / Next.js frontends", "PostgreSQL with REST & GraphQL APIs", "Role-based access & SSO", "Sub-200ms response times at scale"]
    },
    {
        title: "Mobile Apps (iOS & Android)",
        result: "80% reduction in paper-based workflows within 60 days of launch.",
        desc: "Campus navigation, attendance tracking, and citizen-service apps that work offline. Our apps maintain 98.9% crash-free sessions and are designed for environments with inconsistent connectivity.",
        points: ["React Native for cross-platform", "Offline-first data sync", "Biometric authentication", "Push notifications & engagement"]
    },
    {
        title: "Campus ERP & Digital Operations",
        result: "One university saved 400+ staff hours per month after deployment.",
        desc: "End-to-end campus digitization: admissions, fee management, timetable automation, and examination workflows. We replace Excel-based operations with real-time integrated systems.",
        points: ["Complete student lifecycle management", "Automated fee reconciliation", "Timetable & exam scheduling", "Multi-campus deployment support"]
    },
    {
        title: "AI & Process Automation",
        result: "Document verification that took 3 weeks now runs in 4 hours (99.2% accuracy).",
        desc: "Custom ML models for document processing, predictive analytics, and workflow automation. We build solutions tailored to institutional data — not generic SaaS tools.",
        points: ["OCR & document processing pipelines", "Predictive analytics dashboards", "Automated grading & evaluation", "Natural language support systems"]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            <section className="min-h-[70vh] pt-40 flex flex-col justify-end pb-24 px-10 md:px-20">
                <div className="max-w-[1400px] mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand mb-8 block">
                            Our Services
                        </span>
                        <div className="mb-12">
                            <TextReveal
                                as="h1"
                                text="What We Build."
                                className="text-[clamp(4rem,12vw,9rem)] font-display leading-[0.9] tracking-tighter font-bold"
                                delay={0.2}
                            />
                            <span className="text-[clamp(2rem,5vw,3.5rem)] font-display text-[#606060] leading-none block mt-4 font-medium">
                                And the results we&apos;ve delivered.
                            </span>
                        </div>
                        <p className="text-xl text-[#505050] max-w-2xl leading-relaxed">
                            Every project starts with a Technical Strategy Call. We scope the architecture, estimate the delivery, and provide a clear roadmap — before any commitment.
                        </p>
                    </motion.div>
                </div>
            </section>

            {capabilitySuites.map((suite, i) => (
                <Section key={i} className={i % 2 === 0 ? "bg-[#f1f5f9]" : "bg-white"}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                        <div className="lg:col-span-1">
                            <HorizontalLine className="mb-12 w-12" />
                            <span className="font-mono text-sm text-brand tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="lg:col-span-5">
                            <TextReveal
                                as="h2"
                                text={suite.title}
                                className="text-4xl md:text-5xl font-display mb-8 leading-tight font-bold text-[#1a1a1a]"
                            />
                            {/* Result callout */}
                            <div className="mb-8 p-6 bg-brand/5 border-l-4 border-brand rounded-r-xl">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-brand block mb-2">Real Result</span>
                                <p className="text-lg font-medium text-[#1a1a1a] leading-relaxed">{suite.result}</p>
                            </div>
                            <HorizontalLine className="mb-8 opacity-30" />
                            <p className="text-lg font-normal leading-relaxed text-[#505050]">
                                {suite.desc}
                            </p>
                        </div>
                        <div className="lg:col-span-1 hidden lg:block" />
                        <div className="lg:col-span-5 grid grid-cols-1 gap-4 pt-12">
                            {suite.points.map((point, j) => (
                                <motion.div
                                    key={j}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + j * 0.1 }}
                                    className="flex items-center space-x-6 py-6 border-b border-stone-200"
                                >
                                    <span className="text-brand font-mono text-xs">+</span>
                                    <span className="text-xs uppercase tracking-[0.3em] font-black text-[#1a1a1a]">{point}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Section>
            ))}

            {/* Services CTA */}
            <Section className="bg-[#fafaf9] text-center border-t border-stone-100">
                <div className="max-w-2xl mx-auto">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block">Next Step</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 tracking-tight text-[#1a1a1a]">
                        Not sure which service you need?
                    </h2>
                    <p className="text-xl text-[#606060] mb-12 leading-relaxed">
                        Start with a Technical Consultation. We&apos;ll assess your current systems and recommend the right approach — no commitment required.
                    </p>
                    <Link href="/contact" id="services-page-cta" className="group inline-flex items-center gap-3 px-12 py-6 bg-[#1a1a1a] text-white rounded-full text-sm uppercase tracking-widest font-black hover:bg-brand transition-all duration-300 shadow-2xl">
                        Request Consultation
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
