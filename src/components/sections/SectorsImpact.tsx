"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { ShieldCheck, Timer, FileCode, Server, Zap } from "lucide-react";

const phases = [
    {
        num: "01",
        icon: <Timer className="w-5 h-5" />,
        title: "Requirement Analysis",
        description: "We analyze business needs and identify system requirements, ensuring a clear understanding of the project goals and technical scope.",
        duration: "Strategic Audit",
        deliverable: "System Requirements Matrix"
    },
    {
        num: "02",
        icon: <FileCode className="w-5 h-5" />,
        title: "System Design",
        description: "Our experts design the architecture and user experience, creating detailed blueprints for a scalable and intuitive digital solution.",
        duration: "Architectural Gating",
        deliverable: "Tech Specification & UI/UX"
    },
    {
        num: "03",
        icon: <Zap className="w-5 h-5" />,
        title: "Development",
        description: "Our development team builds secure and scalable applications using modern technologies and industry best practices.",
        duration: "Engineering Sprint",
        deliverable: "High-Integrity Codebase"
    },
    {
        num: "04",
        icon: <ShieldCheck className="w-5 h-5" />,
        title: "Testing",
        description: "All systems undergo thorough testing, including security audits and performance stress tests, to ensure maximum reliability.",
        duration: "Assurance Gating",
        deliverable: "Quality Assurance Report"
    },
    {
        num: "05",
        icon: <Server className="w-5 h-5" />,
        title: "Deployment and Support",
        description: "We deploy solutions and provide continuous support to ensure long-term success, including system updates and monitoring.",
        duration: "Strategic Rollout",
        deliverable: "Live Infrastructure & Support"
    }
];

export default function ProcessTimeline() {
    return (
        <Section className="bg-white text-[#0f172a] pt-40 pb-12 border-t border-slate-100">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                        >
                            {`// STRATEGIC ORCHESTRATION FRAMEWORK`}
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="Architecture Defined by Precision."
                            className="text-[clamp(2.5rem,5vw,5rem)] font-display leading-[0.9] font-bold tracking-tighter text-foreground"
                            delay={0.1}
                        />
                    </div>
                    <div className="max-w-md pb-4">
                        <p className="text-xl text-foreground/70 font-medium leading-relaxed">
                            We have replaced the uncertainties of standard development with a gated, milestone-driven delivery protocol. We don&apos;t just build software; we engineer institutional certainty.
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
                                <span className="text-sm font-black font-mono text-foreground/70 group-hover:text-brand transition-colors duration-500">
                                    {phase.num}
                                </span>
                            </div>

                            {/* Content Block */}
                            <div className="md:col-span-7 pr-8 flex items-center gap-10">
                                <div className="hidden lg:flex w-14 h-14 bg-surface border border-slate-100 rounded-2xl items-center justify-center text-foreground/70 group-hover:bg-brand group-hover:text-foreground group-hover:border-brand transition-all duration-700">
                                    {phase.icon}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-display font-bold text-foreground group-hover:text-brand transition-colors duration-500 tracking-tight leading-tight">
                                        {phase.title}
                                    </h3>
                                    <p className="text-foreground/70 text-[16px] leading-relaxed font-normal max-w-xl">
                                        {phase.description}
                                    </p>
                                </div>
                            </div>

                            {/* Verification / Meta */}
                            <div className="md:col-span-4 flex flex-col md:items-end gap-6 h-full justify-center">
                                <div className="space-y-4 w-full md:text-right">
                                    <div className="flex flex-col md:items-end">
                                        <span className="text-[10px] uppercase tracking-widest font-black text-foreground/70 mb-2">Technical Delivery</span>
                                        <div className="flex items-center md:justify-end gap-3 text-sm font-bold text-foreground/70">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                                            {phase.deliverable}
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:items-end">
                                        <span className="text-[10px] uppercase tracking-widest font-black text-foreground/70 mb-2">Timeframe</span>
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
