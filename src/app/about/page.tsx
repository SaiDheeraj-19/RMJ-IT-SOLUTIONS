"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import HorizontalLine from "@/components/ui/HorizontalLine";
import Link from "next/link";
import { ShieldAlert, Users, Landmark, Building2, ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="min-h-[80vh] pt-40 flex flex-col justify-end pb-32 px-10 md:px-20 relative overflow-hidden text-[#0f172a]">
                <div className="absolute inset-0 bg-[#f8fafc] z-0" />
                {/* Aura Background */}
                <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-50 rounded-full blur-[150px] opacity-60 z-0" />

                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand mb-12 block font-mono">
                            {`// ABOUT RMJ IT SOLUTIONS`}
                        </span>
                        <div className="mb-16">
                            <TextReveal
                                as="h1"
                                text="Engineering trust into"
                                className="text-[clamp(3.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tighter font-bold text-slate-900"
                                delay={0.2}
                            />
                            <span className="text-[clamp(3.5rem,8vw,7rem)] font-display italic text-brand leading-[0.9] block mt-4 font-bold tracking-tight">every line of code.</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Definition Section */}
            <Section className="bg-white border-y border-slate-100 py-40">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
                    <div className="lg:col-span-8">
                        <h2 className="text-4xl md:text-5xl font-display mb-12 text-slate-900 leading-[1.1] max-w-2xl font-bold tracking-tight">
                            A strategic engineering partner for institutions where failure is not an option.
                        </h2>
                        <p className="text-2xl text-slate-500 max-w-3xl leading-relaxed font-normal">
                            RMJ IT Solutions bridges the gap between legacy operations and future-proof scalability. Based in Kurnool, we serve universities, government agencies, and enterprises across the region with high-trust digital infrastructure.
                        </p>
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-center">
                        <div className="p-10 bg-[#f8fafc] rounded-[2.5rem] border border-slate-100">
                            <div className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-6 font-mono">{`// OUR ROOTS`}</div>
                            <p className="text-sm font-bold text-slate-700 leading-relaxed mb-6">
                                Founded in Andhra Pradesh by engineers committed to dismantling the inefficiency of outdated institutional software.
                            </p>
                            <HorizontalLine className="mb-6 w-12 opacity-20" />
                            <p className="text-xs text-slate-400 font-medium">Headquartered in Kurnool, AP.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Safety & Trust Section */}
            <Section className="bg-[#eef2ff]/50 py-40 overflow-hidden relative">
                <div className="max-w-[1400px] mx-auto">
                    <div className="max-w-3xl mb-24">
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block font-mono">{`// SAFETY FIRST ARCHITECTURE`}</span>
                        <h2 className="text-5xl font-display font-bold text-slate-900 leading-tight tracking-tight mb-8">
                            Why institutions trust our engineering.
                        </h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed">
                            Security isn&apos;t a reactive measure—it&apos;s built into the foundation of every schema we design and every API we deploy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Hardened Security",
                                desc: "Zero-trust architecture with end-to-end encryption for all institutional data flows.",
                                icon: <ShieldAlert className="w-8 h-8 text-brand" />
                            },
                            {
                                title: "Compliance Ready",
                                desc: "Systems architected to meet SOC2, GDPR, and localized government compliance mandates.",
                                icon: <Building2 className="w-8 h-8 text-brand" />
                            },
                            {
                                title: "Predictable Delivery",
                                desc: "6-phase delivery framework with bi-weekly demos ensuring full stakeholder visibility.",
                                icon: <Users className="w-8 h-8 text-brand" />
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="bg-white p-12 rounded-[3rem] border border-slate-200/50 shadow-xl shadow-indigo-500/5 group"
                            >
                                <div className="mb-10 p-4 bg-indigo-50 w-fit rounded-2xl group-hover:bg-brand group-hover:text-white transition-all duration-700">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-display font-bold text-slate-900 mb-6 tracking-tight group-hover:text-brand transition-colors">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Sectors We Protect */}
            <Section className="bg-white py-40">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                        <div className="max-w-2xl">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block font-mono">{`// SECTORS WE PROTECT`}</span>
                            <h2 className="text-5xl font-display font-bold text-slate-900 tracking-tight">Institutional Impact.</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                sector: "Universities",
                                details: "Admission portals, exams, and student lifecycles for multi-campus institutions.",
                                icon: <Landmark className="w-6 h-6" />
                            },
                            {
                                sector: "Government",
                                details: "Citizen service portals and document automation with high security compliance.",
                                icon: <Building2 className="w-6 h-6" />
                            },
                            {
                                sector: "Enterprises",
                                details: "Custom ERPs and operations dashboards for organizations serving 1,000+ users.",
                                icon: <Building2 className="w-6 h-6" />
                            }
                        ].map((s, i) => (
                            <div key={i} className="p-10 bg-[#f8fafc] border border-slate-100 rounded-[2.5rem] hover:bg-white hover:border-brand/20 transition-all duration-700 group">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand mb-8 border border-slate-100 group-hover:bg-brand group-hover:text-white transition-all">
                                    {s.icon}
                                </div>
                                <h4 className="text-xl font-display font-bold text-slate-900 mb-4 group-hover:text-brand transition-colors">{s.sector}</h4>
                                <p className="text-slate-500 font-medium text-sm leading-relaxed">{s.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <section className="bg-white py-40 relative border-t border-slate-100">
                <div className="max-w-[1400px] mx-auto px-10 md:px-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[clamp(2.5rem,6vw,5.5rem)] font-display font-bold text-slate-900 mb-8 leading-[0.95] tracking-tighter">
                            Ready to engineer your <br /> <span className="text-brand italic">digital certainty</span>?
                        </h2>
                        <p className="text-xl text-slate-500 mb-12 max-w-xl mx-auto font-medium">
                            Join the institutions that rely on RMJ IT for architecture, security, and operational scalability.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white text-xs uppercase tracking-[0.2em] font-black rounded-full hover:bg-brand transition-all duration-500 shadow-2xl shadow-slate-900/10"
                        >
                            Schedule a Technical Call <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
