"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { Unplug, HandMetal, TrendingDown, ShieldAlert, Layers } from "lucide-react";

const painPoints = [
    {
        icon: Unplug,
        title: "Disconnected Tools",
        description: "Your CRM doesn't talk to your ERP. Your ERP doesn't sync with your portal. Data lives in spreadsheets, email threads, and disconnected dashboards — creating blind spots across departments."
    },
    {
        icon: HandMetal,
        title: "Manual Workflows",
        description: "Tasks that should take seconds take hours. Admissions processing, invoice reconciliation, report generation — still handled manually because the systems were never designed to automate them."
    },
    {
        icon: TrendingDown,
        title: "Poor Scalability",
        description: "The system that worked for 500 users collapses at 5,000. Performance degrades, pages timeout during peak load, and your team spends more time firefighting than building."
    },
    {
        icon: ShieldAlert,
        title: "Security Gaps",
        description: "No role-based access controls. No encryption at rest. No audit logging. Sensitive data — student records, financial information, citizen PII — exposed to preventable risk."
    },
    {
        icon: Layers,
        title: "Accumulated Tech Debt",
        description: "Years of quick fixes and vendor lock-in have created a codebase that's expensive to maintain, impossible to extend, and risky to touch. Every new feature takes 3x longer than it should."
    }
];

export default function ProblemSection() {
    return (
        <Section id="solve" className="bg-[#f8fafc] py-32 relative overflow-hidden">
            {/* Subtle tech grid for depth */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `radial-gradient(#4f46e5 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />
            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block transition-colors duration-500"
                    >
                        The Real Problem
                    </motion.span>
                    <TextReveal
                        as="h2"
                        text="Most Organizations Don't Have an Infrastructure Problem — They Have a Systems Problem."
                        className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-display leading-[1.05] font-bold tracking-tight text-[#1a1a1a] mb-8"
                        delay={0.1}
                    />
                    <p className="text-xl text-[#606060] leading-relaxed">
                        Technology investments fail when they solve symptoms instead of root causes. The issue isn&apos;t that you need &ldquo;a website&rdquo; or &ldquo;an app&rdquo; — it&apos;s that your systems weren&apos;t architected to work together.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {painPoints.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.6 }}
                            className="group p-8 bg-[#fafafa] border border-stone-100 rounded-2xl hover:border-brand/20 hover:shadow-lg transition-all duration-500"
                        >
                            <div className="p-3 bg-white border border-stone-100 rounded-xl w-fit mb-6 group-hover:border-brand/20 group-hover:bg-brand/5 transition-all">
                                <point.icon size={22} className="text-stone-400 group-hover:text-brand transition-colors" />
                            </div>
                            <h3 className="text-lg font-display font-bold text-[#1a1a1a] mb-3 group-hover:text-brand transition-colors">
                                {point.title}
                            </h3>
                            <p className="text-[15px] text-[#606060] leading-relaxed">
                                {point.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
