"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { UserCheck, Calendar, BarChart3, GraduationCap, ArrowUpRight } from "lucide-react";

const modules = [
    {
        title: "Attendance Management",
        icon: UserCheck,
        description: "Enables institutions to manage attendance efficiently through automated tracking and reporting.",
        features: ["Attendance tracking", "Real-time monitoring", "Automated Reports"]
    },
    {
        title: "Academic Performance Tracking",
        icon: BarChart3,
        description: "Monitor and analyze student performance with data-driven insights and comprehensive metrics.",
        features: ["Performance Analytics", "Student Progress", "Data Insights"]
    },
    {
        title: "Placement Management",
        icon: GraduationCap,
        description: "Manage placement activities, track student opportunities, and organize recruitment processes.",
        features: ["Opportunity Tracking", "Recruitment", "Student Placement"]
    },
    {
        title: "Training Schedule Management",
        icon: Calendar,
        description: "Plan and manage training programs, ensuring proper tracking of sessions and progress.",
        features: ["Schedule Planning", "Session Tracking", "Progress Monitoring"]
    },
    {
        title: "Student Progress Reports",
        icon: BarChart3,
        description: "Generate detailed progress reports for students and administrators to make informed decisions.",
        features: ["Detailed Reports", "Academic Outcomes", "Decision Support"]
    }
];

export default function DigitalCampus() {
    return (
        <Section id="products" className="bg-[#f8fafc] py-40 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#e2e8f0 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="max-w-[1440px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
                    <div className="space-y-12">
                        <div className="space-y-8">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-[10px] uppercase tracking-[0.6em] font-black text-[#0369a1] mb-8 block font-mono"
                            >
                                {`// FLAGSHIP PRODUCT`}
                            </motion.span>
                            <TextReveal
                                as="h2"
                                text="Digital Campus Platform"
                                className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-[#0f172a] leading-[1] tracking-tighter"
                            />
                            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                                Digital Campus is a comprehensive educational management system designed to help institutions manage academic operations efficiently. The platform simplifies administration, improves data management, and enhances collaboration across the entire institution.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {modules.map((module, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0369a1] group-hover:bg-[#0369a1] group-hover:text-white transition-all duration-300">
                                        <module.icon size={18} />
                                    </div>
                                    <span className="text-sm font-bold text-slate-900">{module.title}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <a
                                href="http://digitalcampus.msmfclasses.com:97"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 px-10 py-5 bg-[#0369a1] text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#075985] transition-all duration-300 shadow-2xl shadow-blue-900/10 hover:scale-105 active:scale-95"
                            >
                                Launch Platform <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Dashboard UI Preview */}
                    <div className="relative group">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white rounded-[3rem] border border-blue-100 shadow-2xl overflow-hidden p-6 aspect-[4/3] relative"
                        >
                            <div className="bg-slate-50 rounded-2xl w-full h-full border border-slate-100 flex overflow-hidden">
                                {/* Dashboard Mockup Mini */}
                                <div className="w-16 h-full bg-slate-900 flex flex-col items-center py-6 gap-6">
                                    <div className="w-8 h-8 rounded-lg bg-[#0369a1]" />
                                    <div className="w-6 h-6 rounded-md bg-white/10" />
                                    <div className="w-6 h-6 rounded-md bg-white/10" />
                                    <div className="w-6 h-6 rounded-md bg-white/10" />
                                </div>
                                <div className="flex-1 flex flex-col">
                                    <div className="h-12 border-b border-slate-200 px-6 flex items-center justify-between">
                                        <div className="w-24 h-2 bg-slate-200 rounded-full" />
                                        <div className="w-8 h-8 rounded-full bg-slate-100" />
                                    </div>
                                    <div className="flex-1 p-6 space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="h-20 bg-white rounded-xl border border-blue-50 p-4 space-y-2">
                                                <div className="w-1/2 h-2 bg-blue-500/20 rounded-full" />
                                                <div className="w-3/4 h-3 bg-blue-500/40 rounded-full" />
                                            </div>
                                            <div className="h-20 bg-white rounded-xl border border-slate-50 p-4 space-y-2">
                                                <div className="w-1/2 h-2 bg-slate-100 rounded-full" />
                                                <div className="w-3/4 h-3 bg-slate-200 rounded-full" />
                                            </div>
                                        </div>
                                        <div className="h-40 bg-white rounded-xl border border-slate-50 p-4">
                                            <div className="w-full h-full bg-slate-50/50 rounded-lg flex items-end p-2 gap-1">
                                                <div className="flex-1 bg-blue-500/20 h-[30%] rounded-sm" />
                                                <div className="flex-1 bg-blue-500/40 h-[60%] rounded-sm" />
                                                <div className="flex-1 bg-blue-500/60 h-[90%] rounded-sm" />
                                                <div className="flex-1 bg-blue-500/30 h-[45%] rounded-sm" />
                                                <div className="flex-1 bg-blue-500/50 h-[70%] rounded-sm" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        {/* Decorative floating bits */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />
                    </div>
                </div>
            </div>
        </Section>
    );
}
