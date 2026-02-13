"use client";

import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[110vh] flex items-center overflow-hidden bg-white">
            {/* The Institutional Canvas - Background System */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Minimalist Architectural Grid */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)`,
                        backgroundSize: 'clamp(50px, 8vw, 120px) clamp(50px, 8vw, 120px)',
                    }}
                />

                {/* Premium Gradient Auras */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-brand/5 blur-[150px] rounded-full"
                />
                <motion.div
                    animate={{
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1.1, 1, 1.1]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-50/50 blur-[120px] rounded-full"
                />
            </div>

            <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-24 pt-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    {/* Left: Strategic Content */}
                    <div className="lg:col-span-7 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="space-y-10"
                        >


                            <div className="space-y-6">
                                <TextReveal
                                    as="h1"
                                    text="Defining the Standard for Digital Sovereignty."
                                    className="text-[clamp(3.5rem,7vw,6.5rem)] font-display leading-[1.15] font-bold tracking-tighter text-slate-900 pb-6"
                                    delay={0.1}
                                />
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    className="max-w-xl"
                                >
                                    <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">
                                        We engineer high-stakes digital infrastructure where failure is not a metric. We deliver <span className="text-brand">architectural certainty</span> for the world&apos;s most demanding institutions.
                                    </p>
                                </motion.div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-8 pt-8">
                                <Link href="/contact" className="group w-full sm:w-auto">
                                    <button className="relative px-8 py-4 bg-brand text-white rounded-full overflow-hidden shadow-xl shadow-brand/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-4">
                                        <span className="text-[11px] uppercase tracking-[0.2em] font-black z-10">
                                            Initiate Structural Audit
                                        </span>
                                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform z-10" />
                                    </button>
                                </Link>


                            </div>
                        </motion.div>


                    </div>

                    {/* Right: The Visual Side */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="relative w-full aspect-square flex items-center justify-center p-8"
                        >
                            <Image
                                src="/Company-cuate.svg"
                                alt="Company Illustration"
                                width={600}
                                height={600}
                                className="w-full h-auto object-contain drop-shadow-2xl"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-slate-900 to-transparent" />
            </motion.div>
        </section>
    );
}
