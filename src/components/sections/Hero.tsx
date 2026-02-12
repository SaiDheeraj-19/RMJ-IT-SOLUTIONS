"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden bg-white">
            {/* High-End Aura Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.4]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 30%, #eef2ff 0%, transparent 40%), radial-gradient(circle at 80% 70%, #f0f9ff 0%, transparent 40%)`,
                    }}
                />
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                        backgroundSize: '80px 80px',
                    }}
                />
                {/* Floating Soft Auras */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[10%] w-[50vw] h-[50vw] bg-brand/10 rounded-full blur-[120px] pointer-events-none"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.05, 0.15, 0.05],
                        x: [0, -40, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none"
                />
            </div>

            <div className="max-w-[1400px] mx-auto w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-[800px]"
                    >
                        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand mb-10 block">
                            Engineering Digital Infrastructure That Scales
                        </span>

                        <div className="mb-8">
                            <TextReveal
                                as="h1"
                                text="We Architect Scalable Digital Systems for Institutions and Growth-Focused Businesses."
                                className="text-[clamp(2.8rem,4.5vw,5rem)] font-display leading-[1] font-bold tracking-tight text-[#1a1a1a]"
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

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 30 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="hidden lg:block relative h-[600px] w-full"
                    >
                        <Image
                            src="/images/company-cuate.svg"
                            alt="Digital Infrastructure Illustration"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
