"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight, CheckCircle2, Layers, Wifi, Bell, Lock,
    Zap, Shield, Star, ChevronRight, Play,
} from "lucide-react";

/* ─── DATA ──────────────────────────────────────────────────────── */

const platforms = [
    {
        id: "ios",
        name: "iOS",
        tagline: "Apple Ecosystem",
        logo: "https://cdn.simpleicons.org/apple/ffffff",
        accent: "#e8956a",
        bgFrom: "#1c1816",
        bgTo: "#2e1f18",
        border: "rgba(232,149,106,0.25)",
        stack: ["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit", "ARKit", "TestFlight", "Fastlane"],
        headline: "Native iOS\nDevelopment",
        sub: "Pixel-perfect apps that feel right at home on every Apple device — iPhone, iPad, and Apple Watch.",
        features: [
            "SwiftUI & UIKit for native precision",
            "Core Data & CloudKit persistence",
            "ARKit, CoreML & Vision integrations",
            "App Store Connect management",
            "TestFlight beta & phased rollouts",
            "Face ID / Touch ID biometrics",
        ],
        href: "/services/mobile-apps/ios",
        cta: "Start iOS Project",
        ctaHref: "/contact?service=iOS+Application+Development&type=iOS+Application+Development&message=I%27m+interested+in+building+a+native+iOS+application.",
        rating: "4.9★  App Store Rating",
    },
    {
        id: "android",
        name: "Android",
        tagline: "Google Ecosystem",
        logo: "https://cdn.simpleicons.org/android/3ddc84",
        accent: "#3ddc84",
        bgFrom: "#0e1a14",
        bgTo: "#162b1e",
        border: "rgba(61,220,132,0.25)",
        stack: ["Kotlin", "Jetpack Compose", "Room", "Coroutines", "Hilt", "Material 3", "Espresso", "Fastlane"],
        headline: "Native Android\nDevelopment",
        sub: "Polished Android apps tested across thousands of device configurations — from entry-level to flagship.",
        features: [
            "Kotlin & Jetpack Compose UI",
            "Room DB & DataStore persistence",
            "Coroutines & Flow streams",
            "Material Design 3 theming",
            "Google Play Console management",
            "Fingerprint & PIN biometrics",
        ],
        href: "/services/mobile-apps/android",
        cta: "Start Android Project",
        ctaHref: "/contact?service=Android+Application+Development&type=Android+Application+Development&message=I%27m+interested+in+building+a+native+Android+application.",
        rating: "4.8★  Play Store Rating",
    },
];

const stats = [
    { value: "60 fps", label: "Smooth animations", icon: <Zap size={16} /> },
    { value: "< 2s", label: "Cold launch time", icon: <Play size={16} /> },
    { value: "OWASP", label: "Security standard", icon: <Shield size={16} /> },
    { value: "5★", label: "Store ratings target", icon: <Star size={16} /> },
];

const capabilities = [
    {
        icon: <Layers className="w-5 h-5" />,
        title: "Cross-Platform (Flutter)",
        desc: "One shared codebase, two premium apps. Flutter with Dart AOT compilation delivers near-native performance without the double maintenance cost.",
        tag: "React Native · Flutter · Expo",
    },
    {
        icon: <Wifi className="w-5 h-5" />,
        title: "Offline-First Architecture",
        desc: "Apps that work without internet. Background sync, SQLite/Realm locally, delta updates, and conflict-free resolution — built in from day one.",
        tag: "SQLite · Realm · WorkManager",
    },
    {
        icon: <Bell className="w-5 h-5" />,
        title: "Push & Engagement",
        desc: "Full FCM + APNs integration. Topic targeting, rich notifications with deep-links, open-rate analytics, and in-app overlays.",
        tag: "FCM · APNs · Deep Links",
    },
    {
        icon: <Lock className="w-5 h-5" />,
        title: "Security & Compliance",
        desc: "Keychain/Keystore encrypted storage, SSL certificate pinning, biometric auth, code obfuscation, and OWASP Mobile Top 10 compliance.",
        tag: "Keychain · Pinning · OWASP",
    },
];

const process = [
    { num: "01", title: "Platform Strategy", desc: "Define the right platform — native iOS, native Android, or Flutter — based on your audience, budget, and timeline." },
    { num: "02", title: "UX Prototype", desc: "Figma prototype validated with real users before a single line of code. Eliminates costly design rework downstream." },
    { num: "03", title: "Sprint Builds", desc: "2-week sprints with TestFlight or Play Internal builds delivered each cycle. Tight, structured feedback loops." },
    { num: "04", title: "QA Matrix Testing", desc: "Automated + manual testing across iOS versions, Android API levels, OEM skins, screen densities, and accessibility." },
    { num: "05", title: "Store Launch", desc: "Full App Store / Play Console submission — metadata, screenshots, privacy labels, staged rollout, crash monitoring." },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */

export default function MobileAppsPage() {
    const [active, setActive] = useState<"ios" | "android">("ios");
    const p = platforms.find((x) => x.id === active)!;

    return (
        <main style={{ background: "var(--background)", color: "var(--foreground)" }}>

            {/* ══════════════════════════════════ HERO ═══════════════════════════════ */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-44 pb-20 px-6 md:px-12 lg:px-24">

                {/* Deep background gradient */}
                <div className="absolute inset-0 z-0"
                    style={{
                        background: `radial-gradient(ellipse 80% 60% at 70% 40%, rgba(176,93,65,0.08) 0%, transparent 60%),
                                     radial-gradient(ellipse 60% 50% at 10% 80%, rgba(61,220,132,0.05) 0%, transparent 60%)`,
                    }} />

                {/* Fine grid */}
                <div className="absolute inset-0 z-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                    }} />

                <div className="relative z-10 max-w-[1440px] mx-auto w-full">

                    {/* Breadcrumb */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-10">
                        <Link href="/services" className="text-[10px] font-black uppercase tracking-[0.5em] font-mono text-brand/70 hover:text-brand transition-colors">
                            ← Services
                        </Link>
                        <ChevronRight size={12} className="text-foreground/20" />
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] font-mono text-foreground/30">Mobile Applications</span>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">

                        {/* Left column */}
                        <div>
                            {/* Eyebrow pill */}
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
                                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8"
                                style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                                <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] font-mono" style={{ color: "var(--foreground)", opacity: 0.6 }}>iOS &amp; Android Engineering</span>
                            </motion.div>

                            {/* Hero H1 */}
                            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08 }}
                                className="font-black leading-[0.85] tracking-tighter mb-8"
                                style={{ fontSize: "clamp(3.2rem,8vw,7rem)", color: "var(--foreground)", letterSpacing: "-4px" }}>
                                Mobile apps that<br />
                                feel <span style={{ color: "var(--brand)" }}>truly native.</span>
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18 }}
                                className="text-lg md:text-xl leading-relaxed mb-12 max-w-xl"
                                style={{ color: "var(--foreground)", opacity: 0.55 }}>
                                We engineer Swift·Kotlin·Flutter applications that are indistinguishable from the platform they live on — fast, secure, and beautiful by default.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26 }}
                                className="flex flex-wrap items-center gap-4">
                                <Link href="/contact?service=Mobile+Application+Development&type=Mobile+Application"
                                    className="btn-glow inline-flex items-center gap-3 px-8 py-4 text-base font-bold">
                                    Start a Project <ArrowRight size={16} />
                                </Link>
                                <Link href="#platforms"
                                    className="inline-flex items-center gap-2 text-base font-semibold transition-colors"
                                    style={{ color: "var(--foreground)", opacity: 0.5 }}>
                                    View platforms ↓
                                </Link>
                            </motion.div>

                            {/* Stats strip */}
                            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.36 }}
                                className="flex flex-wrap gap-6 mt-14 pt-10 border-t"
                                style={{ borderColor: "var(--border)" }}>
                                {stats.map((s, i) => (
                                    <div key={i} className="flex items-center gap-2.5">
                                        <span className="text-brand">{s.icon}</span>
                                        <div>
                                            <div className="text-sm font-black" style={{ color: "var(--foreground)" }}>{s.value}</div>
                                            <div className="text-[10px] uppercase tracking-widest font-bold" style={{ color: "var(--foreground)", opacity: 0.4 }}>{s.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right column — Platform toggle preview */}
                        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
                            className="hidden lg:block">
                            <div className="flex gap-2 mb-4">
                                {platforms.map((pl) => (
                                    <button key={pl.id}
                                        onClick={() => setActive(pl.id as "ios" | "android")}
                                        className="flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300"
                                        style={{
                                            background: active === pl.id ? pl.accent : "var(--surface)",
                                            color: active === pl.id ? "#fff" : "var(--foreground)",
                                            border: `1px solid ${active === pl.id ? "transparent" : "var(--border)"}`,
                                            opacity: active === pl.id ? 1 : 0.5,
                                        }}>
                                        {pl.name}
                                    </button>
                                ))}
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.div key={active}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -16 }}
                                    transition={{ duration: 0.35 }}
                                    className="rounded-[1.75rem] overflow-hidden p-8"
                                    style={{
                                        background: `linear-gradient(135deg, ${p.bgFrom} 0%, ${p.bgTo} 100%)`,
                                        border: `1px solid ${p.border}`,
                                    }}>
                                    {/* Logo + name */}
                                    <div className="flex items-center gap-3 mb-6">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                                            style={{ background: `${p.accent}20`, border: `1px solid ${p.border}` }}>
                                            <img src={p.logo} alt={p.name} className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest font-mono" style={{ color: p.accent }}>{p.tagline}</p>
                                            <p className="text-base font-black text-white whitespace-pre-line">{p.headline.replace("\\n", "\n")}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>{p.sub}</p>
                                    <ul className="space-y-2.5 mb-6">
                                        {p.features.slice(0, 4).map((f, i) => (
                                            <li key={i} className="flex items-center gap-2.5 text-sm font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>
                                                <CheckCircle2 size={13} style={{ color: p.accent, flexShrink: 0 }} /> {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {p.stack.map((t) => (
                                            <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide"
                                                style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)", border: `1px solid rgba(255,255,255,0.08)` }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <Link href={p.ctaHref}
                                        className="inline-flex w-full items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-black uppercase tracking-wide text-white transition-all hover:opacity-90"
                                        style={{ background: p.accent }}>
                                        {p.cta} <ArrowRight size={14} />
                                    </Link>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════ PLATFORM CARDS ═════════════════════════ */}
            <section id="platforms" className="px-6 md:px-12 lg:px-24 py-24" style={{ scrollMarginTop: "100px" }}>
                <div className="max-w-[1440px] mx-auto">

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.5em] font-mono mb-3" style={{ color: "var(--brand)" }}>{`// Platform Engineering`}</p>
                            <h2 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: "var(--foreground)", letterSpacing: "-1px" }}>
                                Pick your platform.<br />We&apos;ll handle the rest.
                            </h2>
                        </div>
                        <Link href="/contact?service=Mobile+Application+Development&type=Mobile+Application"
                            className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest"
                            style={{ color: "var(--brand)" }}>
                            Both platforms? <ArrowRight size={14} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {platforms.map((pl, idx) => (
                            <motion.div key={pl.id}
                                initial={{ opacity: 0, y: 36 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.12, duration: 0.55 }}
                                className="relative rounded-[2rem] overflow-hidden group"
                                style={{ background: `linear-gradient(135deg, ${pl.bgFrom} 0%, ${pl.bgTo} 100%)`, border: `1px solid ${pl.border}` }}>

                                {/* Top highlight line */}
                                <div className="absolute top-0 left-0 right-0 h-px"
                                    style={{ background: `linear-gradient(90deg, transparent, ${pl.accent}80, transparent)` }} />

                                {/* Glow orb */}
                                <div className="absolute top-[-40px] right-[-40px] w-60 h-60 rounded-full blur-[100px] opacity-25 transform-gpu"
                                    style={{ background: pl.accent }} />

                                <div className="relative z-10 p-10 md:p-12">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="flex items-center gap-4">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                                                style={{ background: `${pl.accent}18`, border: `2px solid ${pl.accent}40` }}>
                                                <img src={pl.logo} alt={pl.name} className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-[0.45em] font-mono mb-0.5" style={{ color: pl.accent }}>{pl.tagline}</p>
                                                <h3 className="text-xl md:text-2xl font-black text-white leading-tight whitespace-pre-line">
                                                    {pl.headline}
                                                </h3>
                                            </div>
                                        </div>
                                        <span className="text-[10px] font-bold px-3 py-1.5 rounded-full hidden md:block"
                                            style={{ background: `${pl.accent}15`, color: pl.accent, border: `1px solid ${pl.accent}30` }}>
                                            {pl.rating}
                                        </span>
                                    </div>

                                    <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>{pl.sub}</p>

                                    {/* Features grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                                        {pl.features.map((f, i) => (
                                            <div key={i} className="flex items-center gap-2.5 text-sm font-medium"
                                                style={{ color: "rgba(255,255,255,0.7)" }}>
                                                <CheckCircle2 size={13} style={{ color: pl.accent, flexShrink: 0 }} />
                                                {f}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Stack chips */}
                                    <div className="flex flex-wrap gap-1.5 mb-8">
                                        {pl.stack.map((t) => (
                                            <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide"
                                                style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* CTAs */}
                                    <div className="flex flex-wrap items-center gap-3">
                                        <Link href={pl.ctaHref}
                                            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-black uppercase tracking-wide text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                                            style={{ background: pl.accent }}>
                                            {pl.cta} <ArrowRight size={13} />
                                        </Link>
                                        <Link href={pl.href}
                                            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                                            style={{ color: pl.accent }}>
                                            Full details <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════ CAPABILITIES ═══════════════════════════ */}
            <section className="px-6 md:px-12 lg:px-24 py-24" style={{ background: "var(--surface)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <div className="mb-14">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] font-mono mb-3" style={{ color: "var(--brand)" }}>{`// Cross-Platform Capabilities`}</p>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: "var(--foreground)", letterSpacing: "-1px" }}>
                            What we bring to <span style={{ color: "var(--brand)" }}>every</span> platform.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {capabilities.map((c, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="group relative rounded-[1.5rem] p-8 border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand/30"
                                style={{ background: "var(--background)", borderColor: "var(--border)" }}>

                                {/* Hover glow */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ background: "radial-gradient(ellipse at top left, rgba(176,93,65,0.06), transparent 70%)" }} />

                                <div className="relative z-10">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-brand group-hover:text-white"
                                        style={{ background: "var(--surface)", color: "var(--brand)", border: "1px solid var(--border)" }}>
                                        {c.icon}
                                    </div>
                                    <h3 className="text-base font-black tracking-tight mb-2" style={{ color: "var(--foreground)" }}>{c.title}</h3>
                                    <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--foreground)", opacity: 0.55 }}>{c.desc}</p>
                                    <div className="text-[10px] font-black uppercase tracking-widest" style={{ color: "var(--brand)", opacity: 0.7 }}>{c.tag}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════ PROCESS ══════════════════════════════ */}
            <section className="px-6 md:px-12 lg:px-24 py-24" style={{ background: "var(--background)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <div className="mb-14">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] font-mono mb-3" style={{ color: "var(--brand)" }}>{`// Delivery Process`}</p>
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight" style={{ color: "var(--foreground)", letterSpacing: "-1px" }}>
                            Concept to App Store in structured sprints.
                        </h2>
                    </div>

                    <div className="space-y-0">
                        {process.map((step, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="grid grid-cols-12 gap-6 md:gap-10 py-7 border-t items-start group"
                                style={{ borderColor: "var(--border)" }}>
                                {/* Number */}
                                <div className="col-span-2 md:col-span-1">
                                    <span className="text-2xl font-black tabular-nums" style={{ color: "var(--foreground)", opacity: 0.1 }}>{step.num}</span>
                                </div>
                                {/* Step dot */}
                                <div className="hidden md:flex col-span-1 items-start pt-1.5 justify-center">
                                    <div className="w-2 h-2 rounded-full mt-1 transition-colors group-hover:bg-brand"
                                        style={{ background: "var(--border)" }} />
                                </div>
                                {/* Title */}
                                <div className="col-span-10 md:col-span-3">
                                    <h3 className="text-base font-black tracking-tight" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                </div>
                                {/* Desc */}
                                <div className="col-span-12 md:col-span-7 pl-8 md:pl-0">
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.55 }}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════ CTA ════════════════════════════════ */}
            <section className="px-6 md:px-12 lg:px-24 py-24" style={{ background: "var(--surface)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[2.5rem] overflow-hidden">

                        {/* Rich gradient background */}
                        <div className="absolute inset-0"
                            style={{ background: "linear-gradient(135deg, #b05d41 0%, #8b3d23 35%, #3d1e10 70%, #1a0d07 100%)" }} />

                        {/* Grid mesh */}
                        <div className="absolute inset-0 opacity-[0.05]"
                            style={{
                                backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                                backgroundSize: "30px 30px",
                            }} />

                        {/* Top line */}
                        <div className="absolute top-0 left-0 right-0 h-px"
                            style={{ background: "rgba(255,255,255,0.15)" }} />

                        {/* Glow orbs */}
                        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-30 transform-gpu"
                            style={{ background: "#ff9a73" }} />
                        <div className="absolute bottom-0 left-20 w-60 h-60 rounded-full blur-[80px] opacity-20 transform-gpu"
                            style={{ background: "#3ddc84" }} />

                        {/* Watermark */}
                        <span className="absolute right-0 bottom-0 font-black leading-none select-none pointer-events-none"
                            style={{ fontSize: "18vw", color: "rgba(255,255,255,0.04)" }}>APP</span>

                        <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                            <div>
                                <div className="flex items-center gap-2 mb-5">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="https://cdn.simpleicons.org/apple/ffffff" alt="Apple" className="w-5 h-5 opacity-60" />
                                    <span className="text-white/40 text-xl">+</span>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src="https://cdn.simpleicons.org/android/3ddc84" alt="Android" className="w-5 h-5" />
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.5em] font-black font-mono mb-4"
                                    style={{ color: "rgba(255,255,255,0.5)" }}>{`// Ready When You Are`}</p>
                                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white" style={{ letterSpacing: "-1.5px" }}>
                                    Let&apos;s build your<br />next mobile app.
                                </h2>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link href="/contact?service=Mobile+Application+Development&type=Mobile+Application"
                                    className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-black text-sm uppercase tracking-wide text-white border transition-all hover:-translate-y-0.5"
                                    style={{ background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.25)" }}>
                                    Start the Conversation <ArrowRight size={15} />
                                </Link>
                                <Link href="/contact?service=Mobile+Application+Development&type=Mobile+Application"
                                    className="inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-black text-sm uppercase tracking-wide transition-all hover:-translate-y-0.5"
                                    style={{ background: "white", color: "var(--brand)" }}>
                                    Get a Free Quote
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
