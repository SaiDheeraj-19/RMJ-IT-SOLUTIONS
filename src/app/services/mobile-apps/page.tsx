"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Wifi, Bell, Lock, ChevronRight } from "lucide-react";

const platforms = [
    {
        id: "ios",
        name: "iOS",
        tagline: "Apple Ecosystem",
        logo: "https://cdn.simpleicons.org/apple/ffffff",
        color: "#b05d41",
        gradient: "from-[#1c1c1e] to-[#2c2c2e]",
        accent: "#f5a57a",
        stack: ["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit", "ARKit", "TestFlight"],
        headline: "Native iOS Engineering",
        description: "We craft premium iOS applications in Swift and SwiftUI that feel right at home on every Apple device — iPhone, iPad, and Apple Watch.",
        features: [
            "SwiftUI & UIKit for pixel-perfect UI",
            "Core Data & CloudKit persistence",
            "ARKit, CoreML, Vision integrations",
            "App Store submission management",
            "TestFlight beta & phased rollouts",
        ],
        href: "/services/mobile-apps/ios",
        cta: "Start Your iOS Project",
        ctaHref: "/contact?service=iOS+Application+Development&type=iOS+Application+Development&message=I%27m+interested+in+building+a+native+iOS+application.",
    },
    {
        id: "android",
        name: "Android",
        tagline: "Google Ecosystem",
        logo: "https://cdn.simpleicons.org/android/3ddc84",
        color: "#3ddc84",
        gradient: "from-[#0f1f14] to-[#1a2f1e]",
        accent: "#3ddc84",
        stack: ["Kotlin", "Jetpack Compose", "Room", "Coroutines", "Hilt", "Material 3", "Espresso"],
        headline: "Native Android Engineering",
        description: "Polished Android applications built with Kotlin and Jetpack Compose — tested across thousands of device configurations from budget to flagship.",
        features: [
            "Jetpack Compose declarative UI",
            "Room DB & DataStore persistence",
            "Coroutines & Flow async streams",
            "Material Design 3 theming",
            "Google Play Store management",
        ],
        href: "/services/mobile-apps/android",
        cta: "Start Your Android Project",
        ctaHref: "/contact?service=Android+Application+Development&type=Android+Application+Development&message=I%27m+interested+in+building+a+native+Android+application.",
    },
];

const sharedCapabilities = [
    {
        icon: <Layers className="w-6 h-6" />,
        title: "Cross-Platform (Flutter)",
        desc: "When speed-to-market matters, we use Flutter to ship feature-complete apps on both platforms from one codebase — no quality compromise.",
    },
    {
        icon: <Wifi className="w-6 h-6" />,
        title: "Offline-First Architecture",
        desc: "Apps that work without internet. Background sync, local SQLite, delta updates, and conflict-free data resolution baked in from day one.",
    },
    {
        icon: <Bell className="w-6 h-6" />,
        title: "Push & Engagement",
        desc: "FCM + APNs push integration. Topic-based targeting, rich notifications with deep-links, open-rate analytics, and in-app messaging.",
    },
    {
        icon: <Lock className="w-6 h-6" />,
        title: "Security & Compliance",
        desc: "Keychain/Keystore encrypted storage, SSL certificate pinning, biometrics, code obfuscation, and OWASP Mobile Top 10 compliance.",
    },
];

const process = [
    { num: "01", title: "Platform Strategy", desc: "We define which platform — native iOS, native Android, or Flutter cross-platform — based on your audience, budget, and timeline." },
    { num: "02", title: "UX Prototype", desc: "Interactive Figma prototype validated with real users before writing a single line of code. Reduces expensive rework." },
    { num: "03", title: "Sprint Development", desc: "2-week sprints. TestFlight or Play Internal builds delivered after each sprint. Tight, structured feedback loops." },
    { num: "04", title: "QA on Real Devices", desc: "Automated + manual testing across iOS versions, Android API levels, OEM skins, screen sizes, and accessibility modes." },
    { num: "05", title: "Store Launch", desc: "Full App Store Connect / Play Console submission. Store copy, screenshots, privacy labels, staged rollouts, and crash monitoring." },
];

export default function MobileAppsPage() {
    return (
        <main style={{ background: "var(--background)", color: "var(--foreground)" }}>

            {/* ── HERO ── */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-48 pb-16 px-6 md:px-12 lg:px-24">
                {/* Ambient blobs */}
                <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-brand/10 blur-[100px] transform-gpu pointer-events-none" />
                <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[80px] transform-gpu pointer-events-none" />

                <div className="relative z-10 max-w-[1440px] mx-auto w-full">
                    {/* Breadcrumb */}
                    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-12">
                        <Link href="/services" className="text-[11px] font-black uppercase tracking-[0.45em] font-mono text-brand/80 hover:text-brand transition-colors">
                            ← Services
                        </Link>
                        <ChevronRight size={14} className="text-foreground/30" />
                        <span className="text-[11px] font-black uppercase tracking-[0.45em] font-mono text-foreground/35">Mobile Applications</span>
                    </motion.div>

                    {/* Eyebrow */}
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
                        className="text-[11px] font-black uppercase tracking-[0.5em] font-mono text-brand mb-6">
                        iOS &amp; Android Engineering
                    </motion.p>

                    {/* Hero headline */}
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.88] tracking-[-4px] mb-8 max-w-4xl"
                        style={{ color: "var(--foreground)" }}>
                        Apps that feel<br />
                        <span style={{ color: "var(--brand)" }}>truly native.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-2xl leading-relaxed mb-14 text-foreground/60">
                        We engineer native iOS and Android applications that are fast, secure, and indistinguishable from the platform they live on.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4">
                        <Link href="/contact?service=Mobile+Application+Development&type=Mobile+Application"
                            className="btn-glow px-8 py-4 text-base font-bold inline-flex items-center gap-3">
                            Start a Project <ArrowRight size={16} />
                        </Link>
                        <Link href="#platforms" className="flex items-center gap-2 font-semibold text-base text-foreground/60 hover:text-foreground transition-colors">
                            See Platforms ↓
                        </Link>
                    </motion.div>
                </div>

                {/* Floating platform badges */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                    className="absolute bottom-12 right-12 hidden xl:flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-border"
                        style={{ background: "var(--surface)" }}>
                        <img src="https://cdn.simpleicons.org/apple/b05d41" alt="Apple" className="w-5 h-5" />
                        <span className="text-xs font-black uppercase tracking-wider text-foreground/70">iOS</span>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-border"
                        style={{ background: "var(--surface)" }}>
                        <img src="https://cdn.simpleicons.org/android/3ddc84" alt="Android" className="w-5 h-5" />
                        <span className="text-xs font-black uppercase tracking-wider text-foreground/70">Android</span>
                    </div>
                </motion.div>
            </section>

            {/* ── PLATFORM CARDS ── */}
            <section id="platforms" className="px-6 md:px-12 lg:px-24 py-24" style={{ scrollMarginTop: "100px" }}>
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {platforms.map((p, idx) => (
                            <motion.div key={p.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.6 }}
                                className={`relative rounded-[2.5rem] p-12 md:p-16 overflow-hidden bg-gradient-to-br ${p.gradient} border border-white/10`}>

                                {/* Glow */}
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-30 transform-gpu"
                                    style={{ background: p.color }} />
                                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full blur-[80px] opacity-15 transform-gpu"
                                    style={{ background: p.color }} />

                                {/* Platform icon + name */}
                                <div className="relative z-10 flex items-center gap-5 mb-10">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <div className="w-20 h-20 rounded-[1.25rem] flex items-center justify-center border-2"
                                        style={{ background: "rgba(255,255,255,0.08)", borderColor: `${p.color}40` }}>
                                        <img src={p.logo} alt={p.name} className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.45em] font-mono mb-1" style={{ color: p.accent }}>{p.tagline}</p>
                                        <h2 className="text-3xl font-black text-white leading-tight">{p.headline}</h2>
                                    </div>
                                </div>

                                <p className="relative z-10 text-white/60 text-base leading-relaxed mb-10 max-w-md">{p.description}</p>

                                {/* Feature list */}
                                <ul className="relative z-10 space-y-3 mb-12">
                                    {p.features.map((f, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-semibold text-white/80">
                                            <CheckCircle2 size={14} style={{ color: p.accent, flexShrink: 0 }} />
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech stack chips */}
                                <div className="relative z-10 flex flex-wrap gap-2 mb-12">
                                    {p.stack.map((t) => (
                                        <span key={t} className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border border-white/10 text-white/50"
                                            style={{ background: "rgba(255,255,255,0.04)" }}>
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* CTAs */}
                                <div className="relative z-10 flex flex-wrap items-center gap-4">
                                    <Link href={p.ctaHref}
                                        className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-black uppercase tracking-wide text-white transition-all hover:-translate-y-0.5"
                                        style={{ background: p.color }}>
                                        {p.cta} <ArrowRight size={14} />
                                    </Link>
                                    <Link href={p.href}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-colors">
                                        Learn more <ChevronRight size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SHARED CAPABILITIES ── */}
            <section className="px-6 md:px-12 lg:px-24 py-24" style={{ background: "var(--surface)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <div className="mb-16">
                        <p className="text-[10px] uppercase tracking-[0.5em] font-black font-mono text-brand mb-4">{`// Platform-Agnostic Capabilities`}</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground" style={{ letterSpacing: "-1.5px" }}>
                            What we bring to<br />both platforms.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {sharedCapabilities.map((c, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="rounded-[1.5rem] p-8 border"
                                style={{ background: "var(--background)", borderColor: "var(--border)" }}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-brand"
                                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                                    {c.icon}
                                </div>
                                <h3 className="text-xl font-black tracking-tight text-foreground mb-3">{c.title}</h3>
                                <p className="text-sm leading-relaxed text-foreground/55">{c.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="px-6 md:px-12 lg:px-24 py-24" style={{ background: "var(--background)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <p className="text-[10px] uppercase tracking-[0.5em] font-black font-mono text-brand mb-4">{`// Our Delivery Process`}</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-20" style={{ letterSpacing: "-1.5px" }}>
                        Concept to App Store<br />in structured sprints.
                    </h2>
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
                            style={{ background: "var(--border)" }} />
                        <div className="space-y-0">
                            {process.map((step, i) => (
                                <motion.div key={i}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="grid grid-cols-12 gap-8 py-10 border-t items-start"
                                    style={{ borderColor: "var(--border)" }}>
                                    {/* Step dot */}
                                    <div className="col-span-1 hidden md:flex items-start justify-center pt-1">
                                        <div className="w-3 h-3 rounded-full bg-brand" />
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
                                        <span className="text-4xl font-black tabular-nums text-foreground/10">{step.num}</span>
                                    </div>
                                    <div className="col-span-10 md:col-span-4">
                                        <h3 className="text-xl font-black tracking-tight text-foreground">{step.title}</h3>
                                    </div>
                                    <div className="col-span-12 md:col-span-6">
                                        <p className="text-base leading-relaxed text-foreground/55">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-6 md:px-12 lg:px-24 py-24" style={{ background: "var(--surface)" }}>
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative rounded-[2.5rem] overflow-hidden p-14 md:p-24"
                        style={{ background: "var(--background)", border: "1px solid var(--border)" }}>

                        {/* Background watermark */}
                        <span className="absolute right-0 bottom-0 text-[20vw] font-black leading-none select-none pointer-events-none opacity-[0.025]"
                            style={{ color: "var(--foreground)" }}>APP</span>

                        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand/10 blur-[80px] transform-gpu" />

                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.5em] font-black font-mono text-brand mb-4">{`// Ready to Build`}</p>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground" style={{ letterSpacing: "-2px" }}>
                                    Let&apos;s ship your<br />mobile app.
                                </h2>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact?service=Mobile+Application+Development&type=Mobile+Application"
                                    className="btn-glow px-10 py-5 text-base font-bold inline-flex items-center gap-3">
                                    Start the Conversation <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
