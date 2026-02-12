"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";

const timeline = [
    {
        phase: "Phase 1: Discovery",
        description: "We audit your existing systems, clarify requirements, and define measurable outcomes before any code is written.",
        duration: "2 Weeks"
    },
    {
        phase: "Phase 2: Strategy & Design",
        description: "System architecture, database schema, API contracts, and UX flows are finalized. You approve the blueprint.",
        duration: "2-3 Weeks"
    },
    {
        phase: "Phase 3: Implementation",
        description: "Agile sprints with bi-weekly demos. Code is built, reviewed, and tested iteratively. You see progress every 14 days.",
        duration: "8-16 Weeks"
    },
    {
        phase: "Phase 4: Testing & QA",
        description: "Rigorous stress testing, security vulnerability scanning, and cross-browser validation. Nothing goes live without passing QA.",
        duration: "2-3 Weeks"
    },
    {
        phase: "Phase 5: Deployment",
        description: "Zero-downtime deployment to production environment. Monitoring tools are configured for real-time alerts.",
        duration: "1 Week"
    },
    {
        phase: "Phase 6: Support & Scale",
        description: "30-day stabilization period included. We monitor performance, fix edge cases, and ensure smooth adoption.",
        duration: "Ongoing"
    }
];

export default function ProcessTimeline() {
    return (
        <Section className="bg-[#f5f5f5] text-[#1a1a1a] relative overflow-hidden py-32">
            <div className="max-w-[1200px] mx-auto">
                <div className="mb-24 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[10px] uppercase tracking-[0.5em] font-black text-brand mb-10 block"
                    >
                        How We Work
                    </motion.span>
                    <TextReveal
                        as="h2"
                        text="A Predictable Path to Production."
                        className="text-[clamp(2.5rem,5vw,4.5rem)] font-display leading-[1.05] font-bold tracking-tight text-[#1a1a1a]"
                        delay={0.1}
                    />
                </div>

                <div className="relative border-l-2 border-stone-200 ml-6 md:ml-[50%] md:translate-x-[-1px]">
                    {timeline.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className={`mb-16 last:mb-0 relative md:w-[calc(50%+20px)] ${i % 2 === 0 ? "md:ml-auto md:pl-16 pl-12" : "md:mr-auto md:pr-16 md:text-right pl-12 md:pl-0"
                                }`}
                        >
                            {/* Dot on line */}
                            <div className="absolute left-[-9px] md:left-auto md:right-auto md:top-[6px] top-[6px] w-[16px] h-[16px] rounded-full bg-white border-4 border-brand shadow-[0_0_0_4px_rgba(255,255,255,1)] z-10 md:absolute md:left-0 md:-translate-x-[50%]" />

                            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm hover:shadow-lg hover:border-brand/20 transition-all duration-300 relative group">
                                <span className="absolute top-4 right-4 text-[10px] font-bold text-brand bg-brand/5 px-2 py-1 rounded-md uppercase tracking-wider">
                                    {step.duration}
                                </span>
                                <h3 className="text-xl font-display font-bold text-[#1a1a1a] mb-3 group-hover:text-brand transition-colors">
                                    {step.phase}
                                </h3>
                                <p className="text-[#606060] text-[15px] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
