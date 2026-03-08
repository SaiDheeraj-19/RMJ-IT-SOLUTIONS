"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function ProductHighlight() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6">

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    <div className="space-y-6">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[clamp(2.5rem,5vw,5rem)] font-display text-foreground tracking-tighter"
                        >
                            Everything <span className="text-foreground/30 italic">in One Place</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-[#f59768] hover:text-foreground transition-colors"
                        >
                            Explore our services <ArrowUpRight size={16} />
                        </Link>
                    </motion.div>
                </div>

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative h-[600px] w-full bg-surface rounded-[40px] border border-border overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="absolute inset-0 flex flex-col justify-between p-12 md:p-16 z-10">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-4xl md:text-backgroundxl font-display font-semibold tracking-tighter text-foreground mb-4">
                                        DIGITAL CAMPUS PLATFORM
                                    </h3>
                                    <p className="text-lg md:text-xl text-foreground/50 max-w-2xl">
                                        Zero-latency ecosystem designed for educational institutions to unify academic operations, training activities, and student lifecycle management into a single, high-integrity platform.
                                    </p>
                                </div>
                                <div className="hidden md:flex w-20 h-20 rounded-full border border-border items-center justify-center bg-foreground/5 backdrop-blur-sm group-hover:scale-110 transition-transform">
                                    <GraduationCap className="text-foreground/80" size={32} />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-border mt-auto">
                                {[
                                    "Attendance Governance",
                                    "Training Orchestration",
                                    "Predictive Progress Reports",
                                    "Placement Lifecycle Hub"
                                ].map((feature, i) => (
                                    <div key={i} className="flex flex-col gap-2">
                                        <span className="text-foreground font-semibold text-lg">{feature}</span>
                                        <span className="text-foreground/50 text-sm">System Architecture</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#f59768] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
                    </motion.div>

                    <div className="flex justify-center mt-12">
                        <Link
                            href="http://digitalcampus.msmfclasses.com:97"
                            target="_blank"
                            className="btn-glow px-10 py-5 rounded-full text-sm font-semibold tracking-widest uppercase"
                        >
                            Launch Platform
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
