"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import HorizontalLine from "@/components/ui/HorizontalLine";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#f5f5f5]">
            <Navbar />

            <section className="min-h-[80vh] pt-40 flex flex-col justify-end pb-32 px-10 md:px-20">
                <div className="max-w-[1400px] mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand mb-12 block">
                            The Firm
                        </span>
                        <div className="mb-16">
                            <TextReveal
                                as="h1"
                                text="Technical Mastery."
                                className="text-[clamp(4rem,10vw,8rem)] font-display leading-[0.9] tracking-tighter font-bold"
                                delay={0.2}
                            />
                            <span className="text-[clamp(4rem,10vw,8rem)] font-display italic text-brand leading-none block mt-4 font-bold">Institutional Impact.</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Section className="bg-[#efefef]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                    <div className="lg:col-span-8">
                        <h2 className="text-4xl font-display mb-12 text-[#1a1a1a] leading-tight max-w-2xl font-bold">
                            RMJ IT exists to bridge the gap between technical complexity and sustainable business growth.
                        </h2>
                        <p className="text-2xl text-[#505050] max-w-2xl leading-relaxed font-normal">
                            A leading provider of innovative IT solutions, we specialize in delivering high-performance digital ecosystems for educational and corporate sectors. Based in Bangalore, our firm is driven by a commitment to improving operational efficiency and enhancing institutional security on a global scale.
                        </p>
                    </div>
                    <div className="lg:col-span-4 flex flex-col justify-end">
                        <HorizontalLine className="mb-8 w-12" />
                        <div className="text-[11px] uppercase tracking-[0.4em] font-black text-brand mb-6">Origins</div>
                        <p className="text-lg text-[#505050] leading-relaxed max-w-xs">
                            Established with a vision to leverage cutting-edge technology for organizational transformation, operating out of Bangalore&apos;s primary tech corridor.
                        </p>
                    </div>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4 border-t border-brand pt-12">
                        <span className="text-[11px] uppercase tracking-[0.4em] font-black text-brand">Institutional Philosophy</span>
                    </div>
                    <div className="lg:col-span-8 pt-12">
                        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-display mb-12 leading-none font-bold">Our Core <br /> Mandate.</h2>
                        <HorizontalLine className="mb-20 opacity-30" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xs uppercase tracking-widest font-black text-[#1a1a1a] mb-8">Mission</h3>
                                <p className="text-lg text-[#606060] leading-relaxed">
                                    To provide customized technology solutions—from network design to cybersecurity—tailored to the specific operational needs of high-growth organizations.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-xs uppercase tracking-widest font-black text-[#1a1a1a] mb-8">Vision</h3>
                                <p className="text-lg text-[#606060] leading-relaxed">
                                    To catalyze organizational success through analytical insights and streamlined digital processes that ensure clients remain competitive in an evolving landscape.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
