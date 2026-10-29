"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Bug,
  ShieldCheck,
  Database,
  Lightbulb,
  ArrowUpRight,
  Target,
  Wrench,
  FolderGit2,
} from "lucide-react";

const journey = [
  {
    number: "01",
    category: "Challenge & Solution",
    title: "Handling Authentication",
    project: "Bazar-Dor",
    description:
      "Implementing authentication and protecting user-specific features required careful handling of login states and access control.",
    solution:
      "Worked with Better Auth to integrate authentication and organize protected application flows.",
    learned: "Authentication and user access management",
    icon: ShieldCheck,
    side: "left",
    color: "#ff3155",
    technologies: ["Next.js", "Better Auth", "MongoDB"],
  },
  {
    number: "02",
    category: "Debugging & Problem Solving",
    title: "Managing API Data",
    project: "Wanderlust",
    description:
      "Connecting the frontend with a backend API introduced challenges involving request handling, data fetching, and displaying database records.",
    solution:
      "Practiced building Express routes, connecting MongoDB, and fetching API data from the frontend.",
    learned: "REST APIs and database integration",
    icon: Database,
    side: "right",
    color: "#ff8a32",
    technologies: ["JavaScript", "Express.js", "MongoDB"],
  },
  {
    number: "03",
    category: "Frontend Development",
    title: "Building Responsive Interfaces",
    project: "FitLog",
    description:
      "Creating a consistent interface across different screen sizes required attention to layout, component structure, and reusable styling.",
    solution:
      "Used Tailwind CSS and reusable React components to organize the interface and improve responsiveness.",
    learned: "Responsive design and component reuse",
    icon: Code2,
    side: "left",
    color: "#bd5cff",
    technologies: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    number: "04",
    category: "Learning & Growth",
    title: "Debugging Application Issues",
    project: "Personal Projects",
    description:
      "Working with modern web technologies introduced errors involving routing, asynchronous requests, component rendering, and configuration.",
    solution:
      "Practiced reading error messages, checking application logic, and testing changes to identify and fix problems.",
    learned: "Debugging and independent problem-solving",
    icon: Bug,
    side: "right",
    color: "#20c9e8",
    technologies: ["JavaScript", "React", "Next.js"],
  },
];

export default function MyJourney() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 70%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  // Progress line grows with the scroll — stays fully drawn when the
  // visitor prefers reduced motion.
  const lineHeight = useTransform(
    smoothProgress,
    [0, 1],
    reduceMotion ? ["100%", "100%"] : ["0%", "100%"]
  );

  return (
    <section
      ref={sectionRef}
      id="my-journey"
      className="relative overflow-hidden bg-[#050505] py-20 text-white sm:py-24 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-red-600/[0.07] blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-40 h-80 w-80 rounded-full bg-red-600/[0.05] blur-[130px]" />

      {/* Wider side margins: generous padding + narrower max width */}
      <div className="relative mx-auto w-full max-w-5xl px-6 sm:px-12 md:px-16 lg:px-24 xl:px-8">
        {/* Section heading */}
        <motion.header
          initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center sm:mb-24"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-red-500" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">
              My Journey
            </span>
            <span className="h-px w-8 bg-red-500" />
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            My <span className="text-red-500">Journey</span>
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
            The challenges I faced, the solutions I built, and the lessons I learned while
            working on different projects.
          </p>
        </motion.header>

        {/* Timeline */}
        <div className="relative">
          {/* Base line */}
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-zinc-800 md:left-1/2 md:-translate-x-1/2" />

          {/* Animated progress line */}
          <motion.div
            style={{ height: lineHeight }}
            className="shadow-[0_0_12px_rgba(255,49,85,0.65)] absolute left-[7px] top-0 z-[1] w-[2px] origin-top bg-red-500 md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="space-y-10 md:space-y-0">
            {journey.map((item, index) => (
              <TimelineRow key={item.number} item={item} index={index} />
            ))}
          </ol>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center sm:mt-28"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-red-500" />
            <p className="font-mono text-[10px] tracking-wider text-zinc-400 sm:text-xs">
              Better Code&nbsp; · &nbsp;Better Solutions&nbsp; · &nbsp;Bigger Dreams
            </p>
            <span className="h-px w-8 bg-red-500" />
          </div>

          <Link
            href="/#projects"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-2.5 text-sm font-semibold text-zinc-400 transition-colors hover:border-red-500/50 hover:text-red-500"
          >
            Explore My Projects
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineRow({ item, index }) {
  const isRight = item.side === "right";
  const accent = { "--c": item.color };
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      initial={{ opacity: 0, y: reduceMotion ? 0 : 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.15 }}
      style={accent}
      className="relative md:grid md:grid-cols-[1fr_4rem_1fr] md:items-start md:[&:not(:first-child)]:-mt-52 lg:grid-cols-[1fr_5rem_1fr] lg:[&:not(:first-child)]:-mt-60"
    >
      {/* Timeline dot */}
      <div className="border-[color:var(--c)] shadow-[0_0_0_4px_#050505,0_0_14px_color-mix(in_oklab,var(--c)_45%,transparent)] absolute left-0 top-8 z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-[#050505] md:left-1/2 md:-translate-x-1/2">
        <span className="bg-[color:var(--c)] h-1.5 w-1.5 rounded-full" />
      </div>

      {/* Connector from dot to card (desktop only) */}
      <div
        className={`bg-[color:var(--c)] absolute top-[39px] hidden h-px w-6 opacity-40 md:block lg:w-8 ${isRight ? "left-1/2 ml-2" : "right-1/2 mr-2"
          }`}
      />

      {/* Card */}
      <div
        className={`pl-9 md:row-start-1 md:pl-0 ${isRight ? "md:col-start-3" : "md:col-start-1"}`}
      >
        <JourneyCard item={item} />
      </div>
    </motion.li>
  );
}

function JourneyCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="bg-gradient-to-br from-[#0d0e12] to-[#080808] shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)] hover:border-[color:color-mix(in_oklab,var(--c)_35%,transparent)] group relative overflow-hidden rounded-2xl border border-zinc-800/90 transition-all duration-300 hover:-translate-y-1">
      {/* Accent top bar */}
      <div className="bg-gradient-to-r from-[var(--c)] to-transparent absolute inset-x-0 top-0 h-[2px]" />

      {/* Hover glow */}
      <div className="bg-[color:var(--c)] pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-20" />

      {/* Header */}
      <header className="relative flex items-start gap-4 p-6 pb-5 sm:p-7 sm:pb-5">
        <div className="border-[color:color-mix(in_oklab,var(--c)_30%,transparent)] bg-[color:color-mix(in_oklab,var(--c)_9%,transparent)] text-[color:var(--c)] flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border">
          <Icon size={22} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
            <span className="text-[color:var(--c)] font-mono text-xs font-bold">{item.number}</span>
            <span className="h-3 w-px bg-zinc-800" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
              {item.category}
            </span>
          </div>

          <h3 className="mt-2 text-lg font-bold leading-snug text-zinc-100 sm:text-xl">
            {item.title}
          </h3>

          <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-zinc-500 sm:text-sm">
            <FolderGit2 size={13} />
            {item.project}
          </p>
        </div>

        <ArrowUpRight
          size={18}
          className="text-[color:var(--c)] shrink-0 opacity-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
        />
      </header>

      {/* Body */}
      <div className="relative space-y-5 border-t border-white/[0.06] px-6 py-5 sm:px-7 sm:py-6">
        <CardBlock icon={Target} label="The Challenge" labelClass="text-zinc-500">
          {item.description}
        </CardBlock>

        <CardBlock icon={Wrench} label="My Approach" labelClass="text-[color:var(--c)]">
          {item.solution}
        </CardBlock>

        {/* Key learning */}
        <div className="border-emerald-400/20 bg-emerald-400/[0.06] flex items-start gap-3 rounded-xl border px-4 py-3.5">
          <Lightbulb size={16} className="mt-0.5 shrink-0 text-emerald-400" />
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-400">
              Key Learning
            </p>
            <p className="mt-1 text-sm leading-6 text-zinc-300">{item.learned}</p>
          </div>
        </div>
      </div>

      {/* Tech tags */}
      <footer className="relative flex flex-wrap gap-2 border-t border-white/[0.06] px-6 py-4 sm:px-7">
        {item.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-zinc-800 bg-white/[0.025] px-3 py-1 text-[11px] font-medium text-zinc-400 transition-colors duration-300 group-hover:border-zinc-700 group-hover:text-zinc-300"
          >
            {technology}
          </span>
        ))}
      </footer>
    </article>
  );
}

function CardBlock({
  icon: Icon,
  label,
  labelClass,
  children,
}) {
  return (
    <div>
      <p
        className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] ${labelClass}`}
      >
        <Icon size={13} />
        {label}
      </p>
      <p className="mt-2 text-sm leading-7 text-zinc-400">{children}</p>
    </div>
  );
}