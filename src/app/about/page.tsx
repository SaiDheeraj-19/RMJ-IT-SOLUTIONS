"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import HorizontalLine from "@/components/ui/HorizontalLine";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#f5f5f5]">
            <Navbar />

            <section className="min-h-[80vh] pt-40 flex flex-col justify-end pb-32 px-10 md:px-20">
                <div className="max-w-[1400px] mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand mb-12 block">
                            About RMJ IT Solutions
                        </span>
                        <div className="mb-16">
                            <TextReveal
                                as="h1"
                                text="We build systems"
                                className="text-[clamp(4rem,10vw,8rem)] font-display leading-[0.9] tracking-tighter font-bold"
                                delay={0.2}
                            />
                            <span className="text-[clamp(4rem,10vw,8rem)] font-display italic text-brand leading-none block mt-4 font-bold">that institutions rely on.</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Section className="bg-[#efefef]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                    <div className="lg:col-span-8">
                        <h2 className="text-4xl font-display mb-12 text-[#1a1a1a] leading-tight max-w-2xl font-bold">
                            RMJ IT Solutions is a full-cycle technology partner for universities, government agencies, and mid-size enterprises.
                        </h2>
                        <p className="text-2xl text-[#505050] max-w-2xl leading-relaxed font-normal">
                            Based in Kurnool, Andhra Pradesh, we specialize in building ERP systems, campus platforms, secure web applications, and AI solutions for organizations that serve thousands of users daily. Our team handles everything from initial system audit through deployment and ongoing operations.
                        </p>
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-end">
                        <HorizontalLine className="mb-8 w-12" />
                        <div className="text-[11px] uppercase tracking-[0.4em] font-black text-brand mb-6">Founded</div>
                        <p className="text-lg text-[#505050] leading-relaxed max-w-xs">
                            Built by engineers who saw universities and government offices running on outdated systems — and decided to fix it, one institution at a time.
                        </p>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4 border-t border-brand pt-12">
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand">What Drives Us</span>
                    </div>
                    <div className="lg:col-span-8 pt-12">
                        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-display mb-12 leading-none font-bold">Our Operating <br /> Principles.</h2>
                        <HorizontalLine className="mb-20 opacity-30" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xs uppercase tracking-widest font-black text-[#1a1a1a] mb-8">Mission</h3>
                                <p className="text-lg text-[#606060] leading-relaxed">
                                    Build scalable, secure digital infrastructure for institutions that serve the public good — universities educating the next generation, government agencies serving citizens, and enterprises employing communities.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-xs uppercase tracking-widest font-black text-[#1a1a1a] mb-8">Approach</h3>
                                <p className="text-lg text-[#606060] leading-relaxed">
                                    Every project follows our 6-phase delivery framework with gated milestones, documented deliverables, and bi-weekly stakeholder reviews. We measure success in uptime percentages, response times, and cost reductions — not in lines of code shipped.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Specific Sectors We Serve */}
            <Section className="bg-[#efefef]">
                <div className="max-w-[1200px] mx-auto">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-12 block">
                        Sectors We Serve
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                sector: "Universities & Education",
                                examples: "Student portals, admission systems, examination management, campus ERP, learning management systems, fee collection platforms",
                                scale: "Multi-campus deployments serving 10,000+ students"
                            },
                            {
                                sector: "Government & Public Sector",
                                examples: "Citizen services portals, grievance management systems, document verification automation, public data dashboards",
                                scale: "High-security environments with compliance mandates"
                            },
                            {
                                sector: "Mid-Size Enterprises",
                                examples: "Operations dashboards, inventory management, CRM integrations, automated invoicing, workforce scheduling systems",
                                scale: "200-2,000 employee organizations scaling operations"
                            }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-white rounded-2xl border border-stone-100"
                            >
                                <h3 className="text-xl font-display font-bold text-[#1a1a1a] mb-4">{s.sector}</h3>
                                <p className="text-[#606060] leading-relaxed mb-6">{s.examples}</p>
                                <span className="text-sm font-bold text-brand">{s.scale}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <section className="bg-white py-32 text-center relative overflow-hidden border-t border-stone-100">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-multiply pointer-events-none" />
                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display font-bold text-[#1a1a1a] mb-4 tracking-tight">
                            Ready to modernize your systems?
                        </h2>
                        <p className="text-[#606060] text-xl mb-12 max-w-lg mx-auto leading-relaxed">
                            Start with a Technical Strategy Call. We&apos;ll assess your current infrastructure bottlenecks and provide an engineering roadmap.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-12 py-6 bg-[#1a1a1a] text-white text-sm uppercase tracking-widest font-black rounded-full hover:bg-brand transition-all duration-300 shadow-2xl"
                        >
                            Request a Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
