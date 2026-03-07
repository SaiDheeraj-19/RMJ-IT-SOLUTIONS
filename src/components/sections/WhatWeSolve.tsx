"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";

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
                        About RMJ IT Solutions
                    </motion.span>
                    <TextReveal
                        as="h2"
                        text="Empowering Organizations through Innovation."
                        className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-display leading-[1.05] font-bold tracking-tight text-[#1a1a1a] mb-8"
                        delay={0.1}
                    />
                    <div className="space-y-6 text-xl text-[#606060] leading-relaxed max-w-4xl">
                        <p>
                            RMJ IT Solutions Pvt Ltd is a technology company focused on building reliable and scalable software systems for businesses and educational institutions.
                        </p>
                        <p>
                            Our mission is to provide innovative IT solutions that help organizations streamline operations, improve productivity, and achieve digital transformation.
                        </p>
                        <p>
                            We work closely with our clients to understand their goals, challenges, and technical requirements, allowing us to design customized solutions that deliver measurable results. With a skilled team of developers and designers, RMJ IT Solutions combines modern technologies with industry best practices to build high-quality digital platforms.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
