"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";

export default function About() {
    return (
        <Section id="about" className="py-40 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                    <div className="lg:col-span-7 space-y-12">
                        <div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                            >
                                {`// OUR PHILOSOPHY`}
                            </motion.span>
                            <TextReveal
                                as="h2"
                                text="Dedicated to Digital Excellence."
                                className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-foreground leading-[0.9] tracking-tighter mb-10"
                            />
                            <div className="space-y-8">
                                <p className="text-xl text-foreground/70 font-medium leading-relaxed max-w-xl">
                                    RMJ IT Solutions is a technology-driven company dedicated to helping businesses and educational institutions adopt digital solutions that improve efficiency, productivity, and decision-making.
                                </p>
                                <p className="text-lg text-foreground/70 font-medium leading-relaxed max-w-xl">
                                    Our team focuses on building scalable, reliable, and user-friendly software systems tailored to the unique needs of each organization. We aim to provide innovative technology solutions that help our clients adapt to a rapidly evolving digital world.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative aspect-square bg-surface rounded-[3rem] overflow-hidden flex items-center justify-center p-12 border border-slate-100"
                        >
                            <div className="text-center space-y-6">
                                <div className="w-24 h-24 bg-brand/10 rounded-3xl flex items-center justify-center text-brand mx-auto">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-display font-black text-foreground">Proven Integrity</h3>
                                <p className="text-sm text-foreground/70 font-medium">Built on trust, engineered for the future.</p>
                            </div>
                        </motion.div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand/5 blur-3xl rounded-full" />
                        <div className="absolute -top-10 -right-10 w-60 h-60 bg-indigo-50 blur-3xl rounded-full" />
                    </div>
                </div>
            </div>
        </Section>
    );
}
