"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Apple, Code2, Zap, Lock, RefreshCw, Bell } from "lucide-react";

const features = [
    {
        icon: <Code2 className="w-6 h-6" />,
        title: "Swift & SwiftUI",
        desc: "We build in Swift and SwiftUI from the ground up — following Apple Human Interface Guidelines for experiences that feel instinctively native to every iPhone and iPad user.",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Performance-First Architecture",
        desc: "Our apps are profiled with Instruments from day one. We optimize memory usage, rendering pipelines, and startup time to deliver fluid 60fps experiences on all Apple devices.",
    },
    {
        icon: <Lock className="w-6 h-6" />,
        title: "Security & Privacy",
        desc: "Keychain credential storage, Face ID / Touch ID biometrics, App Transport Security, and OWASP Mobile Top 10 compliance — security is not an afterthought.",
    },
    {
        icon: <RefreshCw className="w-6 h-6" />,
        title: "Core Data & CloudKit",
        desc: "Robust on-device persistence with Core Data and seamless sync across Apple devices via CloudKit. Offline-first by design, with conflict-free data resolution.",
    },
    {
        icon: <Bell className="w-6 h-6" />,
        title: "Push Notifications (APNs)",
        desc: "Full Apple Push Notification service integration. Topic-based messaging, rich notifications with media, deep-linking to specific screens, and notification analytics.",
    },
    {
        icon: <Apple className="w-6 h-6" />,
        title: "App Store Submission",
        desc: "We manage your entire App Store Connect workflow — metadata, screenshots, AppPrivacy labels, TestFlight beta, review responses, and phased rollouts.",
    },
];

const techStack = [
    "Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit",
    "ARKit", "CoreML", "Vision", "Combine", "Async/Await",
    "XCTest", "TestFlight", "Fastlane", "Instruments",
];

const process = [
    { num: "01", title: "Product Discovery", desc: "We define your app's core value proposition, target user, and feature scope. Deliverable: a Product Requirements Document and prioritised feature backlog." },
    { num: "02", title: "SwiftUI Prototype", desc: "Interactive Figma prototype followed by a functional SwiftUI prototype. You test on a real iPhone before we write production code." },
    { num: "03", title: "Sprint Development", desc: "2-week sprints with TestFlight builds delivered after each sprint. You test on real devices and provide structured feedback in our shared workspace." },
    { num: "04", title: "XCTest & Device Matrix", desc: "Automated unit, integration, and UI tests via XCTest. Manual testing across iPhone and iPad models, iOS versions, and display sizes." },
    { num: "05", title: "App Store Launch", desc: "Full App Store Connect submission, review management, and post-launch monitoring via Firebase Crashlytics and App Store analytics dashboards." },
];

export default function IOSPage() {
    return (
        <main style={{ background: "var(--background)", color: "var(--foreground)" }}>

            {/* ── HERO ── */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-24 px-6 md:px-12 lg:px-24">
                <div className="absolute top-[-15%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none bg-brand/10 blur-[120px] transform-gpu" />
                <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none bg-blue-600/10 blur-[100px] transform-gpu" />

                <div className="relative z-10 max-w-[1400px] mx-auto w-full">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-10">
                        <Link href="/services/mobile-apps" className="text-[11px] font-black uppercase tracking-[0.45em] font-mono hover:opacity-100 transition-opacity"
                            style={{ color: "var(--brand)", opacity: 0.8 }}>
                            ← Mobile Apps
                        </Link>
                        <span className="w-16 h-px" style={{ background: "var(--border)" }} />
                        <span className="text-[11px] font-black uppercase tracking-[0.45em] font-mono"
                            style={{ color: "var(--foreground)", opacity: 0.35 }}>iOS Development</span>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border"
                        style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="https://cdn.simpleicons.org/apple/b05d41" alt="Apple" className="w-4 h-4" />
                        <span className="text-xs font-black uppercase tracking-widest" style={{ color: "var(--foreground)", opacity: 0.7 }}>Built for Apple Ecosystem</span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.9] tracking-tighter mb-10 max-w-5xl"
                        style={{ color: "var(--foreground)", letterSpacing: "-3px" }}>
                        Native iOS<br />
                        <span style={{ color: "var(--brand)" }}>Engineering.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
                        className="text-xl md:text-2xl max-w-2xl leading-relaxed mb-14"
                        style={{ color: "var(--foreground)", opacity: 0.6 }}>
                        We craft premium iOS applications using Swift and SwiftUI that feel right at home on every Apple device — from iPhone to iPad to Apple Watch.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
                        className="flex flex-wrap items-center gap-5">
                        <Link href="/contact" className="btn-glow px-10 py-4 text-base font-bold inline-flex items-center gap-3">
                            Start Your iOS App <ArrowRight size={16} />
                        </Link>
                        <Link href="/services/mobile-apps/android" className="flex items-center gap-2 font-semibold text-base hover:gap-3 transition-all px-6 py-4 rounded-full border border-border"
                            style={{ color: "var(--foreground)", background: "var(--surface)" }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://cdn.simpleicons.org/android/3ddc84" alt="Android" className="w-4 h-4" />
                            Android →
                        </Link>
                    </motion.div>
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full mt-24">
                    <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-4"
                        style={{ color: "var(--foreground)", opacity: 0.3 }}>Technologies We Deploy</p>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((t) => (
                            <span key={t} className="px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider"
                                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--foreground)", opacity: 0.7 }}>
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CAPABILITIES ── */}
            <section className="px-6 md:px-12 lg:px-24 py-32" style={{ background: "var(--surface)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-16">
                        <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-5" style={{ color: "var(--brand)" }}>{`// iOS Capabilities`}</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter" style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                            Crafted for Apple.<br />Engineered to last.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                className="rounded-[20px] p-8 hover:-translate-y-1 transition-transform duration-300"
                                style={{ background: "var(--background)", border: "1px solid var(--border)" }}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                                    style={{ background: "var(--surface)", color: "var(--brand)", border: "1px solid var(--border)" }}>
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-black tracking-tight mb-3" style={{ color: "var(--foreground)" }}>{f.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.55 }}>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="px-6 md:px-12 lg:px-24 py-32" style={{ background: "var(--background)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-5" style={{ color: "var(--brand)" }}>{`// Our Delivery Process`}</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-20" style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                        From concept to App Store.
                    </h2>
                    <div className="space-y-0">
                        {process.map((step, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="grid grid-cols-12 gap-8 py-10 border-t px-4"
                                style={{ borderColor: "var(--border)" }}>
                                <div className="col-span-2 md:col-span-1">
                                    <span className="text-5xl font-black tabular-nums" style={{ color: "var(--foreground)", opacity: 0.12 }}>{step.num}</span>
                                </div>
                                <div className="col-span-10 md:col-span-4">
                                    <h3 className="text-xl font-black tracking-tight" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                </div>
                                <div className="col-span-12 md:col-span-7">
                                    <p className="text-base leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.55 }}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-6 md:px-12 lg:px-24 py-24" style={{ background: "var(--surface)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="rounded-[36px] p-14 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
                        style={{ background: "var(--background)", border: "1px solid var(--border)" }}>
                        <div className="absolute right-0 top-0 w-96 h-96 rounded-full pointer-events-none bg-brand/10 blur-[100px] transform-gpu" />
                        <div className="relative z-10">
                            <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-4" style={{ color: "var(--brand)" }}>{`// Launch on iOS`}</p>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                Ready to build your<br />iOS application?
                            </h2>
                        </div>
                        <div className="relative z-10">
                            <Link href="/contact" className="btn-glow px-10 py-4 text-base font-bold inline-flex items-center gap-3">
                                Start the Conversation <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
