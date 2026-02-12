"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { FadeIn, RevealLine, BlurIn, SlideIn } from "@/components/animations/MotionEffects";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const differentiators = [
    {
        title: "We Know Your Sector — Not Just Code",
        desc: "We've worked inside university admin offices. We understand NAAC compliance, academic calendar constraints, and why the dean needs that report by Friday. Our solutions work because we understand the context, not just the tech."
    },
    {
        title: "One Team. Start to Finish. No Handoffs.",
        desc: "The architect who designs your system also reviews the code and joins your deployment call. No \"discovery team\" that disappears after the proposal. One accountability chain that you can name and call."
    },
    {
        title: "You See Working Software Every 14 Days",
        desc: "No 6-month black boxes. We ship working features in 2-week sprints with bi-weekly demos you can test. If we're off track, you know in week 2 — not month 6."
    },
    {
        title: "Fixed Quotes Before You Commit",
        desc: "After our free audit, you get a detailed scope document with a fixed price or time-and-materials estimate. You sign off on every milestone. No surprise invoices, no scope creep without your written approval."
    },
    {
        title: "30 Days of Free Support After Launch",
        desc: "Every deployment includes 30 days of post-launch stabilization at no extra cost. We monitor performance, fix edge cases, and optimize based on real usage data. After that, optional monthly retainers from ₹25K/month."
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
                            Why Us Over Others
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="What makes us different from every other agency you've talked to."
                            className="text-[clamp(3rem,6vw,5rem)] font-display font-bold mb-8 leading-[1] tracking-tight text-[#1a1a1a]"
                        />
                        <FadeIn delay={0.3}>
                            <p className="text-xl text-[#606060] leading-relaxed max-w-lg">
                                Not promises — guarantees. Everything below is documented in our contracts, reflected in our delivery reports, and backed by our track record.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* 5 Differentiators */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 border-t border-stone-200 pt-16">
                    {differentiators.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            className="group"
                        >
                            <RevealLine className="!h-[2px] !bg-brand mb-8 max-w-12 group-hover:max-w-24 transition-all duration-500" delay={i * 0.12} />
                            <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-6 tracking-tight group-hover:text-brand transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-lg text-[#606060] leading-relaxed max-w-md">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Mid-section CTA */}
                <FadeIn delay={0.2} className="mt-20 pt-16 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-8">
                    <div>
                        <h3 className="text-2xl font-display font-bold text-[#1a1a1a] mb-2">Ready to see if we&apos;re the right fit?</h3>
                        <p className="text-stone-500">Start with a free, no-commitment technical audit of your current systems.</p>
                    </div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                        <Link href="/contact" id="whyrmjit-cta" className="group shrink-0 inline-flex items-center gap-3 px-10 py-5 bg-[#1a1a1a] text-white rounded-full text-sm font-bold hover:bg-brand transition-all duration-300 shadow-xl">
                            Request Free Audit
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                    </motion.div>
                </FadeIn>

                {/* Tech Stack Credibility */}
                <BlurIn delay={0.2} className="mt-32 pt-16 border-t border-stone-200">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 mb-12 block">
                        Our Production Stack
                    </span>
                    <div className="flex flex-wrap gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {["AWS", "Google Cloud", "Kubernetes", "Next.js", "React Native", "PostgreSQL", "TensorFlow", "Redis", "Docker", "Terraform", "Node.js", "Python"].map((tech, i) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.1, color: "#816729" }}
                                className="text-xl font-display font-bold text-[#1a1a1a] cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </BlurIn>

                {/* Security & Compliance Positioning */}
                <FadeIn className="mt-32 pt-16 border-t border-stone-200 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block">
                            Security & Compliance
                        </span>
                        <h3 className="text-3xl font-display font-bold text-[#1a1a1a] leading-tight mb-6">
                            Every deployment ships audit-ready.
                        </h3>
                        <p className="text-lg text-[#606060] leading-relaxed">
                            Security isn&apos;t a checkbox we tick before launch. It&apos;s designed into the system architecture from day one. Every RMJ IT deployment includes: encrypted data storage, role-based access controls, automated security scanning, and comprehensive audit logging.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {[
                            { label: "Data Encryption", detail: "AES-256 at rest, TLS 1.3 in transit" },
                            { label: "Access Control", detail: "RBAC with MFA enforcement" },
                            { label: "Vulnerability Scanning", detail: "Automated in every CI/CD pipeline" },
                            { label: "Audit Logging", detail: "Immutable logs with 12-month retention" }
                        ].map((sec, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -4 }}
                                className="p-6 bg-white rounded-xl border border-stone-100 hover:border-brand/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1a1a1a] mb-2">{sec.label}</h4>
                                <p className="text-sm text-[#606060]">{sec.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </FadeIn>

                {/* Leadership Positioning */}
                <SlideIn from="left" className="mt-32 pt-16 border-t border-stone-200 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-4">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-stone-400 mb-12 block">
                            Leadership
                        </span>
                        <h3 className="text-3xl font-display font-bold text-[#1a1a1a] leading-tight">
                            You work directly with senior architects. Always.
                        </h3>
                    </div>
                    <div className="lg:col-span-8">
                        <motion.p
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-xl text-[#606060] leading-relaxed border-l-4 border-brand pl-8"
                        >
                            RMJ IT was founded on a simple belief: institutions deserve the same engineering quality that top-tier SaaS companies build for themselves. Every client engagement is led and reviewed by a senior architect — someone who understands both the codebase and the organizational politics that make IT projects succeed or fail.
                        </motion.p>
                        <FadeIn delay={0.3} className="mt-8 pl-8">
                            <span className="block text-lg font-bold text-[#1a1a1a]">Founding Team</span>
                            <span className="text-sm text-stone-400 uppercase tracking-widest font-bold">Architecture & Strategy</span>
                        </FadeIn>
                    </div>
                </SlideIn>
            </div>
        </Section>
    );
}
