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

            <div className="max-w-[1400px] mx-auto w-full relative z-10 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-[800px]"
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                        >
                            {`// ESTABLISHED CERTAINTY`}
                        </motion.span>

                        <div className="mb-8">
                            <TextReveal
                                as="h1"
                                text="Engineering digital infrastructure that institutions trust blindly."
                                className="text-[clamp(2.8rem,5vw,5.5rem)] font-display leading-[0.95] font-bold tracking-tighter text-slate-900"
                                delay={0.2}
                            />
                        </div>

                        <div className="mb-14 max-w-xl">
                            <TextReveal
                                as="p"
                                text="We architect systems where failure is mathematically impossible. We replace fragmented tools with high-trust engineering, designed for absolute institutional reliability."
                                className="text-xl font-medium text-slate-500 leading-relaxed"
                                delay={0.8}
                            />
                        </div>

                        {/* 2 CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/contact" id="hero-cta-primary">
                                <motion.button
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group px-12 py-6 bg-slate-900 text-white rounded-full text-xs uppercase tracking-[0.3em] font-black hover:bg-brand transition-all duration-500 shadow-2xl shadow-slate-900/10 flex items-center gap-4"
                                >
                                    Initiate Consultation
                                </motion.button>
                            </Link>
                            <Link href="#approach" id="hero-cta-secondary">
                                <motion.button
                                    whileHover={{ scale: 1.05, x: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-6 bg-white border border-slate-200 text-slate-900 rounded-full text-xs uppercase tracking-[0.3em] font-black hover:border-brand hover:text-brand transition-all duration-500 flex items-center gap-4"
                                >
                                    The Framework
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                        className="hidden lg:block relative h-[650px] w-full perspective-1000"
                    >
                        <motion.div
                            animate={{
                                y: [-10, 10, -10],
                                rotate: [-1, 1, -1]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-full relative"
                        >
                            <Image
                                src="/images/company-cuate.svg"
                                alt="Digital Infrastructure Illustration"
                                fill
                                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
