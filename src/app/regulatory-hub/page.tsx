import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import type { Metadata } from 'next';
import { Shield, FileCheck, Globe2, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Regulatory & Compliance Hub | RMJ IT Solutions',
    description: 'Our centralized repository for compliance standards, certifications, and legal frameworks.',
};

export default function RegulatoryHubPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
                <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-brand transition-colors mb-8">
                    <ArrowLeft size={16} className="mr-2" /> Back to Home
                </Link>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold tracking-tighter text-slate-900 leading-[1.1] mb-8">
                    Regulatory Hub
                </h1>
                <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                    We operate at the intersection of innovation and compliance. This hub centralizes our adherence to global standards, ensuring your infrastructure meets the strictest regulatory requirements.
                </p>
            </div>

            <Section className="py-12 border-t border-slate-100">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Column: Core Standards */}
                    <div className="space-y-12">
                        <h2 className="text-3xl font-display font-bold text-slate-900">Compliance Frameworks</h2>

                        <div className="group border border-slate-200 rounded-2xl p-8 hover:border-brand/40 transition-colors bg-slate-50">
                            <div className="flex items-start gap-4 mb-4">
                                <Shield className="w-8 h-8 text-brand" />
                                <h3 className="text-xl font-bold text-slate-900">Data Sovereignty & GDPR</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                We strictly adhere to data localization laws and the General Data Protection Regulation (GDPR). Our infrastructure ensures that personal data is processed lawfully, transparently, and securely.
                            </p>
                            <ul className="space-y-2 text-sm font-medium text-slate-500">
                                <li className="flex items-center gap-2">• <span className="text-slate-900">Right to Erasure</span> protocols active</li>
                                <li className="flex items-center gap-2">• <span className="text-slate-900">Data Portability</span> standards met</li>
                            </ul>
                        </div>

                        <div className="group border border-slate-200 rounded-2xl p-8 hover:border-brand/40 transition-colors bg-slate-50">
                            <div className="flex items-start gap-4 mb-4">
                                <Lock className="w-8 h-8 text-brand" />
                                <h3 className="text-xl font-bold text-slate-900">ISO/IEC 27001 Alignment</h3>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Our Information Security Management System (ISMS) is engineered to align with ISO 27001 standards, ensuring comprehensive risk management and data integrity controls.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Policies & Docs */}
                    <div className="space-y-12">
                        <h2 className="text-3xl font-display font-bold text-slate-900">Legal Documentation</h2>

                        <div className="space-y-6">
                            <div className="flex items-start gap-6 border-b border-slate-100 pb-6">
                                <FileCheck className="w-6 h-6 text-slate-400 mt-1" />
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Terms of Service</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                        The defining agreement for using RMJ IT services, outlining user rights, acceptable use, and service limitations.
                                    </p>
                                    <a href="/terms" className="text-xs font-bold uppercase tracking-widest text-brand hover:underline">View Policy →</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 border-b border-slate-100 pb-6">
                                <FileCheck className="w-6 h-6 text-slate-400 mt-1" />
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Privacy Policy</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                        Detailed disclosures on how we collect, use, and protect your personal and institutional data.
                                    </p>
                                    <a href="/privacy" className="text-xs font-bold uppercase tracking-widest text-brand hover:underline">View Policy →</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 border-b border-slate-100 pb-6">
                                <Globe2 className="w-6 h-6 text-slate-400 mt-1" />
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">Regional Compliance</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                                        Specific addendums for clients operating in specialized jurisdictions (e.g., CCPA for California, DPDP for India).
                                    </p>
                                    <div className="flex flex-col gap-2 mt-4">
                                        <a href="/regulatory-hub/regional-compliance" className="text-xs font-bold uppercase tracking-widest text-brand hover:underline block">
                                            View Addendums →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>

            <Footer />
        </main>
    );
}
