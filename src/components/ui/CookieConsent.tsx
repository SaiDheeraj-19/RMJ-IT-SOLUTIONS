"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Cookie, Check, Plus, Minus } from "lucide-react";

type ConsentState = "accepted" | "rejected" | "custom" | null;

export default function CookieConsent() {
    const [isOpen, setIsOpen] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Preference states
    const [prefs, setPrefs] = useState({
        necessary: true,
        performance: true,
        functional: false,
        targeting: false
    });

    // Accordion state for Privacy Center
    const [expandedSection, setExpandedSection] = useState<string | null>(null);

    useEffect(() => {
        const mountTimer = setTimeout(() => setIsMounted(true), 0);

        const savedConsent = localStorage.getItem("rmjit_cookie_consent");
        if (!savedConsent) {
            const timer = setTimeout(() => setIsOpen(true), 1500);
            return () => { clearTimeout(timer); clearTimeout(mountTimer); };
        }
        return () => clearTimeout(mountTimer);
    }, []);

    const handleAcceptAll = () => {
        saveConsent("accepted", { necessary: true, performance: true, functional: true, targeting: true });
    };

    const handleRejectNonEssential = () => {
        saveConsent("rejected", { necessary: true, performance: false, functional: false, targeting: false });
    };

    const handleSavePreferences = () => {
        saveConsent("custom", prefs);
    };

    const saveConsent = (status: ConsentState, preferences: typeof prefs) => {
        const consentData = {
            status,
            preferences,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem("rmjit_cookie_consent", JSON.stringify(consentData));
        window.dispatchEvent(new Event("rmjit_consent_updated"));
        setIsOpen(false);
        setShowPreferences(false);
    };

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    if (!isMounted) return null;

    return (
        <>
            {/* 🍪 Floating Cookie Button */}
            <AnimatePresence>
                {!isOpen && !showPreferences && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        // Open main banner first (standard UX), but user can go to prefs from there
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-[90] w-12 h-12 bg-surface rounded-full shadow-xl border border-border/20 flex items-center justify-center text-brand hover:border-brand transition-colors group"
                        aria-label="Cookie Preferences"
                    >
                        <motion.div
                            whileHover={{ rotate: 15 }}
                            transition={{ type: "spring", stiffness: 300, damping: 10 }}
                        >
                            <Cookie className="w-6 h-6 group-hover:text-brand transition-colors" />
                        </motion.div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* 🛑 Main Consent Banner (Small Card) */}
            <AnimatePresence>
                {isOpen && !showPreferences && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed bottom-6 right-6 z-[100] max-w-[440px] w-full p-4"
                    >
                        <div className="bg-surface rounded-xl shadow-2xl border border-border/20 p-6 relative overflow-hidden">
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <h3 className="text-xl font-display font-bold text-foreground leading-tight">
                                        We use cookies to secure and optimize your experience.
                                    </h3>
                                    <p className="text-foreground/70 text-sm leading-relaxed">
                                        We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners. <Link href="/cookie-policy" className="text-brand font-bold hover:underline">Read Policy</Link>
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 pt-2">
                                    <button
                                        onClick={() => setShowPreferences(true)}
                                        className="flex-1 py-3 px-4 bg-surface border border-border/20 text-foreground/70 text-[13px] font-bold rounded-lg hover:border-brand hover:text-brand transition-all duration-200 shadow-sm"
                                    >
                                        Preferences
                                    </button>
                                    <button
                                        onClick={handleRejectNonEssential}
                                        className="flex-1 py-3 px-4 bg-surface border border-border/20 text-foreground/70 text-[13px] font-bold rounded-lg hover:bg-surface-soft transition-all duration-200 shadow-sm"
                                    >
                                        Decline
                                    </button>
                                    <button
                                        onClick={handleAcceptAll}
                                        className="flex-1 py-3 px-4 bg-brand text-foreground text-[13px] font-bold rounded-lg hover:bg-brand/90 transition-all duration-200 shadow-lg shadow-brand/20"
                                    >
                                        Accept
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 🛠 Privacy Preference Centre (Side Drawer / Modal) */}
            <AnimatePresence>
                {showPreferences && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
                            onClick={() => setShowPreferences(false)}
                        />

                        {/* Drawer Panel */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 left-0 bottom-0 w-full max-w-[500px] bg-background z-[101] shadow-2xl flex flex-col h-full overflow-hidden border-r border-border/20"
                        >
                            {/* Header */}
                            <div className="p-6 md:p-8 border-b border-border/20 flex items-start justify-between bg-surface shrink-0">
                                <div>
                                    <h2 className="text-2xl font-display font-bold text-foreground mb-2">Privacy preference centre</h2>
                                    <p className="text-foreground/70 text-sm leading-relaxed">
                                        When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. <Link href="/cookie-policy" className="text-brand underline hover:no-underline">More information</Link>
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowPreferences(false)}
                                    className="p-2 hover:bg-surface0 rounded-full transition-colors -mr-2 -mt-2"
                                >
                                    <X size={24} className="text-foreground/70" />
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-background">

                                <h3 className="text-lg font-bold text-foreground">Manage consent preferences</h3>

                                {/* Accordion Items */}
                                <div className="space-y-4">

                                    {/* Strictly Necessary */}
                                    <AccordionItem
                                        title="Strictly necessary cookies"
                                        expanded={expandedSection === 'necessary'}
                                        onToggle={() => toggleSection('necessary')}
                                        alwaysActive
                                    >
                                        These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
                                    </AccordionItem>

                                    {/* Performance */}
                                    <AccordionItem
                                        title="Performance cookies"
                                        expanded={expandedSection === 'performance'}
                                        onToggle={() => toggleSection('performance')}
                                        checked={prefs.performance}
                                        onChange={(val) => setPrefs({ ...prefs, performance: val })}
                                    >
                                        These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                                    </AccordionItem>

                                    {/* Functional */}
                                    <AccordionItem
                                        title="Functional cookies"
                                        expanded={expandedSection === 'functional'}
                                        onToggle={() => toggleSection('functional')}
                                        checked={prefs.functional}
                                        onChange={(val) => setPrefs({ ...prefs, functional: val })}
                                    >
                                        These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.
                                    </AccordionItem>

                                    {/* Targeting */}
                                    <AccordionItem
                                        title="Targeting cookies"
                                        expanded={expandedSection === 'targeting'}
                                        onToggle={() => toggleSection('targeting')}
                                        checked={prefs.targeting}
                                        onChange={(val) => setPrefs({ ...prefs, targeting: val })}
                                    >
                                        These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
                                    </AccordionItem>

                                </div>
                            </div>

                            {/* Footer actions */}
                            <div className="p-6 border-t border-border/20 bg-surface shrink-0">
                                <button
                                    onClick={handleSavePreferences}
                                    className="w-full py-4 bg-background text-foreground font-bold rounded-full hover:border-brand/50 transition-all duration-200 shadow-lg text-sm uppercase tracking-widest border border-border/20"
                                >
                                    Confirm my choices
                                </button>
                            </div>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

// Reusable Accordion Component
function AccordionItem({
    title,
    children,
    expanded,
    onToggle,
    alwaysActive = false,
    checked = false,
    onChange
}: {
    title: string;
    children: React.ReactNode;
    expanded: boolean;
    onToggle: () => void;
    alwaysActive?: boolean;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}) {
    return (
        <div className="bg-surface border text-left border-border/20 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md">
            <div className={`flex items-center justify-between p-4 cursor-pointer ${expanded ? 'bg-surface-soft' : 'bg-surface'}`} >
                <div className="flex items-center gap-4 flex-1" onClick={onToggle}>
                    <button className="text-foreground/70">
                        {expanded ? <Minus size={16} /> : <Plus size={16} />}
                    </button>
                    <span className="font-bold text-foreground/70 text-sm">{title}</span>
                </div>

                {alwaysActive ? (
                    <span className="text-brand font-bold text-xs uppercase tracking-wider mr-2">Always active</span>
                ) : (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            if (onChange) onChange(!checked);
                        }}
                        className={`w-12 h-6 rounded-full relative transition-colors duration-300 ease-in-out ${checked ? 'bg-brand' : 'bg-border/20'}`}
                    >
                        <div className={`absolute top-1 left-1 w-4 h-4 bg-foreground rounded-full shadow-sm transition-transform duration-300 flex items-center justify-center ${checked ? 'translate-x-6' : 'translate-x-0'}`}>
                            {checked && <Check size={10} className="text-surface" />}
                        </div>
                    </button>
                )}
            </div>

            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 pt-0 text-sm text-foreground/70 leading-relaxed border-t border-border/10 bg-surface">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
