"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const values = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
            </svg>
        ),
        title: "Integrity First",
        desc: "We build trust before we build software. Every engagement is rooted in honesty, transparency, and accountability.",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
            </svg>
        ),
        title: "Speed & Precision",
        desc: "We move fast without cutting corners. Our systems are engineered to perform reliably under real-world load.",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "People-Centred",
        desc: "Technology should serve people — not the other way around. Every design decision starts with the end user.",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
        title: "Continuous Growth",
        desc: "We never stop learning. Our team invests in the latest tools and frameworks to keep clients ahead of the curve.",
    },
];

const timeline = [
    { year: "2018", title: "Founded in Kurnool", desc: "RMJ IT Solutions was started with a clear mission: bring enterprise-grade digital infrastructure to institutions in Andhra Pradesh." },
    { year: "2021", title: "GPCET & RECW Partnership", desc: "G. Pullaiah College of Engineering & Technology and Ravindra College of Engineering for Women simultaneously adopted our Digital Campus platform — digitising student records, marks, attendance, placements, and accreditation reports.", link1: { label: "View GPCET →", href: "/partners/gpcet" }, link2: { label: "View RECW →", href: "/partners/recw" } },
    { year: "2023", title: "Ecosystem Growth", desc: "Expanded our academic footprint, adding advanced analytical modules and new college deployments across the state." },
    { year: "2024", title: "Full-Stack Expansion", desc: "Expanded into mobile app development, AI integrations, and cloud infrastructure services for enterprise clients." },
    { year: "2026", title: "RMJ IT 2.0", desc: "Launched a fully redesigned service portfolio — from Campus ERP to scalable web apps, AI systems, and DevOps pipelines." },
];

const team = [
    { initials: "JM", name: "Dr. J Mamatha", role: "Director", color: "#b05d41" },
    { initials: "GM", name: "G V M Mohan Kumar", role: "Managing Director", color: "#3150aa" },
];

export default function AboutPage() {
    return (
        <main className="pt-28 pb-20" style={{ background: "var(--background)", color: "var(--foreground)" }}>

            {/* ── HERO ── */}
            <section className="relative container mx-auto px-4 md:px-12 pt-16 pb-24 overflow-hidden">
                {/* Glow */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "#b05d41", filter: "blur(200px)", opacity: 0.1 }} />
                <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "#3150aa", filter: "blur(180px)", opacity: 0.08 }} />

                <motion.span
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                    className="block text-[11px] font-black uppercase tracking-[0.55em] font-mono mb-6"
                    style={{ color: "var(--brand)" }}
                >
                    {"// ABOUT RMJ IT SOLUTIONS"}
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                    className="font-bold leading-[1.0] tracking-tight mb-8 max-w-4xl"
                    style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)", color: "var(--foreground)", letterSpacing: "-2px" }}
                >
                    We build the digital backbone<br />
                    <span style={{ opacity: 0.3, fontStyle: "italic", fontWeight: 400 }}>organizations run on.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-xl max-w-2xl leading-relaxed mb-12 font-medium"
                    style={{ color: "var(--foreground)", opacity: 0.55 }}
                >
                    RMJ IT Solutions is a Kurnool-based technology company building modern software for colleges, businesses, and enterprises across Andhra Pradesh and beyond.
                </motion.p>


            </section>

            {/* ── STORY STRIP ── */}
            <section className="w-full py-20" style={{ background: "var(--surface)" }}>
                <div className="container mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.55em] font-mono" style={{ color: "var(--foreground)", opacity: 0.3 }}>{"// OUR STORY"}</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                Started small.<br />Built to scale.
                            </h2>
                            <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.6 }}>
                                RMJ IT Solutions was born out of a simple observation: educational institutions in Andhra Pradesh were managing critical data — student marks, attendance, placements — on paper and spreadsheets.
                            </p>
                            <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.6 }}>
                                We built Digital Campus to change that. Today it powers thousands of student records across GPCET and RECW, and we&apos;ve since expanded into full-stack web development, mobile apps, AI systems, and cloud infrastructure for clients across multiple industries.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-sm" style={{ color: "var(--brand)" }}>
                                Work with us →
                            </Link>
                        </motion.div>

                        {/* Logo card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="relative rounded-[32px] overflow-hidden flex items-center justify-center"
                            style={{ background: "var(--background)", border: "1px solid var(--border)", minHeight: "320px" }}
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none" style={{ background: "#b05d41", filter: "blur(100px)", opacity: 0.12 }} />
                            <div className="relative z-10 p-12 text-center space-y-4">
                                <div className="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                                    <Image src="/rmjit-logo.png" alt="RMJ IT" width={48} height={48} className="object-contain" />
                                </div>
                                <p className="font-bold text-lg tracking-tight" style={{ color: "var(--foreground)" }}>RMJ IT Solutions</p>
                                <p className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--foreground)", opacity: 0.35 }}>Kurnool, Andhra Pradesh</p>
                                <div className="flex items-center justify-center gap-2 pt-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-bold" style={{ color: "var(--foreground)", opacity: 0.5 }}>Active & Expanding</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── TIMELINE ── */}
            <section className="container mx-auto px-4 md:px-12 py-24">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-black uppercase tracking-[0.55em] font-mono block mb-4" style={{ color: "var(--foreground)", opacity: 0.3 }}>{"// MILESTONES"}</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>How we got here</h2>
                </div>

                <div className="relative max-w-3xl mx-auto">
                    {/* Vertical line */}
                    <div className="absolute left-[18px] top-0 bottom-0 w-px" style={{ background: "var(--border)" }} />

                    <div className="space-y-12 pl-12">
                        {timeline.map((item, i) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                className="relative"
                            >
                                {/* Dot */}
                                <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full border-2 flex items-center justify-center"
                                    style={{ background: "var(--background)", borderColor: "var(--brand)" }}>
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--brand)" }} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] font-mono mb-2 block" style={{ color: "var(--brand)", opacity: 0.8 }}>{item.year}</span>
                                <h3 className="text-xl font-bold mb-1" style={{ color: "var(--foreground)" }}>{item.title}</h3>
                                <p className="text-base leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.55 }}>{item.desc}</p>
                                {(item.link1 || item.link2) && (
                                    <div className="flex gap-4 mt-3 flex-wrap">
                                        {item.link1 && (
                                            <Link href={item.link1.href}
                                                className="text-sm font-bold hover:underline transition-all"
                                                style={{ color: "var(--brand)" }}>
                                                {item.link1.label}
                                            </Link>
                                        )}
                                        {item.link2 && (
                                            <Link href={item.link2.href}
                                                className="text-sm font-bold hover:underline transition-all"
                                                style={{ color: "var(--brand)" }}>
                                                {item.link2.label}
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VALUES ── */}
            <section className="w-full py-24" style={{ background: "var(--surface)" }}>
                <div className="container mx-auto px-4 md:px-12">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-black uppercase tracking-[0.55em] font-mono block mb-4" style={{ color: "var(--foreground)", opacity: 0.3 }}>{"// WHAT WE STAND FOR"}</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>Our core values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {values.map((v, i) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-[24px] relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                                style={{ background: "var(--background)", border: "1px solid var(--border)" }}
                            >
                                <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: "radial-gradient(circle at top left, rgba(176,93,65,0.07), transparent 70%)" }} />
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 relative z-10"
                                    style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--brand)" }}>
                                    {v.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 relative z-10" style={{ color: "var(--foreground)" }}>{v.title}</h3>
                                <p className="text-sm leading-relaxed relative z-10" style={{ color: "var(--foreground)", opacity: 0.55 }}>{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TEAM ── */}
            <section className="container mx-auto px-4 md:px-12 py-24">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-black uppercase tracking-[0.55em] font-mono block mb-4" style={{ color: "var(--foreground)", opacity: 0.3 }}>{"// LEADERSHIP"}</span>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>The team behind RMJ</h2>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                            className="group flex flex-col items-center gap-3 p-8 rounded-[20px] w-64 hover:scale-[1.04] transition-transform duration-300"
                            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                        >
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
                                style={{ background: member.color }}>
                                {member.initials}
                            </div>
                            <div className="text-center mt-2">
                                <p className="font-bold text-base" style={{ color: "var(--foreground)" }}>{member.name}</p>
                                <p className="text-[12px] font-mono uppercase tracking-wider mt-1" style={{ color: "var(--foreground)", opacity: 0.5 }}>{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="container mx-auto px-4 md:px-12 pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="rounded-[36px] p-14 md:p-20 text-center relative overflow-hidden"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                >
                    <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none" style={{ background: "#b05d41", filter: "blur(150px)", opacity: 0.12 }} />
                    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ background: "#3150aa", filter: "blur(130px)", opacity: 0.1 }} />
                    <div className="relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.55em] font-mono block mb-6" style={{ color: "var(--foreground)", opacity: 0.3 }}>{"// LET'S BUILD TOGETHER"}</span>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6" style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                            Ready to transform<br />your organization?
                        </h2>
                        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "var(--foreground)", opacity: 0.5 }}>
                            Whether you&apos;re a college looking to go digital or an enterprise needing custom software — let&apos;s talk.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-5">
                            <Link href="/contact" className="btn-glow px-10 py-4 text-base font-bold inline-block">Get in Touch</Link>
                            <Link href="/products" className="flex items-center gap-2 font-semibold text-base hover:gap-3 transition-all"
                                style={{ color: "var(--foreground)", opacity: 0.6 }}>
                                Explore Products <span>→</span>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

        </main>
    );
}
