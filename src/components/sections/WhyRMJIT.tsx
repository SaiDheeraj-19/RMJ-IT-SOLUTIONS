"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import HorizontalLine from "@/components/ui/HorizontalLine";

const differentiators = [
    { title: "Institutional DNA", desc: "We operate with an understanding of complex bureaucratic hierarchies and compliance mandates. We don't build features; we build organizational stability." },
    { title: "The 24-Hour Pulse", desc: "Our global operation centers provide 24/7 monitoring. Your mission-critical infrastructure is managed and protected while the world sleeps." },
    { title: "Security-First Engineering", desc: "Security is the foundation, not an add-on. Every line of code is architected for SOC2 and ISO 27001 readiness from Day 1." },
    { title: "Fractional Technical Leadership", desc: "Every engagement is steered by a senior architect with 15+ years of institutional experience, ensuring strategy aligns with ground-level code." },
    { title: "Gated Milestone Delivery", desc: "We follow a precision-based delivery model. Our 'Execution over Innovation' philosophy ensures we hit every hard deployment deadline without fail." }
];

export default function WhyRMJIT() {
    return (
        <Section className="bg-[#f5f5f5]">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-24 mb-16">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-12 block"
                        >
                            The Advantage
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="Confidence comes from clarity."
                            className="text-[clamp(3rem,6vw,5rem)] font-display font-bold mb-8 leading-[1] tracking-tight text-[#1a1a1a]"
                        />
                        <p className="text-xl text-[#606060] leading-relaxed max-w-lg">
                            In a market flooded with generic solutions, we offer precision. We don't just write code; we solve institutional problems.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 border-t border-stone-200 pt-16">
                    {differentiators.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="w-12 h-[2px] bg-brand mb-8 group-hover:w-24 transition-all duration-500 ease-out" />
                            <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-6 tracking-tight group-hover:text-brand transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-lg text-[#606060] leading-relaxed max-w-md">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 pt-16 border-t border-stone-200">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 mb-12 block">
                        Enterprise Stack
                    </span>
                    <div className="flex flex-wrap gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {["AWS", "Google Cloud", "Kubernetes", "Next.js", "PostgreSQL", "React Native", "TensorFlow", "Redis"].map((tech) => (
                            <span key={tech} className="text-xl font-display font-bold text-[#1a1a1a]">{tech}</span>
                        ))}
                    </div>
                </div>
                <div className="mt-32 pt-16 border-t border-stone-200 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-4">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 mb-12 block">
                            Technical Governance
                        </span>
                        <h3 className="text-3xl font-display font-bold text-[#1a1a1a] leading-tight">
                            Every engagement is steered by senior architectural oversight.
                        </h3>
                    </div>
                    <div className="lg:col-span-8">
                        <p className="text-xl text-[#606060] leading-relaxed italic border-l-4 border-brand pl-8">
                            &quot;Our mission is to eliminate technical risk for the world&apos;s most critical institutions. We don&apos;t just build systems; we build organizational continuity. RMJ IT exists to ensure that your digital backbone is as resilient as your vision.&quot;
                        </p>
                        <div className="mt-8 pl-8">
                            <span className="block text-lg font-bold text-[#1a1a1a]">Lead Architect</span>
                            <span className="text-sm text-stone-400 uppercase tracking-widest font-bold">Governance & Strategy</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
