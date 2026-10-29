"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Opening intro (plays on every page load / refresh):
 *   1. red speed-lines streak down from the top
 *   2. the four red corner brackets (same motif as the custom cursor)
 *      fall in along the trails and snap around the "SA" monogram
 *   3. the name types in below, then the role line
 *   4. the whole overlay zoom-fades into the website
 *
 * Skipped entirely for reduced-motion visitors. Click or press any
 * key to skip.
 */

// Decorative vertical streaks that sell the "falling fast" motion.
const TRAILS = Array.from({ length: 10 }, (_, i) => ({
    left: 6 + i * 9.5, // % across the screen
    height: 70 + ((i * 53) % 110), // px
    delay: (i % 5) * 0.055,
}));

// The four corners of the bracket frame — same motif as the site cursor.
const CORNERS = [
    "left-0 top-0 border-l-[3px] border-t-[3px] rounded-tl-md",
    "right-0 top-0 border-r-[3px] border-t-[3px] rounded-tr-md",
    "left-0 bottom-0 border-l-[3px] border-b-[3px] rounded-bl-md",
    "right-0 bottom-0 border-r-[3px] border-b-[3px] rounded-br-md",
];

export default function Intro() {
    const [show, setShow] = useState(false);

    // Play on every page load; never for reduced-motion visitors.
    // (matchMedia is read directly so this effect runs exactly once —
    // the useReducedMotion hook's initial null→false flip would re-run
    // the effect and its cleanup would cancel the scheduled start.)
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        // Start on the next frame (keeps state updates out of the effect body).
        const frame = requestAnimationFrame(() => setShow(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    // Lock page scroll while the intro covers the site.
    useEffect(() => {
        if (!show) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previous;
        };
    }, [show]);

    // Auto-finish after the timeline; any click/key skips.
    useEffect(() => {
        if (!show) return;

        const timer = setTimeout(() => setShow(false), 2400);
        const skip = () => setShow(false);

        window.addEventListener("pointerdown", skip);
        window.addEventListener("keydown", skip);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("pointerdown", skip);
            window.removeEventListener("keydown", skip);
        };
    }, [show]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="intro"
                    aria-hidden="true"
                    exit={{ opacity: 0, scale: 1.06 }}
                    transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
                    className="fixed inset-0 z-[10000] overflow-hidden bg-black"
                >
                    {/* ---- 1. Speed lines streaking down ---- */}
                    {TRAILS.map((trail, i) => (
                        <motion.span
                            key={i}
                            initial={{ y: "-120%", opacity: 0 }}
                            animate={{ y: "150vh", opacity: [0, 1, 1, 0] }}
                            transition={{
                                duration: 0.75,
                                delay: trail.delay,
                                ease: "easeIn",
                                times: [0, 0.15, 0.7, 1],
                            }}
                            className="absolute top-0 w-px bg-gradient-to-b from-transparent via-red-500/70 to-transparent"
                            style={{ left: `${trail.left}%`, height: trail.height }}
                        />
                    ))}

                    {/* ---- Center stage: bracket frame + monogram + text ---- */}
                    <div className="relative flex flex-col items-center px-6">
                        {/* Bracket frame with falling corners */}
                        <div className="relative h-32 w-32 sm:h-36 sm:w-36">
                            {CORNERS.map((position, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ y: -320, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 240,
                                        damping: 16,
                                        delay: 0.22 + i * 0.05,
                                    }}
                                    className={`absolute h-9 w-9 border-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.7)] ${position}`}
                                />
                            ))}

                            {/* SA monogram snaps in once the frame lands */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 18,
                                    delay: 0.55,
                                }}
                                className="flex h-full w-full items-center justify-center"
                            >
                                <span className="text-5xl font-black tracking-tighter text-white sm:text-6xl">
                                    S<span className="text-red-500">A</span>
                                </span>
                            </motion.div>

                            {/* Red pulse flash when the mark assembles */}
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: [0, 0.55, 0], scale: [0.5, 1.5, 1.9] }}
                                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                className="pointer-events-none absolute inset-0 rounded-full bg-red-600/40 blur-xl"
                            />
                        </div>

                        {/* Name types in (left-to-right wipe) */}
                        <div className="mt-8 overflow-hidden">
                            <motion.h1
                                initial={{ clipPath: "inset(0 100% 0 0)" }}
                                animate={{ clipPath: "inset(0 0% 0 0)" }}
                                transition={{ duration: 0.55, delay: 0.9, ease: "easeOut" }}
                                className="text-lg font-black uppercase tracking-[0.3em] text-white sm:text-xl"
                            >
                                Shahariar <span className="text-red-500">Akib</span>
                            </motion.h1>
                        </div>

                        {/* Divider + role line */}
                        <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.45, delay: 1.15, ease: "easeOut" }}
                            className="mt-4 h-px w-24 origin-center bg-red-500/80"
                        />

                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 1.3 }}
                            className="mt-4 text-[10px] font-semibold uppercase tracking-[0.45em] text-zinc-400 sm:text-xs"
                        >
                            Full Stack Developer
                        </motion.p>
                    </div>

                    {/* Skip hint */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.6 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-zinc-600"
                    >
                        Click to skip
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
