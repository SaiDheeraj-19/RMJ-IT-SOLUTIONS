"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Link from "next/link";
import { ArrowRight, Activity, ShieldCheck, Zap, Search, Fingerprint, Globe } from "lucide-react";

const services = [
    {
        title: "Penetration Testing",
        desc: "Exposing vulnerabilities before threats do. We perform deep security audits on your web and mobile infrastructure.",
        icon: <Search className="w-5 h-5" />
    },
    {
        title: "Performance Tuning",
        desc: "Sub-200ms load times are a requirement, not a luxury. We optimize your backend and databases for massive traffic.",
        icon: <Zap className="w-5 h-5" />
    },
    {
        title: "Identity & Access Control",
        desc: "Role-based access, MFA, and SSO integrations to ensure only authorized personnel touch your data.",
        icon: <Fingerprint className="w-5 h-5" />
    },
    {
        title: "Database Hardening",
        desc: "Securing your most valuable asset. We implement encryption, regular backups, and automated threat detection.",
        icon: <ShieldCheck className="w-5 h-5" />
    },
    {
        title: "Network Optimization",
        desc: "Reducing latency and securing your data transit via enterprise-grade CDN and DNS configurations.",
        icon: <Globe className="w-5 h-5" />
    },
    {
        title: "Real-time Monitoring",
        desc: "We build custom dashboards to track system health, security incidents, and performance metrics in real-time.",
        icon: <Activity className="w-5 h-5" />
    }
];

export default function SecurityPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                            backgroundSize: '20px 20px',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/50 via-transparent to-[#f8fafc]" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6 block">
                            Service / Resilience & Speed
                        </span>
                        <TextReveal
                            as="h1"
                            text="Security & Performance Optimization."
                            className="text-[clamp(3.2rem,7vw,5.5rem)] font-display leading-[0.9] tracking-tighter font-bold text-[#1a1a1a] mb-6"
                        />
                        <p className="text-xl text-[#505050] max-w-xl leading-relaxed mb-8">
                            A fast system is only useful if it&apos;s secure. We optimize your infrastructure for peak performance while building a fortress around your institutional data.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#1a1a1a] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-brand transition-all duration-300 shadow-xl"
                        >
                            Get Security Audit
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Optimization Pillars */}
            <Section className="bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
                        <div className="max-w-2xl">
                            <span className="text-brand font-mono text-sm tracking-widest block mb-4 uppercase">{`// Hardened Architecture`}</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] leading-tight">
                                Zero-friction speed. <br /> Zero-compromise security.
                            </h2>
                        </div>
                        <div className="text-stone-400 font-display text-[12vw] leading-none opacity-10 select-none hidden lg:block">
                            SECURE
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="text-brand mb-8 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-brand/5 rounded-lg flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                    <div className="h-px bg-stone-100 flex-1" />
                                </div>
                                <h4 className="text-xl font-display font-bold text-[#1a1a1a] mb-4 uppercase tracking-tight">{service.title}</h4>
                                <p className="text-[#606060] leading-relaxed text-sm">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Performance Stats Block */}
            <Section className="bg-[#fffdf5]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h3 className="text-4xl font-display font-bold text-[#1a1a1a] mb-8 tracking-tight">Enterprise Stability. <br /> At Institutional Scale.</h3>
                        <p className="text-lg text-[#505050] leading-relaxed mb-12">
                            We use advanced profiling tools and proprietary security checklists to ensure your systems can weather surges in traffic and sophisticated security threats alike.
                        </p>

                        <div className="grid grid-cols-2 gap-12 border-t border-stone-200 pt-12">
                            <div>
                                <span className="text-4xl font-display font-bold text-brand">99.99%</span>
                                <p className="text-xs uppercase tracking-widest font-black text-[#1a1a1a] mt-2">Uptime Core</p>
                            </div>
                            <div>
                                <span className="text-4xl font-display font-bold text-brand">&lt;150ms</span>
                                <p className="text-xs uppercase tracking-widest font-black text-[#1a1a1a] mt-2">API Latency</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-brand/5 rounded-3xl blur-2xl" />
                        <div className="relative bg-[#1a1a1a] p-12 rounded-[2rem] shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                            <div className="font-mono text-sm text-green-500/80 space-y-2">
                                <p>&gt; RUNNING_SECURITY_AUDIT...</p>
                                <p>&gt; SQL_INJECTION_PROTECTION: ACTIVE</p>
                                <p>&gt; XSS_FILTERING: PASS</p>
                                <p>&gt; BRUTE_FORCE_THROTTLING: ENABLED</p>
                                <p>&gt; DATABASE_ENCRYPTION: AES_256</p>
                                <p>&gt; SYSTEM_STATUS: SECURE_AND_STABLE</p>
                                <p className="animate-pulse pt-4">_</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
