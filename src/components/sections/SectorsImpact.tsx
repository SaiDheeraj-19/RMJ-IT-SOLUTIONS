"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { CheckCircle2, ShieldCheck, Timer, FileCode, Server, Zap } from "lucide-react";

const phases = [
    {
        num: "01",
        icon: <Timer className="w-5 h-5" />,
        title: "Discovery & System Audit",
        description: "We don't guess. We audit your existing infrastructure, map data flows, and define technical requirements before writing a single line of code.",
        duration: "Strategy Phase",
        deliverable: "Architecture Audit Report"
    },
    {
        num: "02",
        icon: <FileCode className="w-5 h-5" />,
        title: "Architecture & Technical Design",
        description: "We blueprint the entire system—database schema, API contracts, security model, and cloud infrastructure. You approve the engineering plan.",
        duration: "Design Phase",
        deliverable: "System Blueprint & Tech Spec"
    },
    {
        num: "03",
        icon: <Zap className="w-5 h-5" />,
        title: "Agile Development",
        description: "Bi-weekly sprints with tangible demos. You see working software every 14 days. CI/CD pipelines and automated testing are active from day one.",
        duration: "Development Phase",
        deliverable: "Production-Ready Codebase"
    },
    {
        num: "04",
        icon: <ShieldCheck className="w-5 h-5" />,
        title: "QA & Security Testing",
        description: "Rigorous stress testing, vulnerability scanning (OWASP Top 10), and cross-device validation. Nothing goes to production without passing 100% of test cases.",
        duration: "Audit Phase",
        deliverable: "QA Validation Report"
    },
    {
        num: "05",
        icon: <Server className="w-5 h-5" />,
        title: "Deployment & Migration",
        description: "Zero-downtime deployment strategy. We handle data migration, DNS cutover, and SSL configuration with a rollback plan in place.",
        duration: "Launch Phase",
        deliverable: "Live Production Environment"
    },
    {
        num: "06",
        icon: <CheckCircle2 className="w-5 h-5" />,
        title: "Stabilization & Handover",
        description: "We stay on for 30 days post-launch to monitor performance, fix edge cases, and train your internal team. Full documentation is transferred.",
        duration: "Ongoing",
        deliverable: "Operator Manuals & Repo Access"
    }
];

export default function ProcessTimeline() {
    return (
        <Section className="bg-white text-[#0f172a] py-40">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-10 block font-mono"
                        >
                            {`// DELIVERY FRAMEWORK`}
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="Engineered for Certainty."
                            className="text-[clamp(2.5rem,5vw,5rem)] font-display leading-[0.95] font-bold tracking-tighter text-slate-900"
                            delay={0.1}
                        />
                    </div>
                    <div className="max-w-md pb-4">
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">
                            We replaced the &quot;black box&quot; of development with a transparent, milestone-gated process. You know exactly what&apos;s being built, when it ships, and why it works.
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
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="group border-t border-slate-100 hover:border-brand/40 transition-colors duration-700 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative overflow-hidden"
                        >
                            {/* Hover Surface */}
                            <div className="absolute inset-0 bg-[#eef2ff]/0 group-hover:bg-[#eef2ff]/30 transition-colors duration-700 -z-10" />

                            {/* Phase Number - Vertical Marker */}
                            <div className="md:col-span-1 flex items-center md:justify-center">
                                <span className="text-sm font-black font-mono text-slate-200 group-hover:text-brand transition-colors duration-500">
                                    {phase.num}
                                </span>
                            </div>

                            {/* Content Block */}
                            <div className="md:col-span-7 pr-8 flex items-center gap-10">
                                <div className="hidden lg:flex w-14 h-14 bg-slate-50 border border-slate-100 rounded-2xl items-center justify-center text-slate-400 group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-700">
                                    {phase.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-brand transition-colors duration-500 tracking-tight leading-tight">
                                        {phase.title}
                                    </h3>
                                    <p className="text-slate-500 text-[16px] leading-relaxed font-normal max-w-xl">
                                        {phase.description}
                                    </p>
                                </div>
                            </div>

                            {/* Verification / Meta */}
                            <div className="md:col-span-4 flex flex-col md:items-end gap-6 h-full justify-center">
                                <div className="space-y-4 w-full md:text-right">
                                    <div className="flex flex-col md:items-end">
                                        <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-2">Technical Delivery</span>
                                        <div className="flex items-center md:justify-end gap-3 text-sm font-bold text-slate-700">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                                            {phase.deliverable}
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:items-end">
                                        <span className="text-[10px] uppercase tracking-widest font-black text-slate-400 mb-2">Timeframe</span>
                                        <span className="text-xs font-black text-brand bg-indigo-50 px-4 py-1.5 rounded-full border border-indigo-100">
                                            {phase.duration}
                                        </span>
                                    </div>
                                </div>

                                {/* Completion Status Visual */}
                                <div className="hidden md:flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                    {[1, 2, 3].map(dot => (
                                        <div key={dot} className="w-1 h-1 rounded-full bg-brand" />
                                    ))}
                                    <ShieldCheck className="w-4 h-4 text-brand ml-2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {/* Final Terminal Border */}
                    <div className="border-t border-slate-100" />
                </div>
            </div>
        </Section>
    );
}
