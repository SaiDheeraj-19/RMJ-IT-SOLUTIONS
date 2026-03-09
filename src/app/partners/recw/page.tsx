"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, BookOpen, BarChart2, Shield, Award, CheckCircle } from "lucide-react";

const stats = [
    { value: "2,000+", label: "Students on Platform" },
    { value: "3", label: "Departments Integrated" },
    { value: "2021", label: "Partnership Established" },
    { value: "100%", label: "Digital Administration" },
];

const problems = [
    {
        icon: <BookOpen className="w-5 h-5" />,
        problem: "Student marks and internal assessment records maintained in physical registers",
        solution: "Digital marks entry portal with automated CIE calculation, grade sheet generation, and PDF export for faculty and students.",
    },
    {
        icon: <BarChart2 className="w-5 h-5" />,
        problem: "Attendance tracking done manually by class teachers — consolidation took days",
        solution: "Subject-wise digital attendance with real-time shortage alerts sent to students and parents, and department-level analytics for HODs.",
    },
    {
        icon: <Users className="w-5 h-5" />,
        problem: "Student admissions, fee tracking, and roll-number assignment managed manually",
        solution: "Integrated admissions module with online fee payment tracking, automatic roll number generation, and admission letter automation.",
    },
    {
        icon: <Shield className="w-5 h-5" />,
        problem: "As a women&apos;s college, security and data privacy of student records was paramount",
        solution: "Role-based access control ensuring student data visible only to authorised staff. Full audit trail on every data modification.",
    },
    {
        icon: <Award className="w-5 h-5" />,
        problem: "NAAC/NBA accreditation required years of student performance and outcome data",
        solution: "Built-in CO/PO attainment engine that automatically maps assessment results to programme outcomes — reducing accreditation prep from weeks to hours.",
    },
];

const modules = [
    "Student Information System",
    "CIE Marks & Grade Management",
    "Subject-wise Attendance",
    "Admissions & Fee Tracking",
    "CO/PO Attainment (OBE)",
    "Faculty Dashboard",
    "HoD Analytics Panel",
    "Student & Parent Portal",
    "Library Management",
    "Timetable Scheduler",
    "Document Generation",
    "NAAC / NBA Reports",
];

export default function RecwPage() {
    return (
        <main style={{ background: "var(--background)", color: "var(--foreground)" }}>

            {/* ── HERO ── */}
            <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden pt-32 pb-20 px-6 md:px-12 lg:px-24">
                <div className="absolute top-[-10%] left-[-8%] w-[700px] h-[700px] rounded-full pointer-events-none"
                    style={{ background: "#b05d41", filter: "blur(240px)", opacity: 0.09 }} />
                <div className="absolute bottom-0 right-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: "#3150aa", filter: "blur(200px)", opacity: 0.07 }} />

                <div className="relative z-10 max-w-[1400px] mx-auto w-full">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-10">
                        <Link href="/about" className="text-[11px] font-black uppercase tracking-[0.45em] font-mono"
                            style={{ color: "var(--brand)", opacity: 0.8 }}>← About</Link>
                        <span className="w-16 h-px" style={{ background: "var(--border)" }} />
                        <span className="text-[11px] font-black uppercase tracking-[0.45em] font-mono"
                            style={{ color: "var(--foreground)", opacity: 0.35 }}>Partner: RECW</span>
                    </motion.div>

                    <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
                        className="text-[11px] font-black uppercase tracking-[0.55em] font-mono mb-5"
                        style={{ color: "var(--brand)" }}>{`// Institutional Partnership`}</motion.p>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-black leading-[0.9] tracking-tighter mb-8 max-w-5xl"
                        style={{ color: "var(--foreground)", letterSpacing: "-3px" }}>
                        Ravindra College of Engineering<br />
                        <span style={{ color: "var(--brand)" }}>for Women</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-2xl leading-relaxed mb-10"
                        style={{ color: "var(--foreground)", opacity: 0.6 }}>
                        RECW, Kurnool — a JNTUA-affiliated women&apos;s engineering college — partnered with RMJ IT Solutions in 2021 to implement our Digital Campus ERP, replacing paper-based systems with a secure, outcome-based digital education management platform.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
                        {stats.map((s) => (
                            <div key={s.label} className="rounded-2xl p-5"
                                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                                <p className="text-3xl font-black tracking-tight" style={{ color: "var(--brand)" }}>{s.value}</p>
                                <p className="text-[11px] font-bold uppercase tracking-wider mt-1" style={{ color: "var(--foreground)", opacity: 0.45 }}>{s.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── PROBLEM & SOLUTION ── */}
            <section className="px-6 md:px-12 lg:px-24 py-28" style={{ background: "var(--surface)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
                        <div className="lg:col-span-5">
                            <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-5"
                                style={{ color: "var(--brand)" }}>{`// Problem → Solution`}</p>
                            <h2 className="font-black tracking-tighter leading-tight"
                                style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                What we solved.
                            </h2>
                        </div>
                        <div className="lg:col-span-7 flex items-end">
                            <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.55 }}>
                                RECW&apos;s priority was a secure, role-governed platform that could handle OBE (Outcome-Based Education) requirements for NAAC accreditation while modernising the entire administrative workflow from admissions through graduation.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {problems.map((p, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl p-7"
                                style={{ background: "var(--background)", border: "1px solid var(--border)" }}>
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ background: "var(--surface)", color: "var(--foreground)", opacity: 0.5 }}>
                                            {p.icon}
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest font-mono"
                                            style={{ color: "var(--foreground)", opacity: 0.3 }}>The Problem</span>
                                    </div>
                                    <p className="text-base font-semibold" style={{ color: "var(--foreground)", opacity: 0.65 }}>{p.problem}</p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <CheckCircle size={16} style={{ color: "var(--brand)" }} />
                                        <span className="text-[10px] font-black uppercase tracking-widest font-mono"
                                            style={{ color: "var(--brand)" }}>Our Solution</span>
                                    </div>
                                    <p className="text-base leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.65 }}>{p.solution}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MODULES ── */}
            <section className="px-6 md:px-12 lg:px-24 py-28" style={{ background: "var(--background)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-5"
                        style={{ color: "var(--brand)" }}>{`// Platform Deployed`}</p>
                    <h2 className="font-black tracking-tighter mb-16"
                        style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                        Digital Campus — modules in production.
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {modules.map((mod, i) => (
                            <motion.div key={i} initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                                className="flex items-center gap-3 rounded-xl px-5 py-4"
                                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--brand)" }} />
                                <span className="text-sm font-semibold" style={{ color: "var(--foreground)", opacity: 0.7 }}>{mod}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-6 md:px-12 lg:px-24 py-20" style={{ background: "var(--surface)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="rounded-[36px] p-14 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
                        style={{ background: "var(--background)", border: "1px solid var(--border)" }}>
                        <div className="absolute left-0 top-0 w-80 h-80 rounded-full pointer-events-none"
                            style={{ background: "#b05d41", filter: "blur(160px)", opacity: 0.08 }} />
                        <div className="relative z-10">
                            <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-4"
                                style={{ color: "var(--brand)" }}>{`// Want a similar solution?`}</p>
                            <h2 className="font-black tracking-tighter"
                                style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                Ready to go fully digital<br />with Digital Campus?
                            </h2>
                        </div>
                        <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="btn-glow px-10 py-4 text-base font-bold inline-flex items-center gap-3">
                                Talk to Us <ArrowRight size={16} />
                            </Link>
                            <Link href="/partners/gpcet"
                                className="px-10 py-4 text-base font-bold inline-flex items-center gap-3 rounded-full border transition-all"
                                style={{ color: "var(--foreground)", borderColor: "var(--border)" }}>
                                See GPCET Partnership →
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
