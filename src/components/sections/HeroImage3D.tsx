"use client";

import { useRef } from "react";
import Image from "next/image";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

/* ─────────────────────────────────────────────────────────────────────────
   HeroImage3D — mouse-tracking perspective tilt with depth layers
   The image tilts up to ±18° on X/Y axes following the cursor.
   A glare layer moves opposite to the tilt for a holographic sheen.
   Falls back gracefully to the float-only animation on touch devices.
────────────────────────────────────────────────────────────────────────── */
export default function HeroImage3D() {
    const ref = useRef<HTMLDivElement>(null);

    /* Raw mouse position as -0.5 → 0.5 relative to element center */
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);

    /* Spring-smoothed values */
    const springCfg = { stiffness: 140, damping: 18, mass: 0.6 };
    const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-20, 20]), springCfg);
    const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [16, -16]), springCfg);

    /* Glare spotlight follows tilt in the opposite direction */
    const glareX = useSpring(useTransform(rawX, [-0.5, 0.5], [75, 25]), springCfg);
    const glareY = useSpring(useTransform(rawY, [-0.5, 0.5], [75, 25]), springCfg);

    /* Shadow offset deepens the 3D depth illusion */
    const shadowX = useSpring(useTransform(rawX, [-0.5, 0.5], [20, -20]), springCfg);
    const shadowY = useSpring(useTransform(rawY, [-0.5, 0.5], [20, -20]), springCfg);

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
            className="relative flex items-center justify-center select-none"
            style={{ perspective: "900px" }}
        >
            {/* Ambient glow blobs — always present */}
            <div
                className="absolute w-[440px] h-[440px] rounded-full pointer-events-none"
                style={{ background: "#b05d41", filter: "blur(130px)", opacity: 0.28 }}
            />
            <div
                className="absolute w-[280px] h-[280px] rounded-full pointer-events-none translate-x-16"
                style={{ background: "#3150aa", filter: "blur(90px)", opacity: 0.14 }}
            />

            {/* ── 3D card wrapper ── */}
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    /* Dynamic shadow that shifts with tilt */
                    filter: useTransform(
                        [shadowX, shadowY] as const,
                        ([sx, sy]: number[]) =>
                            `drop-shadow(${sx}px ${sy}px 60px rgba(176,93,65,0.45))`
                    ),
                }}
                /* Continuous float animation via CSS keyframe */
                animate={{ y: [0, -14, 0] }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="relative"
            >
                {/* Hero illustration — SVG integrates naturally */}
                <Image
                    src="/company-cuate.svg"
                    alt="RMJ IT Solutions — Technology Partner"
                    width={620}
                    height={620}
                    className="object-contain relative z-10"
                    style={{ transformStyle: "preserve-3d" }}
                    priority
                />

                {/* Glare overlay — holographic sheen */}
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none z-20"
                    style={{
                        background: useTransform(
                            [glareX, glareY] as const,
                            ([gx, gy]: number[]) =>
                                `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.12) 0%, transparent 65%)`
                        ),
                        mixBlendMode: "screen",
                    }}
                />
            </motion.div>

            {/* Pulsing outer ring */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    border: "1px solid rgba(245,151,104,0.13)",
                    animation: "pulse-ring 4s ease-in-out infinite",
                }}
            />
        </div>
    );
}
