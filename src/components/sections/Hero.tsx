"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-32 pb-20">
            {/* Background glow effects - Optimized for GPU */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 blur-[100px] rounded-full pointer-events-none opacity-50 transform-gpu will-change-transform" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none opacity-30 transform-gpu will-change-transform" />

            <div className="max-w-[1440px] mx-auto px-6 relative z-10 w-full text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-foreground/5 backdrop-blur-md mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                    <span className="text-xs font-medium uppercase tracking-widest text-foreground/80">Engineering Digital Infrastructure</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                    className="text-[clamp(3rem,8vw,7rem)] font-display font-semibold leading-[0.95] tracking-tight text-foreground mb-8 max-w-5xl"
                >
                    Technology Solutions for Modern Businesses
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="text-lg md:text-2xl text-foreground/50 font-medium leading-relaxed max-w-2xl mb-12"
                >
                    We replace fragmented tools with engineered infrastructure designed for institutional scale and performance.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-6"
                >
                    <Link
                        href="/contact"
                        className="btn-glow px-8 py-4 rounded-[100px] text-sm font-medium tracking-wide flex items-center"
                    >
                        Work With Us
                    </Link>
                    <Link
                        href="/services"
                        className="group flex items-center gap-2 px-6 py-4 text-sm font-medium text-foreground hover:text-brand transition-colors"
                    >
                        Explore our services
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
