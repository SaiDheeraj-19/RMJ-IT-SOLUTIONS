"use client";


import { useScroll } from "framer-motion";
import { useRef } from "react";

export default function InfiniteScrollBanner() {
    const containerRef = useRef<HTMLDivElement>(null);
    useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="bg-slate-900 border-y border-slate-800 py-6 overflow-hidden relative">
            <div className="max-w-[1600px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <span className="text-sm md:text-base font-mono font-bold text-white uppercase tracking-[0.2em]">
                        RMJ IT Solutions
                    </span>

                    <span className="hidden md:block text-slate-600 font-mono text-sm">{"///"}</span>

                    <span className="text-sm md:text-base font-mono font-bold text-slate-300 uppercase tracking-[0.2em]">
                        Engineering Certainty
                    </span>

                    <span className="hidden md:block text-slate-600 font-mono text-sm">{"///"}</span>

                    <span className="text-sm md:text-base font-mono font-bold text-slate-300 uppercase tracking-[0.2em]">
                        Trust is Binary
                    </span>

                    <span className="hidden md:block text-slate-600 font-mono text-sm">{"///"}</span>

                    <span className="text-sm md:text-base font-mono font-bold text-brand uppercase tracking-[0.2em]">
                        Built for Decades
                    </span>
                </div>
            </div>
        </section>
    );
}
