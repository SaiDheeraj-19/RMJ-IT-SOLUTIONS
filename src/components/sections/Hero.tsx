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
                            {`// GLOBAL INSTITUTIONAL STANDARDS`}
                        </motion.span>

                        <div className="mb-8">
                            <TextReveal
                                as="h1"
                                text="Defining the Standard for Digital Sovereignty."
                                className="text-[clamp(2.8rem,5.5vw,5.5rem)] font-display leading-[0.9] font-bold tracking-tighter text-slate-900"
                                delay={0.2}
                            />
                        </div>

                        <div className="mb-14 max-w-xl">
                            <TextReveal
                                as="p"
                                text="We engineer high-stakes digital infrastructure for the world's most demanding institutions. Where legacy firms offer 'software,' we deliver architectural certainty and structural resilience."
                                className="text-xl font-medium text-slate-500 leading-relaxed"
                                delay={0.8}
                            />
                        </div>

                        {/* 2 CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Link href="/contact" id="hero-cta-primary">
                                <motion.button
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group px-12 py-6 bg-slate-900 text-white rounded-full text-[11px] uppercase tracking-[0.4em] font-black hover:bg-brand transition-all duration-500 shadow-2xl shadow-slate-900/10 flex items-center gap-4"
                                >
                                    Initiate Structural Audit
                                </motion.button>
                            </Link>
                            <Link href="#approach" id="hero-cta-secondary">
                                <motion.button
                                    whileHover={{ scale: 1.02, x: -5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-10 py-6 bg-white border border-slate-200 text-slate-900 rounded-full text-[11px] uppercase tracking-[0.4em] font-black hover:border-brand hover:text-brand transition-all duration-500 flex items-center gap-4"
                                >
                                    The Core Philosophy
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>

                    <div className="hidden lg:block relative h-[700px] w-full perspective-2000">
                        <motion.div
                            initial={{ opacity: 0, rotateY: 30, scale: 0.8, x: 100 }}
                            animate={{ opacity: 1, rotateY: 5, scale: 1, x: 0 }}
                            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                            className="w-full h-full relative"
                        >
                            {/* Abstract Geometric Elements - Replacing standard illustration with 'Enterprise Luxury' visuals */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-[500px] h-[500px]">
                                    {/* Layered Architectural Elements */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 border-[0.5px] border-slate-200 rounded-[4rem] opacity-20"
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-4 border-[0.5px] border-brand/20 rounded-[3.5rem] opacity-30"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-[300px] h-[300px] relative">
                                            <Image
                                                src="/images/company-cuate.svg"
                                                alt="Institutional Engineering"
                                                fill
                                                className="object-contain filter grayscale opacity-80 contrast-125"
                                                priority
                                            />
                                        </div>
                                    </div>
                                    {/* Floating Data Points */}
                                    {[0, 1, 2, 3].map((i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                y: [-20, 20, -20],
                                                opacity: [0.3, 0.6, 0.3]
                                            }}
                                            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                                            className={`absolute w-3 h-3 bg-brand rounded-full blur-[4px]`}
                                            style={{
                                                top: `${20 + i * 20}%`,
                                                left: `${10 + i * 25}%`
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
