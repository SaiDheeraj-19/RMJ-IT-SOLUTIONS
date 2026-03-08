"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/ui/Section";

export default function Hero() {
    return (
        <Section id="home" className="min-h-screen pt-40 pb-20 bg-white overflow-hidden flex items-center">
            {/* Background Architectural Patterns */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
                        backgroundSize: '100px 100px',
                    }}
                />
            </div>

            <div className="max-w-[1440px] mx-auto relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="lg:col-span-7 space-y-12">
                        <div className="space-y-8">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                            >
                                {"// METHODOLOGY"}
                            </motion.span>
                            <h1 className="text-[clamp(3.5rem,8vw,5.5rem)] font-display font-bold text-slate-900 leading-[0.95] tracking-tighter">
                                Technology Solutions for Modern Businesses
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl">
                                RMJ IT Solutions helps organizations build scalable software platforms, mobile applications, and digital systems that improve efficiency and accelerate growth.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-8 pt-4">
                            <Link
                                href="/services"
                                className="px-12 py-6 bg-brand text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.25em] shadow-2xl shadow-brand/20 hover:scale-105 transition-all flex items-center gap-4"
                            >
                                Explore Services <ArrowUpRight size={18} />
                            </Link>
                            <Link
                                href="/contact"
                                className="px-12 py-6 bg-white text-slate-900 rounded-2xl text-[11px] font-black uppercase tracking-[0.25em] border border-slate-200 hover:border-brand hover:text-brand transition-all flex items-center"
                            >
                                Start Your Project With Us
                            </Link>
                        </div>
                    </div>

                    {/* Right: Modern Dashboard Mockup / Illustration */}
                    < div className="lg:col-span-5 relative" >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                            className="relative aspect-square w-full"
                        >
                            <Image
                                src="/hero-visual.svg"
                                alt="Enterprise Technology Solutions"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
