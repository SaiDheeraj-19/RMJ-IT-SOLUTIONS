"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Link from "next/link";
import { Shield, ChevronRight, Activity, Globe } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const yVal = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacityVal = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[110vh] flex items-center overflow-hidden bg-white">
            {/* The Institutional Canvas - Background System */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Minimalist Architectural Grid */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)`,
                        backgroundSize: 'clamp(50px, 8vw, 120px) clamp(50px, 8vw, 120px)',
                    }}
                />

                {/* Premium Gradient Auras */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-brand/5 blur-[150px] rounded-full"
                />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1.1, 1, 1.1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-50/50 blur-[120px] rounded-full"
                />
            </div>

            <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 pt-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    {/* Left: Strategic Content */}
                    <div className="lg:col-span-7 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-10"
                        >
                            <div className="flex items-center gap-4">
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: 40 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-[1px] bg-brand hidden sm:block"
                                />
                                <span className="text-[10px] uppercase tracking-[0.6em] font-black text-brand font-mono">
                                    {`GLOBAL INSTITUTIONAL STANDARDS`}
                                </span>
                            </div>

                            <div className="space-y-6">
                                <TextReveal
                                    as="h1"
                                    text="Defining the Standard for Digital Sovereignty."
                                    className="text-[clamp(3.5rem,7vw,6.5rem)] font-display leading-[0.88] font-bold tracking-tighter text-slate-900"
                                    delay={0.1}
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    className="max-w-xl"
                                >
                                    <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                                        We engineer high-stakes digital infrastructure where failure is not a metric. We deliver <span className="text-brand">architectural certainty</span> for the world&apos;s most demanding institutions.
                                    </p>
                                </motion.div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-8 pt-8">
                                <Link href="/contact" className="group">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="relative px-12 py-6 bg-slate-900 text-white rounded-full overflow-hidden shadow-2xl shadow-slate-900/20"
                                    >
                                        <div className="relative z-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] font-black">
                                            Initiate Structural Audit
                                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                        <motion.div
                                            className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                                        />
                                    </motion.button>
                                </Link>

                                <Link href="#approach" className="group flex items-center gap-6 px-4">
                                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-brand transition-colors duration-500">
                                        <Shield size={18} className="text-slate-400 group-hover:text-brand transition-colors" />
                                    </div>
                                    <span className="text-[11px] uppercase tracking-[0.3em] font-black text-slate-400 group-hover:text-brand transition-colors">
                                        Core Philosophy
                                    </span>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Social Proof / Compliance Strip */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="pt-16 border-t border-slate-100 flex flex-wrap gap-x-12 gap-y-6 items-center"
                        >
                            <div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                                <Globe size={16} />
                                <span className="text-[10px] font-black uppercase tracking-widest font-mono">ISO 27001 Certified</span>
                            </div>
                            <div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                                <Activity size={16} />
                                <span className="text-[10px] font-black uppercase tracking-widest font-mono">99.999% SLA Uptime</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: The Architectural Monolith (Visual Side) */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <motion.div
                            style={{ y: yVal, opacity: opacityVal }}
                            className="relative aspect-square flex items-center justify-center perspective-2000"
                        >
                            {/* Central Monolith Visual */}
                            <motion.div
                                initial={{ rotateY: 30, opacity: 0, scale: 0.8 }}
                                animate={{ rotateY: -10, opacity: 1, scale: 1 }}
                                transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                                className="relative w-full h-full flex items-center justify-center transform-style-3d"
                            >
                                {/* Outer Architectural Rings */}
                                {[1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{ rotate: 360 * (i % 2 === 0 ? 1 : -1) }}
                                        transition={{ duration: 40 + i * 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute border-[0.5px] border-slate-200/50 rounded-full"
                                        style={{
                                            width: `${60 + i * 15}%`,
                                            height: `${60 + i * 15}%`,
                                        }}
                                    />
                                ))}

                                {/* The Core Monolith Card */}
                                <motion.div
                                    animate={{ y: [-15, 15, -15] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-[320px] aspect-[3/4] bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] p-10 flex flex-col justify-between relative z-20"
                                >
                                    <div className="space-y-6">
                                        <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white">
                                            <Shield size={24} />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-1 w-12 bg-brand rounded-full" />
                                            <h4 className="text-xl font-display font-black text-slate-900 tracking-tight leading-none uppercase">
                                                Structural <br /> Hardening
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {[65, 85, 45].map((w, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-slate-400">
                                                    <span>Node {i + 1}</span>
                                                    <span>9{i} %</span>
                                                </div>
                                                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${w}%` }}
                                                        className="h-full bg-slate-900"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Floating Data Orbs */}
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        animate={{
                                            y: [-40, 40, -40],
                                            x: [-20, 20, -20]
                                        }}
                                        transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="absolute w-20 h-20 bg-brand/10 blur-[30px] rounded-full z-10"
                                        style={{
                                            top: `${10 + i * 30}%`,
                                            left: `${20 + i * 40}%`,
                                        }}
                                    />
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-slate-900 to-transparent" />
            </motion.div>
        </section>
    );
}
