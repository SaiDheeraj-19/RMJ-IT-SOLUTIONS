"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ProductHighlight() {
    return (
        <Section className="py-40 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                            >
                                {"// FLAGSHIP PRODUCT"}
                            </motion.span>
                            <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter">
                                Digital Campus <br /> Platform
                            </h2>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                                A comprehensive ecosystem designed for educational institutions to unify academic operations, training activities, and student lifecycle management into a single, high-integrity platform.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Attendance Governance",
                                "Training Orchestration",
                                "Predictive Progress Reports",
                                "Placement Lifecycle Hub"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-4 text-slate-900 font-bold">
                                    <CheckCircle2 size={18} className="text-brand" />
                                    <span className="text-sm tracking-tight uppercase">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <Link
                                href="http://digitalcampus.msmfclasses.com:97"
                                target="_blank"
                                className="inline-flex items-center gap-6 px-10 py-5 bg-slate-900 text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] hover:bg-brand transition-all shadow-xl"
                            >
                                Launch Platform <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative aspect-video bg-slate-50 rounded-[4rem] border border-slate-100 p-12 flex items-center justify-center overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="relative z-10 text-center space-y-8">
                            <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center text-brand mx-auto shadow-2xl border border-slate-50">
                                <GraduationCap size={48} />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-2xl font-display font-bold text-slate-900">Academic Infrastructure</h4>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}
