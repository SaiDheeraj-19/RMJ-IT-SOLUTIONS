"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import Link from "next/link";
import { ArrowRight, Code, Database, Layout, Shield, Smartphone, Zap } from "lucide-react";

const features = [
    {
        title: "Frontend Engineering",
        desc: "Lightning-fast, highly interactive user interfaces built with React and Next.js, optimized for conversions and retention.",
        icon: <Layout className="w-5 h-5" />
    },
    {
        title: "Backend Architecture",
        desc: "Scalable APIs and microservices using Node.js, Python, or Go to power complex business logic under heavy loads.",
        icon: <Database className="w-5 h-5" />
    },
    {
        title: "Progressive Web Apps",
        desc: "App-like experiences directly in the browser with offline support, push notifications, and fast loading times.",
        icon: <Smartphone className="w-5 h-5" />
    },
    {
        title: "High Performance",
        desc: "Optimized asset delivery, server-side rendering, and efficient caching to ensure sub-second page loads.",
        icon: <Zap className="w-5 h-5" />
    },
    {
        title: "Enterprise Security",
        desc: "Built-in protection against common vulnerabilities (XSS, CSRF, Injection) with secure authentication flows.",
        icon: <Shield className="w-5 h-5" />
    },
    {
        title: "API Integrations",
        desc: "Seamlessly connecting your web app with third-party services, payment gateways, and existing ERP systems.",
        icon: <Code className="w-5 h-5" />
    }
];

export default function WebApplicationsPage() {
    return (
        <main className="min-h-screen bg-[#f8fafc]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                            backgroundSize: '20px 20px',
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/50 via-transparent to-[#f8fafc]" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand mb-6 block">
                            Service / Web Apps
                        </span>
                        <TextReveal
                            as="h1"
                            text="Custom Web Applications."
                            className="text-[clamp(3.2rem,7vw,5.5rem)] font-display leading-[0.9] tracking-tighter font-bold text-[#1a1a1a] mb-6"
                        />
                        <p className="text-xl text-[#505050] max-w-xl leading-relaxed mb-8">
                            We architect secure, scalable, and tailored web applications designed to solve your unique business challenges. From enterprise portals to consumer platforms.
                        </p>
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#1a1a1a] text-foreground text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-brand transition-all duration-300 shadow-xl"
                        >
                            Discuss Your Project
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Core Features */}
            <Section className="bg-white">
                <div className="max-w-[1400px] mx-auto">
                    <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
                        <div className="max-w-2xl">
                            <span className="text-brand font-mono text-sm tracking-widest block mb-4 uppercase">{`// Engineering Excellence`}</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1a1a1a] leading-tight flex-1">
                                Built for scale. <br /> Designed for users.
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="text-brand mb-8 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-brand/5 rounded-lg flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <div className="h-px bg-stone-100 flex-1" />
                                </div>
                                <h4 className="text-xl font-display font-bold text-[#1a1a1a] mb-4 uppercase tracking-tight">{feature.title}</h4>
                                <p className="text-[#606060] leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Development Process */}
            <Section className="bg-[#fffdf5]">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h3 className="text-4xl font-display font-bold text-[#1a1a1a] mb-8 tracking-tight">Structured <br /> Delivery Process.</h3>
                        <p className="text-lg text-[#505050] leading-relaxed mb-12">
                            We follow an agile, iterative methodology that ensures transparency, predictable delivery timelines, and alignment with your business goals at every stage.
                        </p>

                        <div className="grid grid-cols-2 gap-12 border-t border-stone-200 pt-12">
                            <div>
                                <span className="text-4xl font-display font-bold text-brand">01</span>
                                <p className="text-xs uppercase tracking-widest font-black text-[#1a1a1a] mt-2">Discovery & Architecture</p>
                            </div>
                            <div>
                                <span className="text-4xl font-display font-bold text-brand">02</span>
                                <p className="text-xs uppercase tracking-widest font-black text-[#1a1a1a] mt-2">Iterative Development</p>
                            </div>
                            <div>
                                <span className="text-4xl font-display font-bold text-brand">03</span>
                                <p className="text-xs uppercase tracking-widest font-black text-[#1a1a1a] mt-2">Rigorous Testing</p>
                            </div>
                            <div>
                                <span className="text-4xl font-display font-bold text-brand">04</span>
                                <p className="text-xs uppercase tracking-widest font-black text-[#1a1a1a] mt-2">Deployment & Scaling</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-full min-h-[400px] rounded-[2rem] overflow-hidden">
                        <div className="absolute inset-0 bg-[#1a1a1a] flex flex-col justify-center p-12 overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                            <div className="relative z-10 w-full h-full border border-white/10 rounded-xl overflow-hidden shadow-2xl bg-[#0a0b0c] flex flex-col">
                                {/* Browser mock header */}
                                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-[#111]">
                                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                                </div>
                                {/* Code content */}
                                <div className="flex-1 p-6 font-mono text-[11px] md:text-xs text-green-400/80 overflow-hidden leading-relaxed opacity-80">
                                    <p><span className="text-blue-400">export default async function</span> <span className="text-yellow-200">SystemArchitecture</span>() {"{"}</p>
                                    <p className="pl-4"><span className="text-purple-400">const</span> database = <span className="text-blue-400">await</span> <span className="text-yellow-200">connectDB</span>();</p>
                                    <p className="pl-4"><span className="text-purple-400">const</span> auth = <span className="text-blue-400">await</span> <span className="text-yellow-200">verifySession</span>();</p>
                                    <br />
                                    <p className="pl-4"><span className="text-purple-400">if</span> (!auth.isValid) <span className="text-blue-400">return</span> <span className="text-blue-400">new</span> <span className="text-yellow-200">Response</span>(&quot;Unauthorized&quot;, {`"{ status: 401 }"`});</p>
                                    <br />
                                    <p className="pl-4"><span className="text-purple-400">const</span> data = <span className="text-blue-400">await</span> database.records.<span className="text-yellow-200">find</span>({"{"}</p>
                                    <p className="pl-8">tenantId: auth.tenantId,</p>
                                    <p className="pl-8">status: <span className="text-green-300">&quot;active&quot;</span></p>
                                    <p className="pl-4">{"}"}).<span className="text-yellow-200">populate</span>(<span className="text-green-300">&quot;metrics&quot;</span>);</p>
                                    <br />
                                    <p className="pl-4"><span className="text-blue-400">return</span> (</p>
                                    <p className="pl-8 text-stone-300">{"<DashboardLayout>"}</p>
                                    <p className="pl-12 text-stone-300">{"<MetricsGrid data={data} />"}</p>
                                    <p className="pl-8 text-stone-300">{"</DashboardLayout>"}</p>
                                    <p className="pl-4">);</p>
                                    <p>{"}"}</p>
                                    <p className="animate-pulse pt-2">_</p>
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
