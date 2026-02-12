"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
                            Legal / Privacy
                        </span>
                        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-display leading-[1.1] tracking-tighter font-bold text-[#1a1a1a] mb-8">
                            Privacy Policy.
                        </h1>
                        <div className="text-stone-500 space-y-8 text-lg leading-relaxed">
                            <p>
                                At RMJ IT SOLUTIONS, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website or use our services.
                            </p>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">1. Information We Collect</h2>
                                <p>
                                    We may collect personal information such as your name, email address, phone number, and company details when you contact us through our website or engage with our services. We also collect non-personal data such as browser type, IP address, and pages visited to improve our website experience.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">2. How We Use Your Information</h2>
                                <p>
                                    The information we collect is used to:
                                </p>
                                <ul className="list-disc pl-6 mt-4 space-y-2">
                                    <li>Provide and maintain our services.</li>
                                    <li>Respond to your inquiries and support requests.</li>
                                    <li>Send you updates, newsletters, and promotional materials (if opted in).</li>
                                    <li>Monitor and analyze website performance and usage.</li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">3. Data Security</h2>
                                <p>
                                    We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">4. Sharing Your Information</h2>
                                <p>
                                    We do not sell or rent your personal information to third parties. We may share information with trusted third-party service providers who assist us in operating our website or conducting our business, provided they agree to keep this information confidential.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">5. Cookies</h2>
                                <p>
                                    Our website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, although this may affect certain functionalities of the site.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">6. Changes to This Policy</h2>
                                <p>
                                    We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-display font-bold text-[#1a1a1a] mb-4">7. Institutional Enquiries</h2>
                                <p>
                                    If you have any questions about this Privacy Policy, please initiate an encrypted consultation request via our <Link href="/contact" className="text-brand hover:underline">Strategic Engagement</Link> portal.
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
