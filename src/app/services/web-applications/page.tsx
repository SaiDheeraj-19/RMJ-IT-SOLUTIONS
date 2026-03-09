"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight, Database, Globe, Layers, Monitor,
    Shield, RefreshCw,
} from "lucide-react";

const pillars = [
    {
        icon: <Monitor className="w-6 h-6" />,
        title: "Frontend Engineering",
        brief: "We build snappy, accessible, and animated interfaces with React and Next.js. Every user interaction is deliberate — from page transitions to micro-animations — to maximize retention and delight.",
        points: [
            "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
            "Complex state management with Zustand or Redux Toolkit",
            "Design system architecture with component libraries",
            "WCAG 2.1 AA accessibility compliance",
            "Core Web Vitals optimisation for SEO performance",
        ],
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: "Backend & API Architecture",
        brief: "Scalable, high-throughput backends built on Node.js, Python, or Go. We design RESTful and GraphQL APIs that power complex institutional logic — multi-tenancy, billing workflows, and analytics pipelines included.",
        points: [
            "Microservices and event-driven architectures",
            "Real-time capabilities via WebSockets and SSE",
            "Database design: PostgreSQL, MongoDB, Redis",
            "Role-based access control (RBAC) and multi-tenancy",
            "API gateway configuration and rate limiting",
        ],
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Progressive Web Apps",
        brief: "PWAs blur the line between native and web. We deliver offline-capable, installable apps that feel fast on any device without requiring app store distribution — perfect for institutional portals and internal tools.",
        points: [
            "Service Worker caching strategies for offline availability",
            "Push notification integrations",
            "App manifest and installability setup",
            "Background sync for low-connectivity environments",
            "Lighthouse score optimisation (Performance, PWA, SEO)",
        ],
    },
    {
        icon: <Layers className="w-6 h-6" />,
        title: "System Integration",
        brief: "Modern enterprises depend on dozens of tools. We connect them — ERP systems, payment gateways, SMS & email providers, third-party APIs — into a unified platform with reliable data pipelines.",
        points: [
            "ERP integration (Tally, Zoho, SAP connectors)",
            "Payment gateway integration: Razorpay, Stripe, PayU",
            "OAuth 2.0 social login and SSO (Google, Microsoft)",
            "Webhook architecture and event-driven sync",
            "Data migration and legacy system bridging",
        ],
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Security & Compliance",
        brief: "Security is baked in from day one — not bolted on at the end. We follow OWASP Top 10 mitigation practices, ensuring your application is hardened against modern attack vectors before it ships.",
        points: [
            "OWASP Top 10 vulnerability mitigation",
            "JWT + refresh token rotation strategies",
            "Input validation, parameterised queries (no SQLi)",
            "CSP, CORS, and XSS protection headers",
            "HTTPS enforcement and SSL/TLS certificate management",
        ],
    },
    {
        icon: <RefreshCw className="w-6 h-6" />,
        title: "CI/CD & DevOps",
        brief: "We ship faster and safer with automated pipelines. From staging environments to zero-downtime production deployments, our DevOps practices reduce release friction and rollback risk.",
        points: [
            "GitHub Actions / GitLab CI pipeline setup",
            "Docker containerisation and orchestration",
            "Automated test suites: unit, integration, E2E (Playwright)",
            "Zero-downtime blue/green deployments on AWS or GCP",
            "Monitoring with Datadog or Grafana + Prometheus",
        ],
    },
];

const process = [
    { num: "01", title: "Discovery & Architecture", desc: "We begin with a deep technical discovery — understanding your infrastructure, users, and business logic. We then produce a system architecture document that serves as the single source of truth for the entire build." },
    { num: "02", title: "Design System First", desc: "Before any component is built, we establish a design system — tokens, typography scale, component library. This makes UI consistent and speeds up development 3x." },
    { num: "03", title: "Iterative Sprint Delivery", desc: "We work in structured 2-week sprints with stakeholder demos. You see real, deployed progress every fortnight — not a surprise at the end." },
    { num: "04", title: "Testing & Hardening", desc: "Every release goes through automated unit tests, integration tests, cross-browser checks, and a manual QA pass. Security is audited before every major release." },
    { num: "05", title: "Deployment & Handoff", desc: "We deploy to your infrastructure, configure monitoring dashboards, and document everything. Post-launch, we offer SLA-backed support and maintenance contracts." },
];

const techStack = [
    "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL",
    "Redis", "Docker", "Kubernetes", "AWS", "GraphQL",
    "Tailwind CSS", "Playwright", "GitHub Actions", "Prisma ORM",
];

export default function WebApplicationsPage() {
    return (
        <main style={{ background: "var(--background)", color: "var(--foreground)" }}>

            {/* ── HERO ── */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-24 px-6 md:px-12 lg:px-24">
                {/* Background glows */}
                <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none"
                    style={{ background: "#3150aa", filter: "blur(240px)", opacity: 0.08 }} />
                <div className="absolute bottom-0 left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: "#b05d41", filter: "blur(200px)", opacity: 0.07 }} />

                <div className="relative z-10 max-w-[1400px] mx-auto w-full">
                    {/* Eyebrow */}
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-10">
                        <Link href="/services" className="text-[11px] font-black uppercase tracking-[0.45em] font-mono hover:opacity-100 transition-opacity"
                            style={{ color: "var(--brand)", opacity: 0.8 }}>
                            ← Services
                        </Link>
                        <span className="w-16 h-px" style={{ background: "var(--border)" }} />
                        <span className="text-[11px] font-black uppercase tracking-[0.45em] font-mono"
                            style={{ color: "var(--foreground)", opacity: 0.35 }}>Web Applications</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.9] tracking-tighter mb-10 max-w-5xl"
                        style={{ color: "var(--foreground)", letterSpacing: "-3px" }}>
                        Enterprise Web<br />
                        <span style={{ color: "var(--brand)" }}>Engineering.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
                        className="text-xl md:text-2xl max-w-2xl leading-relaxed mb-14"
                        style={{ color: "var(--foreground)", opacity: 0.6 }}>
                        We architect and build production-grade web applications — from institutional ERP portals to consumer-facing SaaS platforms. Every line of code is written for scale, security, and speed.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
                        className="flex flex-wrap items-center gap-5">
                        <Link href="/contact" className="btn-glow px-10 py-4 text-base font-bold inline-flex items-center gap-3">
                            Discuss Your Project <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>

                {/* Tech Chips */}
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

            {/* ── WHAT WE BUILD ── */}
            <section className="px-6 md:px-12 lg:px-24 py-32" style={{ background: "var(--surface)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                        <div className="lg:col-span-5">
                            <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-5"
                                style={{ color: "var(--brand)" }}>{`// What We Build`}</p>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight"
                                style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                Full-stack capability.<br />No gaps.
                            </h2>
                        </div>
                        <div className="lg:col-span-7 flex items-end">
                            <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.55 }}>
                                Our web engineering practice covers every layer — from pixel-perfect interfaces to robust backend infrastructure. We operate as an embedded engineering team, not a subcontractor. You get deep ownership, clear communication, and accountability at every milestone.
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
                        style={{ color: "var(--brand)" }}>{`// How We Work`}</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-20"
                        style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                        A process built for trust.
                    </h2>

                    <div className="space-y-0">
                        {process.map((step, i) => (
                            <motion.div key={i}
                                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="grid grid-cols-12 gap-8 py-10 border-t group hover:bg-surface transition-colors rounded-xl px-4"
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

            {/* ── CTA BANNER ── */}
            <section className="px-6 md:px-12 lg:px-24 py-24" style={{ background: "var(--surface)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="rounded-[36px] p-14 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
                        style={{ background: "var(--background)", border: "1px solid var(--border)" }}>
                        <div className="absolute right-0 top-0 w-96 h-96 rounded-full pointer-events-none"
                            style={{ background: "#3150aa", filter: "blur(180px)", opacity: 0.08 }} />
                        <div className="relative z-10">
                            <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-4"
                                style={{ color: "var(--brand)" }}>{`// Ready?`}</p>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter"
                                style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                Let&apos;s build your<br />web platform.
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
