"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Image from "next/image";
import Link from "next/link";

export default function AutomationPage() {
    return (
        <main className="min-h-screen bg-[#f5f5f5]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/services/automation.png"
                        alt="IT Automation & Process Engineering"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5]/80 via-[#f5f5f5]/50 to-[#f5f5f5]" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6 block">
                            Service / Automation
                        </span>
                        <TextReveal
                            as="h1"
                            text="IT Automation & Process Engineering."
                            className="text-[clamp(3rem,8vw,6rem)] font-display leading-[0.9] tracking-tighter font-bold text-[#1a1a1a] mb-6"
                        />
                        <p className="text-xl md:text-2xl text-stone-600 max-w-xl leading-relaxed mb-8">
                            Eliminate manual bottlenecks with intelligent automation. We design self-healing infrastructure, autonomous workflows, and event-driven systems that reduce operational costs by up to 60%.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#1a1a1a] text-white text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-brand transition-colors shadow-lg"
                        >
                            Request a Free Audit
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Impact Metrics */}
            <Section className="bg-white border-y border-stone-100">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { stat: "60%", label: "Operational Cost Reduction" },
                            { stat: "24/7", label: "Autonomous Monitoring" },
                            { stat: "3x", label: "Faster Incident Resolution" },
                            { stat: "Zero", label: "Manual Intervention Points" }
                        ].map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] mb-2">{m.stat}</div>
                                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-400">{m.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Capabilities Grid */}
            <Section className="bg-[#f5f5f5]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-20">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block">
                            Automation Capabilities
                        </span>
                        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-bold text-[#1a1a1a] tracking-tight max-w-2xl">
                            From manual chaos to programmatic precision.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Infrastructure Automation",
                                desc: "Self-provisioning cloud environments with Terraform and Ansible. Zero-touch deployments that scale on demand.",
                                tags: ["Terraform", "Ansible", "AWS CDK"]
                            },
                            {
                                title: "CI/CD Pipeline Engineering",
                                desc: "Automated build, test, and deployment pipelines that reduce release cycles from weeks to minutes.",
                                tags: ["GitHub Actions", "Docker", "Kubernetes"]
                            },
                            {
                                title: "Workflow Orchestration",
                                desc: "Event-driven business process automation. Route approvals, trigger notifications, and sync systems without human intervention.",
                                tags: ["Apache Airflow", "n8n", "Custom APIs"]
                            },
                            {
                                title: "Self-Healing Systems",
                                desc: "Infrastructure that detects anomalies and auto-remediates before failures impact operations.",
                                tags: ["Prometheus", "Grafana", "PagerDuty"]
                            },
                            {
                                title: "RPA & Document Processing",
                                desc: "Robotic Process Automation for repetitive data entry, invoice processing, and compliance reporting.",
                                tags: ["OCR", "NLP Pipelines", "Custom Bots"]
                            },
                            {
                                title: "Security Automation",
                                desc: "Automated vulnerability scanning, compliance checks, and incident response playbooks running 24/7.",
                                tags: ["SIEM", "SOAR", "Zero Trust"]
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="group p-10 bg-white border border-stone-100 rounded-2xl hover:shadow-xl hover:border-brand/20 transition-all duration-500"
                            >
                                <h3 className="text-xl font-display font-bold text-[#1a1a1a] mb-4 group-hover:text-brand transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[15px] text-[#606060] leading-relaxed mb-8">
                                    {item.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {item.tags.map((tag, j) => (
                                        <span key={j} className="px-3 py-1 bg-stone-50 rounded-full text-[10px] font-bold text-stone-500 border border-stone-100 tracking-wide uppercase">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Use Cases */}
            <Section className="bg-gradient-to-b from-[#f0ebe3] to-[#e8e0d4]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-20">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block">
                            Real-World Applications
                        </span>
                        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-bold text-[#1a1a1a] tracking-tight max-w-2xl">
                            Automation that delivers measurable ROI.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                sector: "Academic Institution",
                                problem: "Manual student enrollment verification taking 3 weeks per cycle.",
                                solution: "Automated document verification pipeline with OCR and rules engine.",
                                result: "Enrollment processing reduced from 3 weeks to 4 hours."
                            },
                            {
                                sector: "Enterprise Logistics",
                                problem: "14 manual steps for shipment reconciliation causing $15k/month in billing errors.",
                                solution: "Event-driven ERP automation with real-time anomaly detection.",
                                result: "Billing errors eliminated. $180k saved annually."
                            },
                            {
                                sector: "Government Agency",
                                problem: "50k+ daily citizen queries overwhelming support staff.",
                                solution: "NLP-powered support automation with secure identity verification.",
                                result: "70% of tier-1 queries resolved autonomously within 90 seconds."
                            },
                            {
                                sector: "Healthcare Provider",
                                problem: "Compliance audit preparation consuming 200+ staff-hours quarterly.",
                                solution: "Automated compliance monitoring with real-time reporting dashboards.",
                                result: "Audit preparation reduced to 8 hours with zero findings."
                            }
                        ].map((c, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-white/70 backdrop-blur-sm border border-stone-200/80 rounded-2xl"
                            >
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-4 block">{c.sector}</span>
                                <h3 className="text-lg font-display font-bold text-[#1a1a1a] mb-3">Problem</h3>
                                <p className="text-[#606060] mb-4">{c.problem}</p>
                                <h3 className="text-lg font-display font-bold text-[#1a1a1a] mb-3">Solution</h3>
                                <p className="text-[#606060] mb-4">{c.solution}</p>
                                <div className="pt-4 border-t border-stone-200">
                                    <span className="text-sm font-bold text-brand">{c.result}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <section className="bg-brand py-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display font-bold text-white mb-8 tracking-tight">
                            Ready to eliminate <br /> manual overhead?
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-block px-12 py-6 bg-[#1a1a1a] text-white text-sm uppercase tracking-widest font-black rounded-full hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 shadow-2xl"
                        >
                            Schedule an Automation Audit
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
