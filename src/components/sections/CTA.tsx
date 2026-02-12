"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
    return (
        <Section id="cta" className="bg-white text-slate-800 py-32 relative overflow-hidden text-center z-10">
            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#eef2ff]/50 to-transparent pointer-events-none" />
            {/* Subtle tech aura */}
            <div className="absolute inset-0 opacity-[0.4]"
                style={{
                    backgroundImage: `radial-gradient(circle at center, white 0%, transparent 70%)`,
                }}
            />
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(45deg, #000000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            <div className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] bg-brand/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="max-w-[900px] mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand mb-10 block">
                        Get It Built Right
                    </span>

                    <h2 className="text-[clamp(2.8rem,5vw,5rem)] font-display leading-[1] font-bold tracking-tight mb-8">
                        Serious About Building Scalable Infrastructure?
                    </h2>

                    <p className="text-xl text-[#606060] mb-14 max-w-2xl mx-auto leading-relaxed">
                        If you&apos;re ready to move from patchwork systems to engineered architecture, let&apos;s talk. We provide a clear roadmap before you commit to a build.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/contact" className="group">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-12 py-6 bg-[#1a1a1a] text-white rounded-full text-[15px] font-bold uppercase tracking-wider flex items-center gap-3 shadow-2xl hover:bg-brand transition-all duration-300"
                            >
                                Schedule a Technical Consultation
                                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}
