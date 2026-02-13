"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Cookie, Activity, Settings2, Lock } from "lucide-react";

type ConsentState = "accepted" | "rejected" | "custom" | null;

export default function CookieConsent() {
    const [isOpen, setIsOpen] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Preference states
    const [prefs, setPrefs] = useState({
        necessary: true, // Always true
        analytics: true,
        marketing: false
    });

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
        saveConsent("accepted", { necessary: true, analytics: true, marketing: true });
    };

    const handleRejectNonEssential = () => {
        saveConsent("rejected", { necessary: true, analytics: false, marketing: false });
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
        setIsOpen(false);
        setShowPreferences(false);
    };

    if (!isMounted) return null;

    return (
        <>
            {/* 🍪 Floating Cookie Button (Visible when banner is closed) */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => { setIsOpen(true); setShowPreferences(false); }}
                        className="fixed bottom-6 right-6 z-[90] w-12 h-12 bg-white rounded-full shadow-xl border border-slate-200 flex items-center justify-center text-brand hover:border-brand transition-colors group"
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

            {/* 🛑 Consent Banner / Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed bottom-6 right-6 z-[100] max-w-[440px] w-full p-4"
                    >
                        {/* THE NEW DESIGN: Clean White Card with Brand Accents */}
                        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-6 relative overflow-hidden">

                            {!showPreferences ? (
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-display font-bold text-slate-900 leading-tight">
                                            We use cookies to secure and optimize your experience.
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            Our infrastructure relies on essential cookies for security. We also use analytics to improve performance. <Link href="/cookie-policy" className="text-brand font-bold hover:underline">Read Policy</Link>
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <button
                                            onClick={() => setShowPreferences(true)}
                                            className="flex-1 py-3 px-4 bg-white border border-slate-200 text-slate-600 text-[13px] font-bold rounded-lg hover:border-brand hover:text-brand transition-all duration-200 shadow-sm"
                                        >
                                            Preferences
                                        </button>
                                        <button
                                            onClick={handleRejectNonEssential}
                                            className="flex-1 py-3 px-4 bg-white border border-slate-200 text-slate-600 text-[13px] font-bold rounded-lg hover:bg-slate-50 transition-all duration-200 shadow-sm"
                                        >
                                            Decline
                                        </button>
                                        <button
                                            onClick={handleAcceptAll}
                                            className="flex-1 py-3 px-4 bg-brand text-white text-[13px] font-bold rounded-lg hover:bg-brand/90 transition-all duration-200 shadow-lg shadow-brand/20"
                                        >
                                            Accept
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                /* Preferences View */
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                                        <div className="flex items-center gap-2">
                                            <Settings2 size={18} className="text-slate-400" />
                                            <h3 className="font-bold text-slate-900 text-sm">
                                                Manage Preferences
                                            </h3>
                                        </div>
                                        <button
                                            onClick={() => setShowPreferences(false)}
                                            className="text-slate-400 hover:text-slate-900 transition-colors"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <div className="space-y-3">
                                        {/* Security - Locked */}
                                        <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                                            <Lock className="shrink-0 text-slate-400 mt-0.5" size={16} />
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-sm font-bold text-slate-700">Strictly Necessary</span>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Required</span>
                                                </div>
                                                <p className="text-xs text-slate-500 leading-relaxed">
                                                    Essential for security, authentication, and core site functions.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Telemetry Toggle */}
                                        <div
                                            className={`flex items-start gap-4 p-4 rounded-lg border cursor-pointer transition-all ${prefs.analytics ? 'bg-brand/5 border-brand/20' : 'bg-white border-slate-200 hover:border-slate-300'}`}
                                            onClick={() => setPrefs({ ...prefs, analytics: !prefs.analytics })}
                                        >
                                            <Activity className={`shrink-0 mt-0.5 transition-colors ${prefs.analytics ? 'text-brand' : 'text-slate-400'}`} size={16} />
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className={`text-sm font-bold transition-colors ${prefs.analytics ? 'text-brand' : 'text-slate-700'}`}>Analytics & Performance</span>

                                                    {/* Toggle Switch */}
                                                    <div className={`w-9 h-5 rounded-full relative transition-colors duration-300 ${prefs.analytics ? 'bg-brand' : 'bg-slate-200'}`}>
                                                        <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform duration-300 ${prefs.analytics ? 'translate-x-4' : 'translate-x-0'}`} />
                                                    </div>
                                                </div>
                                                <p className="text-xs text-slate-500 leading-relaxed">
                                                    Helps us understand how you use the site to improve performance.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-3 pt-2">
                                        <button
                                            onClick={() => setShowPreferences(false)}
                                            className="flex-1 py-3 px-4 bg-white border border-slate-200 text-slate-600 text-[13px] font-bold rounded-lg hover:bg-slate-50 transition-all duration-200"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleSavePreferences}
                                            className="flex-[2] py-3 px-4 bg-brand text-white text-[13px] font-bold rounded-lg hover:bg-brand/90 transition-all duration-200 shadow-lg shadow-brand/20"
                                        >
                                            Save Preferences
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
