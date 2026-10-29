"use client";

import { useState, useRef, useEffect, useMemo } from "react";

/* ------------------------------------------------------------------ */
/* Inline brand icons: no packages, no CDN, nothing to install         */
/* ------------------------------------------------------------------ */
const svgProps = (className) => ({
  className,
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
});

const IconReact = ({ className }) => (
  <svg {...svgProps(className)} fill="none" stroke="#61DAFB" strokeWidth="1.1">
    <ellipse cx="12" cy="12" rx="10.5" ry="4.2" />
    <ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.9" fill="#61DAFB" stroke="none" />
  </svg>
);

const IconNext = ({ className }) => (
  <svg {...svgProps(className)} viewBox="0 0 180 180">
    <circle cx="90" cy="90" r="87" fill="#000" stroke="#fff" strokeWidth="6" />
    <path
      d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
      fill="#fff"
    />
    <rect x="115" y="54" width="12" height="72" fill="#fff" />
  </svg>
);

const IconJS = ({ className }) => (
  <svg {...svgProps(className)}>
    <rect x="1.5" y="1.5" width="21" height="21" rx="2.5" fill="#F7DF1E" />
    <text x="20.5" y="20" textAnchor="end" fontSize="10.5" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif" fill="#000">
      JS
    </text>
  </svg>
);

const IconHTML = ({ className }) => (
  <svg {...svgProps(className)}>
    <polygon points="3,2 21,2 19.4,19.6 12,22 4.6,19.6" fill="#E34F26" />
    <polygon points="12,3.6 12,20.4 18,18.5 19.3,3.6" fill="#EF652A" />
    <text x="12" y="15.2" textAnchor="middle" fontSize="11" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif" fill="#fff">
      5
    </text>
  </svg>
);

const IconCSS = ({ className }) => (
  <svg {...svgProps(className)}>
    <polygon points="3,2 21,2 19.4,19.6 12,22 4.6,19.6" fill="#1572B6" />
    <polygon points="12,3.6 12,20.4 18,18.5 19.3,3.6" fill="#33A9DC" />
    <text x="12" y="15.2" textAnchor="middle" fontSize="11" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif" fill="#fff">
      3
    </text>
  </svg>
);

const IconTailwind = ({ className }) => (
  <svg {...svgProps(className)} fill="#38BDF8">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
  </svg>
);

const IconNode = ({ className }) => (
  <svg {...svgProps(className)}>
    <polygon points="12,1.5 21.2,6.8 21.2,17.2 12,22.5 2.8,17.2 2.8,6.8" fill="#5FA04E" />
    <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="800" fontFamily="Arial, Helvetica, sans-serif" fill="#fff">
      JS
    </text>
  </svg>
);

const IconExpress = ({ className }) => (
  <svg {...svgProps(className)}>
    <text x="12" y="17" textAnchor="middle" fontSize="14" fontWeight="700" fontFamily="'Courier New', monospace" fill="#fff">
      ex
    </text>
  </svg>
);

const IconMongo = ({ className }) => (
  <svg {...svgProps(className)}>
    <path
      d="M12 1.5c0 0-6 6.3-6 12.3 0 3.7 2.5 6.3 5.3 7.5l.2 1.7h1l.2-1.7c2.8-1.2 5.3-3.8 5.3-7.5C18 7.8 12 1.5 12 1.5z"
      fill="#47A248"
    />
    <path d="M12 6v15.5" stroke="#B8E6B8" strokeWidth="1" />
  </svg>
);

const IconGit = ({ className }) => (
  <svg {...svgProps(className)}>
    <polygon points="12,1.2 22.8,12 12,22.8 1.2,12" fill="#F05032" />
    <path d="M9 8v8M9 9.5c0 2 6 0.5 6 2.5" stroke="#fff" strokeWidth="1.5" fill="none" />
    <circle cx="9" cy="8" r="1.9" fill="#fff" />
    <circle cx="9" cy="16" r="1.9" fill="#fff" />
    <circle cx="15" cy="12" r="1.9" fill="#fff" />
  </svg>
);

const IconGitHub = ({ className }) => (
  <svg {...svgProps(className)} fill="#fff">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const GLOBE_NODES = [
  { name: "React", label: "React", Icon: IconReact },
  { name: "Next.js", label: "Next.js", Icon: IconNext },
  { name: "JavaScript (ES6+)", label: "JavaScript", Icon: IconJS },
  { name: "HTML5", label: "HTML5", Icon: IconHTML },
  { name: "CSS3", label: "CSS3", Icon: IconCSS },
  { name: "Tailwind CSS", label: "Tailwind", Icon: IconTailwind },
  { name: "Node.js", label: "Node.js", Icon: IconNode },
  { name: "Express.js", label: "Express", Icon: IconExpress },
  { name: "MongoDB", label: "MongoDB", Icon: IconMongo },
  { name: "Git", label: "Git", Icon: IconGit },
  { name: "GitHub", label: "GitHub", Icon: IconGitHub },
];

const skillTree = [
  { category: "Programming Languages", items: ["JavaScript (ES6+)", "HTML5", "CSS3"] },
  { category: "Web Technologies", items: ["React", "Next.js", "Tailwind CSS", "Responsive Design"] },
  { category: "Frameworks & Runtimes", items: ["React", "Next.js", "Node.js", "Express.js"] },
  { category: "Databases", items: ["MongoDB"] },
  { category: "Version Control", items: ["Git", "GitHub"] },
  { category: "Core Concepts", items: ["Component Architecture", "REST APIs", "State Management"] },
  { category: "Tools", items: ["VS Code", "Chrome DevTools", "npm"] },
];

/* ------------------------------------------------------------------ */
/* 3D helpers                                                          */
/* ------------------------------------------------------------------ */
const INITIAL_TILT = 18; // starting X tilt in degrees
const BASE_SPEED = 16; // degrees / second (auto rotation)
const R = 150; // wireframe radius in SVG units (viewBox is -200..200)
const NODE_RADIUS_PCT = 37.5; // same radius, as a % of the container

// Evenly spread points on a sphere (Fibonacci sphere)
function fibonacciSphere(n) {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: n }, (_, i) => {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = i * golden;
    return { x: Math.cos(t) * r, y: y * 0.92, z: Math.sin(t) * r };
  });
}

// Rotate around Y by `a`, then tilt around X by `t` (both radians)
function project(p, a, t) {
  const cosA = Math.cos(a);
  const sinA = Math.sin(a);
  const x1 = p.x * cosA + p.z * sinA;
  const z1 = -p.x * sinA + p.z * cosA;
  const y2 = p.y * Math.cos(t) - z1 * Math.sin(t);
  const z2 = p.y * Math.sin(t) + z1 * Math.cos(t);
  return { x: x1, y: y2, z: z2 };
}

function toPath(points, a, t, closed = false) {
  const d = points
    .map((p, i) => {
      const q = project(p, a, t);
      return `${i === 0 ? "M" : "L"}${(q.x * R).toFixed(1)} ${(q.y * R).toFixed(1)}`;
    })
    .join(" ");
  return closed ? d + " Z" : d;
}

const clamp = (v, m) => Math.max(-m, Math.min(m, v));

/* ------------------------------------------------------------------ */
/* Curved marquee (text follows a curved path)                         */
/* ------------------------------------------------------------------ */
const WORDS = [
  "MODULAR",
  "USER-FRIENDLY",
  "CREATIVE",
  "FLUID",
  "OPTIMIZED",
  "RESPONSIVE",
];

const SEP = "\u00A0\u2726\u00A0"; // non-breaking spaces + four-point star
const UNIT = WORDS.map((w) => w.toUpperCase()).join(SEP) + SEP;

function CurvedMarquee({ speed = 100 }) {
  const measureRef = useRef(null);
  const textPathRef = useRef(null);

  useEffect(() => {
    let frame;
    let unit = 0;
    let offset = 0;
    let last = performance.now();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const measure = () => {
      unit = measureRef.current?.getComputedTextLength() || 0;
    };
    measure();
    document.fonts?.ready.then(measure);

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (unit && !reduce) {
        offset = (offset + speed * dt) % unit;
        textPathRef.current?.setAttribute("startOffset", String(-offset));
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [speed]);

  return (
    <div className="relative w-full overflow-hidden bg-black" aria-hidden="true">
      <svg
        viewBox="0 0 1440 300"
        preserveAspectRatio="xMidYMid slice"
        className="block w-full h-[190px] sm:h-[260px] lg:h-[300px] font-sans font-black select-none"
      >
        <defs>
          <path id="curved-marquee-path" d="M -200 90 Q 720 400 1640 90" fill="none" />
        </defs>

        {/* hidden text used only to measure one repeat so the loop is seamless */}
        <text
          ref={measureRef}
          fontSize="64"
          letterSpacing="1"
          opacity="0"
          style={{ pointerEvents: "none" }}
        >
          {UNIT}
        </text>

        <text fontSize="60" letterSpacing="1" fill="#fff">
          <textPath ref={textPathRef} href="#curved-marquee-path" startOffset="0">
            {UNIT.repeat(4)}
          </textPath>
        </text>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
export default function Skills() {
  const [activeSkill, setActiveSkill] = useState("React");
  const [rotation, setRotation] = useState(0); // degrees (left-right)
  const [tilt, setTilt] = useState(INITIAL_TILT); // degrees (up-down)
  const [dragging, setDragging] = useState(false);

  const rotRef = useRef(0);
  const tiltRef = useRef(INITIAL_TILT);
  const velRef = useRef(BASE_SPEED);
  const tiltVelRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastYRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const movedRef = useRef(false);

  // Static geometry (computed once)
  const nodePoints = useMemo(() => fibonacciSphere(GLOBE_NODES.length), []);

  const links = useMemo(() => {
    // connect each node to its 2 nearest neighbours -> geodesic look
    const pairs = new Set();
    nodePoints.forEach((p, i) => {
      nodePoints
        .map((q, j) => ({ j, d: (p.x - q.x) ** 2 + (p.y - q.y) ** 2 + (p.z - q.z) ** 2 }))
        .filter((o) => o.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2)
        .forEach((o) => pairs.add([Math.min(i, o.j), Math.max(i, o.j)].join("-")));
    });
    return [...pairs].map((s) => s.split("-").map(Number));
  }, [nodePoints]);

  const meridians = useMemo(
    () =>
      Array.from({ length: 6 }, (_, k) => {
        const lon = (k * Math.PI) / 6;
        return Array.from({ length: 73 }, (_, s) => {
          const phi = (s / 72) * Math.PI * 2;
          return { x: Math.cos(phi) * Math.sin(lon), y: Math.sin(phi), z: Math.cos(phi) * Math.cos(lon) };
        });
      }),
    []
  );

  const parallels = useMemo(
    () =>
      [-60, -30, 0, 30, 60].map((deg) => {
        const lat = (deg * Math.PI) / 180;
        return Array.from({ length: 73 }, (_, s) => {
          const t = (s / 72) * Math.PI * 2;
          return { x: Math.cos(lat) * Math.cos(t), y: Math.sin(lat), z: Math.cos(lat) * Math.sin(t) };
        });
      }),
    []
  );

  // Continuous rotation loop (drag adds to it, then it eases back to auto-spin)
  useEffect(() => {
    let frame;
    let last = performance.now();

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (!draggingRef.current) {
        const k = Math.min(1, dt * 2.5);
        velRef.current += (BASE_SPEED - velRef.current) * k; // back to auto-spin
        tiltVelRef.current += (0 - tiltVelRef.current) * k; // vertical flick fades out
        rotRef.current = (rotRef.current + velRef.current * dt) % 360;
        tiltRef.current = (tiltRef.current + tiltVelRef.current * dt) % 360;
      }
      setRotation(rotRef.current);
      setTilt(tiltRef.current);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  // Drag (mouse + touch + pen via pointer events) - all directions
  const onPointerDown = (e) => {
    draggingRef.current = true;
    movedRef.current = false;
    setDragging(true);
    lastXRef.current = e.clientX;
    lastYRef.current = e.clientY;
    lastMoveTimeRef.current = performance.now();
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    const now = performance.now();
    const dx = e.clientX - lastXRef.current;
    const dy = e.clientY - lastYRef.current;
    const dt = Math.max((now - lastMoveTimeRef.current) / 1000, 0.001);
    if (Math.abs(dx) > 2 || Math.abs(dy) > 2) movedRef.current = true;
    lastXRef.current = e.clientX;
    lastYRef.current = e.clientY;
    lastMoveTimeRef.current = now;

    // when the globe is upside down (tilt > 90deg) left-right is reversed, so flip it
    const flip = Math.cos((tiltRef.current * Math.PI) / 180) < 0 ? -1 : 1;
    const deltaRot = dx * 0.5 * flip;
    const deltaTilt = -dy * 0.5;

    rotRef.current = (rotRef.current + deltaRot + 360) % 360;
    tiltRef.current = (tiltRef.current + deltaTilt + 360) % 360;
    velRef.current = clamp(deltaRot / dt, 240);
    tiltVelRef.current = clamp(deltaTilt / dt, 240);
  };

  const endDrag = () => {
    draggingRef.current = false;
    setDragging(false);
  };

  const a = (rotation * Math.PI) / 180;
  const t = (tilt * Math.PI) / 180;

  // Project all nodes for this frame
  const projected = nodePoints.map((p, i) => ({ ...project(p, a, t), i }));

  return (
    <>
      <section
        id="skills"
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-zinc-900 bg-black overflow-hidden"
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:52px_52px]"
          aria-hidden="true"
        />

        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        {/* Header */}
        <div className="relative z-10 space-y-3 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-red-950/60 border border-red-900/60 text-red-400">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Technical Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
            Skills &amp;{" "}
            <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">Technologies</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
            A 3D rotating skills globe paired with a live terminal skill tree.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ============================ GLOBE ============================ */}
          <div className="flex flex-col items-center justify-center select-none">
            <div
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              style={{
                touchAction: "none",
                width: "min(520px, 92vw)",
                height: "min(520px, 92vw)",
                flexShrink: 0,
              }}
              className={`relative rounded-full ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
            >
              {/* Outer aura */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600/20 via-red-500/10 to-transparent blur-2xl pointer-events-none" />

              {/* Sphere body */}
              <div
                className="absolute rounded-full border border-red-500/30 pointer-events-none"
                style={{
                  inset: "12.5%",
                  boxShadow: "0 0 40px rgba(239,68,68,0.25)",
                  background:
                    "radial-gradient(circle at 35% 35%, rgba(239,68,68,0.15) 0%, rgba(10,10,10,0.85) 65%, #000 100%)",
                }}
              />

              {/* Wireframe globe that really spins in 3D */}
              <svg
                viewBox="-200 -200 400 400"
                className="absolute inset-0 w-full h-full pointer-events-none"
                aria-hidden="true"
              >
                <circle r={R} fill="none" stroke="#ef4444" strokeOpacity="0.45" strokeWidth="1" />

                {parallels.map((pts, i) => (
                  <path key={`p${i}`} d={toPath(pts, a, t, true)} fill="none" stroke="#ef4444" strokeOpacity="0.18" strokeWidth="0.8" />
                ))}
                {meridians.map((pts, i) => (
                  <path key={`m${i}`} d={toPath(pts, a, t, true)} fill="none" stroke="#ef4444" strokeOpacity="0.22" strokeWidth="0.8" />
                ))}

                {/* Constellation lines between nodes */}
                {links.map(([i, j]) => {
                  const p = projected[i];
                  const q = projected[j];
                  const depth = (p.z + q.z) / 2;
                  return (
                    <line
                      key={`l${i}-${j}`}
                      x1={p.x * R}
                      y1={p.y * R}
                      x2={q.x * R}
                      y2={q.y * R}
                      stroke="#f87171"
                      strokeWidth="0.9"
                      strokeOpacity={0.1 + 0.3 * ((depth + 1) / 2)}
                    />
                  );
                })}
              </svg>

              {/* Orbiting icons - positions come from real 3D projection */}
              {projected.map((p) => {
                const node = GLOBE_NODES[p.i];
                const depth = (p.z + 1) / 2; // 0 = back, 1 = front
                const scale = 0.68 + 0.4 * depth;
                const opacity = 0.35 + 0.65 * depth;
                const isActive = activeSkill === node.name;

                return (
                  <button
                    key={node.name}
                    type="button"
                    aria-label={node.label}
                    onClick={() => {
                      if (!movedRef.current) setActiveSkill(node.name);
                    }}
                    className="absolute flex flex-col items-center"
                    style={{
                      left: `${50 + p.x * NODE_RADIUS_PCT}%`,
                      top: `${50 + p.y * NODE_RADIUS_PCT}%`,
                      transform: `translate(-50%, -50%) scale(${isActive ? scale * 1.15 : scale})`,
                      opacity,
                      zIndex: Math.round(depth * 100),
                    }}
                  >
                    <span
                      className={`flex items-center justify-center rounded-full border ${isActive ? "border-red-400" : "border-zinc-700"}`}
                      style={{
                        width: 58,
                        height: 58,
                        background: "#09090b",
                        boxShadow: isActive
                          ? "0 0 24px rgba(239,68,68,0.75)"
                          : "0 0 12px rgba(0,0,0,0.6)",
                      }}
                    >
                      <node.Icon />
                    </span>
                    <span
                      className={`mt-1 text-xs font-mono font-semibold ${isActive ? "text-red-300" : "text-zinc-300"}`}
                    >
                      {node.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Drag hint */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-900/60 bg-red-950/30 text-red-400 text-xs font-mono font-medium shadow-[0_0_15px_rgba(239,68,68,0.15)] transition-colors hover:border-red-500">
              <span className="text-red-500 font-bold">&gt;</span>
              <span className="text-sm">🌐</span>
              <span>Drag to explore skills universe</span>
            </div>
          </div>

          {/* ========================== TERMINAL =========================== */}
          <div className="relative">
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/90 p-6 sm:p-8 font-mono space-y-6 shadow-2xl hover:border-red-900/60 hover:shadow-[0_0_40px_rgba(239,68,68,0.18)] transition-all duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-900 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400">skill_tree.json</span>
                  <span className="text-zinc-600">—</span>
                  <span className="text-emerald-400 font-bold">$</span>
                  <span className="text-red-400 font-semibold">cat languages.json</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              <div className="space-y-5">
                {skillTree.map((block) => (
                  <div key={block.category} className="space-y-2">
                    <h3 className="text-xs font-mono text-zinc-400 tracking-wider">
                      &quot;{block.category}&quot;
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {block.items.map((item) => {
                        const isSelected = activeSkill === item;
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setActiveSkill(item)}
                            className={`px-3 py-1.5 rounded-lg border text-xs font-mono font-medium transition-all duration-200 ${isSelected
                              ? "border-red-500 bg-red-900/40 text-red-200 shadow-[0_0_15px_rgba(239,68,68,0.5)] scale-105"
                              : "border-red-900/60 bg-red-950/25 text-red-400 hover:border-red-500 hover:text-red-300 hover:bg-red-950/50 hover:shadow-[0_0_12px_rgba(239,68,68,0.3)]"
                              }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative side dots */}
            <div
              className="hidden xl:flex absolute -right-7 top-1/2 -translate-y-1/2 flex-col gap-6 text-zinc-800"
              aria-hidden="true"
            >
              <span className="w-2 h-2 rounded-full border border-zinc-800" />
              <span className="w-2 h-2 rounded-full border border-zinc-800" />
              <div className="w-7 h-7 rounded-lg border border-red-900/60 bg-red-950/40 flex items-center justify-center text-red-500 text-xs shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                ⌘
              </div>
              <span className="w-2 h-2 rounded-full border border-zinc-800" />
              <span className="w-2 h-2 rounded-full border border-zinc-800" />
            </div>
          </div>
        </div>
      </section>

      {/* Full-width curved marquee under the skills section */}
      <CurvedMarquee />
    </>
  );
}