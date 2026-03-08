"use client";

import { motion } from "framer-motion";

const reasons = [
    {
        title: "Expert Team",
        desc: "Our developers stay updated with industry trends and technologies to deliver high-performance systems."
    },
    {
        title: "Customized Solutions",
        desc: "Every solution we build is tailored to the specific needs and goals of each organization."
    },
    {
        title: "Creative Development",
        desc: "Our team delivers creative web design and modern application development using the latest technologies."
    },
    {
        title: "Competitive Pricing",
        desc: "We offer transparent and cost-effective pricing models to ensure our clients receive the best value."
    }
];

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="py-32 bg-background relative border-t border-border">
            <div className="max-w-[1440px] mx-auto px-6">
                <div className="flex flex-col gap-10 md:gap-16">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-10 border-b border-border hover:border-[#f59768]/50 transition-colors"
                        >
                            <h3 className="text-[clamp(2.5rem,5vw,5rem)] font-display font-semibold text-foreground tracking-tighter w-full md:w-[60%] leading-none">
                                {reason.title}
                            </h3>
                            <p className="text-lg md:text-xl text-foreground/50 leading-relaxed font-medium w-full md:w-[35%]">
                                {reason.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
