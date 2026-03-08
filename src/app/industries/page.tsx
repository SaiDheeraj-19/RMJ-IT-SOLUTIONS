"use client";

import { motion } from "framer-motion";
import {
    GraduationCap,
    Stethoscope,
    ShoppingBag,
    Building2,
    ArrowRight,
    TrendingUp
} from "lucide-react";
import Link from "next/link";

const domains = [
    {
        title: "Academic Institutions",
        icon: GraduationCap,
        description: "Transforming learning environments with integrated Campus ERPs and collaborative platforms. We bridge the gap between administration and digital academia.",
        metrics: "40% Admin Efficiency Increase",
        solutions: ["Digital Campus Platform", "Performance Analytics", "Virtual Classrooms"]
    },
    {
        title: "Healthcare Systems",
        icon: Stethoscope,
        description: "Building secure patient management systems and digital health record solutions. We prioritize data integrity and regulatory transparency.",
        metrics: "Instant Legacy Data Access",
        solutions: ["Patient Portals", "EHR Systems", "Clinical Workflows"]
    },
    {
        title: "Retail & Omnichannel",
        icon: ShoppingBag,
        description: "Enabling seamless omnichannel experiences with custom inventory and e-commerce architectures. We help retailers dominate digital-first markets.",
        metrics: "Global Market Reach expansion",
        solutions: ["Omnichannel POS", "Inventory Automation", "Loyalty Systems"]
    },
    {
        title: "Enterprise Technology",
        icon: Building2,
        description: "Solving complex organizational challenges through specialized software architecture and unified system integration.",
        metrics: "99.9% Systems Uptime Scale",
        solutions: ["Legacy Migration", "Unified API Hubs", "Custom ERP modules"]
    }
];

export default function IndustriesPage() {
    return (
        <div className="pt-32 pb-20 selection:bg-brand/10">
            {/* Header */}
            <section className="bg-white px-10 md:px-20 pt-10 pb-20">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
                        <div className="max-w-4xl space-y-8">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                            >
                                {"// DOMAIN EXPERTISE"}
                            </motion.span>
                            <h1 className="text-[clamp(3.5rem,8vw,6rem)] font-display font-bold text-foreground leading-[0.9] tracking-tighter">
                                Specialized Digital Solutions <br /> for Every Industry.
                            </h1>
                        </div>
                        <p className="text-xl text-foreground/70 font-medium leading-relaxed max-w-xl">
                            We don&apos;t just build software; we engineer industry-specific solutions that solve unique domain challenges and drive measurable institutional growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Domains Grid */}
            <section className="bg-white px-10 md:px-20">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-40">
                        {domains.map((domain, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="group bg-surface/50 rounded-[4rem] p-12 lg:p-20 border border-slate-100 hover:border-brand/20 transition-all duration-700 relative overflow-hidden"
                            >
                                <div className="space-y-12 relative z-10">
                                    <div className="flex items-center justify-between">
                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-foreground/70 group-hover:bg-brand group-hover:text-foreground transition-all duration-500 shadow-sm border border-slate-50">
                                            <domain.icon size={28} />
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-black text-brand uppercase tracking-widest bg-brand/5 px-4 py-2 rounded-full">
                                            <TrendingUp size={12} />
                                            {domain.metrics}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <h2 className="text-4xl font-display font-bold text-foreground leading-tight">
                                            {domain.title}
                                        </h2>
                                        <p className="text-lg text-foreground/70 font-medium leading-relaxed">
                                            {domain.description}
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-black text-foreground/70">Core Industry Systems</h4>
                                        <div className="flex flex-wrap gap-3">
                                            {domain.solutions.map((sol, idx) => (
                                                <div key={idx} className="bg-white px-6 py-4 rounded-2xl border border-slate-100 font-bold text-sm text-foreground/70 flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                                                    {sol}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Link href="/contact" className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-foreground/70 group-hover:text-brand transition-colors pt-4">
                                        Request Domain Demo <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Architecture / Commitment */}
            <section className="bg-surface0 py-40 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand via-transparent to-transparent" />
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center text-foreground space-y-16">
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <span className="text-[10px] uppercase tracking-[0.6em] font-black text-brand font-mono">{"// ARCHITECTURAL INTEGRITY"}</span>
                        <h2 className="text-backgroundxl md:text-7xl font-display font-bold tracking-tighter leading-[0.9]">
                            Systems built for institutional <span className="italic text-brand">immortality.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        {[
                            { title: "Dynamic Scaling", desc: "Our architectures auto-adjust to traffic spikes during admission cycles or national sales." },
                            { title: "Sovereign Security", desc: "We prioritize local data laws and institutional privacy requirements at the kernel level." },
                            { title: "Legacy Bridging", desc: "Synchronizing modern interfaces with decades-old institutional backend mainframes." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-6 p-10 rounded-[3rem] bg-foreground/5 border border-border">
                                <h3 className="text-2xl font-display font-bold text-brand">{item.title}</h3>
                                <p className="text-foreground/60 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sector Performance Benchmarks */}
            <section className="bg-surface py-40">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 space-y-10">
                            <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand font-mono">
                                {"// PERFORMANCE ANALYTICS"}
                            </span>
                            <h2 className="text-backgroundxl md:text-7xl font-display font-bold text-foreground tracking-tighter leading-[0.9]">
                                Measurable impact. <br /> Across every <span className="text-brand">vertical.</span>
                            </h2>
                            <p className="text-xl text-foreground/70 font-medium leading-relaxed">
                                We don&apos;t just deploy software; we optimize business outcomes. Our engineering efforts are benchmarked against industry-specific KPIs to ensure absolute structural improvement.
                            </p>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
                            {[
                                { label: "Response Latency", value: "< 140ms", color: "bg-blue-500" },
                                { label: "Security Compliance", value: "SOC2 Level", color: "bg-brand" },
                                { label: "Uptime Protocol", value: "99.98%", color: "bg-emerald-500" },
                                { label: "API Throughput", value: "10k req/s", color: "bg-orange-500" }
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
                                    <div className={`w-8 h-1 rounded-full ${stat.color}`} />
                                    <h4 className="text-[10px] uppercase tracking-widest font-black text-foreground/70">{stat.label}</h4>
                                    <div className="text-3xl font-display font-bold text-foreground">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="bg-white py-40 px-10 md:px-20">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tighter">
                        Ready to innovate your industry?
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-6 px-12 py-6 bg-brand text-foreground rounded-full text-[11px] font-black uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl shadow-brand/30"
                    >
                        Initialize Project Consultation <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
