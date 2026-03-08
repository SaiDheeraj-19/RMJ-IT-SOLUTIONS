"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import {
    UserCheck,
    Calendar,
    BarChart3,
    GraduationCap,
    ArrowUpRight,
    ShieldCheck,
    Cpu,
    Cloud,
    LayoutDashboard
} from "lucide-react";

const modules = [
    {
        title: "Attendance Management",
        icon: UserCheck,
        description: "Automated tracking of student and staff attendance with real-time reporting. Eliminates manual errors and saves administrative time.",
        features: ["Biometric integration", "RFID tracking", "Automated notifications", "Customizable reports"]
    },
    {
        title: "Academic Performance Tracking",
        icon: BarChart3,
        description: "Comprehensive monitoring of student progress across semesters. Data-driven insights help faculty identify and support struggling students early.",
        features: ["GPA calculation", "Examination management", "Comparative analysis", "Parent portals"]
    },
    {
        title: "Placement Management",
        icon: GraduationCap,
        description: "Streamline the entire placement workflow. Manage company profiles, student applications, and interview schedules in one central hub.",
        features: ["Company dashboard", "Resume builder", "Interview scheduling", "Offer management"]
    },
    {
        title: "Training Schedule Management",
        icon: Calendar,
        description: "Efficiently plan and execute institutional training programs. Ensure that students attain necessary skills through structured learning paths.",
        features: ["Resource allocation", "Session tracking", "Feedback system", "Certification tracking"]
    },
    {
        title: "Student Progress Reports",
        icon: BarChart3,
        description: "Generate 360-degree reports of student development. Provides administrators with the necessary data to make informed institutional decisions.",
        features: ["Visual analytics", "Holistic assessment", "Automated distribution", "Historical data tracking"]
    }
];

export default function ProductsPage() {
    return (
        <div className="pt-32 pb-20">
            {/* Hero Overview */}
            <Section className="bg-white">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <div className="space-y-8">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-[10px] uppercase tracking-[0.6em] font-black text-[#0369a1] mb-8 block font-mono"
                                >
                                    {`// FLAGSHIP PRODUCT`}
                                </motion.span>
                                <TextReveal
                                    as="h1"
                                    text="Digital Campus Platform."
                                    className="text-[clamp(3.5rem,6vw,6rem)] font-display font-bold text-[#0f172a] leading-[0.9] tracking-tighter"
                                />
                                <p className="text-xl text-foreground/70 leading-relaxed max-w-xl">
                                    A next-generation educational management system engineered to replace fragmented tools with a single, unified digital infrastructure. Digital Campus simplifies administration and enhances learning outcomes.
                                </p>
                            </div>
                            <div className="pt-4">
                                <a
                                    href="http://digitalcampus.msmfclasses.com:97"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-4 px-10 py-5 bg-[#0369a1] text-foreground rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#075985] transition-all duration-300 shadow-2xl shadow-blue-900/10 hover:scale-105 active:scale-95"
                                >
                                    Launch Product Portal <ArrowUpRight size={18} />
                                </a>
                            </div>
                        </div>

                        {/* Visual mockup space */}
                        <div className="relative group">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-surface rounded-[4rem] border border-blue-100 shadow-2xl overflow-hidden aspect-square flex items-center justify-center p-12"
                            >
                                <div className="text-center space-y-8">
                                    <div className="w-24 h-24 bg-blue-100 rounded-3xl flex items-center justify-center text-[#0369a1] mx-auto animate-pulse">
                                        <ShieldCheck size={48} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-foreground">Enterprise Security</h3>
                                        <p className="text-sm text-foreground/70 font-medium">Bank-grade data protection</p>
                                    </div>
                                </div>
                            </motion.div>
                            {/* Decorative elements */}
                            <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/5 blur-3xl rounded-full" />
                            <div className="absolute -bottom-12 -left-12 w-60 h-60 bg-indigo-500/5 blur-3xl rounded-full" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Core Features */}
            <Section className="bg-[#f8fafc] py-40">
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40">
                        {[
                            { title: "Real-time Processing", icon: Cpu, desc: "Process thousands of academic records in seconds." },
                            { title: "Cloud Native", icon: Cloud, desc: "Reliable access from anywhere, anytime, on any device." },
                            { title: "Unified Dashboard", icon: LayoutDashboard, desc: "A single view of the entire institutional data ecosystem." }
                        ].map((feature, i) => (
                            <div key={i} className="space-y-6 p-10 bg-white rounded-3xl border border-slate-100">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#0369a1]">
                                    <feature.icon size={24} />
                                </div>
                                <h4 className="text-xl font-bold text-foreground">{feature.title}</h4>
                                <p className="text-foreground/70 font-medium">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-32">
                        <div className="center text-center space-y-6 max-w-2xl mx-auto mb-20">
                            <h2 className="text-4xl md:text-backgroundxl font-display font-bold text-[#0f172a]">Modular Excellence</h2>
                            <p className="text-lg text-foreground/70">Pick and choose the modules your institution needs, or deploy the complete ecosystem for total digital transformation.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-8">
                            {modules.map((module, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-12 rounded-[3.5rem] border border-slate-100 flex flex-col lg:flex-row items-center gap-16"
                                >
                                    <div className="w-24 h-24 bg-blue-50 rounded-3xl flex items-center justify-center text-[#0369a1] shrink-0">
                                        <module.icon size={40} />
                                    </div>
                                    <div className="flex-1 space-y-6 text-center lg:text-left">
                                        <h3 className="text-3xl font-display font-bold text-foreground">{module.title}</h3>
                                        <p className="text-lg text-foreground/70 font-medium leading-relaxed max-w-2xl">{module.description}</p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shrink-0">
                                        {module.features.map((feat, idx) => (
                                            <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-surface rounded-full border border-slate-100 text-xs font-bold uppercase tracking-wider text-[#0369a1]">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#0369a1]" />
                                                {feat}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
