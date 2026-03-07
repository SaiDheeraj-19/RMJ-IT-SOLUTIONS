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
        features: ["Attendance tracking", "Real-time monitoring", "Attendance reports", "Performance insights"]
    },
    {
        title: "Training Schedule Module",
        icon: Calendar,
        description: "Helps organizations plan and manage training programs, ensuring proper tracking of sessions and participant progress.",
        features: ["Schedule Planning", "Session Tracking", "Participant Progress"]
    },
    {
        title: "Progress Report Module",
        icon: BarChart3,
        description: "Track performance and generate detailed progress reports to analyze academic and training outcomes.",
        features: ["Performance Analysis", "Data-driven Decisions", "Administrator Monitoring"]
    },
    {
        title: "Placement Management",
        icon: GraduationCap,
        description: "Manage placement activities, track student opportunities, and organize recruitment processes through a centralized platform.",
        features: ["Opportunity Tracking", "Recruitment Management", "Centralized Portal"]
    }
];

export default function DigitalCampus() {
    return (
        <Section id="products" className="bg-[#f0f9ff] py-32 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#0369a1 1px, transparent 1px), linear-gradient(90deg, #0369a1 1px, transparent 1px)`,
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[10px] uppercase tracking-[0.4em] font-black text-[#0369a1] mb-8 block font-mono"
                    >
                        Featured Product
                    </motion.span>
                    <TextReveal
                        as="h2"
                        text="Digital Campus Platform"
                        className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-[#0f172a] leading-[1] tracking-tighter mb-8"
                    />
                    <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mb-12">
                        Digital Campus is a comprehensive platform designed for educational institutions to manage academic operations, training activities, and student progress. The platform simplifies administration, improves data management, and enhances collaboration between students, teachers, and administrators.
                    </p>
                    <a
                        href="http://digitalcampus.msmfclasses.com:97"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#0369a1] text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#075985] transition-all duration-300 shadow-lg shadow-blue-900/10"
                    >
                        Launch Platform <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {modules.map((module, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="bg-white p-10 rounded-[2rem] border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
                        >
                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0369a1] group-hover:bg-[#0369a1] group-hover:text-white transition-all duration-500 shrink-0">
                                    <module.icon size={32} />
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-[#0369a1] transition-colors mb-4">
                                            {module.title}
                                        </h3>
                                        <p className="text-slate-500 leading-relaxed">
                                            {module.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {module.features.map((feature, idx) => (
                                            <span key={idx} className="text-[11px] font-bold uppercase tracking-wider bg-slate-50 text-slate-400 px-4 py-2 rounded-full group-hover:bg-blue-50 group-hover:text-[#0369a1] transition-colors">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
