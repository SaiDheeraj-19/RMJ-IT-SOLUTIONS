"use client";

import Section from "@/components/ui/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn, RevealLine, CountUp } from "@/components/animations/MotionEffects";
import TextReveal from "@/components/animations/TextReveal";

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
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Animated timeline progress line
    const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

    return (
        <Section className="bg-[#f5f5f5] text-[#1a1a1a] py-32 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10" ref={containerRef}>
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3 sticky top-32 h-fit">
                        <FadeIn delay={0.1}>
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block">
                                Delivery Framework
                            </span>
                        </FadeIn>
                        <TextReveal
                            as="h2"
                            text="6 phases. Gated milestones. No surprises."
                            className="text-[clamp(2.5rem,4vw,4rem)] font-display leading-[1] font-bold tracking-tight mb-8"
                        />
                        <FadeIn delay={0.4}>
                            <p className="text-lg text-[#606060] leading-relaxed mb-12">
                                Every RMJ IT engagement follows this framework. Each phase has documented deliverables, acceptance criteria, and a stakeholder review gate before we advance.
                            </p>
                        </FadeIn>

                        {/* Animated stats */}
                        <FadeIn delay={0.6}>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-4 bg-white rounded-xl border border-stone-100">
                                    <div className="text-2xl font-display font-bold text-[#1a1a1a]">
                                        <CountUp target={14} suffix=" days" />
                                    </div>
                                    <div className="text-[10px] uppercase tracking-wider text-stone-400 font-bold mt-1">Sprint Cadence</div>
                                </div>
                                <div className="p-4 bg-white rounded-xl border border-stone-100">
                                    <div className="text-2xl font-display font-bold text-[#1a1a1a]">
                                        <CountUp target={6} suffix=" gates" />
                                    </div>
                                    <div className="text-[10px] uppercase tracking-wider text-stone-400 font-bold mt-1">Review Points</div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:w-2/3">
                        <div className="relative ml-4 md:ml-0">
                            {/* Static border line */}
                            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-stone-200" />

                            {/* Animated progress line */}
                            <motion.div
                                style={{ height: lineHeight }}
                                className="absolute left-0 top-0 w-[2px] bg-brand origin-top z-10"
                            />

                            {phases.map((phase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{
                                        duration: 0.9,
                                        delay: index * 0.08,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className="relative pl-12 pb-20 last:pb-0 group"
                                >
                                    {/* Timeline Dot - animated */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + index * 0.08, type: "spring", stiffness: 300 }}
                                        className="absolute left-[-6px] top-[8px] w-[12px] h-[12px] rounded-full bg-[#f5f5f5] border-2 border-stone-300 group-hover:border-brand group-hover:bg-brand group-hover:shadow-[0_0_12px_rgba(129,103,41,0.4)] transition-all duration-500 z-10"
                                    />

                                    <div className="flex flex-col md:flex-row gap-4 md:items-baseline">
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + index * 0.08 }}
                                            className="text-[11px] font-black text-stone-400 uppercase tracking-widest min-w-[30px] group-hover:text-brand transition-colors"
                                        >
                                            {phase.num}
                                        </motion.span>
                                        <div className="flex-1">
                                            <div className="flex items-baseline justify-between mb-4">
                                                <h3 className="text-2xl font-display font-bold text-[#1a1a1a] group-hover:text-brand transition-colors duration-300">
                                                    {phase.title}
                                                </h3>
                                                <motion.span
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.5 + index * 0.08 }}
                                                    className="hidden md:block text-[10px] uppercase tracking-widest font-bold text-stone-400 bg-stone-100 px-3 py-1 rounded-full group-hover:bg-brand/10 group-hover:text-brand transition-colors"
                                                >
                                                    {phase.duration}
                                                </motion.span>
                                            </div>
                                            <p className="text-[#606060] text-lg leading-relaxed max-w-xl">
                                                {phase.description}
                                            </p>
                                            <RevealLine className="mt-6 opacity-30" delay={0.6 + index * 0.08} />
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
