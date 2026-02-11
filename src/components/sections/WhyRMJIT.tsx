"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import HorizontalLine from "@/components/ui/HorizontalLine";

const differentiators = [
    { title: "Institutional DNA", desc: "We understand the nuanced hierarchies, compliance requirements, and operational cadences of large-scale institutions." },
    { title: "Operational Discipline", desc: "Our code is clean. Our documentation is exhaustive. Our rollouts are military-grade. We do not tolerate chaos." },
    { title: "Scale Without Ceiling", desc: "Architectures designed from Day 1 to handle sudden surges in user load without degradation." },
    { title: "Long-Horizon Partnership", desc: "We are not a vendor for a project. We are a partner for a program. We build for the next decade." }
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
            </div>
        </Section>
    );
}
