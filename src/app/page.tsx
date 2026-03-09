"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TechStackMarquee from '@/components/sections/TechStackMarquee';
import HeroImage3D from '@/components/sections/HeroImage3D';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text-line',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.12, ease: 'power3.out', delay: 0.3 }
      );
      gsap.fromTo('.hero-right',
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.4, ease: 'power3.out', delay: 0.5 }
      );
      gsap.utils.toArray<Element>('.fade-up').forEach((el) => {
        gsap.fromTo(el,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.9, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);



  return (
    <main ref={containerRef} className="min-h-screen overflow-hidden pb-40 font-sans" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Background Gradients — absolute (not fixed) to avoid scroll repaints */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[50vw] h-[50vw] rounded-full opacity-15 bg-brand/20 blur-[120px] transform-gpu will-change-transform" />
        <div className="absolute top-[-5%] -left-[15%] w-[40vw] h-[40vw] rounded-full opacity-10 bg-blue-600/20 blur-[100px] transform-gpu will-change-transform" />
      </div>

      {/* ── HERO SECTION ── */}
      <section className="relative z-10 container mx-auto px-4 md:px-12 pt-36 md:pt-48 min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left */}
        <div className="w-full md:w-[52%] space-y-6 z-20">

          {/* Eyebrow */}
          <p className="hero-text-line text-[11px] font-black uppercase tracking-[0.5em] font-mono" style={{ color: 'var(--brand)', opacity: 0.85 }}>IT Infrastructure · Software Engineering</p>

          <h1 className="hero-text-line font-bold leading-[1.1] tracking-[-1.5px]" style={{ color: 'var(--foreground)', fontSize: 'clamp(1.9rem, 3.8vw, 3.1rem)' }}>
            Engineering Digital<br />Infrastructure<br /><span>That Scales.</span>
          </h1>

          <p className="hero-text-line leading-[1.6] max-w-md font-normal" style={{ color: 'var(--foreground)', opacity: 0.55, fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}>
            A technology partner building reliable, scalable systems from Campus ERP to custom web applications. Based in Kurnool, Andhra Pradesh.
          </p>

          <div className="flex items-center gap-5 pt-2 hero-text-line">
            <Link href="/contact" className="btn-glow px-7 py-3 text-[14px] font-bold tracking-wide">
              Work With Us
            </Link>
            <Link href="/services" className="flex items-center gap-2 text-[14px] font-semibold hover:opacity-100 transition-opacity group" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
              Explore Services <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Link>
          </div>
        </div>

        {/* Right — 3D Animated Hero Image */}
        <div className="w-full md:w-[48%] relative mt-8 md:mt-0 hero-right flex justify-center md:justify-end items-center">
          <HeroImage3D />
        </div>
      </section>
      {/* ── TECH STACK MARQUEE ── */}
      <section className="relative z-10 w-full">
        <TechStackMarquee />
      </section>

      {/* ── TRUSTED BY & STAKEHOLDERS ── */}
      <section className="relative z-10 w-full py-8">
        <div className="container mx-auto px-4 md:px-12">
          <p className="text-center text-[11px] font-black uppercase tracking-[0.6em] mb-6 font-mono"
            style={{ color: 'var(--foreground)', opacity: 0.6 }}>
            Trusted By &amp; Stakeholders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {/* GPCET */}
            <div className="group flex flex-col items-center gap-2 cursor-default select-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/gpcet-logo.png" alt="GPCET"
                className="h-11 w-11 object-contain rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
              <p className="text-[10px] font-black tracking-widest opacity-40 group-hover:opacity-90 transition-opacity duration-300"
                style={{ color: 'var(--foreground)' }}>GPCET</p>
            </div>
            {/* RECW */}
            <div className="group flex flex-col items-center gap-2 cursor-default select-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/recw-logo.png" alt="RECW"
                className="h-11 w-11 object-contain rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110" />
              <p className="text-[10px] font-black tracking-widest opacity-40 group-hover:opacity-90 transition-opacity duration-300"
                style={{ color: 'var(--foreground)' }}>RECW</p>
            </div>
          </div>
        </div>
      </section>


      {/* ── CORE CAPABILITIES ── */}
      <section id="capabilities" className="relative z-10 container mx-auto px-4 md:px-12 pt-48 pb-20">
        <div className="text-center mb-20 max-w-5xl mx-auto fade-up">
          <span className="text-[13px] uppercase tracking-[0.4em] font-black font-mono mb-6 block" style={{ color: 'var(--brand)' }}>OUR SERVICES</span>
          <h2 className="text-5xl md:text-[72px] font-bold tracking-tight mb-8 leading-[1.05]" style={{ color: 'var(--foreground)' }}>The full spectrum of<br />core capabilities</h2>
          <p className="text-xl text-center leading-[1.35] mb-14 font-medium uppercase tracking-tight max-w-3xl mx-auto" style={{ color: 'var(--foreground)', opacity: 0.5 }}>
            We replace the need for multiple vendors. From brand strategy to custom software, we build the entire ecosystem your business runs on.
          </p>
          <div className="flex items-center justify-center gap-10">
            <Link href="/contact" className="btn-glow px-9 py-3.5 text-lg font-bold">Work With Us</Link>
            <Link href="/services" className="flex items-center gap-2 text-lg hover:opacity-100 transition-opacity font-semibold group" style={{ color: 'var(--foreground)', opacity: 0.6 }}>
              View All Services <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-7xl mx-auto">

          {/* Web Applications — Full Width */}
          <div className="col-span-1 md:col-span-2 rounded-[20px] border p-10 md:p-14 relative overflow-hidden group fade-up min-h-[480px] flex flex-col md:flex-row items-center gap-12"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] rounded-full opacity-10 pointer-events-none bg-blue-600/30 blur-[80px] transform-gpu" />
            <div className="flex-1 max-w-lg relative z-10">
              <div className="mb-6 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: 'var(--foreground)', opacity: 0.7 }}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight" style={{ color: 'var(--foreground)' }}>Web Applications</h3>
              <p className="text-lg mb-8 leading-[1.6]" style={{ color: 'var(--foreground)', opacity: 0.55 }}>Creates secure, scalable, and customized web applications to meet clients&apos; unique business needs, developed by our expert team of developers.</p>
              <Link href="/services/web-applications" className="flex items-center gap-2 text-[#F59768] font-semibold hover:gap-3 transition-all">Explore Service →</Link>
            </div>
            <div className="flex-1 relative w-full min-h-[280px] rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
              <Image
                src="/service_web_apps.png"
                alt="Web Applications"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Digital Campus — full width featured card */}
          <div className="col-span-1 md:col-span-2 rounded-[20px] border p-10 md:p-14 relative overflow-hidden group fade-up min-h-[480px] flex flex-col md:flex-row-reverse items-center gap-12"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-10 pointer-events-none bg-brand/30 blur-[80px] transform-gpu" />
            <div className="flex-1 max-w-lg relative z-10">
              <div className="mb-6 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: 'var(--foreground)', opacity: 0.7 }}><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight" style={{ color: 'var(--foreground)' }}>Digital Campus</h3>
              <p className="text-lg mb-6 leading-[1.6]" style={{ color: 'var(--foreground)', opacity: 0.55 }}>A comprehensive educational platform streamlining academic management. Includes Attendance, Marks, Placements, Training Schedules, and Progress Reports.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Attendance', 'Academics', 'Placements', 'Training', 'Reports'].map(m => (
                  <span key={m} className="px-3 py-1 rounded-full text-xs font-semibold border" style={{ borderColor: 'var(--border)', color: 'var(--foreground)', opacity: 0.7 }}>{m}</span>
                ))}
              </div>
              {/* Used by */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[9px] font-black uppercase tracking-[0.6em] font-mono" style={{ color: 'var(--foreground)', opacity: 0.35 }}>Used by</span>
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/gpcet-logo.png" alt="GPCET" title="G. Pullaiah College of Engineering & Technology" className="h-7 w-7 object-contain rounded-full opacity-70 hover:opacity-100 transition-opacity" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/recw-logo.png" alt="RECW" title="Ravindra College of Engineering for Women" className="h-7 w-7 object-contain rounded-full opacity-70 hover:opacity-100 transition-opacity" />
                  <span className="text-[10px] font-semibold" style={{ color: 'var(--foreground)', opacity: 0.4 }}>GPCET &amp; RECW</span>
                </div>
              </div>
              <Link href="/products" className="flex items-center gap-2 text-[#F59768] font-semibold hover:gap-3 transition-all">Learn More →</Link>
            </div>
            <div className="flex-1 relative w-full min-h-[280px] rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-700">
              <Image
                src="/service_digital_campus.png"
                alt="Digital Campus"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* iOS & Android Apps */}
          <div className="rounded-[20px] border p-10 relative overflow-hidden group fade-up min-h-[520px] flex flex-col"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full opacity-10 pointer-events-none" style={{ background: '#3150aa', filter: 'blur(80px)' }} />
            <div className="relative z-10 flex flex-col flex-1">
              <div className="mb-6 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: 'var(--foreground)', opacity: 0.7 }}><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight" style={{ color: 'var(--foreground)' }}>iOS & Android Apps</h3>
              <p className="text-base mb-6 leading-[1.6]" style={{ color: 'var(--foreground)', opacity: 0.55 }}>Customized mobile applications for iOS and Android, built with the latest technologies tailored to your business needs.</p>
              <div className="relative flex-1 min-h-[220px] rounded-2xl overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-700">
                <Image src="/service_android_ios.png" alt="iOS Android Apps" fill className="object-cover" />
              </div>
              <div className="flex items-center gap-6 mt-auto">
                <Link href="/services/mobile-apps" className="flex items-center gap-2 text-[#F59768] font-semibold hover:gap-3 transition-all text-sm">Android →</Link>
                <Link href="/services/mobile-apps" className="flex items-center gap-2 text-[#F59768] font-semibold hover:gap-3 transition-all text-sm">iOS →</Link>
              </div>
            </div>
          </div>

          {/* Digital Marketing */}
          <div className="rounded-[20px] border p-10 relative overflow-hidden group fade-up min-h-[520px] flex flex-col"
            style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full opacity-10 pointer-events-none" style={{ background: '#b05d41', filter: 'blur(80px)' }} />
            <div className="relative z-10 flex flex-col flex-1">
              <div className="mb-6 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ color: 'var(--foreground)', opacity: 0.7 }}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 tracking-tight" style={{ color: 'var(--foreground)' }}>Digital Marketing</h3>
              <p className="text-base mb-6 leading-[1.6]" style={{ color: 'var(--foreground)', opacity: 0.55 }}>SEO, Social Media Marketing, email campaigns, and more — designed to drive measurable growth and brand visibility.</p>
              <div className="relative flex-1 min-h-[220px] rounded-2xl overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-700">
                <Image src="/service_digital_marketing.png" alt="Digital Marketing" fill className="object-cover" />
              </div>
              <Link href="/services/digital-marketing" className="flex items-center gap-2 text-[#F59768] font-semibold hover:gap-3 transition-all">Explore Service →</Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── THE BUILD ENVIRONMENT (matching RefractWeb exactly) ── */}
      <section className="relative z-10 container mx-auto px-4 md:px-12 pt-48 pb-20 overflow-hidden">
        <div className="rounded-[44px] border p-12 md:p-20 relative overflow-hidden flex flex-col xl:flex-row items-center gap-16 min-h-[640px] fade-up"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          {/* Background glows */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-20 -z-10" style={{ background: '#3150aa', filter: 'blur(180px)' }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full opacity-10 -z-10" style={{ background: '#b05d41', filter: 'blur(150px)' }} />

          {/* Left text */}
          <div className="relative z-20 flex-1 space-y-8">
            <h2 className="text-6xl md:text-[80px] font-bold leading-[0.95]" style={{ color: 'var(--foreground)', letterSpacing: '-2.4px' }}>
              The build<br />environment.
            </h2>
            <p className="text-xl md:text-[22px] max-w-lg leading-[1.35] font-medium uppercase tracking-tight" style={{ color: 'var(--foreground)', opacity: 0.45 }}>
              A proven stack for speed and scale. We leverage these tools to ensure reliability and uncompromising polish.
            </p>
            <div className="pt-6">
              <Link href="/contact" className="btn-glow px-10 py-4 text-lg font-bold inline-block">
                Start a project
              </Link>
            </div>
          </div>

          {/* Right — All 21 tech logos, 4-col staggered grid */}
          <div className="relative z-20 flex-1 w-full max-w-[640px] min-h-[520px] flex items-center justify-center overflow-hidden">
            {(() => {
              const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
              const S = "https://cdn.simpleicons.org";
              const techs = [
                { src: `${D}/html5/html5-original.svg`, label: "HTML5", glow: "rgba(227,76,38,0.2)" },
                { src: `${D}/css3/css3-original.svg`, label: "CSS3", glow: "rgba(38,77,228,0.2)" },
                { src: `${D}/javascript/javascript-original.svg`, label: "JavaScript", glow: "rgba(247,223,30,0.2)" },
                { src: `${D}/react/react-original.svg`, label: "React", glow: "rgba(97,218,251,0.2)" },
                { src: `${S}/nextdotjs/ffffff`, label: "Next.js", glow: "rgba(255,255,255,0.08)" },
                { src: `${D}/nodejs/nodejs-original.svg`, label: "Node.js", glow: "rgba(104,160,99,0.2)" },
                { src: `${D}/flutter/flutter-original.svg`, label: "Flutter", glow: "rgba(84,202,251,0.2)" },
                { src: `${D}/python/python-original.svg`, label: "Python", glow: "rgba(55,118,171,0.2)" },
                { src: `${D}/tensorflow/tensorflow-original.svg`, label: "TensorFlow", glow: "rgba(255,110,64,0.2)" },
                { src: `${D}/pytorch/pytorch-original.svg`, label: "PyTorch", glow: "rgba(238,76,44,0.2)" },
                { src: `${D}/docker/docker-original.svg`, label: "Docker", glow: "rgba(25,150,210,0.2)" },
                { src: `${D}/kubernetes/kubernetes-original.svg`, label: "Kubernetes", glow: "rgba(50,108,229,0.2)" },
                { src: `${D}/linux/linux-original.svg`, label: "Linux", glow: "rgba(255,213,0,0.15)" },
                { src: `${D}/postgresql/postgresql-original.svg`, label: "PostgreSQL", glow: "rgba(51,103,145,0.2)" },
                { src: `${D}/mongodb/mongodb-original.svg`, label: "MongoDB", glow: "rgba(71,162,72,0.2)" },
                { src: `${S}/express/ffffff`, label: "Express.js", glow: "rgba(255,255,255,0.07)" },
                { src: `${S}/github/ffffff`, label: "GitHub", glow: "rgba(255,255,255,0.08)" },
                { src: `${D}/figma/figma-original.svg`, label: "Figma", glow: "rgba(162,89,255,0.2)" },
                { src: `${S}/vercel/ffffff`, label: "Vercel", glow: "rgba(255,255,255,0.08)" },
                { src: `${D}/amazonwebservices/amazonwebservices-original-wordmark.svg`, label: "AWS", glow: "rgba(249,168,37,0.2)" },
                { src: `${S}/greensock/88ce02`, label: "GSAP", glow: "rgba(136,206,2,0.2)" },
              ];
              // Stagger offsets cycling through 4 columns
              const yOffsets = [48, 16, -20, -44, 28, -8, 8, -32, 52, 20, -24, -40, 36, -4, 12, -28, 44, 8, -16, -36, 24];

              return (
                <div className="grid grid-cols-4 gap-3" style={{ transform: 'rotate(-4deg) scale(0.97)' }}>
                  {techs.map((t, i) => (
                    <div key={t.label} className="relative h-24 w-24 group/card"
                      style={{ transform: `translateY(${yOffsets[i] ?? 0}px)` }}>
                      <div className="relative h-full w-full rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-transform duration-500 hover:scale-110"
                        style={{ background: 'var(--surface-soft)', borderColor: 'rgba(255,255,255,0.07)' }}>
                        <div className="absolute inset-0 rounded-2xl" style={{ background: `radial-gradient(circle at center, ${t.glow}, transparent 70%)` }} />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.src} alt={t.label} className="w-9 h-9 relative z-10 object-contain" />
                        <span className="text-[8px] font-bold opacity-50 relative z-10 text-center px-1 leading-tight"
                          style={{ color: 'var(--foreground)' }}>{t.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        </div>
      </section>


      {/* ── WHY CHOOSE US ── */}
      <section className="relative z-10 container mx-auto px-4 md:px-12 pt-40 pb-20 fade-up">
        <div className="text-center mb-20">
          <span className="text-[13px] uppercase tracking-[0.4em] font-black font-mono mb-6 block" style={{ color: 'var(--brand)' }}>THE RMJ ADVANTAGE</span>
          <h2 className="text-4xl md:text-[60px] font-bold tracking-tight mb-6" style={{ color: 'var(--foreground)' }}>Why choose us?</h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--foreground)', opacity: 0.5 }}>We combine expertise, customization, and results-driven strategies to give you the best value.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Price',
              desc: 'Competitive pricing without sacrificing quality. Best value for your investment.',
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            },
            {
              title: 'Creativity',
              desc: 'Unique, tailor-made solutions crafted to meet your specific business needs.',
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            },
            {
              title: '24/7 Support',
              desc: 'Round-the-clock support to ensure your systems are always up and running.',
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
            },
            {
              title: 'Skilled Team',
              desc: 'A team of experienced developers and designers updated with industry trends.',
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            },
          ].map((item, i) => (
            <div key={i} className="rounded-[20px] border p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 fade-up"
              style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at center, rgba(245,151,104,0.06), transparent 70%)' }} />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', color: 'var(--foreground)', opacity: 1 }}>
                <span style={{ opacity: 0.7 }}>{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 tracking-tight relative z-10" style={{ color: 'var(--foreground)' }}>{item.title}</h3>
              <p className="text-sm leading-[1.6] relative z-10" style={{ color: 'var(--foreground)', opacity: 0.55 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section >

      {/* ── READY FOR WHAT'S NEXT (matching RefractWeb hero CTA) ── */}
      < section className="relative z-10 container mx-auto px-4 md:px-12 pt-40 pb-32 fade-up" >
        <div className="rounded-[44px] border overflow-hidden relative min-h-[500px] flex flex-col md:flex-row items-center"
          style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          {/* Background */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(176,93,65,0.2) 0%, transparent 60%)' }} />

          {/* Left text */}
          <div className="relative z-10 flex-1 p-12 md:p-20 space-y-8">
            <h2 className="text-5xl md:text-[72px] font-bold leading-[1.05] tracking-tight" style={{ color: 'var(--foreground)' }}>
              Ready for<br />what&apos;s next?
            </h2>
            <p className="text-xl leading-[1.4] max-w-md" style={{ color: 'var(--foreground)', opacity: 0.65 }}>
              Let&apos;s discuss your vision and see if we are the right fit for your next big project.
            </p>
            <div className="flex items-center gap-6 pt-2">
              <Link href="/contact" className="btn-glow px-8 py-3.5 text-lg font-bold">
                Work With Us
              </Link>
              <Link href="/services" className="flex items-center gap-2 text-lg font-semibold group hover:opacity-100 transition-opacity" style={{ color: 'var(--foreground)', opacity: 0.65 }}>
                Explore our services <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Right — Decorative visual */}
          <div className="flex-1 relative h-[380px] md:h-full hidden md:flex items-center justify-center overflow-hidden">
            {/* Ambient glow - GPU accelerated */}
            <div className="absolute w-64 h-64 rounded-full opacity-25 bg-brand/40 blur-[40px] transform-gpu" style={{ right: '-40px', bottom: '-40px' }} />
            <div className="absolute w-48 h-48 rounded-full opacity-15 bg-blue-600/30 blur-[30px] transform-gpu" style={{ right: '80px', top: '40px' }} />
            {/* Watermark text */}
            <span className="absolute text-[150px] font-black tracking-tighter leading-none select-none pointer-events-none"
              style={{ color: 'transparent', WebkitTextStroke: '1px rgba(245,151,104,0.12)' }}>RMJ</span>
            {/* Animated logo */}
            <div className="relative z-10">
              <Image
                src="/rmjit.png"
                alt="RMJ IT Solutions"
                width={220}
                height={220}
                className="object-contain drop-shadow-2xl logo-animated"
              />
            </div>
          </div>
        </div>
      </section >

    </main >
  );
}
