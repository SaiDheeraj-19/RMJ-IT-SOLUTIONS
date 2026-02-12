"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function TermsOfUse() {
    return (
        <main className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            <section className="pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-[1000px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6 block">
                            Legal / Terms
                        </span>
                        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-display leading-[1.1] tracking-tighter font-bold text-[#1a1a1a] mb-8">
                            Terms of Use.
                        </h1>
                        <div className="text-stone-500 space-y-8 text-lg leading-relaxed">
                            <p>
                                By accessing and using the website of RMJ IT SOLUTIONS, you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use our website.
                            </p>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">1. Acceptance of Terms</h2>
                                <p>
                                    These Terms of Use govern your access to and use of rmjit.com. By using the site, you acknowledge that you have read, understood, and agreed to be bound by these terms.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">2. Intellectual Property</h2>
                                <p>
                                    All content on this website, including text, graphics, logos, images, and software, is the property of RMJ IT SOLUTIONS or its content suppliers and is protected by international copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without express written permission.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">3. Use of the Site</h2>
                                <p>
                                    You agree to use the website for lawful purposes only. You are prohibited from:
                                </p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li>Using the site in any way that violates local, state, or international laws.</li>
                                    <li>Engaging in any activity that could damage, disable, or impair the website.</li>
                                    <li>Attempting to gain unauthorized access to any part of the site or its systems.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">4. Limitation of Liability</h2>
                                <p>
                                    RMJ IT SOLUTIONS shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website or services. While we strive for accuracy, we do not guarantee that the information on the site is error-free or complete.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">5. Third-Party Links</h2>
                                <p>
                                    Our website may contain links to third-party websites. These links are provided for your convenience only, and we do not endorse or assume responsibility for the content or practices of these external sites.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">6. Governing Law</h2>
                                <p>
                                    These terms are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Kurnool, Andhra Pradesh.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">7. Changes to Terms</h2>
                                <p>
                                    We reserve the right to revise these Terms of Use at any time. By continuing to use the website after changes are posted, you agree to be bound by the updated terms.
                                </p>
                            </div>

                            <p className="pt-8 text-sm">Last Updated: February 11, 2026</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
