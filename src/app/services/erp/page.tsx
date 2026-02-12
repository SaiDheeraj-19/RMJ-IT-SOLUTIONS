"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Link from "next/link";
import { Activity, ArrowRight, Box, Cpu, Database, Layers, RefreshCw, ShieldCheck } from "lucide-react";

const features = [
    {
        title: "Enterprise Refactoring",
        desc: "We dismantle fragmented legacy monoliths and re-engineer them into unified, high-availability ecosystems that scale with institutional growth.",
        icon: <Layers className="w-5 h-5" />
    },
    {
        title: "Deterministic Data Ops",
        desc: "End-to-end orchestration of institutional data flows with zero manual intervention or data-integrity risks.",
        icon: <RefreshCw className="w-5 h-5" />
    },
    {
        title: "Institutional Core Systems",
        desc: "Custom-engineered platforms for high-stakes operations, financial management, and large-scale academic orchestration.",
        icon: <Box className="w-5 h-5" />
    },
    {
        title: "Board-Level Architecture",
        desc: "Designing infrastructure that is ready for deep-tier AI integration and mission-critical transaction security.",
        icon: <Cpu className="w-5 h-5" />
    },
    {
        title: "Cryptographic Sovereignty",
        desc: "Military-grade encryption at rest and in transit, ensuring institutional data remains a sovereign asset.",
        icon: <ShieldCheck className="w-5 h-5" />
    },
    {
        title: "Orchestrated Scaling",
        desc: "Systems engineered for global concurrent access with sub-200ms deterministic response profiles.",
        icon: <Database className="w-5 h-5" />
    }
];

export default function ERPPage() {
    return (
        <main className="min-h-screen bg-[#fafafa]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden border-b border-slate-100">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-slate-900/[0.02]"
                        style={{
                            backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`,
                            backgroundSize: '40px 40px',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#fafafa]" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-8 block font-mono">
                            {`// INSTITUTIONAL INFRASTRUCTURE`}
                        </span>
                        <TextReveal
                            as="h1"
                            text="Digital Systems Engineering."
                            className="text-[clamp(3.2rem,7vw,5.5rem)] font-display leading-[0.9] tracking-tighter font-bold text-slate-900 mb-8"
                        />
                        <p className="text-xl text-slate-500 max-w-xl leading-relaxed mb-12 font-medium">
                            We bridge the gap between Boardroom strategy and technical execution. We replace fragmented legacy tools with unified, deterministic digital infrastructure.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white text-[11px] uppercase tracking-[0.4em] font-black rounded-full hover:bg-brand transition-all duration-500 shadow-2xl shadow-slate-900/10"
                        >
                            Initiate Structural Audit
                            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Core Capabilities */}
            <Section className="bg-white border-b border-slate-100">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-32 max-w-3xl">
                        <span className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono">{`// CORE CAPABILITIES`}</span>
                        <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter mb-10">
                            Re-engineering operational <span className="italic text-brand">certainty.</span>
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed font-medium">
                            Fragmented systems create operational doubt. We architect infrastructure around deterministic workflows, ensuring global institutional autonomy and long-term technical resilience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-[#f8fafc] border border-stone-100 rounded-3xl hover:border-brand/30 transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand mb-8 shadow-sm group-hover:bg-brand group-hover:text-white transition-colors duration-500">
                                    {feature.icon}
                                </div>
                                <h4 className="text-xl font-display font-bold text-[#1a1a1a] mb-4">{feature.title}</h4>
                                <p className="text-[#606060] leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Redesigned Industrial Result Block */}
            <Section className="bg-white py-40 relative overflow-hidden">
                {/* Ultra-subtle geometric background for architectural depth */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
                        backgroundSize: '120px 120px',
                    }}
                />

                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center relative z-10">
                    <div className="lg:col-span-7">
                        <div className="relative group">
                            {/* Layered Dashboard Cards */}
                            <div className="absolute -inset-4 bg-brand/5 rounded-[3rem] blur-2xl group-hover:bg-brand/10 transition-colors duration-1000" />

                            <div className="relative bg-[#f8fafc] border border-slate-200 p-12 rounded-[2.5rem] shadow-2xl shadow-indigo-500/5">
                                <div className="flex justify-between items-center mb-16">
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-black font-mono text-brand tracking-[0.3em] uppercase opacity-70">
                                            {`// SYSTEM PERFORMANCE METRICS`}
                                        </span>
                                        <h4 className="text-2xl font-display font-bold text-slate-900 tracking-tight">System Autonomy Dashboard</h4>
                                    </div>
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm">
                                        <Activity className="w-5 h-5 text-brand" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    {/* Metric 1 */}
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Efficiency</span>
                                            <span className="text-2xl font-display font-black text-brand tracking-tighter uppercase">High</span>
                                        </div>
                                        <div className="h-3 w-full bg-slate-200/50 rounded-full overflow-hidden p-0.5 border border-slate-200">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ duration: 2.5, ease: "circOut" }}
                                                className="h-full bg-gradient-to-r from-brand to-indigo-400 rounded-full relative shadow-[0_0_15px_rgba(79,70,229,0.3)]"
                                            >
                                                <div className="absolute top-0 right-0 w-2 h-full bg-white/40 blur-[1px]" />
                                            </motion.div>
                                        </div>
                                        <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                                            Reduction in manual data entry cycles across institutional workflows.
                                        </p>
                                    </div>

                                    {/* Metric 2 */}
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Stability</span>
                                            <span className="text-2xl font-display font-black text-brand tracking-tighter uppercase">Active</span>
                                        </div>
                                        <div className="h-3 w-full bg-slate-200/50 rounded-full overflow-hidden p-0.5 border border-slate-200">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ duration: 2.5, ease: "circOut" }}
                                                className="h-full bg-brand rounded-full"
                                            />
                                        </div>
                                        <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                                            Unscheduled system downtime recorded over 24 consecutive months.
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Tech Metadata */}
                                <div className="mt-16 pt-10 border-t border-slate-200 flex flex-wrap gap-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Security Hardware: Active</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Latency: &lt; 200ms</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Accent Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="absolute -right-8 -bottom-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-brand">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Architecture</p>
                                        <p className="text-sm font-bold text-slate-900 leading-none">Hardened.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-8">
                            <span className="text-brand font-mono text-xs tracking-[0.3em] font-black uppercase block">{`// Engineered Results`}</span>
                            <h3 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold text-slate-900 leading-[0.95] tracking-tight">
                                Performance that is engineered, not promised.
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                We don&apos;t just deliver code; we deliver measurable institutional efficiency. Our systems are built to eliminate the errors, delays, and security gaps of fragmented software.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link href="/contact" className="group inline-flex items-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-full text-xs uppercase tracking-widest font-black hover:bg-brand transition-all duration-500 shadow-xl shadow-slate-900/10">
                                Talk To An Architect
                                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
