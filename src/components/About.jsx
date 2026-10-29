"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  const [leftPupil, setLeftPupil] = useState({ x: 0, y: 0 });
  const [rightPupil, setRightPupil] = useState({ x: 0, y: 0 });

  // Track mouse cursor to move the character's pupils dynamically
  useEffect(() => {
    const handleMouseMove = (event) => {
      const calculatePupilOffset = (eyeElement) => {
        if (!eyeElement) return { x: 0, y: 0 };
        const rect = eyeElement.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = event.clientX - eyeCenterX;
        const deltaY = event.clientY - eyeCenterY;

        const angle = Math.atan2(deltaY, deltaX);

        // Maximum movement boundary for the pupil within the eye (in pixels)
        const maxRadius = 8;
        const distance = Math.min(Math.hypot(deltaX, deltaY) / 12, maxRadius);

        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        };
      };

      if (leftEyeRef.current) {
        setLeftPupil(calculatePupilOffset(leftEyeRef.current));
      }
      if (rightEyeRef.current) {
        setRightPupil(calculatePupilOffset(rightEyeRef.current));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-t border-zinc-900 bg-black overflow-hidden"
    >
      {/* 1. Background Grid Pattern (Matching Hero) */}
      <div
        className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:52px_52px]"
        aria-hidden="true"
      />

      {/* 2. Red Ambient Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[650px] h-[300px] bg-red-600/15 blur-[130px] rounded-full pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />

      {/* 3. Section Header with Edgy Red Theme */}
      <div className="relative z-10 text-center space-y-3 mb-14 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-red-950/60 border border-red-900/60 text-red-400">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          About Me
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
          Need a Creative Product?{" "}
          <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]">
            I Can Help You!
          </span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 font-medium tracking-wide">
          Crafting responsive, high-performance web applications with clean code.
        </p>
      </div>

      {/* 4. Two-Column Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {/* Left Card: About Me Description */}
        <div className="rounded-3xl border border-zinc-800/80 bg-zinc-950/80 p-8 sm:p-10 flex flex-col justify-center space-y-6 shadow-xl hover:border-red-900/40 transition-colors duration-300">
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Hi! I&apos;m <span className="text-white font-bold">Shahariar Hossen Akib</span>,
            a dedicated Full-Stack web Developer with a strong passion for
            modern web technologies including <span className="text-red-400 font-semibold">React</span>,{" "}
            <span className="text-red-400 font-semibold">Next.js</span>, and modern{" "}
            <span className="text-red-400 font-semibold">JavaScript</span>. I love translating
            complex ideas into polished, intuitive interfaces with clean architecture.
          </p>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Alongside solo project development, I emphasize mobile-first responsive design,
            performance optimization, and robust version control workflows. My objective
            is to build web applications that not only look visually striking but also provide
            flawless, accessible experiences.
          </p>

          {/* Quick Metrics / Highlights */}
          <div className="pt-2 border-t border-zinc-900/80 grid grid-cols-2 gap-4 text-xs">
            <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <span className="text-red-500 font-bold block text-sm">Full Stack</span>
              <span className="text-zinc-400 text-[11px]">React &amp; Next.js Focus</span>
            </div>
            <div className="p-3 rounded-xl bg-zinc-900/40 border border-zinc-800/60">
              <span className="text-red-500 font-bold block text-sm">Design</span>
              <span className="text-zinc-400 text-[11px]">Responsive &amp; Dark Themed</span>
            </div>
          </div>
        </div>

        {/* Right Card: Interactive Cat Character with Hover Red Glow */}
        <div className="group rounded-3xl border border-zinc-800/90 bg-[#090a0f] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden min-h-[420px] transition-all duration-500 hover:border-red-600/60 hover:shadow-[0_0_45px_rgba(239,68,68,0.25)]">
          {/* Subtle Ambient Red Glow that blooms on hover */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-red-600/10 rounded-full blur-3xl pointer-events-none transition-all duration-500 group-hover:bg-red-600/30 group-hover:scale-125"
            aria-hidden="true"
          />

          {/* Top Bar of the Card */}
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-baseline">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  Shahariar
                </span>
                <span className="font-sans text-2xl sm:text-3xl font-normal text-zinc-500 ml-2">
                  Akib
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-1">
                <svg
                  className="w-3.5 h-3.5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Dhaka, Bangladesh • Full Stack Developer</span>
              </div>
            </div>

            {/* "Available" Status Pill Badge with Red Ring on Hover */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 transition-colors group-hover:border-red-900/50">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" />
              Available
            </div>
          </div>

          {/* Center: Character Face with Eye Tracking and Hover Glow Effect */}
          <div className="relative z-10 my-8 sm:my-10 flex flex-col items-center justify-center select-none animate-float">
            {/* White Ears */}
            <div className="flex items-end justify-center gap-10 sm:gap-12 -mb-5 z-0 transition-transform duration-500 group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]">
              {/* Left Ear */}
              <div className="w-7 sm:w-8 h-16 sm:h-20 bg-white rounded-t-full rounded-b-md transform -rotate-[16deg] origin-bottom-right shadow-sm" />
              {/* Right Ear */}
              <div className="w-7 sm:w-8 h-16 sm:h-20 bg-white rounded-t-full rounded-b-md transform rotate-[16deg] origin-bottom-left shadow-sm" />
            </div>

            {/* Eyes Container */}
            <div className="relative z-10 flex items-center justify-center gap-6 sm:gap-7 pt-2 transition-transform duration-500 group-hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">
              {/* Left Eye */}
              <div
                ref={leftEyeRef}
                className="w-12 sm:w-14 h-16 sm:h-20 bg-white rounded-full relative overflow-hidden flex items-center justify-center shadow-md border border-white/20"
              >
                {/* Left Pupil */}
                <div
                  className="w-6 sm:w-7 h-9 sm:h-10 bg-black rounded-full"
                  style={{
                    transform: `translate(${leftPupil.x}px, ${leftPupil.y}px)`,
                    transition: "transform 80ms ease-out",
                  }}
                />
              </div>

              {/* Right Eye */}
              <div
                ref={rightEyeRef}
                className="w-12 sm:w-14 h-16 sm:h-20 bg-white rounded-full relative overflow-hidden flex items-center justify-center shadow-md border border-white/20"
              >
                {/* Right Pupil */}
                <div
                  className="w-6 sm:w-7 h-9 sm:h-10 bg-black rounded-full"
                  style={{
                    transform: `translate(${rightPupil.x}px, ${rightPupil.y}px)`,
                    transition: "transform 80ms ease-out",
                  }}
                />
              </div>
            </div>

            {/* Cute Pink Nose */}
            <div className="w-4 h-2.5 bg-pink-300 rounded-full mt-3 shadow-sm transition-transform duration-300 group-hover:scale-110" />
          </div>

          {/* Bottom Bar of the Card */}
          <div className="relative z-10 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
            {/* Social Circle Buttons */}
            <div className="flex items-center gap-2.5">
              {/* GitHub */}
              <a
                href="https://github.com/akib511"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-800 bg-zinc-900/80 hover:bg-red-950/60 hover:border-red-900/60 hover:text-red-400 text-zinc-400 flex items-center justify-center transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/shahariar-hossen-akib"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-zinc-800 bg-zinc-900/80 hover:bg-red-950/60 hover:border-red-900/60 hover:text-red-400 text-zinc-400 flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36M5.07 18.5h2.78v-8.37H5.07v8.37Z" />
                </svg>
              </a>
            </div>

            {/* Email Contact Link */}
            <a
              href="mailto:akibhossen628@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-red-400 transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-mono">akibhossen628@gmail</span>
              <svg
                className="w-3 h-3 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
