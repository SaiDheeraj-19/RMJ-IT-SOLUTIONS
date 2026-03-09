"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap,
    Stethoscope,
    ShoppingBag,
    Building2,
    Factory,
    Landmark,
    Truck,
    Hotel,
    Brain,
    Cpu,
    ArrowRight,
    CheckCircle2,
    Layers,
    ShieldCheck,
    Zap,
    X,
} from "lucide-react";
import Link from "next/link";

type Industry = {
    icon: React.ElementType;
    title: string;
    color: string;
    accent: string;
    accentText: string;
    tagline: string;
    description: string;
    solutions: string[];
};

const industries: Industry[] = [
    {
        icon: GraduationCap,
        title: "Education & Academia",
        color: "from-blue-500/10 to-blue-600/5",
        accent: "bg-blue-500",
        accentText: "text-blue-600",
        tagline: "Smarter campuses. Better outcomes.",
        description:
            "We build integrated digital platforms for schools, colleges, and universities — from campus ERPs and student portals to e-learning systems and performance dashboards.",
        solutions: [
            "Campus ERP & Administration Portal",
            "Student Information Management System",
            "Online Examination & Assessment Tools",
            "E-Learning & Virtual Classroom Platform",
            "Fee Management & Payroll Systems",
            "Performance Analytics Dashboard",
        ],
    },
    {
        icon: Stethoscope,
        title: "Healthcare & Clinics",
        color: "from-emerald-500/10 to-emerald-600/5",
        accent: "bg-emerald-500",
        accentText: "text-emerald-600",
        tagline: "Secure. Reliable. Patient-first.",
        description:
            "Our healthcare solutions help hospitals, clinics, and diagnostic centres manage patient records, appointments, billing, and compliance — all in one secure system.",
        solutions: [
            "Hospital Management System (HMS)",
            "Electronic Health Records (EHR)",
            "Patient Appointment & Queue System",
            "Pharmacy & Inventory Management",
            "Lab Report & Diagnostic Tools",
            "Billing & Insurance Management",
        ],
    },
    {
        icon: ShoppingBag,
        title: "Retail & E-Commerce",
        color: "from-orange-500/10 to-orange-600/5",
        accent: "bg-orange-500",
        accentText: "text-orange-600",
        tagline: "Sell more. Operate smarter.",
        description:
            "From local retail shops to multi-location businesses, we develop inventory systems, e-commerce stores, and POS solutions that help manage sales, stock, and customer loyalty.",
        solutions: [
            "Custom E-Commerce Website & App",
            "Point of Sale (POS) System",
            "Inventory & Stock Management",
            "Order Tracking & Fulfilment",
            "Customer Loyalty & CRM Tools",
            "Analytics & Sales Reporting",
        ],
    },
    {
        icon: Building2,
        title: "Real Estate & Construction",
        color: "from-purple-500/10 to-purple-600/5",
        accent: "bg-purple-500",
        accentText: "text-purple-600",
        tagline: "Manage projects. Close deals faster.",
        description:
            "We create CRM platforms, project tracking tools, and property listing systems for builders, brokers, and real estate agencies to manage leads, projects, and clients efficiently.",
        solutions: [
            "Real Estate CRM & Lead Management",
            "Property Listing & Booking Portal",
            "Construction Project Tracker",
            "Vendor & Contractor Management",
            "Document & Agreement Management",
            "Client Communication Dashboard",
        ],
    },
    {
        icon: Factory,
        title: "Manufacturing & Industry",
        color: "from-yellow-500/10 to-yellow-600/5",
        accent: "bg-yellow-500",
        accentText: "text-yellow-600",
        tagline: "Streamline production. Cut waste.",
        description:
            "We develop production management, quality control, and supply chain systems for manufacturing businesses looking to improve efficiency and reduce operational costs.",
        solutions: [
            "Production Planning & Scheduling",
            "Quality Control & Inspection Tool",
            "Supply Chain & Procurement System",
            "Machine Maintenance Tracking",
            "Workforce & Shift Management",
            "Cost & Wastage Analytics",
        ],
    },
    {
        icon: Landmark,
        title: "Finance & Accounting",
        color: "from-sky-500/10 to-sky-600/5",
        accent: "bg-sky-500",
        accentText: "text-sky-600",
        tagline: "Accurate records. Confident decisions.",
        description:
            "Our financial software solutions help CA firms, NBFCs, and financial advisors manage accounts, client data, compliance reports, and regulatory submissions with ease.",
        solutions: [
            "Client Accounting & Ledger System",
            "Tax Filing & Compliance Management",
            "Invoice & Payment Tracking",
            "Financial Report Generation",
            "Audit Trail & Document Management",
            "Multi-Branch Financial Dashboard",
        ],
    },
    {
        icon: Truck,
        title: "Logistics & Transportation",
        color: "from-red-500/10 to-red-600/5",
        accent: "bg-red-500",
        accentText: "text-red-600",
        tagline: "Move goods. Track everything.",
        description:
            "We build fleet management systems, delivery tracking apps, and logistics dashboards for transport companies and courier businesses looking to optimise their operations.",
        solutions: [
            "Fleet & Vehicle Management System",
            "Live Delivery Tracking App",
            "Route Planning & Optimization",
            "Driver Management & Attendance",
            "Consignment & Freight Tracking",
            "Billing & Invoice Automation",
        ],
    },
    {
        icon: Hotel,
        title: "Hospitality & Tourism",
        color: "from-pink-500/10 to-pink-600/5",
        accent: "bg-pink-500",
        accentText: "text-pink-600",
        tagline: "Better guest experience. Every time.",
        description:
            "From hotel management systems to travel booking platforms, we help hospitality businesses deliver seamless guest experiences while managing operations efficiently.",
        solutions: [
            "Hotel Property Management System",
            "Online Room Booking & Reservation",
            "Restaurant & Food Order Management",
            "Housekeeping & Maintenance Tracker",
            "Guest Feedback & Review System",
            "Travel Package & Itinerary Builder",
        ],
    },
    {
        icon: Brain,
        title: "AI & Machine Learning",
        color: "from-violet-500/10 to-violet-600/5",
        accent: "bg-violet-600",
        accentText: "text-violet-600",
        tagline: "Train faster. Infer smarter.",
        description:
            "We provide systems designed for AI and Machine Learning workloads — including powerful servers and workstations for model training, data analysis, and AI inferencing. Our data science workstations are built for high performance and can be upgraded and scaled as your needs grow.",
        solutions: [
            "AI & ML Workstation Systems",
            "Model Training Infrastructure",
            "Data Analysis & Processing Platforms",
            "AI Inferencing Appliances",
            "Pre-configured AI Frameworks & Libraries",
            "Scalable & Upgradeable AI Rigs",
        ],
    },
    {
        icon: Cpu,
        title: "High Performance Computing",
        color: "from-teal-500/10 to-teal-600/5",
        accent: "bg-teal-600",
        accentText: "text-teal-600",
        tagline: "Maximum compute. Proven reliability.",
        description:
            "RMJ IT Solutions delivers HPC systems for organizations that need strong computing power for research, simulations, data processing, and engineering workloads. We design and deploy servers, workstations, and storage systems using reliable, certified hardware.",
        solutions: [
            "HPC Server & Workstation Deployment",
            "Research & Simulation Computing",
            "High-Throughput Data Processing",
            "Cluster Environment Setup & Management",
            "Open-Source & Commercial HPC Tools",
            "Storage Systems for Large Datasets",
        ],
    },
];

const pillars = [
    {
        icon: Layers,
        title: "Custom-Built, Not Generic",
        desc: "Every solution we build is tailored to your business needs — not a one-size-fits-all product.",
    },
    {
        icon: ShieldCheck,
        title: "Secure & Reliable",
        desc: "We follow best practices in security and system design to ensure your data is protected and your systems are always available.",
    },
    {
        icon: Zap,
        title: "Easy to Use & Maintain",
        desc: "Our systems are designed to be intuitive for your team, with clean UIs and straightforward maintenance.",
    },
];

export default function SolutionsPage() {
    const [selected, setSelected] = useState<Industry | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selected) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [selected]);

    return (
        <div className="pt-32 pb-20 selection:bg-brand/10">

            {/* ── Hero Section ── */}
            <section className="px-6 md:px-20 pt-10 pb-24" style={{ background: 'var(--background)' }}>
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[10px] uppercase tracking-[0.6em] font-black text-brand mb-6 block font-mono"
                    >
                        {"// INDUSTRY SOLUTIONS"}
                    </motion.span>

                    <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="max-w-3xl space-y-6"
                        >
                            <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-display font-bold text-foreground leading-[0.95] tracking-tighter">
                                Solutions for <br />
                                <span className="text-brand italic">Different Industries</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.25 }}
                            className="max-w-xl space-y-6"
                        >
                            <p className="text-lg text-foreground/70 font-medium leading-relaxed">
                                At RMJ IT Solutions, we build practical technology solutions for businesses in different industries.
                                We work closely with our clients to understand their needs and create systems that help them run their operations smoothly.
                            </p>
                            <p className="text-lg text-foreground/70 font-medium leading-relaxed">
                                Our team develops custom software, websites, and IT systems based on the specific requirements of each business.
                                Every solution is designed to be reliable, secure, and easy to maintain.
                            </p>
                            <p className="text-lg text-foreground/70 font-medium leading-relaxed">
                                We focus on delivering solutions that solve real problems, improve efficiency, and support business growth.
                                Our goal is to provide dependable technology that helps our clients work better and achieve their goals.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Core Pillars ── */}
            <section className="py-20" style={{ background: 'var(--surface-soft)' }}>
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pillars.map((p, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="rounded-[2.5rem] p-10 border flex flex-col gap-6"
                                style={{ background: 'var(--background)', borderColor: 'var(--border)' }}
                            >
                                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
                                    <p.icon size={22} />
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground">{p.title}</h3>
                                <p className="text-foreground/60 font-medium leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Industries Bento Grid ── */}
            <section className="py-24 px-6 md:px-20" style={{ background: 'var(--background)' }}>
                <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-[10px] uppercase tracking-[0.6em] font-black text-brand font-mono">
                            {"// WHAT WE BUILD"}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tighter leading-[0.95]">
                            Industries We Serve
                        </h2>
                        <p className="text-base text-foreground/50 font-medium max-w-xl mx-auto leading-relaxed">
                            Click any industry to see what we build for that sector.
                        </p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {industries.map((industry, i) => (
                            <motion.button
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.45 }}
                                whileHover={{ y: -4, scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setSelected(industry)}
                                className={`group relative flex flex-col items-center justify-center gap-4 p-6 rounded-3xl border bg-gradient-to-br ${industry.color} hover:border-brand/25 hover:shadow-lg hover:shadow-brand/8 transition-all duration-300 cursor-pointer text-center aspect-square`}
                                style={{ borderColor: 'var(--border)' }}
                            >
                                {/* Icon */}
                                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm border ${industry.accentText} group-hover:scale-110 transition-transform duration-300`}
                                    style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                    <industry.icon size={20} />
                                </div>

                                {/* Title */}
                                <span className="text-[13px] font-bold text-foreground/80 leading-tight">
                                    {industry.title}
                                </span>

                                {/* Hover hint */}
                                <span className="text-[10px] font-semibold text-foreground/30 group-hover:text-brand transition-colors duration-200">
                                    Tap to explore →
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Modal Popup ── */}
            <AnimatePresence>
                {selected && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            onClick={() => setSelected(null)}
                            className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm"
                        />

                        {/* Panel */}
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0, scale: 0.92, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.94, y: 30 }}
                            transition={{ type: "spring", stiffness: 320, damping: 28 }}
                            className="fixed inset-0 z-[210] flex items-center justify-center p-4 md:p-8"
                            onClick={() => setSelected(null)}
                        >
                            <div
                                className={`relative rounded-[2.5rem] shadow-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto overscroll-contain pointer-events-auto border bg-gradient-to-br ${selected.color}`}
                                style={{ background: 'var(--background)', borderColor: 'var(--border)' }}
                                onClick={(e) => e.stopPropagation()}
                                onWheel={(e) => e.stopPropagation()}
                                onTouchMove={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelected(null)}
                                    className="absolute top-6 right-6 w-10 h-10 rounded-full border flex items-center justify-center text-foreground/50 hover:text-foreground hover:scale-110 transition-all z-10 shadow-sm"
                                    style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                                >
                                    <X size={18} />
                                </button>

                                <div className="p-10 md:p-14 space-y-8">
                                    {/* Header */}
                                    <div className="flex items-start gap-5">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border ${selected.accentText} flex-shrink-0`}
                                            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                            <selected.icon size={26} />
                                        </div>
                                        <div className="space-y-1">
                                            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${selected.accentText}`}>
                                                {selected.tagline}
                                            </span>
                                            <h3 className="text-3xl font-display font-bold text-foreground leading-tight">
                                                {selected.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-lg text-foreground/65 font-medium leading-relaxed">
                                        {selected.description}
                                    </p>

                                    {/* Solutions */}
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] uppercase tracking-[0.35em] font-black text-foreground/40">
                                            What We Build
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {selected.solutions.map((sol, idx) => (
                                                <div key={idx} className="flex items-start gap-3 rounded-2xl px-5 py-3 border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
                                                    <CheckCircle2 size={14} className="text-brand mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm font-bold text-foreground/70">{sol}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <Link
                                        href="/contact"
                                        onClick={() => setSelected(null)}
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-foreground rounded-full text-[11px] font-black uppercase tracking-[0.25em] hover:scale-105 transition-all shadow-lg shadow-brand/20"
                                    >
                                        Discuss This Solution <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* ── Bottom CTA ── */}
            <section className="py-40 px-6 text-center" style={{ background: 'var(--surface-soft)' }}>
                <div className="max-w-3xl mx-auto space-y-10">
                    <span className="text-[10px] uppercase tracking-[0.6em] font-black text-brand font-mono">
                        {"// LET'S BUILD TOGETHER"}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tighter leading-[0.95]">
                        Don&apos;t see your industry? <br />
                        <span className="text-brand italic">Let&apos;s talk anyway.</span>
                    </h2>
                    <p className="text-lg text-foreground/60 font-medium leading-relaxed">
                        We work with businesses of all kinds. Tell us what you need and we&apos;ll figure out the best solution together.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-6 px-12 py-6 bg-brand text-foreground rounded-full text-[11px] font-black uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl shadow-brand/30"
                    >
                        Start a Conversation <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
