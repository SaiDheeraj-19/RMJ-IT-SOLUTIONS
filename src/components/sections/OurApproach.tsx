"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";

const phases = [
    {
        num: "01",
        title: "Discover & Audit",
        description: "We begin by mapping your existing institutional landscape, identifying bottlenecks, and defining clear operational KPIs."
    },
    {
        num: "02",
        title: "Architectural Design",
        description: "Designing a resilient system blueprint that balances immediate performance gains with long-term scalability."
    },
    {
        num: "03",
        title: "Capacity Enablement",
        description: "Before code deployment, we prepare your stakeholders. We build the human infrastructure needed to support the digital one."
    },
    {
        num: "04",
        title: "Phased Implementation",
        description: "Agile rollout of new systems with rigorous testing protocols to ensure zero disruption to ongoing academic or corporate activities."
    },
    {
        num: "05",
        title: "Operational Oversight",
        description: "We don't just hand over keys. We provide hands-on management and stabilization during the critical post-launch window."
    }
];

export default function OurApproach() {
    return (
        <Section className="bg-[#f5f5f5] text-[#1a1a1a] py-32 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3 sticky top-32 h-fit">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block">
                            The Framework
                        </span>
                        <h2 className="text-[clamp(2.5rem,4vw,4rem)] font-display leading-[1] font-bold tracking-tight mb-8">
                            Control the complexity.
                        </h2>
                        <p className="text-lg text-[#606060] leading-relaxed mb-12">
                            We use a proven execution framework to minimize risk and guarantee delivery. This is how we ensure that large-scale programs don't just launch—they land.
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
                                        <div>
                                            <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4 group-hover:text-brand transition-colors duration-300">
                                                {phase.title}
                                            </h3>
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
