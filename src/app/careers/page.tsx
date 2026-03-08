"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { Briefcase, Mail, BellRing, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="min-h-[70vh] pt-40 flex flex-col justify-end pb-32 px-10 md:px-20 relative overflow-hidden text-[#0f172a]">
                <div className="absolute inset-0 bg-[#f8fafc] z-0" />
                <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-50 rounded-full blur-[150px] opacity-60 z-0" />

                <div className="max-w-[1400px] mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand mb-12 block font-mono">
                            {`// JOIN THE CORE TEAM`}
                        </span>
                        <div className="mb-12">
                            <TextReveal
                                as="h1"
                                text="Engineering the"
                                className="text-[clamp(3.5rem,8vw,7rem)] font-display leading-[0.9] tracking-tighter font-bold text-foreground"
                                delay={0.2}
                            />
                            <span className="text-[clamp(3.5rem,8vw,7rem)] font-display italic text-brand leading-[0.9] block mt-4 font-bold tracking-tight">Future of Digital.</span>
                        </div>
                        <p className="text-2xl text-foreground/70 max-w-2xl leading-relaxed font-normal">
                            We are always looking for deterministic thinkers and precision engineers who want to build high-trust digital infrastructure.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Openings Section */}
            <Section className="bg-white py-40 border-y border-slate-100">
                <div className="max-w-[1000px] mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-20 rounded-[4rem] bg-[#f8fafc] border border-slate-100 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-12 text-brand/5">
                            <Briefcase size={120} strokeWidth={1} />
                        </div>

                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-brand mx-auto mb-10 shadow-sm border border-slate-100">
                            <BellRing size={32} />
                        </div>

                        <h2 className="text-4xl font-display font-bold text-foreground mb-6 tracking-tight">
                            No Active Openings
                        </h2>

                        <p className="text-lg text-foreground/70 mb-12 max-w-lg mx-auto leading-relaxed">
                            Currently, our engineering and strategy teams are at full capacity. We prioritize sustainable growth and deep focus on our existing institutional partnerships.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="mailto:careers@rmjit.com"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-surface0 text-foreground text-[10px] uppercase tracking-[0.2em] font-black rounded-full hover:bg-brand transition-all duration-500"
                            >
                                Send your CV <Mail size={16} />
                            </a>
                            <Link
                                href="/contact"
                                className="text-xs font-bold text-foreground/70 hover:text-brand transition-colors flex items-center gap-2 group"
                            >
                                General Inquiry <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Philosophy Section */}
            <Section className="bg-white py-40">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block font-mono">
                            {`// ENGINEERING CULTURE`}
                        </span>
                        <h3 className="text-4xl font-display font-bold text-foreground leading-tight tracking-tight mb-8">
                            We value precision over speed, and architecture over patchwork.
                        </h3>
                        <p className="text-lg text-foreground/70 leading-relaxed font-medium mb-10">
                            At RMJ IT Solutions, you&apos;ll work on mission-critical systems where reliability is the primary metric. We offer an environment that respects deep work and engineering rigour.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Remote-first engineering culture",
                                "Focus on high-trust institutional systems",
                                "Deterministic delivery frameworks",
                                "Continuous learning & architectural audits"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-foreground/70 font-bold text-sm uppercase tracking-wider">
                                    <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-square bg-surface rounded-3xl" />
                        <div className="aspect-square bg-indigo-50 rounded-3xl mt-12" />
                        <div className="aspect-square bg-brand/5 rounded-3xl -mt-12" />
                        <div className="aspect-square bg-surface0 rounded-3xl" />
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
