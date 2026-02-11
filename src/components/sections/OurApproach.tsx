"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

const phases = [
    {
        num: "01",
        title: "Discovery & System Audit",
        description: "We map your existing infrastructure, interview stakeholders, document pain points, and define measurable success criteria. Deliverable: a written System Audit Report with ROI projections.",
        duration: "2 weeks"
    },
    {
        num: "02",
        title: "Architecture & Technical Design",
        description: "We design the system blueprint — database schema, API contracts, security model, and deployment topology. You review and approve before a single line of code is written.",
        duration: "2-3 weeks"
    },
    {
        num: "03",
        title: "Build & Development",
        description: "Agile sprints with bi-weekly demos. You see working software every 14 days, not a finished product after 6 months. Code reviews, automated testing, and CI/CD are active from Sprint 1.",
        duration: "8-16 weeks"
    },
    {
        num: "04",
        title: "QA & Security Testing",
        description: "Load testing at 2x expected traffic, penetration testing, accessibility compliance (WCAG 2.1), and cross-browser validation. We document every test case and result.",
        duration: "2-3 weeks"
    },
    {
        num: "05",
        title: "Deploy & Migrate",
        description: "Zero-downtime deployment with automated rollback capability. If it's a migration, we run parallel systems for 48-72 hours before full cutover. Data integrity is verified at every checkpoint.",
        duration: "1-2 weeks"
    },
    {
        num: "06",
        title: "Scale & Stabilize",
        description: "Post-launch monitoring for 30 days. We track performance metrics, fix edge cases, and optimize based on real user data. Optional ongoing maintenance via monthly retainer.",
        duration: "Ongoing"
    }
];

export default function OurApproach() {
    return (
        <Section className="bg-[#f5f5f5] text-[#1a1a1a] py-32 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3 sticky top-32 h-fit">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block">
                            Delivery Framework
                        </span>
                        <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-display leading-[1] font-bold tracking-tight mb-8">
                            6 phases. Gated milestones. No surprises.
                        </h2>
                        <p className="text-lg text-[#606060] leading-relaxed mb-12">
                            Every RMJ IT engagement follows this framework. Each phase has documented deliverables, acceptance criteria, and a stakeholder review gate before we advance.
                        </p>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="relative border-l border-stone-300 ml-4 md:ml-0">
                            {phases.map((phase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="relative pl-12 pb-20 last:pb-0 group"
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-[-5px] top-[8px] w-[9px] h-[9px] rounded-full bg-[#f5f5f5] border border-stone-400 group-hover:border-brand group-hover:bg-brand transition-colors duration-300 z-10" />

                                    <div className="flex flex-col md:flex-row gap-4 md:items-baseline">
                                        <span className="text-[11px] font-black text-stone-400 uppercase tracking-widest min-w-[30px] group-hover:text-brand transition-colors">
                                            {phase.num}
                                        </span>
                                        <div className="flex-1">
                                            <div className="flex items-baseline justify-between mb-4">
                                                <h3 className="text-2xl font-display font-bold text-[#1a1a1a] group-hover:text-brand transition-colors duration-300">
                                                    {phase.title}
                                                </h3>
                                                <span className="hidden md:block text-[10px] uppercase tracking-widest font-bold text-stone-400 bg-stone-100 px-3 py-1 rounded-full">
                                                    {phase.duration}
                                                </span>
                                            </div>
                                            <p className="text-[#606060] text-lg leading-relaxed max-w-xl">
                                                {phase.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
