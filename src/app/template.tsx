"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
    return (
        <>
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                style={{ originY: 0 }}
                className="fixed inset-0 bg-[#816729] z-[9999] pointer-events-none"
            />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 1.5,
                    delay: 0.2,
                    ease: [0.33, 1, 0.68, 1]
                }}
            >
                {children}
            </motion.div>
        </>
    );
}
