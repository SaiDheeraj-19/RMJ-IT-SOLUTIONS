"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Search, Fingerprint, Globe, Activity, ChevronRight, CheckCircle2 } from "lucide-react";

const services = [
    {
        icon: <Search className="w-6 h-6" />,
        title: "Penetration Testing",
        desc: "Exposing vulnerabilities before threats do. We perform deep security audits on your web, mobile, and API infrastructure — simulating real-world attack vectors.",
        metrics: "OWASP Top 10 · CVSS Scoring · Full Report",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Performance Tuning",
        desc: "Sub-200ms load times are a requirement, not a luxury. We profile your backend, optimize database queries, and implement caching layers for massive traffic loads.",
        metrics: "CDN Setup · DB Indexing · Load Testing",
    },
    {
        icon: <Fingerprint className="w-6 h-6" />,
        title: "Identity & Access Control",
        desc: "Role-based access control, MFA enforcement, SSO integrations (SAML / OIDC), and session management to ensure only authorized personnel access your data.",
        metrics: "MFA · RBAC · SAML / OIDC SSO",
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: "Database Hardening",
        desc: "Securing your most valuable asset. AES-256 encryption at rest, automated encrypted backups, query monitoring, and injection-resistant parameterization.",
        metrics: "AES-256 · Automated Backups · Audit Logs",
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Network Optimization",
        desc: "Enterprise-grade CDN configuration, DNS hardening, TLS 1.3 enforcement, DDoS mitigation, and latency profiling to reduce global response times.",
        metrics: "CDN · TLS 1.3 · DDoS Mitigation",
    },
    {
        icon: <Activity className="w-6 h-6" />,
        title: "Real-Time Monitoring",
        desc: "Custom dashboards to track system health, security incidents, and performance metrics in real-time. Alerting pipelines for anomaly detection and uptime assurance.",
        metrics: "Uptime Alerting · Anomaly Detection · SLA",
    },
];

const stats = [
    { value: "< 200ms", label: "Target API latency", sub: "after performance tuning" },
    { value: "99.9%", label: "Uptime SLA", sub: "on hardened infrastructure" },
    { value: "OWASP", label: "Security standard", sub: "Top 10 checklist enforced" },
    { value: "AES-256", label: "Encryption standard", sub: "for all data at rest" },
];

const terminalLines = [
    { text: "> initializing_security_audit --target=production", color: "#6ee7b7" },
    { text: "> scanning_sql_injection_vectors...        [PASS]", color: "#6ee7b7" },
    { text: "> checking_xss_sanitization...            [PASS]", color: "#6ee7b7" },
    { text: "> testing_brute_force_throttling...       [ACTIVE]", color: "#6ee7b7" },
    { text: "> validating_database_encryption...       [AES-256]", color: "#6ee7b7" },
    { text: "> analyzing_api_response_times...         [187ms ✓]", color: "#6ee7b7" },
    { text: "> verifying_ssl_certificate_pinning...    [PASS]", color: "#6ee7b7" },
    { text: "> STATUS: SECURE & OPTIMIZED ✓", color: "#f5a57a" },
    { text: "_", color: "#6ee7b7" },
];

export default function SecurityPage() {
    return (
        <main style={{ background: "var(--background)", color: "var(--foreground)" }}>

            {/* ── HERO ── */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-48 pb-20 px-6 md:px-12 lg:px-24">
                {/* Dark mesh background */}
                <div className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(176,93,65,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(49,80,170,0.08) 0%, transparent 50%)`,
                    }} />

                {/* Grid overlay */}
                <div className="absolute inset-0 z-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }} />

                <div className="relative z-10 max-w-[1440px] mx-auto w-full">
                    {/* Breadcrumb */}
                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-12">
                        <Link href="/services" className="text-[11px] font-black uppercase tracking-[0.45em] font-mono text-brand/80 hover:text-brand transition-colors">
                            ← Services
                        </Link>
                        <ChevronRight size={14} className="text-foreground/30" />
                        <span className="text-[11px] font-black uppercase tracking-[0.45em] font-mono text-foreground/35">Security &amp; Performance</span>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left — Text */}
                        <div>
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/30 bg-brand/5 mb-8">
                                <ShieldCheck size={14} className="text-brand" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] font-mono text-brand">Resilience &amp; Speed</span>
                            </motion.div>

                            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-[clamp(3rem,7vw,6rem)] font-black leading-[0.88] tracking-tight mb-8"
                                style={{ color: "var(--foreground)", letterSpacing: "-3px" }}>
                                Security that<br />
                                <span style={{ color: "var(--brand)" }}>never sleeps.</span><br />
                                Speed that<br />never slips.
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                                className="text-xl max-w-xl leading-relaxed mb-10 text-foreground/60">
                                A fast system is worthless if it&apos;s compromised. We build impenetrable security and sub-200ms performance into your infrastructure — simultaneously.
                            </motion.p>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-wrap items-center gap-4">
                                <Link href="/contact?service=Security+%26+Performance+Optimization&type=Security+%26+Performance+Optimization"
                                    className="btn-glow px-8 py-4 text-base font-bold inline-flex items-center gap-3">
                                    Get a Security Audit <ArrowRight size={16} />
                                </Link>
                                <Link href="#services" className="text-base font-bold text-foreground/50 hover:text-foreground transition-colors">
                                    See what we secure ↓
                                </Link>
                            </motion.div>
                        </div>

                        {/* Right — Terminal */}
                        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }}>
                            <div className="relative">
                                <div className="absolute -inset-6 bg-brand/5 rounded-[2.5rem] blur-3xl" />
                                <div className="relative rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10"
                                    style={{ background: "#0d1117" }}>
                                    {/* Terminal titlebar */}
                                    <div className="flex items-center gap-2 px-6 py-4 border-b border-white/8">
                                        <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                        <span className="ml-4 text-[10px] font-mono text-white/30 tracking-widest uppercase">security_audit.sh</span>
                                    </div>
                                    {/* Terminal body */}
                                    <div className="p-8 font-mono text-sm space-y-3">
                                        {terminalLines.map((line, i) => (
                                            <motion.p
                                                key={i}
                                                initial={{ opacity: 0, x: -8 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + i * 0.12 }}
                                                className={line.text === "_" ? "animate-pulse" : ""}
                                                style={{ color: line.color }}>
                                                {line.text}
                                            </motion.p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── STATS ROW ── */}
            <section className="px-6 md:px-12 lg:px-24 py-16 border-y"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((s, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="text-center md:text-left">
                                <div className="text-2xl md:text-3xl font-black tracking-tight text-brand mb-1"
                                    style={{ letterSpacing: "-1px" }}>{s.value}</div>
                                <div className="text-xs font-black uppercase tracking-widest text-foreground mb-0.5">{s.label}</div>
                                <div className="text-xs text-foreground/40 font-medium">{s.sub}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICES GRID ── */}
            <section id="services" className="px-6 md:px-12 lg:px-24 py-28"
                style={{ background: "var(--background)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <div className="mb-16">
                        <p className="text-[10px] uppercase tracking-[0.5em] font-black font-mono text-brand mb-4">{`// What We Harden`}</p>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground" style={{ letterSpacing: "-1px" }}>
                            Zero-friction speed.<br />Zero-compromise security.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="group relative rounded-[1.5rem] p-8 border overflow-hidden transition-all duration-300 hover:border-brand/40 hover:-translate-y-1"
                                style={{ background: "var(--surface)", borderColor: "var(--border)" }}>

                                {/* Hover glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: "radial-gradient(ellipse at top left, rgba(176,93,65,0.06), transparent 70%)" }} />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-brand transition-colors group-hover:bg-brand group-hover:text-white"
                                        style={{ background: "var(--background)", border: "1px solid var(--border)" }}>
                                        {s.icon}
                                    </div>

                                    <h3 className="text-xl font-black tracking-tight text-foreground mb-3">{s.title}</h3>
                                    <p className="text-sm leading-relaxed text-foreground/55 mb-6">{s.desc}</p>

                                    <div className="flex items-center gap-2 pt-4 border-t"
                                        style={{ borderColor: "var(--border)" }}>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-brand/70">{s.metrics}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PHILOSOPHY BLOCK ── */}
            <section className="px-6 md:px-12 lg:px-24 py-28"
                style={{ background: "var(--surface)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.5em] font-black font-mono text-brand mb-6">{`// Our Philosophy`}</p>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground mb-6"
                                style={{ letterSpacing: "-1.5px" }}>
                                Security and speed<br />are not a trade-off.
                            </h2>
                            <p className="text-lg leading-relaxed text-foreground/60 mb-10">
                                Most teams treat security as a final checklist item. We embed it at the architecture layer — so strong security and exceptional performance are engineered in together, not bolted on later.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Threat modelling in the architecture phase",
                                    "Security reviews at every sprint",
                                    "Performance budgets enforced with CI/CD gates",
                                    "Post-launch monitoring with automated alerting",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-base font-medium text-foreground/70">
                                        <CheckCircle2 size={18} className="text-brand flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Stats panel - dark brand card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative rounded-[2rem] p-12 overflow-hidden"
                            style={{ background: "linear-gradient(135deg, #1a0f0a 0%, #2d1810 50%, #1a0f0a 100%)", border: "1px solid rgba(176,93,65,0.3)" }}>
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-[2rem]"
                                style={{ background: "linear-gradient(90deg, transparent, var(--brand), transparent)" }} />
                            <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-[80px] opacity-30 transform-gpu"
                                style={{ background: "var(--brand)" }} />
                            <div className="relative z-10 space-y-8">
                                {[
                                    { label: "Vulnerabilities Resolved", value: "100%" },
                                    { label: "Avg Performance Gain", value: "3× faster" },
                                    { label: "Systems Hardened", value: "Enterprise-Grade" },
                                ].map((item, i) => (
                                    <div key={i} className="pb-8 border-b last:border-0 last:pb-0"
                                        style={{ borderColor: "rgba(176,93,65,0.2)" }}>
                                        <div className="text-[10px] font-black uppercase tracking-[0.4em] font-mono mb-2"
                                            style={{ color: "rgba(176,93,65,0.6)" }}>{item.label}</div>
                                        <div className="text-2xl md:text-3xl font-black tracking-tight"
                                            style={{ color: "var(--brand)", letterSpacing: "-1px" }}>{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-6 md:px-12 lg:px-24 py-24"
                style={{ background: "var(--background)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[2.5rem] overflow-hidden"
                        style={{ background: "linear-gradient(135deg, #b05d41 0%, #8b3d23 40%, #5c2515 100%)", border: "none" }}>

                        {/* Mesh overlay */}
                        <div className="absolute inset-0 opacity-[0.06]"
                            style={{
                                backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
                                backgroundSize: "30px 30px",
                            }} />
                        <div className="absolute top-0 left-0 right-0 h-px"
                            style={{ background: "rgba(255,255,255,0.2)" }} />
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20 blur-[80px] transform-gpu"
                            style={{ background: "#ff9a73" }} />

                        {/* Watermark */}
                        <span className="absolute right-0 bottom-0 text-[18vw] font-black leading-none select-none pointer-events-none"
                            style={{ color: "rgba(255,255,255,0.05)" }}>SECURE</span>

                        <div className="relative z-10 p-14 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.5em] font-black font-mono mb-4"
                                    style={{ color: "rgba(255,255,255,0.6)" }}>{`// Request an Audit`}</p>
                                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white"
                                    style={{ letterSpacing: "-2px" }}>
                                    Is your system<br />truly secure?
                                </h2>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact?service=Security+%26+Performance+Optimization&type=Security+%26+Performance+Optimization"
                                    className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-wide transition-all hover:-translate-y-0.5 shadow-2xl"
                                    style={{ background: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(10px)" }}>
                                    Get Security Audit <ArrowRight size={16} />
                                </Link>
                                <Link href="/contact?service=Security+%26+Performance+Optimization&type=Security+%26+Performance+Optimization"
                                    className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-wide transition-all hover:-translate-y-0.5"
                                    style={{ background: "white", color: "var(--brand)" }}>
                                    Talk to Us <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
