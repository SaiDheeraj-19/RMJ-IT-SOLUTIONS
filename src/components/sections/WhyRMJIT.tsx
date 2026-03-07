"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { Check } from "lucide-react";

const differentiators = [
    {
        title: "Competitive Pricing",
        description: "We offer transparent and cost-effective pricing models to ensure our clients receive the best value for their investment."
    },
    {
        title: "Creative Development",
        description: "Our team delivers creative web design and modern application development using the latest technologies and frameworks."
    },
    {
        title: "Expert Team",
        description: "Our developers stay updated with industry trends and technologies to deliver high-performance and scalable systems."
    },
    {
        title: "Customized Solutions",
        description: "Every solution we build is tailored to the specific needs and goals of each organization."
    }
];

export default function DifferentiationSection() {
    return (
        <Section id="why" className="bg-[#f8fafc] text-[#0f172a] py-32 relative overflow-hidden">
            {/* Architectural Grid */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)`,
                    backgroundSize: '100px 100px',
                }}
            />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                    <div className="lg:w-5/12">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.5em] font-black text-brand mb-10 block"
                        >
                            Why Choose Us
                        </motion.span>
                        <TextReveal
                            as="h2"
                            text="We Engineer Certainty into Unpredictable Projects."
                            className="text-[clamp(2.5rem,4.5vw,4rem)] font-display leading-[1.05] font-bold text-[#1a1a1a] mb-8"
                            delay={0.1}
                        />
                        <p className="text-xl text-[#606060] leading-relaxed max-w-lg mb-12">
                            Most software projects fail due to poor communication and vague requirements. We succeed by being annoyingly specific.
                        </p>
                    </div>

                    <div className="lg:w-7/12 space-y-12">
                        {differentiators.map((diff, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="flex gap-6 group"
                            >
                                <div className="mt-1 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20 group-hover:bg-brand group-hover:border-brand transition-all">
                                        <Check size={14} className="text-brand group-hover:text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-display font-bold text-[#1a1a1a] mb-3 group-hover:text-brand transition-colors">
                                        {diff.title}
                                    </h3>
                                    <p className="text-[16px] text-[#606060] leading-relaxed max-w-xl group-hover:text-[#1a1a1a] transition-colors">
                                        {diff.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
