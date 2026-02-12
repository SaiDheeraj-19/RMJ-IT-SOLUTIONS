"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { ShieldCheck, Lock, Globe, Server, CheckCircle, Database } from "lucide-react";

const trustPoints = [
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "Cryptographic Integrity",
        desc: "Architecture designed to military-grade specifications, ensuring absolute data sovereignity and verifiable audit trails."
    },
    {
        icon: <Lock className="w-8 h-8" />,
        title: "Structural Hardening",
        desc: "Automated vulnerability orchestration and zero-trust perimeter protocols embedded at the kernel level."
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Global Compliance Nodes",
        desc: "Hardware-level alignment with NIST, SOC2 Type II, and GDPR framework requirements for institutional data."
    },
    {
        icon: <Server className="w-8 h-8" />,
        title: "Resilient Infrastructure",
        desc: "Multi-regional cloud orchestration with automatic structural failover and 99.999% engineered uptime availability."
    }
];

export default function SecurityTrust() {
    return (
        <Section id="trust" className="bg-[#fafafa] py-40 relative overflow-hidden">
            {/* Precision Grid Background */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)`,
                    backgroundSize: '100px 100px',
                }}
            />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                        >
                            {`// INSTITUTIONAL HARDENING PROTOCOL`}
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="Architecture Defined by Certainty."
                            className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter mb-10"
                        />
                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                            In high-stakes environments, safety is not a feature—it is the foundation. We build hardened digital infrastructure that transforms trust into a mathematical constant.
                        </p>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {trustPoints.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-brand/5 transition-all duration-700 group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700">
                                    {point.icon}
                                </div>
                                <div className="text-brand mb-8 group-hover:scale-110 transition-transform duration-500">
                                    {point.icon}
                                </div>
                                <h3 className="text-lg font-display font-black text-slate-900 mb-4 tracking-tight group-hover:text-brand transition-colors">
                                    {point.title}
                                </h3>
                                <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                                    {point.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Performance Radar Block */}
                <div className="bg-white rounded-[3rem] p-10 md:p-20 border border-slate-200 relative overflow-hidden shadow-2xl shadow-indigo-500/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full flex items-center justify-center p-8">
                        <Database className="w-8 h-8 text-brand/30" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                        <div className="space-y-6">
                            <span className="text-[10px] font-black font-mono text-brand tracking-widest uppercase">{`// REAL-TIME STATUS`}</span>
                            <h4 className="text-3xl font-display font-bold text-slate-900 tracking-tight">Hardened Infrastructure</h4>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                Our deployment pipelines undergo automated security scanning and vulnerability assessments with every commit.
                            </p>
                        </div>

                        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: "Security Scans", value: "Daily", icon: <ShieldCheck className="w-4 h-4" /> },
                                { label: "Uptime", value: "Verified", icon: <Server className="w-4 h-4" /> },
                                { label: "Backups", value: "Hourly", icon: <Database className="w-4 h-4" /> },
                                { label: "SSL Status", value: "A+ Grade", icon: <CheckCircle className="w-4 h-4" /> }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center text-brand">
                                        {stat.icon}
                                    </div>
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                                    <div className="text-xl font-display font-black text-brand tracking-tighter">{stat.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
