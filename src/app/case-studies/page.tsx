"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import HorizontalLine from "@/components/ui/HorizontalLine";
import Link from "next/link";

const impacts = [
    {
        title: "Campus ERP Migration with Zero Downtime.",
        sector: "Educational Institution",
        problem: "Student records were fragmented across disconnected legacy servers. Each enrollment cycle resulted in data discrepancies, manual reconciliation took weeks, and the system was unstable during peak registration.",
        solution: "We architected a centralized student-lifecycle platform with real-time edge synchronization across all campuses. Admissions, fee management, and examination workflows were unified into a single dashboard with role-based access.",
        tech: "Next.js, Node.js, PostgreSQL, AWS, Redis",
    },
    {
        title: "ERP Automation for Logistics Operations.",
        sector: "Enterprise Logistics",
        problem: "Manual ERP data entry was causing frequent billing errors. Shipment reconciliation required manual steps across multiple departments, and audit preparation consumed extensive staff hours.",
        solution: "We deployed a custom automated ERP with real-time shipment tracking, automated financial reconciliation, and role-based approval workflows. An OCR pipeline was added for invoice processing, significantly reducing manual entry.",
        tech: "React, Node.js, Redis, Docker, GCP",
    },
    {
        title: "Citizen Services Portal for Government Agency.",
        sector: "Public Sector",
        problem: "Citizen support channels were overwhelmed with daily queries. Request processing required manual effort by understaffed teams, and response times were too long.",
        solution: "We implemented a secure citizen services portal with automated query resolution, secure identity verification, and a tiered support escalation system. An analytics dashboard gave department heads real-time visibility into service metrics.",
        tech: "Python, FastAPI, React, Cloud Architecture",
    }
];

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            <section className="min-h-[80vh] pt-40 flex flex-col justify-end pb-32 px-10 md:px-20">
                <div className="max-w-[1400px] mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand mb-12 block">
                            Project Case Studies
                        </span>
                        <div className="mb-16">
                            <TextReveal
                                as="h1"
                                text="System Transformations."
                                className="text-[clamp(4rem,10vw,8rem)] font-display leading-[0.9] tracking-tighter font-bold"
                                delay={0.2}
                            />
                            <span className="text-[clamp(4rem,10vw,8rem)] font-display italic text-brand leading-none block mt-4 font-bold">Engineering Proofs.</span>
                        </div>
                        <p className="text-xl text-[#606060] max-w-2xl leading-relaxed">
                            We solve complex organizational problems through specialized digital infrastructure. Each proof below documents the architectural approach, technical stack, and system impact.
                        </p>
                    </motion.div>
                </div>
            </section>

            {impacts.map((item, i) => (
                <Section key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f1f5f9]"}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                        <div className="lg:col-span-1">
                            <HorizontalLine className="mb-12 w-12" />
                            <span className="font-mono text-sm text-brand tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="lg:col-span-11">
                            <span className="text-[11px] uppercase tracking-[0.4em] font-black text-stone-400 mb-6 block">
                                {item.sector}
                            </span>
                            <TextReveal
                                as="h2"
                                text={item.title}
                                className="text-backgroundxl font-display font-bold leading-[1.05] mb-16 tracking-tight text-[#1a1a1a]"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest font-black text-brand mb-6">The Problem</h3>
                                    <p className="text-lg text-[#606060] leading-relaxed">
                                        {item.problem}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest font-black text-brand mb-6">Our Solution</h3>
                                    <p className="text-lg text-[#606060] leading-relaxed">
                                        {item.solution}
                                    </p>
                                </div>
                            </div>

                            <div className="mb-16">
                                <h3 className="text-xs uppercase tracking-widest font-black text-stone-400 mb-4">Technology Stack</h3>
                                <p className="text-lg font-display font-bold text-[#1a1a1a]">{item.tech}</p>
                            </div>
                        </div>
                    </div>
                </Section>
            ))}

            {/* CTA */}
            <section className="bg-white py-32 text-center relative overflow-hidden border-t border-stone-100">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-multiply pointer-events-none" />
                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display font-bold text-[#1a1a1a] mb-4 tracking-tight">
                            Solving a Complex Systems Problem?
                        </h2>
                        <p className="text-[#606060] text-xl mb-12 max-w-lg mx-auto leading-relaxed">
                            If you&apos;re dealing with tech debt, fragmentation, or scalability issues, let&apos;s look at your architecture.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-12 py-6 bg-[#1a1a1a] text-foreground text-sm uppercase tracking-widest font-black rounded-full hover:bg-brand transition-all duration-300 shadow-2xl"
                        >
                            Request a Technical Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
