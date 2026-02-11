"use client";

import { motion } from "framer-motion";

const row1 = [
    "State Education Board",
    "Global Research Institute",
    "Tech National Council",
    "AP University Network",
];

const row2 = [
    "Institutional scaling dev",
    "Strategic ops group",
    "National Digital Campus",
    "Enterprise Infrastructure",
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
                {/* Row 1 - Left */}
                <div className="flex overflow-hidden">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        className="flex whitespace-nowrap gap-12 md:gap-32 items-center"
                    >
                        {[...row1, ...row1].map((partner, i) => (
                            <span
                                key={i}
                                className="text-[4vw] md:text-[5vw] font-display font-black uppercase tracking-tighter text-[#1a1a1a]"
                            >
                                {partner}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2 - Right */}
                <div className="flex overflow-hidden">
                    <motion.div
                        initial={{ x: "-50%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                        className="flex whitespace-nowrap gap-12 md:gap-32 items-center"
                    >
                        {[...row2, ...row2].map((partner, i) => (
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
