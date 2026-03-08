"use client";

import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Zap, Target, Users, LifeBuoy } from "lucide-react";

const reasons = [
    {
        title: "Expert Team",
        desc: "Our developers stay updated with industry trends and technologies to deliver high-performance and scalable systems.",
        icon: Users
    },
    {
        title: "Customized Solutions",
        desc: "Every solution we build is tailored to the specific needs and goals of each organization.",
        icon: Target
    },
    {
        title: "Creative Development",
        desc: "Our team delivers creative web design and modern application development using the latest technologies and frameworks.",
        icon: Zap
    },
    {
        title: "Competitive Pricing",
        desc: "We offer transparent and cost-effective pricing models to ensure our clients receive the best value for their investment.",
        icon: LifeBuoy
    }
];

export default function WhyChooseUs() {
    return (
        <Section id="why-choose-us" className="py-40 bg-white selection:bg-brand/10">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:items-end mb-32">
                    <div className="space-y-10">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-10 block font-mono"
                        >
                            {"// THE RMJ EDGE"}
                        </motion.span>
                        <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold text-slate-900 leading-[0.9] tracking-tighter">
                            Engineering Excellence <br /> Built on Trust.
                        </h2>
                    </div>
                    <div className="space-y-10">
                        <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                            We combine technical mastery with strategic architectural thinking to deliver digital solutions that provide long-term institutional value.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group space-y-10"
                        >
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-brand group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                                <reason.icon size={28} />
                            </div>
                            <div className="space-y-4 pt-4 border-t border-slate-100 group-hover:border-brand/20 transition-colors">
                                <h3 className="text-2xl font-display font-bold text-slate-900 leading-tight">
                                    {reason.title}
                                </h3>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                                    {reason.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
