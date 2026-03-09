"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Smartphone, Apple, Layers, Wifi, Bell, Lock } from "lucide-react";

const pillars = [
    {
        icon: <Apple className="w-6 h-6" />,
        title: "Native iOS Development",
        brief: "We craft high-performance iOS applications using Swift and SwiftUI, strictly following Apple Human Interface Guidelines. The result: experiences that feel native, fluid, and instinctively familiar to iPhone and iPad users.",
        points: [
            "SwiftUI & UIKit for component-level precision",
            "Core Data and CloudKit for on-device persistence",
            "ARKit, CoreML, and Vision framework integrations",
            "App Store submission and review process management",
            "TestFlight beta testing and phased rollouts",
        ],
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: "Native Android Development",
        brief: "Built with Kotlin and Jetpack Compose, our Android applications deliver polished experiences across thousands of device configurations — from budget mid-range handsets to flagship tablets.",
        points: [
            "Jetpack Compose declarative UI system",
            "Room database and DataStore for local persistence",
            "Coroutines and Flow for asynchronous data streams",
            "Material Design 3 theming and dynamic colours",
            "Google Play Console management and ASO strategy",
        ],
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "Cross-Platform Development",
        brief: "When speed-to-market matters, we use Flutter or React Native to ship feature-complete applications on both iOS and Android from a single shared codebase — without sacrificing quality or performance.",
        points: [
            "Flutter with Riverpod or Bloc state management",
            "React Native with Expo for rapid prototyping",
            "Platform-specific code bridges for native features",
            "Shared business logic layer across platforms",
            "Near-native performance via Dart AOT compilation",
        ],
    },
    {
        icon: <Wifi className="w-6 h-6" />,
        title: "Offline-First Architecture",
        brief: "For institutional and field-use apps where internet access is unreliable, we design with an offline-first mindset — ensuring data is always available and syncs reliably when connectivity is restored.",
        points: [
            "Local SQLite / Realm database with conflict resolution",
            "Background sync queue with retry logic",
            "Delta sync strategies for bandwidth efficiency",
            "Optimistic UI updates for instant feedback",
            "Connectivity awareness and degraded-mode UI states",
        ],
    },
    {
        icon: <Bell className="w-6 h-6" />,
        title: "Push Notifications & Engagement",
        brief: "We integrate Firebase Cloud Messaging (FCM) and APNs to deliver contextual, personalised push notifications — driving re-engagement and keeping users informed in real-time.",
        points: [
            "Firebase Cloud Messaging (FCM) full integration",
            "Topic-based and targeted device notifications",
            "Deep linking into specific in-app screens",
            "Notification analytics and open-rate tracking",
            "In-app messaging overlays and banners",
        ],
    },
    {
        icon: <Lock className="w-6 h-6" />,
        title: "Security & Compliance",
        brief: "Mobile apps are primary attack surfaces. We implement cryptographic storage, certificate pinning, and obfuscation to ensure your institutional data is protected even on compromised devices.",
        points: [
            "Keychain / Keystore encrypted credential storage",
            "SSL certificate pinning against MITM attacks",
            "Biometric authentication (Face ID, Fingerprint)",
            "Code obfuscation and anti-tampering measures",
            "OWASP Mobile Top 10 vulnerability checklist",
        ],
    },
];

const process = [
    { num: "01", title: "Platform Strategy", desc: "We identify which platform to prioritise — native iOS, native Android, or cross-platform — based on your target audience, budget, and timeline. This upfront decision saves significant development cost." },
    { num: "02", title: "UX Wireframing & Prototype", desc: "Every app starts with a clickable Figma prototype. We validate the user flow with real users before writing a single line of code, reducing costly rework downstream." },
    { num: "03", title: "Sprint-Based Development", desc: "We build in 2-week sprints. After each sprint, a TestFlight or Play Store internal build is delivered for you to test on actual devices. Feedback loops are tight and structured." },
    { num: "04", title: "QA on Real Devices", desc: "We run automated tests with Detox (React Native) or XCTest / Espresso for native apps. Manual device testing covers a matrix of iOS versions, Android API levels, and screen sizes." },
    { num: "05", title: "App Store Launch & Monitoring", desc: "We handle the entire submission process — from store listing copy to screenshots and privacy labels. Post-launch, we monitor crash reports via Firebase Crashlytics and iterate based on analytics." },
];

const techStack = [
    "Swift", "Kotlin", "Flutter", "React Native", "Firebase",
    "Dart", "SwiftUI", "Jetpack Compose", "GraphQL", "REST APIs",
    "Fastlane", "XCTest", "Espresso", "Detox",
];

export default function MobileAppsPage() {
    return (
        <main style={{ background: "var(--background)", color: "var(--foreground)" }}>

            {/* ── HERO ── */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-24 px-6 md:px-12 lg:px-24">
                <div className="absolute top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
                    style={{ background: "#b05d41", filter: "blur(240px)", opacity: 0.08 }} />
                <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: "#3150aa", filter: "blur(200px)", opacity: 0.07 }} />

                <div className="relative z-10 max-w-[1400px] mx-auto w-full">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-10">
                        <Link href="/services" className="text-[11px] font-black uppercase tracking-[0.45em] font-mono hover:opacity-100 transition-opacity"
                            style={{ color: "var(--brand)", opacity: 0.8 }}>
                            ← Services
                        </Link>
                        <span className="w-16 h-px" style={{ background: "var(--border)" }} />
                        <span className="text-[11px] font-black uppercase tracking-[0.45em] font-mono"
                            style={{ color: "var(--foreground)", opacity: 0.35 }}>Mobile Applications</span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.9] tracking-tighter mb-10 max-w-5xl"
                        style={{ color: "var(--foreground)", letterSpacing: "-3px" }}>
                        iOS & Android<br />
                        <span style={{ color: "var(--brand)" }}>Mobile Engineering.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
                        className="text-xl md:text-2xl max-w-2xl leading-relaxed mb-14"
                        style={{ color: "var(--foreground)", opacity: 0.6 }}>
                        Native and cross-platform mobile applications engineered for performance, engagement, and reliability. We build for demanding institutional use cases and consumer applications alike.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
                        className="flex flex-wrap items-center gap-5">
                        <Link href="/contact?service=Mobile%20Application%20Development&type=Mobile%20Application" className="btn-glow px-10 py-4 text-base font-bold inline-flex items-center gap-3">
                            Build Your Application <ArrowRight size={16} />
                        </Link>
                        <Link href="/services/mobile-apps/ios" className="flex items-center gap-2 font-semibold text-base hover:gap-3 transition-all px-6 py-4 rounded-full border border-border"
                            style={{ color: "var(--foreground)", background: "var(--surface)" }}>
                            {/* Apple logo */}
                            <img src="https://cdn.simpleicons.org/apple/ffffff" alt="Apple" className="w-4 h-4 invert-0 dark:invert" style={{ filter: 'var(--icon-invert, none)' }} />
                            iOS Development →
                        </Link>
                        <Link href="/services/mobile-apps/android" className="flex items-center gap-2 font-semibold text-base hover:gap-3 transition-all px-6 py-4 rounded-full border border-border"
                            style={{ color: "var(--foreground)", background: "var(--surface)" }}>
                            {/* Android logo */}
                            <img src="https://cdn.simpleicons.org/android/3ddc84" alt="Android" className="w-4 h-4" />
                            Android Development →
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
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                        <div className="lg:col-span-5">
                            <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-5"
                                style={{ color: "var(--brand)" }}>{`// Capabilities`}</p>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight"
                                style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                Native quality.<br />No compromises.
                            </h2>
                        </div>
                        <div className="lg:col-span-7 flex items-end">
                            <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.55 }}>
                                Whether you need a consumer application with millions of users or a secure institutional portal used by staff and students, we build mobile experiences that feel premium, perform reliably, and scale gracefully.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pillars.map((p, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                className="group rounded-[20px] p-8 transition-transform duration-300 hover:-translate-y-1"
                                style={{ background: "var(--surface-soft)", border: "1px solid var(--border)" }}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                                    style={{ background: "var(--background)", color: "var(--brand)", border: "1px solid var(--border)" }}>
                                    {p.icon}
                                </div>
                                <h3 className="text-xl font-black tracking-tight mb-3"
                                    style={{ color: "var(--foreground)" }}>{p.title}</h3>
                                <p className="text-sm leading-relaxed mb-6"
                                    style={{ color: "var(--foreground)", opacity: 0.55 }}>{p.brief}</p>
                                <ul className="space-y-2">
                                    {p.points.map((pt, j) => (
                                        <li key={j} className="text-[12px] font-semibold flex items-start gap-2"
                                            style={{ color: "var(--foreground)", opacity: 0.45 }}>
                                            <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: "var(--brand)" }} />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="px-6 md:px-12 lg:px-24 py-32" style={{ background: "var(--background)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-5"
                        style={{ color: "var(--brand)" }}>{`// Our Delivery Process`}</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-20"
                        style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                        From idea to App Store.
                    </h2>

                    <div className="space-y-0">
                        {process.map((step, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="grid grid-cols-12 gap-8 py-10 border-t group transition-colors rounded-xl px-4"
                                style={{ borderColor: "var(--border)" }}>
                                <div className="col-span-2 md:col-span-1">
                                    <span className="text-5xl font-black tabular-nums"
                                        style={{ color: "var(--foreground)", opacity: 0.12 }}>{step.num}</span>
                                </div>
                                <div className="col-span-10 md:col-span-4">
                                    <h3 className="text-xl font-black tracking-tight"
                                        style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                </div>
                                <div className="col-span-12 md:col-span-7">
                                    <p className="text-base leading-relaxed"
                                        style={{ color: "var(--foreground)", opacity: 0.55 }}>{step.desc}</p>
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
                        <div className="absolute right-0 top-0 w-96 h-96 rounded-full pointer-events-none"
                            style={{ background: "#b05d41", filter: "blur(180px)", opacity: 0.08 }} />
                        <div className="relative z-10">
                            <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-4"
                                style={{ color: "var(--brand)" }}>{`// Ship Your App`}</p>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter"
                                style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                Ready to build your<br />mobile platform?
                            </h2>
                        </div>
                        <div className="relative z-10 flex flex-col sm:flex-row gap-4">
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
