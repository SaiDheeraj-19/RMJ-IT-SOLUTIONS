"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { useRef } from "react";

export default function CTA() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section
            ref={sectionRef}
            className="bg-brand text-[#1a1a1a] py-40 md:py-60 relative overflow-hidden flex flex-col items-center justify-center text-center"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
            <motion.div
                style={{ y: bgY }}
                className="absolute top-[-50%] left-[-20%] w-[100vw] h-[100vw] bg-white/20 rounded-full blur-[200px]"
            />
            <motion.div
                style={{ y: bgY }}
                className="absolute bottom-[-30%] right-[-20%] w-[60vw] h-[60vw] bg-black/10 rounded-full blur-[150px]"
            />

            {/* Floating particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-white/20"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 3) * 20}%`,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                    }}
                />
            ))}

            <motion.div
                style={{ y: textY, scale, opacity }}
                className="max-w-[1400px] mx-auto z-10 px-10 relative"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="text-[11px] uppercase font-black text-black/40 mb-12 block"
                    >
                        Next Step
                    </motion.span>

                    <Link href="/contact" className="group block" id="bottom-cta">
                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[clamp(3rem,9vw,7rem)] font-display font-medium leading-[0.9] tracking-tighter mb-8 text-black group-hover:scale-[1.01] transition-transform duration-700 ease-out max-w-5xl mx-auto"
                        >
                            Get a free audit. <br /> <span className="italic text-white font-bold">Know where you stand.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-black/50 text-xl mb-16 max-w-lg mx-auto"
                        >
                            We&apos;ll review your infrastructure, identify risks, and deliver a prioritized roadmap — in 14 days, at zero cost.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-4 px-12 py-6 bg-[#1a1a1a] text-white rounded-full text-sm uppercase tracking-widest font-black hover:bg-white hover:text-[#1a1a1a] transition-all duration-300 shadow-2xl group-hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)]"
                        >
                            Request Free Audit
                            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                        </motion.div>
                    </Link>

                    {/* Alternative CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <span className="text-black/30 text-sm">or</span>
                        <Link href="tel:+918639756899" className="group inline-flex items-center gap-3 text-black/60 hover:text-black text-sm font-bold transition-colors" id="bottom-cta-phone">
                            <Phone size={16} />
                            Call us directly: +91 8639756899
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
