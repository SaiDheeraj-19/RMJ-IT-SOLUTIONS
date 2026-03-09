"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, BookOpen, BarChart2, Wifi, Award, CheckCircle } from "lucide-react";

const stats = [
    { value: "3,500+", label: "Students on Platform" },
    { value: "7", label: "Departments Integrated" },
    { value: "2021", label: "Partnership Established" },
    { value: "100%", label: "Paperless Administration" },
];

const problems = [
    {
        icon: <BookOpen className="w-5 h-5" />,
        problem: "Student records managed on paper and Excel sheets",
        solution: "Centralised Digital Campus ERP with role-based access for admins, faculty, and students.",
    },
    {
        icon: <BarChart2 className="w-5 h-5" />,
        problem: "Marks and attendance calculated manually — prone to errors and delays",
        solution: "Automated marks entry, calculation, and report generation with JNTUA grading rules built in.",
    },
    {
        icon: <Users className="w-5 h-5" />,
        problem: "Placement and TPO operations managed through scattered spreadsheets",
        solution: "Dedicated Placement Portal with company pipelines, student profiles, drive scheduling, and offer tracking.",
    },
    {
        icon: <Wifi className="w-5 h-5" />,
        problem: "No centralised communication between students, faculty, and administration",
        solution: "In-platform notifications, announcements, and document distribution replacing physical notice boards.",
    },
    {
        icon: <Award className="w-5 h-5" />,
        problem: "Accreditation preparation (NBA/NAAC) required manually compiling years of data",
        solution: "Automated outcome mapping reports — CO/PO attainment, student progression, and curriculum analytics — exportable for accreditation committees.",
    },
];

const modules = [
    "Student Information System (SIS)",
    "Marks & Grade Management",
    "Attendance Tracking (Subject-wise)",
    "Faculty Dashboard & Workload",
    "Placement & TPO Portal",
    "Fee Collection Module",
    "Library Management",
    "Hostel & Transport Management",
    "Timetable Scheduler",
    "NBA / NAAC Analytics Reports",
    "Admin Control Panel",
    "Parent & Student Portal",
];

export default function GpcetPage() {
    return (
        <main style={{ background: "var(--background)", color: "var(--foreground)" }}>

            {/* ── HERO ── */}
            <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden pt-32 pb-20 px-6 md:px-12 lg:px-24">
                <div className="absolute top-[-10%] right-[-8%] w-[700px] h-[700px] rounded-full pointer-events-none"
                    style={{ background: "#3150aa", filter: "blur(240px)", opacity: 0.09 }} />
                <div className="absolute bottom-0 left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{ background: "#b05d41", filter: "blur(200px)", opacity: 0.07 }} />

                <div className="relative z-10 max-w-[1400px] mx-auto w-full">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="flex items-center gap-4 mb-10">
                        <Link href="/about" className="text-[11px] font-black uppercase tracking-[0.45em] font-mono"
                            style={{ color: "var(--brand)", opacity: 0.8 }}>← About</Link>
                        <span className="w-16 h-px" style={{ background: "var(--border)" }} />
                        <span className="text-[11px] font-black uppercase tracking-[0.45em] font-mono"
                            style={{ color: "var(--foreground)", opacity: 0.35 }}>Partner: GPCET</span>
                    </motion.div>

                    <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
                        className="text-[11px] font-black uppercase tracking-[0.55em] font-mono mb-5"
                        style={{ color: "var(--brand)" }}>{`// Institutional Partnership`}</motion.p>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-black leading-[0.9] tracking-tighter mb-8 max-w-5xl"
                        style={{ color: "var(--foreground)", letterSpacing: "-3px" }}>
                        G. Pullaiah College of<br />
                        <span style={{ color: "var(--brand)" }}>Engineering & Technology</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-2xl leading-relaxed mb-10"
                        style={{ color: "var(--foreground)", opacity: 0.6 }}>
                        GPCET, Kurnool — a JNTUA-affiliated engineering college — became one of RMJ IT Solutions&apos; first major institutional clients in 2021, adopting our Digital Campus ERP platform to fully digitise their academic and administrative operations.
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
                                When GPCET approached us, the institution was operating entirely on paper and disconnected spreadsheets. Every administrative task was manual, error-prone, and impossible to audit. We mapped out every friction point and built targeted solutions for each.
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

            {/* ── MODULES DEPLOYED ── */}
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
                        <div className="absolute right-0 top-0 w-80 h-80 rounded-full pointer-events-none"
                            style={{ background: "#3150aa", filter: "blur(160px)", opacity: 0.08 }} />
                        <div className="relative z-10">
                            <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-4"
                                style={{ color: "var(--brand)" }}>{`// Want a similar solution?`}</p>
                            <h2 className="font-black tracking-tighter"
                                style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                Digitise your institution<br />with Digital Campus.
                            </h2>
                        </div>
                        <div className="relative z-10 flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="btn-glow px-10 py-4 text-base font-bold inline-flex items-center gap-3">
                                Talk to Us <ArrowRight size={16} />
                            </Link>
                            <Link href="/partners/recw"
                                className="px-10 py-4 text-base font-bold inline-flex items-center gap-3 rounded-full border transition-all"
                                style={{ color: "var(--foreground)", borderColor: "var(--border)" }}>
                                See RECW Partnership →
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
