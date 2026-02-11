"use client";

import Section from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import TextReveal from "@/components/animations/TextReveal";

const faqs = [
    {
        question: "How do you handle data privacy for government and academic clients?",
        answer: "Every RMJ IT deployment follows a 'Zero-Trust' architecture. We specialize in air-gapped on-premise solutions or highly secure hybrid clouds that comply with SOC2, ISO 27001, and local institutional data protection mandates. Your data never leaves your sovereign control."
    },
    {
        question: "Can you integrate with our existing legacy ERP or student systems?",
        answer: "Yes. Our engineering team specializes in building custom API middleware layers that bridge the gap between legacy monolithic systems and modern cloud-native applications, ensuring real-time data flow without requiring a total system rip-and-replace."
    },
    {
        question: "What is the timeline for a Technical Audit?",
        answer: "A standard Institutional Audit takes 14 days. This includes a deep-dive into your codebase, infrastructure, and operational bottlenecks. At the end of Phase 0, you receive a full ROI-based roadmap for transformation."
    },
    {
        question: "Do you provide ongoing 24/7 support after deployment?",
        answer: "We are a Program Operations Partner, which means we don't just 'launch' and leave. We provide tiered Service Level Agreements (SLAs) including 24/7 monitoring, security patching, and scaling support as your user base grows."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section className="bg-white">
            <div className="max-w-[1000px] mx-auto">
                <div className="mb-20">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block">
                        Objection Handling
                    </span>
                    <TextReveal
                        as="h2"
                        text="Governance & Compliance."
                        className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-[#1a1a1a] tracking-tight"
                    />
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-stone-200">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-8 flex items-center justify-between text-left group"
                            >
                                <span className={`text-xl font-display font-bold transition-colors duration-300 ${openIndex === index ? 'text-brand' : 'text-[#1a1a1a]'}`}>
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus size={20} className="text-brand shrink-0" />
                                ) : (
                                    <Plus size={20} className="text-stone-300 group-hover:text-brand transition-colors shrink-0" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "circOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-[#606060] text-lg leading-relaxed pb-8 max-w-2xl">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
