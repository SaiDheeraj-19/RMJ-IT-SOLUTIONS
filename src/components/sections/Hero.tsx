"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden bg-[#f5f5f5]">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
                <motion.div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                    animate={{ x: [0, 60], y: [0, 60] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] bg-brand/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[30vw] h-[30vw] bg-stone-300/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="max-w-[900px]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand mb-10 block">
                            Engineering Digital Infrastructure That Scales
                        </span>

                        <div className="mb-8">
                            <TextReveal
                                as="h1"
                                text="We Architect Scalable Digital Systems for Institutions and Growth-Focused Businesses."
                                className="text-[clamp(2.8rem,5.5vw,5rem)] font-display leading-[1] font-bold tracking-tight text-[#1a1a1a]"
                                delay={0.2}
                            />
                        </div>

                        <div className="mb-14 max-w-2xl">
                            <TextReveal
                                as="p"
                                text="We replace fragmented tools and legacy systems with engineered infrastructure — designed for performance, security, and long-term scalability."
                                className="text-[19px] font-normal text-[#505050] leading-[1.7]"
                                delay={0.8}
                            />
                        </div>

                        {/* 2 CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" id="hero-cta-primary">
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2, duration: 0.8 }}
                                    className="group px-10 py-5 bg-[#1a1a1a] text-white rounded-full text-[15px] font-semibold hover:bg-brand transition-all duration-300 shadow-xl flex items-center gap-3 overflow-hidden relative"
                                >
                                    <span className="relative z-10">Book Strategy Call</span>
                                    <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                </motion.button>
                            </Link>
                            <Link href="#approach" id="hero-cta-secondary">
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.4, duration: 0.8 }}
                                    className="px-8 py-5 bg-transparent border border-stone-300 text-[#1a1a1a] rounded-full text-[15px] font-semibold hover:border-brand hover:text-brand transition-all duration-300 flex items-center gap-3"
                                >
                                    View Our Approach
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
