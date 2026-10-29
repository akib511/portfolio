
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import projects from "@/data/projects";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    if (
      prefersReducedMotion() ||
      el.getBoundingClientRect().top < window.innerHeight * 0.9
    ) {
      setSeen(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, seen];
}

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

const IconExternal = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const IconGitHub = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const IconArrowUpRight = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Project Item                                                        */
/* ------------------------------------------------------------------ */

function ProjectItem({ project, index }) {
  const [ref, seen] = useInView();

  const {
    number,
    slug,
    title,
    category,
    description,
    technologies,
    live,
    github,
    color,
  } = project;

  const initials = title
    .split(/[\s-]+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <li
      ref={ref}
      className="relative pl-[4.75rem] pb-10 last:pb-0 sm:pl-24"
    >
      {/* Timeline Node */}
      <div
        className={`absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ease-out ${seen ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        style={{
          background: color,
          boxShadow: `0 0 28px ${color}66`,
          transitionDelay: seen ? "0ms" : `${index * 90}ms`,
        }}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-950 text-xs font-bold text-white">
          {number}
        </div>
      </div>

      {/* Project Card */}
      <article
        className={`rounded-2xl border border-zinc-800/80 bg-zinc-950/90 p-6 transition-all duration-700 ease-out hover:border-red-900/70 hover:shadow-[0_0_40px_rgba(239,68,68,0.14)] sm:p-8 ${seen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        style={{ transitionDelay: seen ? "0ms" : `${index * 90}ms` }}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex min-w-0 items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-zinc-800 bg-black sm:h-20 sm:w-20">
              <span className="text-lg font-black" style={{ color }}>
                {initials}
              </span>
            </div>

            <div className="min-w-0 space-y-1">
              <h3 className="text-xl font-bold text-red-500 sm:text-2xl">
                {title}
              </h3>

              <p className="text-sm font-semibold text-white sm:text-base">
                {category}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
            <span className="text-sm text-zinc-400">
              Project {number}
            </span>

            {live && (
              <span className="rounded-full bg-red-950/70 px-3 py-1 text-xs font-semibold text-red-100">
                Live
              </span>
            )}
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-red-500 transition-colors hover:text-red-400 sm:text-base"
            >
              View Project

              <span className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <IconExternal />
              </span>
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-red-500 transition-colors hover:text-red-400 sm:text-base"
            >
              GitHub

              <span className="group inline-flex items-center gap-2 text-sm font-semibold text-red-500 transition-colors hover:text-red-400 sm:text-base">
                <IconGitHub />
              </span>
            </a>
          )}

          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-red-500 sm:text-base"
          >
            View Details
            <IconArrowUpRight />
          </Link>
        </div>
      </article>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Projects Section                                                    */
/* ------------------------------------------------------------------ */

export default function Projects() {
  const listRef = useRef(null);
  const fillRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const reduce = prefersReducedMotion();
    let frame;

    const update = () => {
      const list = listRef.current;
      const fill = fillRef.current;

      if (!list || !fill) return;

      const rect = list.getBoundingClientRect();

      const progress = reduce
        ? 1
        : Math.min(
          1,
          Math.max(
            0,
            (window.innerHeight * 0.65 - rect.top) /
            Math.max(rect.height, 1)
          )
        );

      fill.style.transform = `scaleY(${progress})`;
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 lg:px-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            What I&apos;ve Built
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Featured <span className="text-red-500">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            A selection of projects showcasing my skills in frontend
            development, interactive interfaces, and modern web technologies.
          </p>
        </motion.header>

        {/* Timeline */}
        <div
          className="relative mx-auto max-w-5xl"
          ref={listRef}
        >
          <div
            className="absolute bottom-0 left-[27px] top-7 w-[2px] bg-zinc-900"
            style={{
              maskImage:
                "linear-gradient(to bottom, #000 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 88%, transparent)",
            }}
            aria-hidden="true"
          >
            <div
              ref={fillRef}
              className="absolute inset-0 origin-top bg-gradient-to-b from-red-500 to-orange-500"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <ol className="relative">
            {projects.map((project, index) => (
              <ProjectItem
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </ol>
        </div>

        {/* Explore GitHub */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/akib511"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-red-500/40 px-6 py-3 text-sm font-semibold transition-all duration-300 hover:bg-red-600 hover:text-white"
          >
            <IconGitHub size={18} />
            Explore My GitHub
            <IconArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}
