"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { Check } from "lucide-react";

const differentiators = [
    {
        title: "Systems Thinking, Not Just Code",
        description: "We analyze how your entire operation functions—people, processes, and existing tools—before we write a single line of code. We solve business problems, not just tickets."
    },
    {
        title: "Performance-First Architecture",
        description: "Every application we build is benchmarked for speed, load capacity, and database efficiency. We design for the 10,000th user, not just the first 10."
    },
    {
        title: "Transparent Engineering Process",
        description: "No black boxes. You get access to our project board, bi-weekly demo calls, and direct communication with the lead engineer. You own the code from day one."
    },
    {
        title: "Documentation-Driven Builds",
        description: "We don't just hand over a repo. We deliver comprehensive API documentation, system architecture diagrams, and operator manuals so your team can maintain it long-term."
    },
    {
        title: "Long-Term Scalability Focus",
        description: "We avoid quick hacks and proprietary lock-in. We use standard, open-source technologies (React, Next.js, Python, PostgreSQL) that any competent developer can pick up."
    }
];

export default function DifferentiationSection() {
    return (
        <Section className="bg-[#fffdf5] text-[#1a1a1a] py-32 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000000 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    <div className="lg:w-5/12">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.5em] font-black text-brand mb-10 block"
                        >
                            Why Choose Us
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="We Engineer Certainty into Unpredictable Projects."
                            className="text-[clamp(2.5rem,4.5vw,4rem)] font-display leading-[1.05] font-bold text-[#1a1a1a] mb-8"
                            delay={0.1}
                        />
                        <p className="text-xl text-[#606060] leading-relaxed max-w-lg mb-12">
                            Most software projects fail due to poor communication and vague requirements. We succeed by being annoyingly specific.
                        </p>
                    </div>

                    <div className="lg:w-7/12 space-y-12">
                        {differentiators.map((diff, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="flex gap-6 group"
                            >
                                <div className="mt-1 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20 group-hover:bg-brand group-hover:border-brand transition-all">
                                        <Check size={14} className="text-brand group-hover:text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-bold text-[#1a1a1a] mb-3 group-hover:text-brand transition-colors">
                                        {diff.title}
                                    </h3>
                                    <p className="text-[16px] text-[#606060] leading-relaxed max-w-xl group-hover:text-[#1a1a1a] transition-colors">
                                        {diff.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
