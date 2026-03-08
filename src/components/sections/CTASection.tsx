"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
    return (
        <Section className="py-40 bg-white relative overflow-hidden border-t border-slate-50">
            {/* Minimal Background Pattern */}
            <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #e2e8f0 1px, transparent 0)`,
                        backgroundSize: '32px 32px',
                    }}
                />
            </div>

            <div className="max-w-[1440px] mx-auto relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="space-y-6">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-6 block font-mono"
                        >
                            {"// ARCHITECT THE FUTURE"}
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="Start Your Digital Transformation Journey"
                            className="text-[clamp(2.5rem,6vw,6rem)] font-display font-bold text-slate-900 leading-[0.95] tracking-tighter"
                        />
                    </div>

                    <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        Partner with RMJ IT Solutions to build scalable digital platforms and enterprise software solutions designed for global scale.
                    </p>

                    <div className="pt-12">
                        <Link href="/contact" className="inline-flex items-center gap-6 px-12 py-6 bg-brand text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-brand/20 group hover:shadow-brand/40 transition-all duration-300 hover:scale-[1.02] active:scale-95">
                            Start Your Project With Us <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="pt-8">
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em]">Integrated Engineering & Design</p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
