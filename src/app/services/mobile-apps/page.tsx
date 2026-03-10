"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import React, { CSSProperties } from "react";
import { ArrowRight, CheckCircle2, Layers, Wifi, Bell, Shield, ChevronRight, X, Zap, Globe, Cpu, LayoutGrid } from "lucide-react";

/* ── SVG Logos ── */
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

/* ── Types & Data ── */
type PlatformChoice = "ios" | "android" | "both";

const PLATFORMS = [
    {
        id: "ios" as const,
        name: "iOS", tagline: "Apple Ecosystem",
        Logo: AppleLogo, accent: "#e8956a", accentLight: "#fff3ed", accentMid: "#f59768",
        headline: "Native iOS\nDevelopment",
        sub: "Pixel-perfect Swift & SwiftUI applications crafted for every Apple device — iPhone, iPad, and Apple Watch.",
        features: ["SwiftUI & UIKit for native precision", "Core Data & CloudKit persistence", "ARKit, CoreML & Vision integrations", "App Store Connect management", "TestFlight beta & phased rollouts", "Face ID / Touch ID biometrics"],
        stack: ["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit", "ARKit", "TestFlight", "Fastlane"],
        ctaHref: "/contact?service=iOS+Application+Development",
        cta: "Start iOS Project",
    },
    {
        id: "android" as const,
        name: "Android", tagline: "Google Ecosystem",
        Logo: AndroidLogo, accent: "#3dba78", accentLight: "#edfbf4", accentMid: "#4adc8c",
        headline: "Native Android\nDevelopment",
        sub: "Polished Kotlin & Jetpack Compose applications tested across thousands of device configurations — from entry-level to flagship.",
        features: ["Kotlin & Jetpack Compose UI", "Room DB & DataStore persistence", "Coroutines & Flow streams", "Material Design 3 theming", "Google Play Console management", "Fingerprint & PIN biometrics"],
        stack: ["Kotlin", "Jetpack Compose", "Room", "Coroutines", "Hilt", "Material 3", "Espresso", "Fastlane"],
        ctaHref: "/contact?service=Android+Application+Development",
        cta: "Start Android Project",
    },
];

const CAPABILITIES = [
    { Logo: FlutterLogo, logoColor: "#54C5F8", bgColor: "rgba(84,197,248,0.1)", title: "Cross-Platform with Flutter", desc: "One shared codebase, two premium apps. Near-native performance without double maintenance cost.", tag: "Flutter · React Native · Expo", tagIcon: <Layers size={11} /> },
    { icon: <Wifi className="w-5 h-5" />, logoColor: "var(--brand)", bgColor: "rgba(176,93,65,0.1)", title: "Offline-First Architecture", desc: "Apps that work without internet. Background sync, SQLite/Realm locally, and conflict-free resolution.", tag: "SQLite · Realm · WorkManager", tagIcon: <Wifi size={11} /> },
    { icon: <Bell className="w-5 h-5" />, logoColor: "#f59768", bgColor: "rgba(245,151,104,0.1)", title: "Push & Engagement", desc: "Full FCM + APNs integration. Topic targeting, rich notifications, deep-links, and open-rate analytics.", tag: "FCM · APNs · Deep Links", tagIcon: <Bell size={11} /> },
    { icon: <Shield className="w-5 h-5" />, logoColor: "#8b5cf6", bgColor: "rgba(139,92,246,0.1)", title: "Security & Compliance", desc: "Keychain/Keystore encryption, SSL pinning, biometric auth, and OWASP Mobile Top 10 compliance.", tag: "Keychain · Pinning · OWASP", tagIcon: <Shield size={11} /> },
];

const PROCESS = [
    { num: "01", title: "Platform Strategy", desc: "Define the right platform — native iOS, native Android, or Flutter — based on your audience, budget, and timeline.", color: "#b05d41" },
    { num: "02", title: "UX Prototype", desc: "Figma prototype validated with real users before a single line of code. Eliminates costly design rework downstream.", color: "#e8956a" },
    { num: "03", title: "Sprint Builds", desc: "2-week sprints with TestFlight or Play Internal builds delivered each cycle. Tight, structured feedback loops.", color: "#3dba78" },
    { num: "04", title: "QA Matrix Testing", desc: "Automated + manual testing across iOS versions, Android API levels, OEM skins, screen densities, and accessibility.", color: "#54C5F8" },
    { num: "05", title: "Store Launch", desc: "Full App Store / Play Console submission — metadata, screenshots, privacy labels, staged rollout, crash monitoring.", color: "#8b5cf6" },
];

const FLUTTER_FEATURES = [
    { icon: <Zap className="w-5 h-5" />, color: "#f59768", bg: "rgba(245,151,104,0.1)", title: "Near-Native Performance", desc: "Dart AOT compilation renders directly to a Skia/Impeller canvas — no JavaScript bridge, no slowdowns. Runs at 60–120 fps on both platforms." },
    { icon: <LayoutGrid className="w-5 h-5" />, color: "#54C5F8", bg: "rgba(84,197,248,0.1)", title: "Single Codebase, Two Apps", desc: "One team, one sprint cycle, one repo — deployed to both the App Store and Google Play. Cuts development time and maintenance cost in half." },
    { icon: <Globe className="w-5 h-5" />, color: "#3dba78", bg: "rgba(61,186,120,0.1)", title: "Pixel-Perfect UI Everywhere", desc: "Flutter's widget system gives granular control over every pixel. Rich animations and custom UIs that look identical on every device." },
    { icon: <Cpu className="w-5 h-5" />, color: "#8b5cf6", bg: "rgba(139,92,246,0.1)", title: "Full Native API Access", desc: "Camera, GPS, Bluetooth, biometrics, push notifications, and platform channels — full native capability with cross-platform reach." },
];

/* ══════════════════════════════════════════════════════════════════
   PLATFORM SELECTOR
══════════════════════════════════════════════════════════════════ */
const CHOICES = [
    { id: "ios" as const, label: "iOS App", sub: "iPhone, iPad & Apple Watch", Logo: AppleLogo, accent: "#e8956a", accentLight: "#fff3ed", accentMid: "#f59768", desc: "Build a pixel-perfect native app for Apple's ecosystem using Swift and SwiftUI." },
    { id: "android" as const, label: "Android App", sub: "Phones, Tablets & Foldables", Logo: AndroidLogo, accent: "#3dba78", accentLight: "#edfbf4", accentMid: "#4adc8c", desc: "Build a polished Kotlin + Jetpack Compose app across the full Android device spectrum." },
    {
        id: "both" as const, label: "Both Platforms", sub: "iOS & Android Together",
        Logo: () => <div className="flex items-center gap-1"><AppleLogo className="w-6 h-6" style={{ color: "#e8956a" }} /><span style={{ opacity: 0.3 }}>+</span><AndroidLogo className="w-6 h-6" style={{ color: "#3dba78" }} /></div>,
        accent: "#b05d41", accentLight: "#fdf0ea", accentMid: "#f59768", desc: "Native apps for both iOS and Android — or a Flutter cross-platform solution. We cover all paths.",
    },
];

function PlatformSelector({ onSelect }: { onSelect: (p: PlatformChoice) => void }) {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Layered ambient background */}
            <div className="absolute inset-0" style={{ background: "var(--background)" }} />
            <div className="absolute top-[8%] right-[6%] w-[520px] h-[520px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(232,149,106,0.2) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <div className="absolute bottom-[8%] left-[4%] w-[380px] h-[380px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(84,197,248,0.13) 0%, transparent 70%)", filter: "blur(60px)" }} />
            <div className="absolute top-[45%] left-[38%] w-[280px] h-[280px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(61,186,120,0.09) 0%, transparent 70%)", filter: "blur(70px)" }} />
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)", backgroundSize: "44px 44px", opacity: 0.5 }} />

            <div className="relative z-10 w-full px-6 md:px-14 lg:px-24 pt-40 pb-24">
                {/* Breadcrumb */}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                    className="flex items-center gap-2 mb-16 max-w-[1200px] mx-auto">
                    <Link href="/services" className="text-[10px] font-black uppercase tracking-[0.45em] font-mono hover:opacity-100 transition-opacity" style={{ color: "var(--brand)", opacity: 0.65 }}>← Services</Link>
                    <ChevronRight size={10} style={{ opacity: 0.2 }} />
                    <span className="text-[10px] font-black uppercase tracking-[0.45em] font-mono" style={{ opacity: 0.3 }}>Mobile Applications</span>
                </motion.div>

                {/* Hero text */}
                <div className="max-w-[1200px] mx-auto mb-14">
                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8"
                        style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--brand)" }} />
                        <span className="text-[10px] font-black uppercase tracking-[0.45em] font-mono" style={{ opacity: 0.55 }}>Mobile Application Development</span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="font-black leading-none mb-6" style={{ fontSize: "clamp(2.8rem, 6vw, 5.2rem)", letterSpacing: "-3px" }}>
                        Which platform are<br />
                        <span style={{ background: "linear-gradient(135deg, var(--brand) 0%, #f59768 60%, #e8956a 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            you building for?
                        </span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}
                        className="text-lg max-w-xl leading-relaxed" style={{ opacity: 0.5 }}>
                        Choose your target platform and we&apos;ll show you exactly how we build for it — the tech stack, the process, and what to expect.
                    </motion.p>
                </div>

                {/* Selector cards */}
                <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                    {CHOICES.map((c, i) => (
                        <motion.button key={c.id}
                            initial={{ opacity: 0, y: 40, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.65, delay: 0.22 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            whileHover={{ y: -8, scale: 1.015 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onSelect(c.id)}
                            className="group relative rounded-[1.75rem] text-left overflow-hidden flex flex-col"
                            style={{ background: "var(--surface)", border: "1px solid var(--border)", cursor: "pointer", minHeight: "320px", transition: "box-shadow 0.35s, border-color 0.35s" }}
                            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = `${c.accent}60`; el.style.boxShadow = `0 20px 60px -12px ${c.accent}30, 0 0 0 1px ${c.accent}20`; }}
                            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border)"; el.style.boxShadow = "none"; }}>

                            {/* Glow sweep */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[1.75rem]"
                                style={{ background: `radial-gradient(ellipse 80% 55% at 15% 0%, ${c.accentLight} 0%, transparent 65%)` }} />
                            {/* Top shimmer */}
                            <div className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `linear-gradient(90deg, transparent, ${c.accent}cc, transparent)` }} />

                            <div className="relative z-10 p-8 md:p-9 flex flex-col h-full">
                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7 transition-transform duration-300 group-hover:scale-110"
                                    style={{ background: c.accentLight, border: `1.5px solid ${c.accent}40`, boxShadow: `0 8px 24px -8px ${c.accent}40` }}>
                                    <c.Logo className="w-8 h-8" style={{ color: c.accent } as CSSProperties} />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-[0.45em] font-mono mb-2" style={{ color: c.accent }}>{c.sub}</p>
                                <div className="text-2xl font-black mb-3 leading-tight" style={{ letterSpacing: "-0.8px" }}>{c.label}</div>
                                <p className="text-sm leading-relaxed flex-1 mb-8" style={{ opacity: 0.5 }}>{c.desc}</p>
                                <div className="flex items-center justify-between pt-5 border-t" style={{ borderColor: `${c.accent}25` }}>
                                    <span className="text-xs font-black uppercase tracking-[0.3em]" style={{ color: c.accent }}>Select Platform</span>
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-[-45deg]"
                                        style={{ background: c.accentLight, color: c.accent }}>
                                        <ArrowRight size={15} />
                                    </div>
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>

                {/* Flutter callout */}
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.58 }}
                    className="max-w-[1200px] mx-auto mt-6 flex items-center gap-4 px-6 py-4 rounded-2xl border"
                    style={{ background: "rgba(84,197,248,0.05)", borderColor: "rgba(84,197,248,0.22)" }}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(84,197,248,0.12)", border: "1.5px solid rgba(84,197,248,0.28)" }}>
                        <FlutterLogo className="w-4 h-4" style={{ color: "#54C5F8" }} />
                    </div>
                    <p className="text-sm" style={{ opacity: 0.55 }}>
                        Want both platforms from one codebase?{" "}
                        <button onClick={() => onSelect("both")} className="font-bold hover:opacity-80 transition-opacity" style={{ color: "#54C5F8", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                            Explore Flutter cross-platform development →
                        </button>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

/* ══════════════════════════════════════════════════════════════════
   PLATFORM CONTENT
══════════════════════════════════════════════════════════════════ */
function PlatformPage({ choice, onBack }: { choice: PlatformChoice; onBack: () => void }) {
    const [showFlutter, setShowFlutter] = useState(false);
    const visible = choice === "both" ? PLATFORMS : PLATFORMS.filter(p => p.id === choice);

    const heroTitle = choice === "ios"
        ? <><span>Native iOS apps<br />built for </span><span style={{ color: "#e8956a" }}>Apple.</span></>
        : choice === "android"
            ? <><span>Native Android apps<br />built for </span><span style={{ color: "#3dba78" }}>Google.</span></>
            : <>Apps built for<br /><span style={{ background: "linear-gradient(135deg, var(--brand) 0%, #f59768 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>every platform.</span></>;

    const heroSub = choice === "ios"
        ? "We engineer Swift & SwiftUI applications indistinguishable from Apple's own software — fast, secure, and beautiful by default."
        : choice === "android"
            ? "We engineer Kotlin & Jetpack Compose applications tested across thousands of device configurations — from entry-level to flagship."
            : "We build native iOS and Android apps in parallel, or a single Flutter codebase — whichever fits your timeline and budget best.";

    return (
        <motion.div key={choice} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>

            {/* ── HERO ── */}
            <section className="relative overflow-hidden pt-40 pb-24 px-6 md:px-12 lg:px-24">
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 65% 55% at 80% 20%, rgba(232,149,106,0.1) 0%, transparent 60%), radial-gradient(ellipse 50% 45% at 15% 85%, rgba(84,197,248,0.06) 0%, transparent 55%)" }} />
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, var(--border) 1px, transparent 1px)", backgroundSize: "40px 40px", opacity: 0.45 }} />
                <div className="relative z-10 max-w-[1440px] mx-auto">
                    {/* Back */}
                    <div className="flex items-center gap-2 mb-12">
                        <button onClick={onBack} className="text-[10px] font-black uppercase tracking-[0.45em] font-mono hover:opacity-100 transition-opacity" style={{ color: "var(--brand)", opacity: 0.65 }}>← Change Platform</button>
                        <ChevronRight size={10} style={{ opacity: 0.2 }} />
                        <span className="text-[10px] font-black uppercase tracking-[0.45em] font-mono" style={{ opacity: 0.3 }}>{choice === "ios" ? "iOS" : choice === "android" ? "Android" : "iOS & Android"}</span>
                    </div>
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
                            className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full border mb-8"
                            style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                            {choice !== "android" && <AppleLogo className="w-4 h-4" style={{ opacity: 0.6 }} />}
                            {choice === "both" && <span className="w-px h-4 opacity-20" style={{ background: "currentColor" }} />}
                            {choice !== "ios" && <AndroidLogo className="w-4 h-4" style={{ color: "#3dba78" }} />}
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] font-mono ml-1" style={{ opacity: 0.55 }}>
                                {choice === "ios" ? "iOS Engineering" : choice === "android" ? "Android Engineering" : "iOS & Android Engineering"}
                            </span>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="font-black leading-none tracking-tighter mb-6" style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", letterSpacing: "-3px" }}>
                            {heroTitle}
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.16 }}
                            className="text-lg leading-relaxed mb-10 max-w-xl" style={{ opacity: 0.55 }}>
                            {heroSub}
                        </motion.p>
                        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.24 }}
                            className="flex flex-wrap items-center gap-4">
                            <Link href={`/contact?service=Mobile+Application+Development`} className="btn-glow inline-flex items-center gap-3 px-8 py-4 text-sm font-bold">
                                Start a Project <ArrowRight size={15} />
                            </Link>
                            <Link href="#platforms" className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-80 transition-opacity" style={{ opacity: 0.4 }}>
                                See what we build ↓
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── PLATFORM CARDS ── */}
            <section id="platforms" className="px-6 md:px-12 lg:px-24 py-20 border-t" style={{ scrollMarginTop: "80px", borderColor: "var(--border)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                        <p className="text-[11px] font-black uppercase tracking-[0.5em] font-mono mb-3" style={{ color: "var(--brand)" }}>Platform Expertise</p>
                        <h2 className="font-black" style={{ letterSpacing: "-1.5px" }}>
                            {choice === "both" ? <>Built for every <span style={{ color: "var(--brand)" }}>platform.</span></> : <>What we build for <span style={{ color: "var(--brand)" }}>{choice === "ios" ? "iOS" : "Android"}</span>.</>}
                        </h2>
                    </motion.div>
                    <div className={`grid grid-cols-1 ${visible.length > 1 ? "lg:grid-cols-2" : ""} gap-6`}>
                        {visible.map((pl, idx) => (
                            <motion.div key={pl.id}
                                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="relative overflow-hidden rounded-3xl border group hover:-translate-y-1 transition-all duration-300"
                                style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                                <div className="absolute top-0 inset-x-0 h-1" style={{ background: `linear-gradient(90deg, ${pl.accent}, ${pl.accentMid})` }} />
                                <div className="absolute top-0 inset-x-0 h-36 pointer-events-none" style={{ background: `linear-gradient(180deg, ${pl.accentLight}60 0%, transparent 100%)` }} />
                                <div className="absolute bottom-[-5%] right-[-3%] opacity-[0.05]" style={{ color: pl.accent }}><pl.Logo className="w-60 h-60" /></div>
                                <div className="relative z-10 p-10 md:p-12 flex flex-col" style={{ minHeight: "480px" }}>
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                                            style={{ background: pl.accentLight, border: `1.5px solid ${pl.accent}40` }}>
                                            <pl.Logo className="w-8 h-8" style={{ color: pl.accent } as CSSProperties} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-[0.5em] font-mono mb-1" style={{ color: pl.accent }}>{pl.tagline}</p>
                                            <div className="text-2xl font-black leading-tight whitespace-pre-line" style={{ letterSpacing: "-1px" }}>{pl.headline}</div>
                                        </div>
                                    </div>
                                    <p className="leading-relaxed mb-8" style={{ opacity: 0.55, maxWidth: "440px" }}>{pl.sub}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                        {pl.features.map((f, i) => (
                                            <div key={i} className="flex items-center gap-2.5 text-sm font-medium" style={{ opacity: 0.75 }}>
                                                <CheckCircle2 size={14} style={{ color: pl.accent, flexShrink: 0 }} />{f}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 mb-10">
                                        {pl.stack.map(t => (
                                            <span key={t} className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border"
                                                style={{ background: "var(--background)", borderColor: "var(--border)", opacity: 0.7 }}>{t}</span>
                                        ))}
                                    </div>
                                    <div className="mt-auto">
                                        <Link href={pl.ctaHref} className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-black uppercase tracking-wide text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                                            style={{ background: `linear-gradient(135deg, ${pl.accent} 0%, ${pl.accentMid} 100%)` }}>
                                            {pl.cta} <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FLUTTER STRIP ── */}
            <section className="px-6 md:px-12 lg:px-24 border-t border-b" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <div className="max-w-[1440px] mx-auto py-8">
                    <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(84,197,248,0.12)", border: "1.5px solid rgba(84,197,248,0.3)" }}>
                                    <FlutterLogo className="w-5 h-5" style={{ color: "#54C5F8" } as CSSProperties} />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest font-mono" style={{ color: "#54C5F8" }}>Flutter Option</p>
                                    <p className="text-sm font-semibold" style={{ opacity: 0.5 }}>Cross-platform · One codebase</p>
                                </div>
                            </div>
                            <div className="h-8 w-px hidden md:block" style={{ background: "var(--border)" }} />
                            <p className="text-sm leading-relaxed max-w-md" style={{ opacity: 0.5 }}>
                                {choice === "both" ? "Prefer one codebase over two native apps? Flutter delivers near-native performance on both platforms — faster delivery and lower cost." : "Need both iOS & Android later? We can extend your app to a Flutter cross-platform solution with minimal rework."}
                            </p>
                        </div>
                        <button onClick={() => setShowFlutter(!showFlutter)} className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest hover:opacity-80 transition-opacity" style={{ color: "#54C5F8" }}>
                            {showFlutter ? "Close Flutter" : "Explore Flutter"} <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </section>

            {/* ── FLUTTER EXPANDED ── */}
            <AnimatePresence>
                {showFlutter && (
                    <motion.section key="flutter" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden border-b" style={{ background: "var(--background)", borderColor: "var(--border)" }}>
                        <div className="px-6 md:px-12 lg:px-24 py-20 max-w-[1440px] mx-auto">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-14">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(84,197,248,0.12)", border: "1.5px solid rgba(84,197,248,0.3)" }}>
                                            <FlutterLogo className="w-5 h-5" style={{ color: "#54C5F8" } as CSSProperties} />
                                        </div>
                                        <span className="text-xs font-black uppercase tracking-widest font-mono" style={{ color: "#54C5F8" }}>Flutter Development</span>
                                    </div>
                                    <h2 className="font-black mb-3" style={{ letterSpacing: "-1.5px" }}>One codebase.<br /><span style={{ color: "#54C5F8" }}>Two premium apps.</span></h2>
                                    <p className="max-w-xl" style={{ opacity: 0.5 }}>Flutter is Google&apos;s open-source UI framework that lets us build iOS and Android apps from a single Dart codebase — without sacrificing performance, design quality, or native device access.</p>
                                </div>
                                <button onClick={() => setShowFlutter(false)} className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-semibold hover:opacity-70 transition-opacity flex-shrink-0 ml-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                                    <X size={14} /> Close
                                </button>
                            </div>
                            {/* Feature grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                                {FLUTTER_FEATURES.map((f, i) => (
                                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: i * 0.07 }}
                                        className="rounded-2xl p-6 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                                        <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: f.bg, color: f.color }}>{f.icon}</div>
                                        <div className="text-sm font-black mb-2" style={{ letterSpacing: "-0.3px" }}>{f.title}</div>
                                        <p className="text-sm leading-relaxed" style={{ opacity: 0.5 }}>{f.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                            {/* When to use */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                                <div className="rounded-2xl p-7 border" style={{ background: "rgba(84,197,248,0.05)", borderColor: "rgba(84,197,248,0.22)" }}>
                                    <div className="text-sm font-black mb-4" style={{ color: "#54C5F8" }}>Flutter is the right choice when…</div>
                                    {["You need both iOS & Android simultaneously", "Budget efficiency is a priority", "Your timeline is tight", "The UI is highly custom and design-driven", "You want one team owning the full product"].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2.5 text-sm mb-2.5" style={{ opacity: 0.75 }}>
                                            <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: "#54C5F8" }} />{item}
                                        </div>
                                    ))}
                                </div>
                                <div className="rounded-2xl p-7 border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                                    <div className="text-sm font-black mb-4" style={{ color: "var(--brand)" }}>Native is the right choice when…</div>
                                    {["You only need one platform initially", "You need deep Apple / Google ecosystem integration", "Your app relies on platform-specific APIs (AR, HealthKit…)", "Maximum performance is non-negotiable", "Platform-specific UX conventions are critical"].map((item, i) => (
                                        <div key={i} className="flex items-start gap-2.5 text-sm mb-2.5" style={{ opacity: 0.75 }}>
                                            <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: "var(--brand)" }} />{item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Flutter CTA */}
                            <div className="relative rounded-3xl overflow-hidden border p-10 md:p-14" style={{ borderColor: "rgba(84,197,248,0.25)" }}>
                                <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(84,197,248,0.08) 0%, rgba(84,197,248,0.02) 100%)" }} />
                                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.5em] font-mono mb-3" style={{ color: "#54C5F8" }}>Ready to Build with Flutter</p>
                                        <h3 className="font-black mb-2" style={{ letterSpacing: "-1px" }}>Let&apos;s discuss your Flutter project.</h3>
                                        <p className="text-sm max-w-md" style={{ opacity: 0.5 }}>Tell us your idea and target audience — we&apos;ll advise on Flutter vs native and give you a clear roadmap.</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                                        <Link href="/contact?service=Flutter+Application+Development" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wide transition-all hover:-translate-y-0.5"
                                            style={{ background: "#54C5F8", color: "#0a0b0c" }}>
                                            Start Flutter Project <ArrowRight size={14} />
                                        </Link>
                                        <button onClick={() => setShowFlutter(false)} className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm border transition-all hover:opacity-80" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                                            Back to Native
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* ── CAPABILITIES ── */}
            <section className="px-6 md:px-12 lg:px-24 py-24" style={{ background: "var(--background)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
                        <p className="text-[11px] font-black uppercase tracking-[0.5em] font-mono mb-3" style={{ color: "var(--brand)" }}>Built-In Capabilities</p>
                        <h2 className="font-black" style={{ letterSpacing: "-1.5px" }}>What we bring to <span style={{ color: "var(--brand)" }}>every</span> build.</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {CAPABILITIES.map((c, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative rounded-2xl p-8 border overflow-hidden transition-all duration-300 hover:-translate-y-1"
                                style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{ background: `radial-gradient(ellipse at top left, ${c.bgColor}, transparent 65%)` }} />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border" style={{ background: c.bgColor, color: c.logoColor, borderColor: "var(--border)" }}>
                                        {c.Logo ? <c.Logo className="w-5 h-5" /> : c.icon}
                                    </div>
                                    <div className="text-base font-black tracking-tight mb-2">{c.title}</div>
                                    <p className="text-sm leading-relaxed mb-5" style={{ opacity: 0.5 }}>{c.desc}</p>
                                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest" style={{ color: c.logoColor, opacity: 0.8 }}>
                                        {c.tagIcon}{c.tag}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="px-6 md:px-12 lg:px-24 py-24 border-t" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
                        <p className="text-[11px] font-black uppercase tracking-[0.5em] font-mono mb-3" style={{ color: "var(--brand)" }}>Delivery Process</p>
                        <h2 className="font-black" style={{ letterSpacing: "-1.5px" }}>Concept to App Store in structured sprints.</h2>
                    </motion.div>
                    <div>
                        {PROCESS.map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                                className="group grid grid-cols-12 gap-6 md:gap-10 py-7 border-t items-start" style={{ borderColor: "var(--border)" }}>
                                <div className="col-span-2 md:col-span-1">
                                    <span className="text-2xl font-black tabular-nums" style={{ color: step.color, opacity: 0.25 }}>{step.num}</span>
                                </div>
                                <div className="hidden md:flex col-span-1 items-start justify-center pt-2.5">
                                    <div className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-150" style={{ background: step.color, opacity: 0.45 }} />
                                </div>
                                <div className="col-span-10 md:col-span-3">
                                    <div className="text-base font-black">{step.title}</div>
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

            {/* ── CTA ── */}
            <section className="px-6 md:px-12 lg:px-24 py-24" style={{ background: "var(--background)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="relative rounded-3xl overflow-hidden border" style={{ borderColor: "rgba(176,93,65,0.2)" }}>
                        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #f59768 0%, #b05d41 45%, #7a3520 100%)" }} />
                        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-30 transform-gpu" style={{ background: "#ffd4b0" }} />
                        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[90px] opacity-20 transform-gpu" style={{ background: "#4adc8c" }} />
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.06] flex items-center gap-8 transform-gpu">
                            <AppleLogo className="w-44 h-44" style={{ color: "white" } as CSSProperties} />
                            <AndroidLogo className="w-44 h-44" style={{ color: "white" } as CSSProperties} />
                        </div>
                        <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)" }}>
                                        <AppleLogo className="w-5 h-5 text-white" style={{ opacity: 0.9 }} />
                                    </div>
                                    <span className="text-white/40 text-lg font-light">+</span>
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(74,220,140,0.2)", border: "1px solid rgba(74,220,140,0.35)" }}>
                                        <AndroidLogo className="w-5 h-5" style={{ color: "#90f0b8" }} />
                                    </div>
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.5em] font-black font-mono mb-4 text-white/60">Ready When You Are</p>
                                <h2 className="font-black text-white" style={{ letterSpacing: "-1.5px" }}>Let&apos;s build your<br />next mobile app.</h2>
                                <p className="mt-4 text-sm leading-relaxed text-white/55 max-w-sm">Tell us about your idea — we&apos;ll map out the right platform, stack, and timeline to bring it to life.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                                <Link href="/contact?service=Mobile+Application+Development" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wide text-white border transition-all hover:-translate-y-0.5" style={{ background: "rgba(255,255,255,0.12)", borderColor: "rgba(255,255,255,0.25)" }}>
                                    Start the Conversation <ArrowRight size={15} />
                                </Link>
                                <Link href="/contact?service=Mobile+Application+Development" className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wide transition-all hover:-translate-y-0.5" style={{ background: "white", color: "var(--brand)" }}>
                                    Get a Free Quote
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
}

/* ── ROOT ── */
export default function MobileAppsPage() {
    const [choice, setChoice] = useState<PlatformChoice | null>(null);
    return (
        <main style={{ background: "var(--background)", color: "var(--foreground)" }}>
            <AnimatePresence mode="wait">
                {choice === null
                    ? <motion.div key="selector" exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.3 }}><PlatformSelector onSelect={setChoice} /></motion.div>
                    : <PlatformPage key={choice} choice={choice} onBack={() => setChoice(null)} />
                }
            </AnimatePresence>
        </main>
    );
}
