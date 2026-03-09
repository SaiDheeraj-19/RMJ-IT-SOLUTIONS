"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="pt-32 bg-background relative overflow-hidden flex flex-col justify-end min-h-[90vh]">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none opacity-40 transform-gpu will-change-transform" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand/10 blur-[150px] rounded-full pointer-events-none opacity-40 transform-gpu will-change-transform" />

            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10 flex-grow flex flex-col justify-center">
                <div className="max-w-4xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[clamp(4rem,10vw,8rem)] font-display font-semibold text-foreground leading-[0.9] tracking-tighter mb-8"
                    >
                        Ready for <br />
                        what&apos;s next?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-foreground/50 font-medium leading-relaxed max-w-xl mb-12"
                    >
                        Let&apos;s discuss your vision and see if we are the right fit.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center gap-6"
                    >
                        <Link
                            href="/contact"
                            className="btn-outline px-8 py-4 rounded-[100px] text-sm font-medium tracking-wide border-border hover:bg-foreground/10 hover:border-border"
                        >
                            Work With Us
                        </Link>
                        <Link
                            href="/services"
                            className="group flex items-center gap-2 px-6 py-4 text-sm font-medium text-foreground hover:text-brand transition-colors"
                        >
                            Explore our services
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Massive Bottom Text */}
            <div className="w-full relative mt-20 leading-none whitespace-nowrap overflow-hidden flex justify-center pb-0 mb-[-5%]">
                <h1 className="text-[clamp(8rem,15vw,20rem)] font-display font-bold tracking-tighter text-transparent" style={{ WebkitTextStroke: '2px rgba(245,151,104,0.4)' }}>
                    RMJ IT SOLUTIONS
                </h1>
            </div>
        </section>
    );
}
