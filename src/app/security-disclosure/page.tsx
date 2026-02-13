import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Security Disclosure Policy | RMJ IT Solutions',
    description: 'Guidelines for reporting security vulnerabilities to RMJ IT Solutions.',
};

export default function SecurityDisclosurePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
                <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-brand transition-colors mb-8">
                    <ArrowLeft size={16} className="mr-2" /> Back to Home
                </Link>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold tracking-tighter text-slate-900 leading-[1.1] mb-8">
                    Security Disclosure Policy
                </h1>
                <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                    Security is the foundation of our engineering philosophy. We value the contributions of the security research community and are committed to fixing vulnerabilities.
                </p>
            </div>

            <Section className="py-12 border-t border-slate-100">
                <div className="max-w-4xl space-y-12">

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-slate-900">Reporting Vulnerabilities</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            If you believe you have discovered a security vulnerability in an RMJ IT Solutions application or infrastructure, we ask that you report it to us as soon as possible. We will verify the issue and take steps to address it.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Please email your findings to <a href="mailto:security@rmjit.com" className="text-brand font-bold hover:underline">security@rmjit.com</a>.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-slate-900">Safe Harbor</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We pledge not to pursue legal action against researchers who:
                        </p>
                        <ul className="list-disc pl-5 space-y-3 text-lg text-slate-600 leading-relaxed marker:text-brand">
                            <li>Engage in testing of systems/research without harming RMJ IT Solutions or its customers.</li>
                            <li>Engage in vulnerability testing within the scope of our vulnerability disclosure program.</li>
                            <li>Test on products without affecting customers, or receive permission/consent from customers before engaging in vulnerability testing against their devices/software.</li>
                            <li>Adhere to the laws of their location and the location of RMJ IT Solutions.</li>
                            <li>Refrain from disclosing vulnerability details to the public before a mutually agreed-upon timeframe expires.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-slate-900">Testing Scope</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            <strong>In Scope:</strong>
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-lg text-slate-600 leading-relaxed marker:text-brand">
                            <li>*.rmjit.com</li>
                            <li>RMJ IT public-facing APIs</li>
                        </ul>
                        <p className="text-lg text-slate-600 leading-relaxed mt-4">
                            <strong>Out of Scope:</strong>
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-lg text-slate-600 leading-relaxed marker:text-slate-400">
                            <li>Denial of Service (DoS) attacks.</li>
                            <li>Social engineering (phishing, vishing).</li>
                            <li>Physical security against RMJ IT offices or data centers.</li>
                            <li>Automated scans (unless you manually verify findings).</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-slate-900">Response Timeline</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We are committed to the following communication timeline:
                        </p>
                        <ul className="list-none space-y-3 text-lg text-slate-600 leading-relaxed mt-2">
                            <li className="flex gap-4">
                                <span className="font-mono font-bold text-brand uppercase tracking-wider min-w-[120px]">48 Hours</span>
                                <span>Acknowledgment of your report.</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-mono font-bold text-brand uppercase tracking-wider min-w-[120px]">5 Days</span>
                                <span>Triage and initial assessment of severity.</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-mono font-bold text-brand uppercase tracking-wider min-w-[120px]">Periodic</span>
                                <span>Updates on the remediation process.</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </Section>

            <Footer />
        </main>
    );
}
