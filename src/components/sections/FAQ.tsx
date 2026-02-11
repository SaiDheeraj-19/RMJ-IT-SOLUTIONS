"use client";

import Section from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import TextReveal from "@/components/animations/TextReveal";

const faqs = [
    {
        question: "What exactly is included in the Free Technical Audit?",
        answer: "We review your current tech stack, infrastructure, and operational workflows over 14 days. You receive a written report covering: system architecture assessment, security vulnerability findings, performance bottlenecks, and a prioritized roadmap with estimated timelines and costs. There is no commitment required."
    },
    {
        question: "We already have an IT team. Why would we need RMJ IT?",
        answer: "We don't replace your team — we augment them. Internal IT teams are often stretched thin managing day-to-day operations. We handle large-scale builds, migrations, and specialized projects (ERP, AI, cloud) that require dedicated bandwidth and domain expertise your team may not have time for."
    },
    {
        question: "How do you handle data privacy for government and university clients?",
        answer: "Every deployment uses AES-256 encryption at rest, TLS 1.3 in transit, role-based access controls with MFA, and automated vulnerability scanning in CI/CD pipelines. We support on-premise deployments and air-gapped environments when required. Our systems are designed for SOC2, ISO 27001, and GDPR readiness."
    },
    {
        question: "Can you integrate with our existing legacy systems?",
        answer: "Yes. We build custom API middleware layers that bridge legacy monolithic systems with modern applications. This allows real-time data synchronization without requiring a full system replacement. Typical integration timelines range from 4-8 weeks depending on complexity."
    },
    {
        question: "What is your typical project timeline and cost?",
        answer: "A web application typically takes 10-16 weeks. A full campus ERP: 16-24 weeks. Costs vary based on scope, but a typical mid-size engagement ranges from ₹8-25 lakhs. We provide fixed-price or time-and-materials contracts — your choice. Every project includes a detailed scope document before we start."
    },
    {
        question: "What happens after deployment? Do you provide ongoing support?",
        answer: "Yes. Every deployment includes 30 days of post-launch stabilization at no extra cost. After that, we offer monthly retainer plans covering monitoring, security patches, performance optimization, and feature additions. SLAs range from 4-hour to 24-hour response times."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section className="bg-white">
            <div className="max-w-[1000px] mx-auto">
                <div className="mb-20">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-brand mb-8 block">
                        Common Questions
                    </span>
                    <TextReveal
                        as="h2"
                        text="Answers before you ask."
                        className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-[#1a1a1a] tracking-tight"
                    />
                    <p className="mt-6 text-xl text-[#606060] max-w-xl">
                        We&apos;ve compiled the questions we hear most from IT directors, CTOs, and procurement teams evaluating technical partners.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-stone-200">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-8 flex items-center justify-between text-left group"
                            >
                                <span className={`text-xl font-display font-bold transition-colors duration-300 pr-8 ${openIndex === index ? 'text-brand' : 'text-[#1a1a1a]'}`}>
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
