"use client";

import { motion } from "framer-motion";

const clientTypes = [
    "University Campus Systems",
    "Government Citizen Portals",
    "Enterprise Operations Platforms",
    "Multi-Campus ERP Deployments",
    "Research Institution Networks",
];

const outcomes = [
    "10,000+ Concurrent Users Handled",
    "Sub-200ms Response Times",
    "Zero-Downtime Migrations",
    "SOC2-Aligned Security",
    "6-Phase Gated Delivery",
];

export default function SocialProof() {
    return (
        <section className="py-24 bg-[#f5f5f5] overflow-hidden border-y border-stone-100">
            <div className="max-w-[1400px] mx-auto px-10 md:px-20 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand mb-4 block">
                        Network Capacity
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] tracking-tighter">
                        Intervening for the most <span className="italic text-brand">critical operations.</span>
                    </h2>
                </motion.div>
            </div>

            <div className="flex flex-col gap-8 md:gap-12">
                {/* Row 1 - Client Types */}
                <div className="flex overflow-hidden">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        className="flex whitespace-nowrap gap-12 md:gap-32 items-center"
                    >
                        {[...clientTypes, ...clientTypes].map((partner, i) => (
                            <span
                                key={i}
                                className="text-[4vw] md:text-[5vw] font-display font-black uppercase tracking-tighter text-[#1a1a1a]"
                            >
                                {partner}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - Outcomes */}
                <div className="flex overflow-hidden">
                    <motion.div
                        initial={{ x: "-50%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                        className="flex whitespace-nowrap gap-12 md:gap-32 items-center"
                    >
                        {[...outcomes, ...outcomes].map((partner, i) => (
                            <span
                                key={i}
                                className="text-[4vw] md:text-[5vw] font-display font-black uppercase tracking-tighter text-[#1a1a1a]/40"
                            >
                                {partner}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
