"use client";

import Section from "@/components/ui/Section";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const contactDetails = [
    {
        label: "Direct Line",
        value: "+91 86397 56899",
        icon: Phone,
        href: "tel:+918639756899"
    },
    {
        label: "Email Inquiry",
        value: "support@rmjit.com",
        icon: Mail,
        href: "mailto:support@rmjit.com"
    },
    {
        label: "Headquarters",
        value: "Kurnool, AP",
        icon: MapPin,
        href: "/contact"
    }
];

export default function ContactPreview() {
    return (
        <Section className="py-32 bg-surface-soft border-t border-slate-100">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-24">
                    <div className="space-y-8 max-w-md">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-brand">Connect</span>
                        <h2 className="text-backgroundxl font-display font-bold text-foreground tracking-tighter leading-[0.9]">Ready to architect your solution?</h2>
                        <p className="text-lg text-foreground/70 font-medium">Get in touch with our engineering team to start your digital transformation journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-12 lg:pt-0">
                        {contactDetails.map((item, i) => (
                            <div key={i} className="space-y-4 group">
                                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-foreground/70 group-hover:text-brand group-hover:border-brand/20 transition-all duration-500 shadow-sm">
                                    <item.icon size={18} />
                                </div>
                                <div className="space-y-1">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-foreground/70">{item.label}</span>
                                    <a href={item.href} className="block text-xl font-bold text-foreground hover:text-brand transition-colors tracking-tight">
                                        {item.value}
                                    </a>
                                </div>
                            </div>
                        ))}

                        <div className="md:col-span-3 pt-8">
                            <Link href="/contact" className="inline-flex items-center gap-6 px-10 py-5 bg-surface0 text-foreground rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] group hover:bg-brand transition-all duration-500 shadow-xl shadow-slate-900/10">
                                Contact Engineering <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
