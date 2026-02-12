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
        sector: "Multi-Campus University — 80+ Locations",
        problem: "Student records were fragmented across 12 disconnected legacy servers. Each enrollment cycle resulted in 15% data discrepancies, manual reconciliation took 3 weeks, and the system crashed during peak registration — affecting 40,000+ students.",
        solution: "We architected a centralized student-lifecycle platform with real-time edge synchronization across all 80 campuses. Admissions, fee management, and examination workflows were unified into a single dashboard with role-based access for 200+ administrators.",
        tech: "Next.js, Go, PostgreSQL, AWS Lambda, Kubernetes, Redis",
        results: [
            { stat: "0 min", label: "Migration Downtime" },
            { stat: "3.2M", label: "Records Migrated" },
            { stat: "15%→0%", label: "Data Discrepancy" }
        ],
        testimonial: "\"RMJ IT delivered what our previous vendor couldn't in 2 years. The migration happened over a weekend with zero disruption to classes.\"",
        testimonialAuthor: "IT Director, Multi-Campus University"
    },
    {
        title: "ERP Automation for Logistics Operations.",
        sector: "Mid-Size Enterprise — 350+ Employees",
        problem: "Manual ERP data entry was causing $15,000/month in billing errors. Shipment reconciliation required 14 manual steps across 3 departments. Audit preparation consumed 200+ staff-hours per quarter.",
        solution: "We deployed a custom automated ERP with real-time shipment tracking, automated financial reconciliation, and role-based approval workflows. An OCR pipeline was added for invoice processing, reducing manual entry by 90%.",
        tech: "React, Node.js, Redis, Docker, GCP, Custom REST APIs",
        results: [
            { stat: "99.8%", label: "Billing Accuracy" },
            { stat: "$180K", label: "Annual Savings" },
            { stat: "40%", label: "Cycle Time Reduction" }
        ],
        testimonial: "\"Our billing errors dropped from $15k/month to near zero. The ROI was visible within the first quarter.\"",
        testimonialAuthor: "Head of Operations, Logistics Enterprise"
    },
    {
        title: "Citizen Services Portal for Government Agency.",
        sector: "State Government — Public Sector",
        problem: "Citizen support channels were overwhelmed with 50,000+ daily queries. Response times averaged 72 hours. No self-service portal existed — all requests required manual phone-based processing by understaffed teams.",
        solution: "We implemented a secure citizen services portal with NLP-powered automated query resolution, secure identity verification (Aadhaar integration), and a tiered support escalation system. An analytics dashboard gave department heads real-time visibility into service metrics.",
        tech: "Python, TensorFlow, Azure Cognitive Services, FastAPI, React",
        results: [
            { stat: "70%", label: "Queries Auto-Resolved" },
            { stat: "72h→4h", label: "Avg. Response Time" },
            { stat: "24/7", label: "Service Availability" }
        ],
        testimonial: "\"For the first time, our department can handle citizen requests at scale without adding headcount. The system paid for itself in 4 months.\"",
        testimonialAuthor: "Deputy Director, State IT Department"
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
                                className="text-5xl font-display font-bold leading-[1.05] mb-16 tracking-tight text-[#1a1a1a]"
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

                            <div className="grid grid-cols-3 gap-8 border-t border-stone-200 pt-12 mb-16">
                                {item.results.map((r, idx) => (
                                    <div key={idx}>
                                        <div className="text-3xl md:text-4xl font-display font-bold text-[#1a1a1a]">{r.stat}</div>
                                        <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider mt-2">{r.label}</div>
                                    </div>
                                ))}
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
                            className="inline-block px-12 py-6 bg-[#1a1a1a] text-white text-sm uppercase tracking-widest font-black rounded-full hover:bg-brand transition-all duration-300 shadow-2xl"
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
