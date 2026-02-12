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
        <Section id="approach" className="bg-[#f1f5f9]">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-24 max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[10px] uppercase tracking-[0.5em] font-black text-brand mb-10 block"
                    >
                        Our Engineering Approach
                    </motion.span>
                    <TextReveal
                        as="h2"
                        text="Four stages. Structured delivery. No surprises."
                        className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-display leading-[1.05] font-bold tracking-tight text-[#1a1a1a]"
                        delay={0.1}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {stages.map((stage, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.7 }}
                            className="group relative bg-white border border-stone-100 rounded-2xl p-10 hover:border-brand/20 hover:shadow-lg transition-all duration-500"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-[#fafafa] border border-stone-100 rounded-xl group-hover:bg-brand/5 group-hover:border-brand/20 transition-all">
                                        <stage.icon size={22} className="text-stone-400 group-hover:text-brand transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-[#1a1a1a] group-hover:text-brand transition-colors">
                                        {stage.title}
                                    </h3>
                                </div>
                                <span className="text-[11px] font-black text-stone-300 tracking-widest mt-1">
                                    {stage.num}
                                </span>
                            </div>

                            <p className="text-[#606060] text-[16px] leading-relaxed mb-8">
                                {stage.description}
                            </p>

                            <ul className="space-y-3">
                                {stage.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-[15px] text-[#505050]">
                                        <span className="w-1 h-1 rounded-full bg-brand mt-2.5 shrink-0" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand group-hover:w-full transition-all duration-700 ease-out rounded-b-2xl" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
