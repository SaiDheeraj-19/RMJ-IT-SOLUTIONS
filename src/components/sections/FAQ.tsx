"use client";

import Section from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import TextReveal from "@/components/animations/TextReveal";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/animations/MotionEffects";

const faqs = [
    {
        question: "What defines the Strategic Advisory phase?",
        answer: "We conduct a comprehensive architectural audit, mapping institutional logic and operational data flows. You receive a technical roadmap defining system sovereignity, security orchestration protocols, and a multi-phase delivery matrix."
    },
    {
        question: "How do you augment existing internal IT departments?",
        answer: "Our role is structural augmentation. While internal teams manage existing operations, we engineer large-scale migrations, specialized ERP orchestration, and AI-driven automation layers that require dedicated, high-tier architectural bandwidth."
    },
    {
        question: "What are your institutional data sovereignty protocols?",
        answer: "Every deployment operates under a zero-trust architecture. We utilize AES-256 cryptographic standards, TLS 1.3 orchestration, and kernel-level vulnerability auditing. Our systems are designed for verifiable SOC2 and ISO compliance."
    },
    {
        question: "How is legacy system bridge-integration handled?",
        answer: "We engineer custom middleware logic that acts as a deterministic bridge between legacy monolithic systems and modern architectures. This ensures seamless data synchronization without compromising structural integrity."
    },
    {
        question: "What is the typical timeframe for institutional delivery?",
        answer: "Web architectures average 10–14 weeks. Large-scale institutional ERP deployments average 18–24 weeks. Every milestone is gated, ensuring that delivery meets the deterministic standards defined in the initial audit."
    },
    {
        question: "Do you provide sustained operational continuity?",
        answer: "Yes. Every engagement includes a 30-day structural stabilization period post-deployment. We offer ongoing operational continuity plans covering security orchestration, performance auditing, and sustained architectural evolution."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section className="bg-[#fafafa] py-40 border-t border-slate-100">
            <div className="max-w-[1000px] mx-auto">
                <div className="mb-24">
                    <FadeIn>
                        <span className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono">
                            {`// STRATEGIC ADVISORY HUB`}
                        </span>
                    </FadeIn>
                    <TextReveal
                        as="h2"
                        text="Calculated Transparency."
                        className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter"
                    />
                    <FadeIn delay={0.3}>
                        <p className="mt-8 text-xl text-slate-500 font-medium max-w-xl leading-relaxed">
                            Frequently requested technical data and operational frameworks for institutional decision-makers.
                        </p>
                    </FadeIn>
                </div>

                <StaggerChildren staggerDelay={0.08} className="space-y-4">
                    {faqs.map((faq, index) => (
                        <StaggerItem key={index}>
                            <motion.div
                                className="border-b border-stone-200 group"
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.3 }}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full py-8 flex items-center justify-between text-left"
                                >
                                    <span className={`text-xl font-display font-bold transition-colors duration-300 pr-8 ${openIndex === index ? 'text-brand' : 'text-[#1a1a1a] group-hover:text-brand/70'}`}>
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {openIndex === index ? (
                                            <Minus size={20} className="text-brand shrink-0" />
                                        ) : (
                                            <Plus size={20} className="text-stone-300 group-hover:text-brand transition-colors shrink-0" />
                                        )}
                                    </motion.div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <motion.p
                                                initial={{ y: 10, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                transition={{ duration: 0.4, delay: 0.1 }}
                                                className="text-[#606060] text-lg leading-relaxed pb-8 max-w-2xl"
                                            >
                                                {faq.answer}
                                            </motion.p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerChildren>
            </div>
        </Section>
    );
}
