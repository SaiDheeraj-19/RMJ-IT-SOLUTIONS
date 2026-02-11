"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import HorizontalLine from "@/components/ui/HorizontalLine";

const impacts = [
    {
        title: "The Zero-Downtime Campus Migration.",
        sector: "Academic Sector (80+ Campuses)",
        desc: "Fragmented student records across legacy servers were causing 15% annual data loss. We architected a hybrid-cloud student-lifecycle ecosystem with real-time edge synchronization.",
        metrics: ["0 mins Downtime", "3.2M Records Migrated", "100% Data Integrity"],
        problem: "Legacy infrastructure failures during peak enrollment periods.",
        tech: "Next.js, Go, PostgreSQL, AWS Lambda, Kubernetes"
    },
    {
        title: "Enterprise ERP Modernization.",
        sector: "Logistics & Corporate Operations",
        desc: "Manual ERP entry was costing $15k/month in billing errors. We deployed a custom automated ERP with real-time shipment tracking and automated financial reconciliation.",
        metrics: ["99.8% Billing Accuracy", "40% Cycle Speedup", "$180k Annual Savings"],
        problem: "Bottlenecks in manual audit trails and shipment validation.",
        tech: "React, Node.js, Redis, Docker, GCP"
    },
    {
        title: "National Identity Support Automation.",
        sector: "Public Sector (Government)",
        desc: "Citizen support channels were overwhelmed with 50k+ daily queries. We implemented a secure NLP support layer that resolved 70% of tier-1 inquiries autonomously.",
        metrics: ["70% Auto-Resolution", "24/7 Availability", "99.9% Security Uptime"],
        problem: "Operational paralysis due to resource shortages and inquiry volume.",
        tech: "Python, TensorFlow, Azure Cognitive Services, FastAPI"
    }
];

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-[#f5f5f5]">
            <Navbar />

            <section className="min-h-[80vh] pt-40 flex flex-col justify-end pb-32 px-10 md:px-20">
                <div className="max-w-[1400px] mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand mb-12 block">
                            Achievements
                        </span>
                        <div className="mb-16">
                            <TextReveal
                                as="h1"
                                text="Institutional Impact."
                                className="text-[clamp(4rem,10vw,8rem)] font-display leading-[0.9] tracking-tighter font-bold"
                                delay={0.2}
                            />
                            <span className="text-[clamp(4rem,10vw,8rem)] font-display italic text-brand leading-none block mt-4 font-bold">At Scale.</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {impacts.map((item, i) => (
                <Section key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#efefef]"}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
                        <div className="lg:col-span-1">
                            <HorizontalLine className="mb-12 w-12" />
                            <span className="font-mono text-sm text-brand tracking-widest">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        <div className="lg:col-span-11 grid grid-cols-1 md:grid-cols-12 gap-12">
                            <div className="md:col-span-6">
                                <span className="text-[11px] uppercase tracking-[0.4em] font-black text-stone-400 mb-12 block">
                                    {item.sector}
                                </span>
                                <TextReveal
                                    as="h2"
                                    text={item.title}
                                    className="text-5xl font-display font-bold leading-[1.05] mb-12 tracking-tight text-[#1a1a1a]"
                                />
                            </div>
                            <div className="md:col-span-6 pt-12 md:pt-48">
                                <TextReveal
                                    as="p"
                                    text={item.desc}
                                    className="text-2xl font-normal leading-relaxed text-[#505050]"
                                    delay={0.5}
                                />

                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mt-12 border-t border-stone-200 pt-12">
                                    {item.metrics.map((metric, idx) => (
                                        <div key={idx}>
                                            <div className="text-2xl font-display font-bold text-[#1a1a1a]">{metric.split(' ')[0]}</div>
                                            <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider mt-1">{metric.split(' ').slice(1).join(' ')}</div>
                                        </div>
                                    ))}
                                </div>

                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1 }}
                                    className="mt-16 text-[11px] uppercase tracking-[0.3em] font-black border-b-2 border-brand pb-2 hover:text-brand transition-colors text-[#1a1a1a]"
                                >
                                    Explore Intervention
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </Section>
            ))}

            <Footer />
        </main>
    );
}
