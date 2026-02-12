"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { Search, PenTool, Code, Gauge } from "lucide-react";

const stages = [
    {
        num: "01",
        icon: Search,
        title: "Diagnose",
        description: "We audit your existing systems, map data flows, identify bottlenecks, and document the gap between your current state and where your operations need to be.",
        bullets: [
            "Infrastructure and architecture audit",
            "Stakeholder pain-point interviews",
            "Technical debt and risk assessment"
        ]
    },
    {
        num: "02",
        icon: PenTool,
        title: "Architect",
        description: "Before writing code, we design the system blueprint — database schema, API contracts, security model, and deployment topology. You approve the architecture before build begins.",
        bullets: [
            "System architecture and data modeling",
            "Technology stack selection with rationale",
            "Security and compliance framework design"
        ]
    },
    {
        num: "03",
        icon: Code,
        title: "Build",
        description: "Agile development with bi-weekly demos. You see working software every 14 days. CI/CD pipelines, automated testing, and code reviews are active from Sprint 1.",
        bullets: [
            "Milestone-gated sprints with stakeholder review",
            "Automated testing and CI/CD from day one",
            "Documentation-driven development process"
        ]
    },
    {
        num: "04",
        icon: Gauge,
        title: "Optimize",
        description: "Post-deployment performance tuning, monitoring setup, and iterative improvement based on real usage data. We don't ship and disappear.",
        bullets: [
            "Load testing and performance benchmarking",
            "Real-time monitoring and alerting setup",
            "Iterative optimization based on production data"
        ]
    }
];

export default function SolutionSection() {
    return (
        <Section id="approach" className="bg-white py-32 relative overflow-hidden">
            {/* Soft architectural accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f8fafc] -skew-x-12 translate-x-32 pointer-events-none" />
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block font-mono"
                        >
                            {`// METHODICAL EXCELLENCE`}
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="The Engineering Roadmap."
                            className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-[#0f172a] leading-[1] tracking-tighter"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stages.map((stage, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-[#f1f5f9]/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-slate-200/50 hover:bg-white transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-500/5 group relative"
                        >
                            <div className="flex items-start justify-between mb-10">
                                <div className="p-3 bg-white border border-slate-100 rounded-xl group-hover:bg-brand/10 group-hover:border-brand/20 transition-all duration-500">
                                    <stage.icon size={22} className="text-slate-400 group-hover:text-brand transition-colors" />
                                </div>
                                <span className="text-[11px] font-black font-mono text-slate-300 tracking-widest group-hover:text-brand/30 transition-colors">
                                    {stage.num} {`//`}
                                </span>
                            </div>

                            <h3 className="text-2xl font-display font-bold text-[#0f172a] mb-6 tracking-tight group-hover:text-brand transition-colors duration-500">
                                {stage.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed font-medium text-sm mb-8">
                                {stage.description}
                            </p>

                            <ul className="space-y-3">
                                {stage.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-[13px] text-slate-500 font-medium">
                                        <span className="w-1 h-1 rounded-full bg-slate-300 mt-2 shrink-0 group-hover:bg-brand transition-colors" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand group-hover:w-full transition-all duration-700 ease-out" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
