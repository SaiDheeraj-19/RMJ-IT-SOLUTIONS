import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { ArrowLeft, Cookie, ShieldCheck, Settings, Info, Ban, FileText } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Policy | RMJ IT Solutions',
    description: 'Information about how we use cookies to improve your experience.',
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
                        <ArrowLeft size={14} className="mr-2" /> Return to Home
                    </Link>
                    <h1 className="text-[clamp(2.5rem,5vw,5rem)] font-display font-bold tracking-tighter leading-[1.1] mb-8">
                        Cookie Policy.
                    </h1>
                    <p className="text-xl text-slate-400 font-medium max-w-2xl leading-relaxed">
                        Transparent information about how and why we use cookies to improve your browsing experience.
                    </p>
                </div>
            </div>

            <Section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Sidebar Navigation */}
                    <div className="lg:col-span-4 space-y-12">
                        <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 sticky top-24">
                            <Cookie className="w-10 h-10 text-brand mb-6" />
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Navigation</h3>
                            <div className="space-y-2">
                                <a href="#what-are-cookies" className="block p-3 rounded-lg hover:bg-white text-slate-600 hover:text-brand text-sm font-bold transition-all border border-transparent hover:border-slate-100 hover:shadow-sm">What are cookies?</a>
                                <a href="#how-we-use" className="block p-3 rounded-lg hover:bg-white text-slate-600 hover:text-brand text-sm font-bold transition-all border border-transparent hover:border-slate-100 hover:shadow-sm">How we use cookies?</a>
                                <a href="#types-of-cookies" className="block p-3 rounded-lg hover:bg-white text-slate-600 hover:text-brand text-sm font-bold transition-all border border-transparent hover:border-slate-100 hover:shadow-sm">Types of cookies</a>
                                <a href="#information-collection" className="block p-3 rounded-lg hover:bg-white text-slate-600 hover:text-brand text-sm font-bold transition-all border border-transparent hover:border-slate-100 hover:shadow-sm">Information we collect</a>
                                <a href="#blocking-cookies" className="block p-3 rounded-lg hover:bg-white text-slate-600 hover:text-brand text-sm font-bold transition-all border border-transparent hover:border-slate-100 hover:shadow-sm">Managing cookies</a>
                                <a href="#policy-changes" className="block p-3 rounded-lg hover:bg-white text-slate-600 hover:text-brand text-sm font-bold transition-all border border-transparent hover:border-slate-100 hover:shadow-sm">Policy updates</a>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* What are cookies? */}
                        <div id="what-are-cookies" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                                    <Info size={20} />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-slate-900">What are cookies?</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                <p>
                                    A cookie is a small file of letters and numbers. Cookies contain information that is stored on the browser of your computer or mobile device&apos;s hard drive.
                                </p>
                            </div>
                        </div>

                        {/* How we use cookies? */}
                        <div id="how-we-use" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand">
                                    <Settings size={20} />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-slate-900">How we use cookies?</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                <p>
                                    We use cookies to distinguish you from other users of our website and to provide a browsing experience that is unique to you. Cookies are used by RMJ IT Solutions so that our website can remember what you have done whilst browsing our website, for instance, your log-in details and your preferences.
                                </p>
                            </div>
                        </div>

                        {/* Types of cookies */}
                        <div id="types-of-cookies" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                                    <ShieldCheck size={20} />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-slate-900">What type of cookies do we use?</h2>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 space-y-6">
                                <p className="text-slate-600 leading-relaxed">
                                    Cookies can be in the form of session cookies or persistent cookies. Session cookies are deleted from your computer when you close your web-browser. Persistent cookies will remain stored on your computer until deleted or until they reach their expiry date. We use the following cookies:
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Analytical/performance cookies.</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            These cookies allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Functionality cookies.</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            These cookies are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences, allow for live chat support on your browsing experience.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Targeting cookies.</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose. These cookies allow you to share and like & send information to other websites to customize their advertisements.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-2">Marketing & Data Management.</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            We use data management platforms to collect device information and behavioral data about how our websites and other digital touchpoints are used. The information is used to build audiences for online advertising. The aim is to make sure we advertise relevant products and services at the correct time. Audiences can be, for example, interest-based or based on demography (age, gender). If you prefer not to receive targeted advertising you can control cookies set on your device from the browser settings.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Information we collect */}
                        <div id="information-collection" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                                    <FileText size={20} />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-slate-900">What kind of information do we collect?</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                                <p>
                                    When you visit our website, we may automatically collect the following types of information from you: Your internet protocol (IP) address, your login information, time zone setting, operating system and platform, information about your visits including the URL you came from, your country, the search terms you used in our website, products or services you viewed, page response times, download errors, length of visits to certain pages, page interaction information (such as scrolling, clicks, and mouse-overs), and the methods used to browse away from the page. We may collect this information from you whether or not you have engaged with our services directly.
                                </p>
                            </div>
                        </div>

                        {/* Permission and Blocking */}
                        <div id="blocking-cookies" className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-600">
                                    <Ban size={20} />
                                </div>
                                <h2 className="text-2xl font-display font-bold text-slate-900">Your permission and blocking cookies</h2>
                            </div>
                            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                                <p>
                                    By using the RMJ IT Solutions website on a computer or mobile device, you agree to our Privacy and Cookies policy and consent to our use of cookies.
                                </p>
                                <p>
                                    However, most browsers allow you to refuse cookies. You may block our cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. You can find out more about cookies and how to delete and control them on <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-brand underline hover:text-brand/80">www.aboutcookies.org</a> or click help in your browser menu.
                                </p>
                                <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg text-amber-900 text-sm">
                                    <strong>Note:</strong> If you block our use of cookies, you may be unable to access certain areas of our website and certain functions and pages will not work in the usual way.
                                </div>
                            </div>
                        </div>

                        {/* Changes to Policy */}
                        <div id="policy-changes" className="scroll-mt-32">
                            <h2 className="text-xl font-bold text-slate-900 mb-4">How RMJ IT Solutions can change the Cookie Policy</h2>
                            <p className="text-slate-600 leading-relaxed">
                                RMJ IT Solutions may from time to time update this policy. The date of issue will be indicated by the date on the top of this policy. Changes in technology, legislation, and authorities’ guidance may require us to inform you of the activities we undertake where it affects your privacy rights. You should check this page occasionally to ensure you are familiar with any changes.
                            </p>
                        </div>

                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
}
