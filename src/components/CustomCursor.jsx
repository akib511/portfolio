"use client";

import { useEffect, useRef, useState } from "react";

/* Elements the cursor locks onto:
   - INTERACTIVE (links, buttons, form controls) → cursor expands and
     surrounds the element from all four sides with a small gap.
   - Cards / boxes (article, rounded-2xl/3xl panels, [data-cursor-target])
     → the brackets fit flush into the four corners of the card. */
const INTERACTIVE = 'a, button, input, textarea, select, [role="button"]';
const CARD =
    'article, [data-cursor-target], [class*="rounded-2xl"], [class*="rounded-3xl"]';
const HOVERABLE = `${INTERACTIVE}, ${CARD}`;

const IDLE_SIZE = 36; // default rotating box (px)
const SURROUND_GAP = 6; // gap when surrounding interactive elements
const ROTATION_SPEED = 360; // deg/sec while idle (360 = 1 rotation/sec)
const HOVER_EASE = 14; // approach rate while morphing onto an element
const RETURN_EASE = 22; // approach rate while returning to idle
const UNWIND_EASE = 9; // how fast rotation eases back to 0° on hover

export default function CustomCursor() {
    const cursorRef = useRef(null);
    const [hovering, setHovering] = useState(false);

    // Shared with the animation loop (refs survive StrictMode remounts).
    const hoveringRef = useRef(false);
    const hoveredElRef = useRef(null);
    const pointerRef = useRef({ x: -100, y: -100 });

    useEffect(() => {
        const cursor = cursorRef.current;

        // Touch devices keep the native cursor — nothing to animate.
        if (!cursor || window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        // Rendered geometry, eased toward its target every frame.
        const cur = { x: -100, y: -100, w: IDLE_SIZE, h: IDLE_SIZE };
        let angle = 0;
        let last = performance.now();
        let rafId = 0;

        const updateHover = (next) => {
            if (hoveringRef.current !== next) {
                hoveringRef.current = next;
                setHovering(next);
            }
        };

        const onMouseMove = (event) => {
            pointerRef.current.x = event.clientX;
            pointerRef.current.y = event.clientY;

            const el = event.target;
            const hit =
                el && typeof el.closest === "function"
                    ? el.closest(HOVERABLE)
                    : null;

            if (hit !== hoveredElRef.current) {
                hoveredElRef.current = hit;
                updateHover(Boolean(hit));
            }
        };

        const onMouseLeave = () => {
            hoveredElRef.current = null;
            pointerRef.current.x = -100;
            pointerRef.current.y = -100;
            updateHover(false);
        };

        const tick = (now) => {
            const dt = Math.min((now - last) / 1000, 0.1);
            last = now;

            const hit = hoveredElRef.current;
            const pointer = pointerRef.current;

            // --- Target geometry -------------------------------------
            let tx = pointer.x - IDLE_SIZE / 2;
            let ty = pointer.y - IDLE_SIZE / 2;
            let tw = IDLE_SIZE;
            let th = IDLE_SIZE;
            let hasTarget = false;

            if (hit && hit.isConnected) {
                const rect = hit.getBoundingClientRect();

                // Detached / hidden elements report an empty rect —
                // fall back to idle instead of collapsing the frame.
                if (rect.width > 0 && rect.height > 0) {
                    // Cards fit flush; interactive elements get a gap so
                    // the brackets surround them from all four sides.
                    const gap = hit.matches(CARD) ? 0 : SURROUND_GAP;
                    tx = rect.left - gap;
                    ty = rect.top - gap;
                    tw = rect.width + gap * 2;
                    th = rect.height + gap * 2;
                    hasTarget = true;
                }
            }

            if (!hasTarget && hit) {
                // The hovered element went away (navigation, re-render) —
                // reset so the cursor returns to its idle state.
                hoveredElRef.current = null;
                updateHover(false);
            }

            // --- Ease geometry toward the target ---------------------
            if (reduceMotion) {
                cur.x = tx;
                cur.y = ty;
                cur.w = tw;
                cur.h = th;
            } else {
                const settledIdle =
                    !hasTarget &&
                    Math.abs(cur.w - IDLE_SIZE) < 0.5 &&
                    Math.abs(cur.h - IDLE_SIZE) < 0.5;

                if (settledIdle) {
                    // Idle: track the pointer exactly, zero lag.
                    cur.x = tx;
                    cur.y = ty;
                    cur.w = tw;
                    cur.h = th;
                } else {
                    const k = 1 - Math.exp(
                        -(hasTarget ? HOVER_EASE : RETURN_EASE) * dt
                    );
                    cur.x += (tx - cur.x) * k;
                    cur.y += (ty - cur.y) * k;
                    cur.w += (tw - cur.w) * k;
                    cur.h += (th - cur.h) * k;

                    // Snap the last fraction so brackets land exactly
                    // in the corners.
                    if (Math.abs(tx - cur.x) < 0.4) cur.x = tx;
                    if (Math.abs(ty - cur.y) < 0.4) cur.y = ty;
                    if (Math.abs(tw - cur.w) < 0.4) cur.w = tw;
                    if (Math.abs(th - cur.h) < 0.4) cur.h = th;
                }
            }

            // --- Rotation: spins while idle, unwinds to 0° on hover ---
            if (!reduceMotion) {
                if (hasTarget) {
                    // Unwind toward the nearest zero so the brackets
                    // never spin backwards on hover.
                    let a = angle % 360;
                    if (a > 180) a -= 360;
                    else if (a < -180) a += 360;

                    a *= Math.exp(-UNWIND_EASE * dt);
                    angle = Math.abs(a) < 0.05 ? 0 : a;
                } else {
                    angle = (angle + ROTATION_SPEED * dt) % 360;
                }
            }

            // Write straight to the DOM — no React re-render per frame.
            // (Bracket size itself is class-driven in globals.css:
            //  9px idle → 15px on .cursor-hover.)
            const style = cursor.style;
            style.left = `${cur.x}px`;
            style.top = `${cur.y}px`;
            style.width = `${cur.w}px`;
            style.height = `${cur.h}px`;
            style.transform = `rotate(${angle}deg)`;

            rafId = requestAnimationFrame(tick);
        };

        document.addEventListener("mousemove", onMouseMove, {
            passive: true,
        });
        document.addEventListener("mouseleave", onMouseLeave);

        rafId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(rafId);
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseleave", onMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`custom-cursor ${hovering ? "cursor-hover" : ""}`}
            aria-hidden="true"
        >
            <span className="cursor-corner cursor-top-left" />
            <span className="cursor-corner cursor-top-right" />
            <span className="cursor-corner cursor-bottom-left" />
            <span className="cursor-corner cursor-bottom-right" />

            {!hovering && <span className="cursor-dot" />}
        </div>
    );
}
