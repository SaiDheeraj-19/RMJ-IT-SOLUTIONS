import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { ArrowLeft, Shield, Activity, Settings2, Lock } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Digital Traceability & Cookie Policy | RMJ IT Solutions',
    description: 'Technical documentation regarding our use of cookies for security, telemetry, and system integrity.',
};

export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Header Section */}
            <div className="bg-slate-900 text-white pt-40 pb-24 px-6 md:px-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-[1400px] mx-auto relative z-10">
                    <Link href="/" className="inline-flex items-center text-xs font-mono font-bold text-slate-400 hover:text-brand transition-colors mb-8 uppercase tracking-widest">
                        <ArrowLeft size={14} className="mr-2" /> Return to Console
                    </Link>
                    <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold tracking-tighter leading-[1.1] mb-8">
                        Digital Traceability <br />
                        <span className="text-slate-500">& Protocols.</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-medium max-w-2xl leading-relaxed">
                        We treat cookies as architectural components. They are strictly deployed to ensure system integrity, secure session states, and monitor infrastructure telemetry.
                    </p>
                </div>
            </div>

            <Section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Sidebar Navigation / Context */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                            <Shield className="w-10 h-10 text-brand mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Security First Architecture</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Our platform utilizes cookies primarily for verifying identity tokens and preventing CSRF (Cross-Site Request Forgery) attacks. Tracking is secondary to security.
                            </p>
                            <div className="flex items-center gap-3 text-xs font-mono text-slate-500 uppercase tracking-widest">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                System Status: Operational
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-2">Table of Contents</h4>
                            <a href="#necessary" className="block p-3 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-brand text-sm font-bold transition-colors">01. Operational Necessity</a>
                            <a href="#telemetry" className="block p-3 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-brand text-sm font-bold transition-colors">02. Telemetry & Diagnostics</a>
                            <a href="#preferences" className="block p-3 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-brand text-sm font-bold transition-colors">03. User State Management</a>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Section 01 */}
                        <div id="necessary" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white">
                                    <Lock size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-display font-bold text-slate-900">Operational Necessity</h2>
                                    <p className="text-slate-500 font-mono text-xs uppercase tracking-wider mt-1">Classification: Mandatory</p>
                                </div>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                These protocols are non-negotiable for system function. They handle authentication handshakes, load balancing across our CDN, and CSRF protection measures.
                            </p>

                            <div className="border border-slate-200 rounded-xl overflow-hidden">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50 text-slate-500 font-mono uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200">Protocol ID</th>
                                            <th className="p-4 border-b border-slate-200">Technical Function</th>
                                            <th className="p-4 border-b border-slate-200">Retention</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 font-medium">
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-4 font-mono text-brand">rmjit_session</td>
                                            <td className="p-4 text-slate-600">Encrypts user session keys for secure portal access.</td>
                                            <td className="p-4 text-slate-500">Session</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-4 font-mono text-brand">__cf_bm</td>
                                            <td className="p-4 text-slate-600">Cloudflare Bot Management (DDoS Protection).</td>
                                            <td className="p-4 text-slate-500">30 Mins</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-4 font-mono text-brand">rmjit_consent</td>
                                            <td className="p-4 text-slate-600">Stores legal compliance acknowledgement.</td>
                                            <td className="p-4 text-slate-500">1 Year</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Section 02 */}
                        <div id="telemetry" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                                    <Activity size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-display font-bold text-slate-900">Telemetry & Diagnostics</h2>
                                    <p className="text-slate-500 font-mono text-xs uppercase tracking-wider mt-1">Classification: Performance</p>
                                </div>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                We deploy diagnostic probes to measure infrastructure latency, page load performance, and user interaction paths. Data is aggregated and anonymized.
                            </p>

                            <div className="border border-slate-200 rounded-xl overflow-hidden">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50 text-slate-500 font-mono uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200">Protocol ID</th>
                                            <th className="p-4 border-b border-slate-200">Technical Function</th>
                                            <th className="p-4 border-b border-slate-200">Retention</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 font-medium">
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-4 font-mono text-indigo-600">_ga_RMJIT</td>
                                            <td className="p-4 text-slate-600">Google Analytics 4: System usage metrics.</td>
                                            <td className="p-4 text-slate-500">2 Years</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-4 font-mono text-indigo-600">_cl_sk</td>
                                            <td className="p-4 text-slate-600">Heatmap analysis for UI/UX optimization.</td>
                                            <td className="p-4 text-slate-500">24 Hours</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Section 03 */}
                        <div id="preferences" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500">
                                    <Settings2 size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-display font-bold text-slate-900">User State Management</h2>
                                    <p className="text-slate-500 font-mono text-xs uppercase tracking-wider mt-1">Classification: Functional</p>
                                </div>
                            </div>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                These tokens persist your interface customizations, such as dashboard layout preferences, theme settings, and regional localization.
                            </p>

                            <div className="border border-slate-200 rounded-xl overflow-hidden">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50 text-slate-500 font-mono uppercase text-xs tracking-wider">
                                        <tr>
                                            <th className="p-4 border-b border-slate-200">Protocol ID</th>
                                            <th className="p-4 border-b border-slate-200">Technical Function</th>
                                            <th className="p-4 border-b border-slate-200">Retention</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 font-medium">
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-4 font-mono text-slate-600">theme_state</td>
                                            <td className="p-4 text-slate-600">Persists dark/light mode selection.</td>
                                            <td className="p-4 text-slate-500">Persistent</td>
                                        </tr>
                                        <tr className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-4 font-mono text-slate-600">NEXT_LOCALE</td>
                                            <td className="p-4 text-slate-600">Maintains language/region context.</td>
                                            <td className="p-4 text-slate-500">Session</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="max-w-[1400px] mx-auto mt-24 pt-12 border-t border-slate-200">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Manual Override</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-3xl">
                        You maintain root access to your browser&apos;s storage. You can flush these tokens at any time via your browser&apos;s developer tools or settings. However, removing cryptographic tokens (Strictly Necessary) will terminate your active session and may trigger security lockouts.
                    </p>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
