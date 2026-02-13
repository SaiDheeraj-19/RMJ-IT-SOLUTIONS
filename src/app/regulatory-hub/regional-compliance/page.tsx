import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import type { Metadata } from 'next';
import { IndianRupee, ShieldAlert, Globe, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Regional Compliance Addendums | RMJ IT Solutions',
    description: 'Detailed compliance frameworks for India (DPDP), USA (CCPA), and Europe (GDPR).',
};

export default function RegionalCompliancePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
                <Link href="/regulatory-hub" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-brand transition-colors mb-8">
                    <ArrowLeft size={16} className="mr-2" /> Back to Regulatory Hub
                </Link>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold tracking-tighter text-slate-900 leading-[1.1] mb-8">
                    Regional Compliance Addendums
                </h1>
                <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                    Detailed operational frameworks for data processing across major global jurisdictions.
                </p>
            </div>

            <Section className="py-12 border-t border-slate-100">
                <div className="max-w-4xl space-y-16">

                    {/* India Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <IndianRupee className="w-8 h-8 text-brand" />
                            <h2 className="text-3xl font-display font-bold text-slate-900">India: DPDP Act 2023 Compliance</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                            <p>
                                RMJ IT Solutions is fully compliant with the Digital Personal Data Protection (DPDP) Act, 2023. Our infrastructure ensures that personal data of Indian citizens is processed with explicit consent and for legitimate purposes only.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-brand">
                                <li><strong>Consent Management:</strong> All data collection forms include explicit, itemized consent checkboxes.</li>
                                <li><strong>Data Localization:</strong> Critical PII data for Indian clients is stored exclusively within Indian data centers (Mumbai/Hyderabad regions).</li>
                                <li><strong>Grievance Redressal:</strong> We maintain a dedicated Data Protection Officer (DPO) contact for Indian citizens.</li>
                            </ul>
                        </div>
                    </div>

                    {/* USA Section */}
                    <div className="space-y-6 pt-12 border-t border-slate-100">
                        <div className="flex items-center gap-4">
                            <ShieldAlert className="w-8 h-8 text-slate-400" />
                            <h2 className="text-3xl font-display font-bold text-slate-900">USA: CCPA & CPRA Addendum</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                            <p>
                                For residents of California and other US states with specific privacy laws, we acknowledge and facilitate your rights under the California Consumer Privacy Act (CCPA) and its amendment, the CPRA.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-slate-400">
                                <li><strong>Right to Know:</strong> You may request a report of the specific pieces of personal information we have collected about you.</li>
                                <li><strong>Right to Delete:</strong> You may request the deletion of your personal information, subject to certain legal exceptions.</li>
                                <li><strong>Do Not Sell:</strong> We do not sell your personal data to third parties.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Global Section */}
                    <div className="space-y-6 pt-12 border-t border-slate-100">
                        <div className="flex items-center gap-4">
                            <Globe className="w-8 h-8 text-slate-400" />
                            <h2 className="text-3xl font-display font-bold text-slate-900">Global: GDPR Alignment</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                            <p>
                                Our global operations are aligned with the General Data Protection Regulation (EU) 2016/679. We process data based on lawful grounds such as contractual necessity, legal obligation, and legitimate interests.
                            </p>
                            <p className="mt-4">
                                We utilize Standard Contractual Clauses (SCCs) for international data transfers to ensure adequate protection.
                            </p>
                        </div>
                    </div>

                    {/* Contact Block */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mt-12">
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Compliance Inquiries</h3>
                        <p className="text-slate-600 mb-6">
                            For specific legal documentation or to exercise your data rights, please contact our Legal & Compliance team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">Email</span>
                                <a href="mailto:legal@rmjit.com" className="text-brand font-bold hover:underline">legal@rmjit.com</a>
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">Hotline</span>
                                <a href="tel:+918639756899" className="text-slate-900 font-bold hover:text-brand transition-colors">+91 8639756899</a>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>

            <Footer />
        </main>
    );
}
