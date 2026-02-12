"use client";

import Section from "@/components/ui/Section";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, ShieldCheck } from "lucide-react";
import { useRef } from "react";

const leadership = [
    {
        role: "Managing Director",
        philosophy: "Boardroom Certainty",
        message: "In a world of fragmented legacy systems, we deliver structural certainty. Our mission is to stabilize global institutional infrastructure so that leaders can operate with absolute strategic clarity.",
        gradient: "bg-gradient-to-br from-brand/5 to-transparent"
    },
    {
        role: "Chief Architect",
        philosophy: "Structural Integrity",
        message: "Engineering is about the removal of doubt. We refuse to compromise on architectural durability. Every system we deploy is a long-term investment in institutional resilience.",
        gradient: "bg-gradient-to-br from-slate-50 to-transparent"
    },
    {
        role: "Systems Orchestrator",
        philosophy: "Deterministic Reliability",
        message: "Our team operates within a zero-failure soul. We don't just solve problems; we engineer them out of existence through mathematical precision and deterministic design.",
        gradient: "bg-gradient-to-br from-blue-50/30 to-transparent"
    }
];

export default function LeadershipPhilosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

    return (
        <Section ref={containerRef} className="bg-[#fafafa] py-40 overflow-hidden relative border-y border-slate-100">
            {/* Unique Architectural Aura */}
            <motion.div style={{ y }} className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-brand/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-10%] w-[30vw] h-[30vw] bg-indigo-50/50 blur-[100px] rounded-full" />
            </motion.div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="text-center mb-32 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.6em" }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[10px] uppercase font-black text-brand mb-10 block font-mono"
                    >
                        {`// THE CERTAINTY FRAMEWORK`}
                    </motion.span>
                    <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter mb-10">
                        Institutional engineering <br /> for the <span className="italic text-brand">Decades ahead.</span>
                    </h2>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        We deliver the architectural foundation for the modern enterprise. Our leadership has defined the digital standards for high-stakes environments where failure is not a metric.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {leadership.map((leader, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className={`${leader.gradient} p-12 rounded-[4rem] border border-slate-100 flex flex-col justify-between group hover:border-brand/30 transition-all duration-700 min-h-[450px]`}
                        >
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm">
                                        <Quote size={24} />
                                    </div>
                                    <ShieldCheck className="text-brand/20" size={32} strokeWidth={1} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-black text-slate-900 mb-2 tracking-tight">
                                        {leader.philosophy}
                                    </h3>
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-black text-brand font-mono">
                                        {leader.role}
                                    </span>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    &ldquo;{leader.message}&rdquo;
                                </p>
                            </div>

                            <motion.div
                                className="mt-12 h-1 bg-slate-100 rounded-full overflow-hidden"
                                whileHover={{ scaleX: 1.05 }}
                            >
                                <motion.div
                                    className="h-full bg-brand w-1/3"
                                    initial={{ x: "-100%" }}
                                    whileInView={{ x: "200%" }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
