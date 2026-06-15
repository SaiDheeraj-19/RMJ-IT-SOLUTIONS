"use client";

import { useRef } from "react";
import Image from "next/image";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

export default function HeroImage3D() {
    const ref = useRef<HTMLDivElement>(null);

    /* Raw mouse position as -0.5 → 0.5 relative to element center */
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);

    /* Spring-smoothed values — reduced stiffness for even smoother float */
    const springCfg = { stiffness: 120, damping: 20, mass: 0.8 };
    const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-16, 16]), springCfg);
    const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [12, -12]), springCfg);

    /* Glare spotlight follows tilt */
    const glareX = useSpring(useTransform(rawX, [-0.5, 0.5], [80, 20]), springCfg);
    const glareY = useSpring(useTransform(rawY, [-0.5, 0.5], [80, 20]), springCfg);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const el = ref.current;
        if (!el) return;
        const { left, top, width, height } = el.getBoundingClientRect();
        rawX.set((e.clientX - left) / width - 0.5);
        rawY.set((e.clientY - top) / height - 0.5);
    }

    function handleMouseLeave() {
        rawX.set(0);
        rawY.set(0);
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex items-center justify-center select-none w-full h-full min-h-[500px]"
            style={{ perspective: "1000px" }}
        >
            {/* Ambient glow blobs — optimized hardware-accelerated blurs instead of inline filters */}
            <div className="absolute w-[440px] h-[440px] rounded-full pointer-events-none bg-brand/20 blur-[100px] will-change-transform transform-gpu" />
            <div className="absolute w-[280px] h-[280px] rounded-full pointer-events-none translate-x-16 bg-blue-600/10 blur-[80px] will-change-transform transform-gpu" />

            {/* ── 3D card wrapper ── */}
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                /* Continuous float animation via CSS keyframe */
                animate={{ y: [0, -12, 0] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative drop-shadow-2xl will-change-transform"
            >
                {/* Hero illustration */}
                <Image
                    src="/company-cuate.svg"
                    alt="TechBro Solutions — Technology Partner"
                    width={580}
                    height={580}
                    className="object-contain relative z-10 filter drop-shadow-xl"
                    style={{ transform: "translateZ(40px)" }} // Pop out effect without true 3d nesting lag
                    priority
                />

                {/* Highly optimized glare overlay (no mixBlendMode, purely opacity/gradient) */}
                <motion.div
                    className="absolute inset-x-0 inset-y-12 rounded-[3rem] pointer-events-none z-20"
                    style={{
                        background: useTransform(
                            [glareX, glareY] as const,
                            ([gx, gy]: number[]) =>
                                `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.08) 0%, transparent 60%)`
                        )
                    }}
                />
            </motion.div>

            {/* Pulsing outer ring */}
            <div className="absolute w-[480px] h-[480px] rounded-full pointer-events-none border border-brand/10 animate-[spin_12s_linear_infinite]" />
        </div>
    );
}
