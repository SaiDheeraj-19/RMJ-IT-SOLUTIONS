"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
    ArrowRight, CheckCircle2, Layers, Wifi, Bell, Lock,
    Zap, Shield, Code2, ChevronRight,
} from "lucide-react";

import React, { CSSProperties } from "react";

/* ─── SVG LOGOS ─────────────────────────────────────────────────── */

interface SvgProps { className?: string; style?: CSSProperties; }

const AppleLogo = ({ className = "w-8 h-8", style }: SvgProps) => (
    <svg className={className} style={style} viewBox="0 0 814 1000" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-194.3 127.4-297.5 252.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
);

const AndroidLogo = ({ className = "w-8 h-8", style }: SvgProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C3.6889 10.1812 2.0547 12.0504 2 14.1597h20c-.0547-2.1093-1.689-3.9785-4.1185-4.8383" />
    </svg>
);

const FlutterLogo = ({ className = "w-5 h-5", style }: SvgProps) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.314 0L2.3 12 6 15.7 21.686 0zm.159 11.786l-3.714 3.714 3.714 3.714 3.4-3.714-3.4-3.714zM6.159 15.7l3.714 3.714-3.714 3.714L2.3 19.414 6.159 15.7z" />
    </svg>
);

/* ─── DATA ──────────────────────────────────────────────────────── */

const platforms = [
    {
        id: "ios",
        name: "iOS",
        tagline: "Apple Ecosystem",
        Logo: AppleLogo,
        accent: "#e8956a",
        accentDark: "#b05d41",
        bgGrad: "linear-gradient(145deg, #1a100a 0%, #2c1810 50%, #1a0e08 100%)",
        border: "rgba(232,149,106,0.2)",
        glowColor: "rgba(232,149,106,0.15)",
        headline: "Native iOS\nDevelopment",
        sub: "Pixel-perfect Swift & SwiftUI applications crafted for every Apple device — iPhone, iPad, and Apple Watch. We build apps indistinguishable from Apple's own software.",
        features: [
            "SwiftUI & UIKit for native precision",
            "Core Data & CloudKit persistence",
            "ARKit, CoreML & Vision integrations",
            "App Store Connect management",
            "TestFlight beta & phased rollouts",
            "Face ID / Touch ID biometrics",
        ],
        stack: ["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit", "ARKit", "TestFlight", "Fastlane"],
        ctaHref: "/contact?service=iOS+Application+Development&type=iOS+Application+Development&message=I%27m+interested+in+building+a+native+iOS+application.",
        cta: "Start iOS Project",
    },
    {
        id: "android",
        name: "Android",
        tagline: "Google Ecosystem",
        Logo: AndroidLogo,
        accent: "#4adc8c",
        accentDark: "#2a9a60",
        bgGrad: "linear-gradient(145deg, #081510 0%, #0f2419 50%, #081510 100%)",
        border: "rgba(74,220,140,0.2)",
        glowColor: "rgba(74,220,140,0.12)",
        headline: "Native Android\nDevelopment",
        sub: "Polished Kotlin & Jetpack Compose applications tested across thousands of device configurations — from entry-level to flagship. Built to Google's highest quality bar.",
        features: [
            "Kotlin & Jetpack Compose UI",
            "Room DB & DataStore persistence",
            "Coroutines & Flow streams",
            "Material Design 3 theming",
            "Google Play Console management",
            "Fingerprint & PIN biometrics",
        ],
        stack: ["Kotlin", "Jetpack Compose", "Room", "Coroutines", "Hilt", "Material 3", "Espresso", "Fastlane"],
        ctaHref: "/contact?service=Android+Application+Development&type=Android+Application+Development&message=I%27m+interested+in+building+a+native+Android+application.",
        cta: "Start Android Project",
    },
];

const capabilities = [
    {
        Logo: FlutterLogo,
        logoColor: "#54C5F8",
        title: "Cross-Platform with Flutter",
        desc: "One shared codebase, two premium apps. Flutter with Dart AOT compilation delivers near-native performance without the double maintenance cost.",
        tag: "Flutter · React Native · Expo",
        tagIcon: <Layers size={11} />,
    },
    {
        icon: <Wifi className="w-5 h-5" />,
        logoColor: "var(--brand)",
        title: "Offline-First Architecture",
        desc: "Apps that work without internet. Background sync, SQLite/Realm locally, delta updates, and conflict-free resolution — built in from day one.",
        tag: "SQLite · Realm · WorkManager",
        tagIcon: <Wifi size={11} />,
    },
    {
        icon: <Bell className="w-5 h-5" />,
        logoColor: "var(--brand)",
        title: "Push & Engagement",
        desc: "Full FCM + APNs integration. Topic targeting, rich notifications with deep-links, open-rate analytics, and in-app overlays.",
        tag: "FCM · APNs · Deep Links",
        tagIcon: <Bell size={11} />,
    },
    {
        icon: <Lock className="w-5 h-5" />,
        logoColor: "var(--brand)",
        title: "Security & Compliance",
        desc: "Keychain/Keystore encrypted storage, SSL certificate pinning, biometric auth, code obfuscation, and OWASP Mobile Top 10 compliance.",
        tag: "Keychain · Pinning · OWASP",
        tagIcon: <Shield size={11} />,
    },
];

const processSteps = [
    { num: "01", title: "Platform Strategy", desc: "Define the right platform — native iOS, native Android, or Flutter — based on your audience, budget, and timeline." },
    { num: "02", title: "UX Prototype", desc: "Figma prototype validated with real users before a single line of code. Eliminates costly design rework downstream." },
    { num: "03", title: "Sprint Builds", desc: "2-week sprints with TestFlight or Play Internal builds delivered each cycle. Tight, structured feedback loops." },
    { num: "04", title: "QA Matrix Testing", desc: "Automated + manual testing across iOS versions, Android API levels, OEM skins, screen densities, and accessibility." },
    { num: "05", title: "Store Launch", desc: "Full App Store / Play Console submission — metadata, screenshots, privacy labels, staged rollout, crash monitoring." },
];

const qualityPillars = [
    { icon: <Zap size={14} />, label: "60 fps", sub: "Animations" },
    { icon: <Shield size={14} />, label: "OWASP", sub: "Compliant" },
    { icon: <Code2 size={14} />, label: "Clean", sub: "Architecture" },
    { icon: <CheckCircle2 size={14} />, label: "Store", sub: "Ready" },
];

/* ─── COMPONENT ─────────────────────────────────────────────────── */

export default function MobileAppsPage() {
    const [active, setActive] = useState<"ios" | "android">("ios");
    const p = platforms.find((x) => x.id === active)!;

    return (
        <main style={{ background: "var(--background)", color: "var(--foreground)" }}>

            {/* ══════════════════════════════════ HERO ═══════════════════════════════ */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-40 pb-24 px-6 md:px-12 lg:px-24">

                {/* Background layers */}
                <div className="absolute inset-0 z-0" style={{
                    background: `radial-gradient(ellipse 65% 55% at 75% 35%, rgba(176,93,65,0.09) 0%, transparent 65%),
                                 radial-gradient(ellipse 45% 40% at 20% 75%, rgba(74,220,140,0.05) 0%, transparent 60%)`
                }} />
                <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
                    backgroundSize: "52px 52px",
                }} />

                <div className="relative z-10 max-w-[1440px] mx-auto w-full">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 mb-12">
                        <Link href="/services"
                            className="text-[10px] font-black uppercase tracking-[0.45em] font-mono hover:opacity-100 transition-opacity"
                            style={{ color: "var(--brand)", opacity: 0.7 }}>
                            ← Services
                        </Link>
                        <ChevronRight size={10} style={{ color: "var(--foreground)", opacity: 0.2 }} />
                        <span className="text-[10px] font-black uppercase tracking-[0.45em] font-mono" style={{ color: "var(--foreground)", opacity: 0.3 }}>Mobile Applications</span>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 xl:gap-24 items-center">

                        {/* ── Left column ── */}
                        <div>
                            {/* Eyebrow pill with real logos */}
                            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
                                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full border mb-8"
                                style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                                <AppleLogo className="w-4 h-4" style={{ color: "var(--foreground)", opacity: 0.7 }} />
                                <span className="w-px h-4 opacity-20" style={{ background: "var(--foreground)" }} />
                                <AndroidLogo className="w-4 h-4" style={{ color: "#4adc8c" }} />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] font-mono ml-1" style={{ color: "var(--foreground)", opacity: 0.55 }}>iOS & Android Engineering</span>
                            </motion.div>

                            {/* Hero H1 */}
                            <motion.h1
                                initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                                className="font-black leading-[0.88] tracking-tighter mb-8"
                                style={{ fontSize: "clamp(3rem, 7vw, 6rem)", letterSpacing: "-3px" }}>
                                Mobile apps built<br />
                                to feel{" "}
                                <span style={{
                                    background: "linear-gradient(135deg, var(--brand) 0%, #f59768 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}>
                                    truly native.
                                </span>
                            </motion.h1>

                            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.17 }}
                                className="text-lg leading-relaxed mb-10 max-w-lg"
                                style={{ color: "var(--foreground)", opacity: 0.5 }}>
                                We engineer Swift · Kotlin · Flutter applications that are indistinguishable from the platform they live on — fast, secure, and beautiful by default.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.26 }}
                                className="flex flex-wrap items-center gap-4">
                                <Link href="/contact?service=Mobile+Application+Development&type=Mobile+Application"
                                    className="btn-glow inline-flex items-center gap-3 px-8 py-4 text-sm font-bold">
                                    Start a Project <ArrowRight size={15} />
                                </Link>
                                <Link href="#platforms"
                                    className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity"
                                    style={{ color: "var(--foreground)", opacity: 0.45 }}>
                                    View platforms ↓
                                </Link>
                            </motion.div>

                            {/* Quality pillars */}
                            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.36 }}
                                className="flex flex-wrap gap-3 mt-12 pt-10 border-t"
                                style={{ borderColor: "var(--border)" }}>
                                {qualityPillars.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2.5 px-4 py-2 rounded-full border"
                                        style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                                        <span style={{ color: "var(--brand)" }}>{item.icon}</span>
                                        <div>
                                            <span className="text-xs font-black">{item.label}</span>
                                            <span className="text-xs ml-1" style={{ opacity: 0.45 }}>{item.sub}</span>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* ── Right column — Interactive platform card ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="hidden lg:block">

                            {/* Tab toggle */}
                            <div className="flex gap-1.5 mb-4 p-1 rounded-2xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                                {platforms.map((pl) => (
                                    <button key={pl.id}
                                        onClick={() => setActive(pl.id as "ios" | "android")}
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300"
                                        style={{
                                            background: active === pl.id ? pl.accent : "transparent",
                                            color: active === pl.id ? "#fff" : "var(--foreground)",
                                            opacity: active === pl.id ? 1 : 0.4,
                                        }}>
                                        <pl.Logo className="w-3.5 h-3.5" />
                                        {pl.name}
                                    </button>
                                ))}
                            </div>

                            {/* Card */}
                            <AnimatePresence mode="wait">
                                <motion.div key={active}
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -18 }}
                                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative rounded-[1.75rem] overflow-hidden"
                                    style={{ background: p.bgGrad, border: `1px solid ${p.border}` }}>

                                    {/* Top glow line */}
                                    <div className="absolute top-0 left-0 right-0 h-[1px]"
                                        style={{ background: `linear-gradient(90deg, transparent, ${p.accent}90, transparent)` }} />
                                    {/* Corner glow */}
                                    <div className="absolute top-[-50px] right-[-50px] w-48 h-48 rounded-full blur-[80px] transform-gpu"
                                        style={{ background: p.glowColor }} />

                                    <div className="relative z-10 p-8">
                                        {/* Header */}
                                        <div className="flex items-center gap-3.5 mb-5">
                                            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                                style={{ background: `${p.accent}18`, border: `1px solid ${p.border}` }}>
                                                <p.Logo className="w-6 h-6" style={{ color: p.accent } as React.CSSProperties} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-black uppercase tracking-[0.45em] font-mono mb-0.5" style={{ color: p.accent }}>{p.tagline}</p>
                                                <div className="text-lg font-black text-white leading-tight whitespace-pre-line" style={{ letterSpacing: "-0.5px" }}>{p.headline}</div>
                                            </div>
                                        </div>

                                        <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>{p.sub}</p>

                                        <ul className="space-y-2.5 mb-5">
                                            {p.features.slice(0, 4).map((f, i) => (
                                                <li key={i} className="flex items-center gap-2.5 text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
                                                    <CheckCircle2 size={13} style={{ color: p.accent, flexShrink: 0 }} />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {p.stack.map((t) => (
                                                <span key={t} className="px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-wide"
                                                    style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <Link href={p.ctaHref}
                                            className="inline-flex w-full items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-black uppercase tracking-wide text-white transition-all hover:opacity-90"
                                            style={{ background: `linear-gradient(135deg, ${p.accent} 0%, ${p.accentDark} 100%)` }}>
                                            {p.cta} <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════ PLATFORM CARDS ═════════════════════════ */}
            <section id="platforms" style={{ scrollMarginTop: "80px" }}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {platforms.map((pl, idx) => (
                        <motion.div key={pl.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative overflow-hidden group"
                            style={{ background: pl.bgGrad, minHeight: "560px" }}>

                            {/* Top border line */}
                            <div className="absolute top-0 left-0 right-0 h-[1px]"
                                style={{ background: `linear-gradient(90deg, transparent, ${pl.accent}80, transparent)` }} />

                            {/* Left border for the right card */}
                            {idx === 1 && (
                                <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-[1px]"
                                    style={{ background: `linear-gradient(180deg, transparent, ${pl.border}, transparent)` }} />
                            )}

                            {/* Glow orb */}
                            <div className="absolute top-[-60px] right-[-60px] w-72 h-72 rounded-full blur-[110px] opacity-40 transform-gpu"
                                style={{ background: pl.glowColor }} />

                            {/* Big watermark logo */}
                            <div className="absolute bottom-[-10%] right-[-5%] opacity-[0.04] transform-gpu"
                                style={{ color: pl.accent }}>
                                <pl.Logo className="w-72 h-72" />
                            </div>

                            <div className="relative z-10 p-10 md:p-14 flex flex-col h-full">
                                {/* Header row */}
                                <div className="flex items-start justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                                            style={{ background: `${pl.accent}18`, border: `1.5px solid ${pl.border}` }}>
                                            <pl.Logo className="w-8 h-8" style={{ color: pl.accent } as React.CSSProperties} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.5em] font-mono mb-1" style={{ color: pl.accent }}>{pl.tagline}</p>
                                            <div className="text-2xl md:text-3xl font-black text-white leading-tight whitespace-pre-line" style={{ letterSpacing: "-1px", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 900 }}>
                                                {pl.headline}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)", maxWidth: "460px" }}>{pl.sub}</p>

                                {/* Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {pl.features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-2.5 text-sm font-medium"
                                            style={{ color: "rgba(255,255,255,0.7)" }}>
                                            <CheckCircle2 size={14} style={{ color: pl.accent, flexShrink: 0 }} />
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                {/* Stack chips */}
                                <div className="flex flex-wrap gap-1.5 mb-10">
                                    {pl.stack.map((t) => (
                                        <span key={t}
                                            className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide"
                                            style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="mt-auto">
                                    <Link href={pl.ctaHref}
                                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-black uppercase tracking-wide text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                                        style={{ background: `linear-gradient(135deg, ${pl.accent} 0%, ${pl.accentDark} 100%)` }}>
                                        {pl.cta} <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════ CROSS-PLATFORM STRIP ══════════════════════════ */}
            <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-b"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{ background: "rgba(84,197,248,0.12)", border: "1px solid rgba(84,197,248,0.25)" }}>
                                    <FlutterLogo className="w-5 h-5" style={{ color: "#54C5F8" } as React.CSSProperties} />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest font-mono" style={{ color: "#54C5F8" }}>Flutter</p>
                                    <p className="text-sm font-semibold opacity-60">Cross-platform option</p>
                                </div>
                            </div>
                            <div className="h-8 w-px hidden md:block" style={{ background: "var(--border)" }} />
                            <p className="text-sm leading-relaxed opacity-50 max-w-md">
                                Need both iOS &amp; Android with a single codebase? We also build production-grade Flutter apps — near-native performance, one team, faster delivery.
                            </p>
                        </div>
                        <Link href="/contact?service=Flutter+Application+Development"
                            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:opacity-80 transition-opacity"
                            style={{ color: "var(--brand)" }}>
                            Explore Flutter <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════ CAPABILITIES ═══════════════════════════ */}
            <section className="px-6 md:px-12 lg:px-24 py-28 border-b"
                style={{ background: "var(--background)", borderColor: "var(--border)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="mb-16">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] font-mono mb-3" style={{ color: "var(--brand)" }}>// Built-In Capabilities</p>
                        <h2 className="text-2xl md:text-3xl font-black" style={{ letterSpacing: "-1.5px" }}>
                            What we bring to <span style={{ color: "var(--brand)" }}>every</span> build.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {capabilities.map((c, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative rounded-2xl p-8 border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                                style={{ background: "var(--surface)", borderColor: "var(--border)" }}>

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ background: "radial-gradient(ellipse at top left, rgba(176,93,65,0.08), transparent 70%)" }} />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border transition-all duration-300"
                                        style={{ background: "var(--background)", color: c.logoColor, borderColor: "var(--border)" }}>
                                        {c.Logo ? <c.Logo className="w-5 h-5" /> : c.icon}
                                    </div>
                                    <div className="text-base font-black tracking-tight mb-2" style={{ fontSize: "1rem", fontWeight: 900 }}>{c.title}</div>
                                    <p className="text-sm leading-relaxed mb-5" style={{ opacity: 0.5 }}>{c.desc}</p>
                                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest"
                                        style={{ color: "var(--brand)", opacity: 0.8 }}>
                                        {c.tagIcon}
                                        {c.tag}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════ PROCESS ══════════════════════════════ */}
            <section className="px-6 md:px-12 lg:px-24 py-28 border-b"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="mb-16">
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] font-mono mb-3" style={{ color: "var(--brand)" }}>// Delivery Process</p>
                        <h2 className="text-2xl md:text-3xl font-black" style={{ letterSpacing: "-1.5px" }}>
                            Concept to App Store in structured sprints.
                        </h2>
                    </motion.div>

                    <div>
                        {processSteps.map((step, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                                className="grid grid-cols-12 gap-6 md:gap-10 py-7 border-t items-start group"
                                style={{ borderColor: "var(--border)" }}>
                                <div className="col-span-2 md:col-span-1">
                                    <span className="text-2xl font-black tabular-nums" style={{ opacity: 0.1 }}>{step.num}</span>
                                </div>
                                <div className="hidden md:flex col-span-1 items-start justify-center pt-2.5">
                                    <div className="w-2 h-2 rounded-full transition-colors duration-300 group-hover:bg-brand"
                                        style={{ background: "var(--border)" }} />
                                </div>
                                <div className="col-span-10 md:col-span-3">
                                    <div className="text-base font-black" style={{ fontSize: "0.9375rem", fontWeight: 900 }}>{step.title}</div>
                                </div>
                                <div className="col-span-12 md:col-span-7 pl-8 md:pl-0">
                                    <p className="text-sm leading-relaxed" style={{ opacity: 0.5 }}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                        <div className="border-t" style={{ borderColor: "var(--border)" }} />
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════ CTA ════════════════════════════════ */}
            <section className="px-6 md:px-12 lg:px-24 py-28"
                style={{ background: "var(--background)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="relative rounded-3xl overflow-hidden">

                        {/* Rich gradient bg */}
                        <div className="absolute inset-0" style={{
                            background: "linear-gradient(135deg, #b05d41 0%, #7a3520 40%, #1c0c06 100%)"
                        }} />

                        {/* Grid mesh */}
                        <div className="absolute inset-0 opacity-[0.04]" style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                            backgroundSize: "30px 30px",
                        }} />

                        {/* Top line */}
                        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "rgba(255,255,255,0.12)" }} />

                        {/* Glow orbs */}
                        <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[110px] opacity-25 transform-gpu"
                            style={{ background: "#f59768" }} />
                        <div className="absolute bottom-0 left-16 w-64 h-64 rounded-full blur-[90px] opacity-15 transform-gpu"
                            style={{ background: "#4adc8c" }} />

                        {/* Watermark logos */}
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.05] flex items-center gap-6 transform-gpu">
                            <AppleLogo className="w-48 h-48" style={{ color: "white" } as React.CSSProperties} />
                            <AndroidLogo className="w-48 h-48" style={{ color: "white" } as React.CSSProperties} />
                        </div>

                        <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                            <div>
                                {/* Platform logos */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                                        style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
                                        <AppleLogo className="w-5 h-5 text-white opacity-80" />
                                    </div>
                                    <span className="text-white/30 text-lg font-light">+</span>
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                                        style={{ background: "rgba(74,220,140,0.15)", border: "1px solid rgba(74,220,140,0.25)" }}>
                                        <AndroidLogo className="w-5 h-5" style={{ color: "#4adc8c" }} />
                                    </div>
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.5em] font-black font-mono mb-4 text-white/50">{"// Ready When You Are"}</p>
                                <h2 className="text-3xl md:text-4xl font-black text-white" style={{ letterSpacing: "-1.5px" }}>
                                    Let&apos;s build your<br />next mobile app.
                                </h2>
                                <p className="mt-4 text-sm leading-relaxed text-white/45 max-w-sm">
                                    Tell us about your idea — we&apos;ll map out the right platform, stack, and timeline to bring it to life.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                                <Link href="/contact?service=Mobile+Application+Development&type=Mobile+Application"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wide text-white border transition-all hover:-translate-y-0.5"
                                    style={{ background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.2)" }}>
                                    Start the Conversation <ArrowRight size={15} />
                                </Link>
                                <Link href="/contact?service=Mobile+Application+Development&type=Mobile+Application"
                                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wide transition-all hover:-translate-y-0.5"
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
