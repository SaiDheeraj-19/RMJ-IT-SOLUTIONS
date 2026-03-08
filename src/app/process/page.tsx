"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import {
    Search,
    Map,
    PenTool,
    Code2,
    FileSearch,
    Rocket,
    CheckCircle2
} from "lucide-react";

const engineeringPhases = [
    {
        title: "Strategic Discovery",
        icon: Search,
        desc: "We analyze institutional workflows, current bottlenecks, and future scalability requirements to define a technically viable roadmap.",
        deliverables: ["Product Strategy Doc", "Technical Audit", "User Research Summary"]
    },
    {
        title: "Architectural Planning",
        icon: Map,
        desc: "Selecting the optimal technology stack and designing modular system architectures that ensure long-term stability and expansion.",
        deliverables: ["Tech Stack Selection", "Database Schema", "Architecture Diagram"]
    },
    {
        title: "Experience Design",
        icon: PenTool,
        desc: "Translating architectural requirements into intuitive, high-fidelity UI systems that prioritize user efficiency and brand alignment.",
        deliverables: ["Visual Design Systems", "High-Fi Prototypes", "UX Workflows"]
    },
    {
        title: "Agile Engineering",
        icon: Code2,
        desc: "Rapid delivery of high-quality, clean code through iterative cycles. We prioritize performance, security, and enterprise standards.",
        deliverables: ["Modular Source Code", "API Documentation", "Integrations Setup"]
    },
    {
        title: "Quality Assurance",
        icon: FileSearch,
        desc: "Rigorous automated and manual testing cycles to ensure zero-defect delivery and total system integrity under load.",
        deliverables: ["Test Case Reports", "Security Audit", "UAT Sign-off"]
    },
    {
        title: "Scale & Deployment",
        icon: Rocket,
        desc: "Seamless production launch supported by robust CI/CD pipelines and long-term technical maintenance frameworks.",
        deliverables: ["Deployment Logs", "Maintenance Plan", "Training Documentation"]
    }
];

export default function ProcessPage() {
    return (
        <div className="pt-32 pb-20 selection:bg-brand/10">
            {/* Header */}
            <section className="bg-white px-10 md:px-20 pt-10">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="max-w-4xl space-y-12 mb-32">
                        <div className="space-y-8">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                            >
                                {"// THE RMJ METHODOLOGY"}
                            </motion.span>
                            <h1 className="text-[clamp(3.5rem,8vw,6rem)] font-display font-bold text-foreground leading-[0.9] tracking-tighter">
                                Engineering Consistency <br /> for Professional Results.
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-foreground/70 font-medium leading-relaxed max-w-2xl">
                            Our engineering lifecycle is designed to eliminate uncertainty. We follow a disciplined, 6-phase methodology from initial research to final production scale.
                        </p>
                    </div>

                    {/* Timeline Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {engineeringPhases.map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="group relative bg-surface rounded-[4rem] p-12 border border-slate-100 hover:border-brand/20 transition-all duration-700"
                            >
                                <div className="space-y-10">
                                    <div className="flex items-center justify-between">
                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-foreground/70 group-hover:bg-brand group-hover:text-foreground transition-all duration-500 shadow-sm border border-slate-50">
                                            <phase.icon size={28} />
                                        </div>
                                        <span className="text-4xl font-display font-black text-foreground/70/50 group-hover:text-brand/10 transition-colors">
                                            {(i + 1).toString().padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-display font-bold text-foreground">
                                            {phase.title}
                                        </h3>
                                        <p className="text-base text-foreground/70 font-medium leading-relaxed">
                                            {phase.desc}
                                        </p>
                                    </div>
                                    <div className="pt-8 border-t border-slate-100">
                                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-foreground/70 mb-6">Phase Deliverables</h4>
                                        <ul className="space-y-3">
                                            {phase.deliverables.map((item, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-xs font-bold text-foreground/70">
                                                    <CheckCircle2 size={14} className="text-brand" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Commitment Section */}
            <Section className="bg-white py-40">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-24">
                        <div className="space-y-12">
                            <h2 className="text-backgroundxl lg:text-7xl font-display font-bold text-foreground tracking-tighter leading-[0.9]">
                                Committed to <br /> Engineering Integrity.
                            </h2>
                            <p className="text-xl text-foreground/70 font-medium leading-relaxed">
                                We maintain a &quot;zero-debt&quot; development philosophy. Every module we deploy is documented, tested, and built on a foundation of clean code principles that allow your platform to grow without technical friction.
                            </p>
                        </div>
                        <div className="bg-surface0 rounded-[4rem] p-16 text-foreground space-y-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[100px] rounded-full group-hover:bg-brand/40 transition-colors" />
                            <div className="relative z-10 space-y-8">
                                <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-brand font-mono">{"// TECHNICAL STANDARDS"}</h4>
                                <div className="grid grid-cols-1 gap-8">
                                    {[
                                        "Automated CI/CD Integration",
                                        "Performance Benchmark compliance",
                                        "Enterprise Security standards (SOC2 compliant)",
                                        "Total Transparent communication"
                                    ].map((standard, i) => (
                                        <div key={i} className="flex items-center gap-6 group/item">
                                            <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-border flex items-center justify-center text-brand font-black text-sm">
                                                {i + 1}
                                            </div>
                                            <span className="text-lg font-bold tracking-tight">{standard}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
