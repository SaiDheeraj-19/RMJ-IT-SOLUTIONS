"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Dr. Ramesh Babu",
        role: "Institutional Director",
        text: "RMJ IT Solutions transformed our manual administrative processes into a seamless digital experience. Their educational platform is first-class."
    },
    {
        name: "Kiran Kumar",
        role: "SME Owner",
        text: "The custom ERP developed by RMJ has significantly improved our inventory management. The team's technical expertise and support are exceptional."
    },
    {
        name: "Sarah Andrews",
        role: "Marketing Head",
        text: "Their digital marketing strategies helped us increase our lead generation by 150%. A results-driven team that understands modern business."
    }
];

export default function Testimonials() {
    return (
        <Section className="py-40 bg-surface-soft">
            <div className="max-w-[1440px] mx-auto">
                <div className="mb-24 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                    >
                        {`// SOCIAL PROOF`}
                    </motion.span>
                    <TextReveal
                        as="h2"
                        text="What Our Clients Say."
                        className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-foreground leading-[0.9] tracking-tighter"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white p-12 rounded-[2.5rem] border border-slate-200 relative"
                        >
                            <Quote size={40} className="text-brand/10 absolute top-8 right-8" />
                            <div className="space-y-8 relative z-10">
                                <p className="text-lg text-foreground/70 italic leading-relaxed">
                                    &quot;{item.text}&quot;
                                </p>
                                <div className="pt-8 border-t border-slate-100">
                                    <h4 className="text-lg font-display font-black text-foreground">{item.name}</h4>
                                    <p className="text-[11px] uppercase tracking-widest font-black text-foreground/70">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
