"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";

const phases = [
    {
        num: "01",
        title: "Discovery & System Audit",
        description: "We don't guess. We audit your existing infrastructure, map data flows, and define technical requirements before writing a single line of code.",
        duration: "2 Weeks",
        deliverable: "Architecture Audit Report"
    },
    {
        num: "02",
        title: "Architecture & Technical Design",
        description: "We blueprint the entire system—database schema, API contracts, security model, and cloud infrastructure. You approve the engineering plan.",
        duration: "3 Weeks",
        deliverable: "System Blueprint & Tech Spec"
    },
    {
        num: "03",
        title: "Agile Development",
        description: "Bi-weekly sprints with tangible demos. You see working software every 14 days. CI/CD pipelines and automated testing are active from day one.",
        duration: "8-16 Weeks",
        deliverable: "Production-Ready Codebase"
    },
    {
        num: "04",
        title: "QA & Security Testing",
        description: "Rigorous stress testing, vulnerability scanning (OWASP Top 10), and cross-device validation. Nothing goes to production without passing 100% of test cases.",
        duration: "2 Weeks",
        deliverable: "QA Validation Report"
    },
    {
        num: "05",
        title: "Deployment & Migration",
        description: "Zero-downtime deployment strategy. We handle data migration, DNS cutover, and SSL configuration with a rollback plan in place.",
        duration: "1 Week",
        deliverable: "Live Production Environment"
    },
    {
        num: "06",
        title: "Stabilization & Handover",
        description: "We stay on for 30 days post-launch to monitor performance, fix edge cases, and train your internal team. Full documentation is transferred.",
        duration: "Ongoing",
        deliverable: "Operator Manuals & Repo Access"
    }
];

export default function ProcessTimeline() {
    return (
        <Section className="bg-white text-[#1a1a1a] py-32">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.5em] font-black text-brand mb-10 block"
                        >
                            Delivery Framework
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="Engineered for Certainty."
                            className="text-[clamp(2.5rem,5vw,4.5rem)] font-display leading-[1] font-bold tracking-tight text-[#1a1a1a]"
                            delay={0.1}
                        />
                    </div>
                    <div className="max-w-md pb-2">
                        <p className="text-lg text-[#606060] leading-relaxed">
                            We replaced the "black box" of agency development with a transparent, milestone-gated process. You know exactly what's being built, when it ships, and why it works.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col">
                    {phases.map((phase, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group border-t border-stone-200 hover:border-brand/50 transition-colors duration-500 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative overflow-hidden"
                        >
                            {/* Hover BG */}
                            <div className="absolute inset-0 bg-stone-50/0 group-hover:bg-stone-50/50 transition-colors duration-500 -z-10" />

                            {/* Phase Number */}
                            <div className="md:col-span-2">
                                <span className="text-4xl md:text-5xl font-display font-bold text-stone-200 group-hover:text-brand transition-colors duration-500">
                                    {phase.num}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="md:col-span-6 pr-8">
                                <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a] group-hover:text-brand transition-colors duration-300">
                                    {phase.title}
                                </h3>
                                <p className="text-[#606060] text-[16px] leading-relaxed max-w-xl">
                                    {phase.description}
                                </p>
                            </div>

                            {/* Metadata */}
                            <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between h-full gap-4 mt-4 md:mt-0">
                                <div className="space-y-3 w-full md:text-right">
                                    <div className="flex flex-col md:items-end">
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Duration</span>
                                        <span className="text-[14px] font-medium text-[#1a1a1a] bg-stone-100 px-3 py-1 rounded-full w-fit">
                                            {phase.duration}
                                        </span>
                                    </div>
                                    <div className="flex flex-col md:items-end pt-2">
                                        <span className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-1">Key Deliverable</span>
                                        <span className="text-[14px] font-medium text-[#1a1a1a]">
                                            {phase.deliverable}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {/* Final Border */}
                    <div className="border-t border-stone-200" />
                </div>
            </div>
        </Section>
    );
}
