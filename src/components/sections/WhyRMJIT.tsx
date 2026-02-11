"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";

const differentiators = [
    {
        title: "Sector-Specific Engineering",
        desc: "We don't build generic software. Every solution is tailored to the operational realities of universities, government agencies, and mid-size enterprises — from academic calendar constraints to public procurement compliance."
    },
    {
        title: "Full-Cycle Ownership",
        desc: "From initial system audit to post-launch operations, we own the entire delivery pipeline. No handoff gaps, no third-party dependencies. One team, one accountability chain."
    },
    {
        title: "Security as Architecture, Not Add-On",
        desc: "Every deployment follows SOC2-aligned controls, role-based access, encrypted data at rest and in transit, and automated vulnerability scanning. Security is built into the system design, not patched on later."
    },
    {
        title: "Senior-Led Delivery Teams",
        desc: "Every project is led by a senior architect who participates in code reviews, stakeholder calls, and deployment decisions. You won't be handed off to a junior team after the sales call."
    },
    {
        title: "Milestone-Gated Execution",
        desc: "We follow a structured delivery model with bi-weekly milestones, documented acceptance criteria, and stakeholder sign-off at every gate. If we miss a deadline, you'll know 2 weeks in advance — not after."
    }
];

export default function WhyRMJIT() {
    return (
        <Section className="bg-[#f5f5f5]">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-24 mb-16">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-12 block"
                        >
                            Why RMJ IT
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="5 reasons institutions choose us over agencies."
                            className="text-[clamp(3rem,6vw,5rem)] font-display font-bold mb-8 leading-[1] tracking-tight text-[#1a1a1a]"
                        />
                        <p className="text-xl text-[#606060] leading-relaxed max-w-lg">
                            We compete on specificity, not promises. Every differentiator below is reflected in our contracts, timelines, and delivery reports.
                        </p>
                    </div>
                </div>

                {/* 5 Differentiators */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 border-t border-stone-200 pt-16">
                    {differentiators.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="group"
                        >
                            <div className="w-12 h-[2px] bg-brand mb-8 group-hover:w-24 transition-all duration-500 ease-out" />
                            <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-6 tracking-tight group-hover:text-brand transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-lg text-[#606060] leading-relaxed max-w-md">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Stack Credibility */}
                <div className="mt-32 pt-16 border-t border-stone-200">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 mb-12 block">
                        Production Stack
                    </span>
                    <div className="flex flex-wrap gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {["AWS", "Google Cloud", "Kubernetes", "Next.js", "React Native", "PostgreSQL", "TensorFlow", "Redis", "Docker", "Terraform", "Node.js", "Python"].map((tech) => (
                            <span key={tech} className="text-xl font-display font-bold text-[#1a1a1a]">{tech}</span>
                        ))}
                    </div>
                </div>

                {/* Security & Compliance Positioning */}
                <div className="mt-32 pt-16 border-t border-stone-200 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block">
                            Security & Compliance
                        </span>
                        <h3 className="text-3xl font-display font-bold text-[#1a1a1a] leading-tight mb-6">
                            Built for audit readiness from day one.
                        </h3>
                        <p className="text-lg text-[#606060] leading-relaxed">
                            Every RMJ IT deployment includes: encrypted data storage (AES-256), role-based access controls, automated security scanning in CI/CD pipelines, and comprehensive audit logging. We design systems that are ready for SOC2, ISO 27001, and GDPR compliance reviews — not retroactively adapted.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {[
                            { label: "Data Encryption", detail: "AES-256 at rest, TLS 1.3 in transit" },
                            { label: "Access Control", detail: "RBAC with MFA enforcement" },
                            { label: "Vulnerability Scanning", detail: "Automated in every CI/CD pipeline" },
                            { label: "Audit Logging", detail: "Immutable logs with 12-month retention" }
                        ].map((sec, i) => (
                            <div key={i} className="p-6 bg-white rounded-xl border border-stone-100">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1a1a1a] mb-2">{sec.label}</h4>
                                <p className="text-sm text-[#606060]">{sec.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Leadership Positioning */}
                <div className="mt-32 pt-16 border-t border-stone-200 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-4">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 mb-12 block">
                            Leadership
                        </span>
                        <h3 className="text-3xl font-display font-bold text-[#1a1a1a] leading-tight">
                            Senior architects lead every engagement.
                        </h3>
                    </div>
                    <div className="lg:col-span-8">
                        <p className="text-xl text-[#606060] leading-relaxed border-l-4 border-brand pl-8">
                            RMJ IT was founded with a specific thesis: institutions deserve the same quality of engineering that Silicon Valley builds for itself. Our leadership team brings direct experience in campus technology systems, government IT infrastructure, and enterprise application modernization. Every client engagement is personally overseen by a senior architect — ensuring technical decisions are made by people who understand both code and organizational context.
                        </p>
                        <div className="mt-8 pl-8">
                            <span className="block text-lg font-bold text-[#1a1a1a]">Founding Team</span>
                            <span className="text-sm text-stone-400 uppercase tracking-widest font-bold">Architecture & Strategy</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
