"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="bg-brand text-[#1a1a1a] py-40 md:py-60 relative overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Dynamic background texture */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-[-50%] left-[-20%] w-[100vw] h-[100vw] bg-white/20 rounded-full blur-[200px] animate-pulse" />

            <div className="max-w-[1400px] mx-auto z-10 px-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[11px] uppercase tracking-[0.4em] font-black text-black/40 mb-12 block">
                        Free Technical Audit
                    </span>

                    <Link href="/contact" className="group block">
                        <h2 className="text-[clamp(3.5rem,10vw,8rem)] font-display font-medium leading-[0.9] tracking-tighter mb-8 text-black group-hover:scale-[1.01] transition-transform duration-700 ease-out max-w-6xl mx-auto">
                            Get your systems <br /> <span className="italic text-white font-bold">assessed in 14 days.</span>
                        </h2>
                        <p className="text-black/50 text-xl mb-16 max-w-lg mx-auto">
                            We&apos;ll audit your infrastructure, identify risks, and deliver a prioritized technical roadmap — at no cost.
                        </p>

                        <div className="inline-flex items-center gap-4 px-12 py-6 bg-[#1a1a1a] text-white rounded-full text-sm uppercase tracking-widest font-black hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 shadow-2xl group-hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)]">
                            Request a Free Audit
                            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
