import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Accessibility Statement | RMJ IT Solutions',
    description: 'Our commitment to digital inclusion and accessibility standards.',
};

export default function AccessibilityPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-12 px-6 md:px-12 max-w-[1400px] mx-auto">
                <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-400 hover:text-brand transition-colors mb-8">
                    <ArrowLeft size={16} className="mr-2" /> Back to Home
                </Link>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-bold tracking-tighter text-slate-900 leading-[1.1] mb-8">
                    Accessibility Statement
                </h1>
                <p className="text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
                    We believe that technology should be accessible to everyone, regardless of ability. We are committed to ensuring our digital infrastructure is inclusive by design.
                </p>
            </div>

            <Section className="py-12 border-t border-slate-100">
                <div className="max-w-4xl space-y-12">

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-slate-900">Our Commitment</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            RMJ IT Solutions is dedicated to making our website and digital services usable by all people, including those with disabilities. We are continuously working to improve the user experience for everyone and apply the relevant accessibility standards.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-slate-900">Conformance Status</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We strive to conform to <span className="font-semibold text-slate-900">WCAG 2.1 Level AA</span> standards whenever possible. We regularly review our site to ensure we maintain these standards.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-slate-900">Accessibility Features</h2>
                        <ul className="list-disc pl-5 space-y-3 text-lg text-slate-600 leading-relaxed marker:text-brand">
                            <li>Semantic HTML5 structure for screen reader compatibility.</li>
                            <li>Sufficient color contrast ratios for readability.</li>
                            <li>Keyboard navigation support throughout the site.</li>
                            <li>Alternative text for images and non-text content.</li>
                            <li>Responsive design that adapts to various screen sizes and zoom levels.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-2xl font-display font-bold text-slate-900">Feedback & Contact</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We welcome your feedback on the accessibility of the RMJ IT Solutions website. If you encounter any barriers or have suggestions for improvement, please contact us:
                        </p>
                        <ul className="list-none space-y-2 text-lg text-slate-600 leading-relaxed mt-4">
                            <li><strong className="text-slate-900">Email:</strong> accessibility@rmjit.com</li>
                            <li><strong className="text-slate-900">Phone:</strong> +91 8639756899</li>
                        </ul>
                        <p className="text-base text-slate-500 mt-4 italic">
                            We try to respond to feedback within 2 business days.
                        </p>
                    </div>

                </div>
            </Section>

            <Footer />
        </main>
    );
}
