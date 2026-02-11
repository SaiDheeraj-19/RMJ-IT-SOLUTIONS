"use client";

import { motion } from "framer-motion";

export default function HorizontalLine({ className }: { className?: string }) {
    return (
        <div className={className}>
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                style={{ originX: 0 }}
                className="h-px bg-stone-300 w-full"
            />
        </div>
    );
}
