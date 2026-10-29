"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Fade-in + slide-up reveal, triggered once when the element scrolls
 * into view. Pass `delay` (seconds) to stagger items in a list.
 * Respects the visitor's reduced-motion preference: content fades in
 * without the slide.
 */
export default function Reveal({
    children,
    className,
    delay = 0,
    y = 28,
}) {
    const reduceMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: reduceMotion ? 0 : y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
}
