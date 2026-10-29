
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowUpRight,
    ExternalLink,
    Code2,
    Layers3,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import projects from "@/data/projects";
import Reveal from "@/components/Reveal";
import ProjectPreview from "./ProjectPreview";

// lucide-react v1 removed brand icons (Github), so we re-add it locally
// using the exact same path/props lucide used to ship. Styling is
// identical to the other lucide icons on this page.
const Github = ({ size = 24, strokeWidth = 2, className, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
        {...props}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

export const ensureStatic = "navigation";

export async function generateStaticParams() {
    return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found | Shahariar Hossen Akib",
        };
    }

    return {
        title: `${project.title} | Shahariar Hossen Akib`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col overflow-hidden bg-[#050505] font-sans text-white selection:bg-red-500/30">
            <Navbar />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-16 lg:pb-24">
                    {/* Background Effects */}
                    <div
                        className="pointer-events-none absolute -top-20 right-0 h-[350px] w-[350px] rounded-full opacity-10 blur-[120px]"
                        style={{ backgroundColor: project.color }}
                    />

                    <div className="pointer-events-none absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-red-600/5 blur-[100px]" />

                    <div className="relative mx-auto max-w-7xl">
                        {/* Back Navigation */}
                        <Reveal>
                            <Link
                                href="/#projects"
                                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-zinc-400 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/5 hover:text-white"
                            >
                                <ArrowLeft
                                    size={16}
                                    className="transition-transform duration-300 group-hover:-translate-x-1"
                                />
                                Back to Projects
                            </Link>
                        </Reveal>

                        {/* Main Hero Grid */}
                        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                            {/* Project Information */}
                            <div>
                                <Reveal>
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span
                                            className="inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.15em]"
                                            style={{
                                                color: project.color,
                                                borderColor: `${project.color}45`,
                                                backgroundColor: `${project.color}10`,
                                            }}
                                        >
                                            <span
                                                className="h-1.5 w-1.5 rounded-full"
                                                style={{ backgroundColor: project.color }}
                                            />
                                            {project.category}
                                        </span>

                                        <span className="font-mono text-xs text-zinc-600">
                                            PROJECT / {project.number}
                                        </span>
                                    </div>
                                </Reveal>

                                <Reveal delay={0.08}>
                                    <h1 className="mt-7 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                                        {project.title}
                                        <span className="text-red-500">.</span>
                                    </h1>
                                </Reveal>

                                <Reveal delay={0.16}>
                                    <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                                        {project.description}
                                    </p>
                                </Reveal>

                                {/* Quick Project Stats */}
                                <Reveal delay={0.24}>
                                    <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4 border-y border-white/[0.08] py-5">
                                        <div className="flex items-center gap-2.5">
                                            <CheckCircle2
                                                size={17}
                                                className="text-emerald-400"
                                            />
                                            <span className="text-sm text-zinc-300">
                                                Live Project
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2.5">
                                            <Code2 size={17} className="text-red-400" />
                                            <span className="text-sm text-zinc-300">
                                                {project.technologies.length} Technologies
                                            </span>
                                        </div>
                                    </div>
                                </Reveal>

                                {/* Technologies */}
                                <Reveal delay={0.32}>
                                    <div className="mt-7">
                                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                                            Built With
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-medium text-zinc-300 transition-all duration-300 hover:border-red-500/40 hover:bg-red-500/5 hover:text-white"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>

                                {/* Action Buttons */}
                                <Reveal delay={0.4}>
                                    <div className="mt-9 flex flex-wrap gap-3">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/10 transition-all duration-300 hover:-translate-y-1 hover:bg-red-500 hover:shadow-xl hover:shadow-red-600/20"
                                            >
                                                Live Preview
                                                <ArrowUpRight
                                                    size={18}
                                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                />
                                            </a>
                                        )}

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-zinc-200 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                                            >
                                                <Github size={18} />
                                                Source Code
                                                <ExternalLink
                                                    size={15}
                                                    className="text-zinc-500 transition-colors group-hover:text-white"
                                                />
                                            </a>
                                        )}
                                    </div>
                                </Reveal>
                            </div>

                            {/* Project Image */}
                            <Reveal delay={0.12} className="relative">
                                <div
                                    className="absolute -inset-4 rounded-[2rem] opacity-20 blur-3xl"
                                    style={{ backgroundColor: project.color }}
                                />

                                <div className="group relative rounded-2xl border border-white/10 bg-[#0b0b0b] p-2 shadow-2xl shadow-black/50 transition-all duration-500 hover:border-white/20 sm:rounded-3xl sm:p-3">
                                    {/* Browser Header */}
                                    <div className="flex items-center justify-between px-3 py-3 sm:px-4">
                                        <div className="flex items-center gap-1.5">
                                            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                                        </div>

                                        <span className="rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[10px] text-zinc-500 sm:text-xs">
                                            {project.title} — Preview
                                        </span>

                                        <Sparkles
                                            size={15}
                                            style={{ color: project.color }}
                                        />
                                    </div>

                                    {/* Image */}
                                    <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-black">
                                        <ProjectPreview project={project} />
                                    </div>

                                    {/* Image Footer */}
                                    <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-4 sm:py-4">
                                        <div>
                                            <p className="text-sm font-semibold text-zinc-200">
                                                {project.title}
                                            </p>
                                            <p className="mt-1 text-xs text-zinc-500">
                                                Project Preview
                                            </p>
                                        </div>

                                        <span
                                            className="rounded-lg border px-3 py-1.5 text-xs font-semibold"
                                            style={{
                                                color: project.color,
                                                borderColor: `${project.color}35`,
                                                backgroundColor: `${project.color}0d`,
                                            }}
                                        >
                                            {project.number}
                                        </span>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </section>

                {/* Project Overview */}
                <section className="border-t border-white/[0.07] bg-[#080808] px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
                        <Reveal>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-red-500" />
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                                    Project Overview
                                </p>
                            </div>

                            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                                About the Project
                            </h2>

                            <p className="mt-6 max-w-2xl text-sm leading-8 text-zinc-400 sm:text-base">
                                {project.description}
                            </p>

                            <p className="mt-4 max-w-2xl text-sm leading-8 text-zinc-500 sm:text-base">
                                Explore the live application to experience the interface, or
                                visit the source code repository to learn more about the
                                implementation and technologies used.
                            </p>
                        </Reveal>

                        {/* Information Card */}
                        <Reveal delay={0.12} className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0c] p-6 sm:p-8">
                            <div
                                className="absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-[0.08] blur-3xl"
                                style={{ backgroundColor: project.color }}
                            />

                            <div className="relative flex items-center gap-3">
                                <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-2.5">
                                    <Layers3 size={19} className="text-red-400" />
                                </div>

                                <h3 className="text-lg font-bold">Project Information</h3>
                            </div>

                            <div className="relative mt-7 divide-y divide-white/[0.07]">
                                <div className="flex items-start justify-between gap-4 py-4 first:pt-0">
                                    <span className="text-sm text-zinc-500">Project Name</span>
                                    <span className="text-right text-sm font-semibold text-zinc-200">
                                        {project.title}
                                    </span>
                                </div>

                                <div className="flex items-start justify-between gap-4 py-4">
                                    <span className="text-sm text-zinc-500">Category</span>
                                    <span className="max-w-[60%] text-right text-sm font-semibold text-zinc-200">
                                        {project.category}
                                    </span>
                                </div>

                                <div className="flex items-start justify-between gap-4 py-4">
                                    <span className="text-sm text-zinc-500">Technologies</span>
                                    <span className="text-right text-sm font-semibold text-zinc-200">
                                        {project.technologies.length} Tools
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 pt-4">
                                    <span className="text-sm text-zinc-500">Status</span>
                                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                                        Available Online
                                    </span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* Technology Section */}
                <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <Reveal className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <div>
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-8 bg-red-500" />
                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-500">
                                        Technology Stack
                                    </p>
                                </div>

                                <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                                    Tools Behind the Build
                                </h2>
                            </div>

                            <p className="max-w-sm text-sm leading-7 text-zinc-500">
                                The technologies used to build and develop {project.title}.
                            </p>
                        </Reveal>

                        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                            {project.technologies.map((tech, index) => (
                                <Reveal
                                    key={tech}
                                    delay={index * 0.06}
                                    className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b0b0b] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/30 hover:bg-[#101010] sm:p-6"
                                >
                                    <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-red-500 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                                    <div className="flex items-center justify-between">
                                        <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-2.5 transition-colors group-hover:border-red-500/20 group-hover:bg-red-500/5">
                                            <Code2
                                                size={19}
                                                className="text-zinc-400 transition-colors group-hover:text-red-400"
                                            />
                                        </div>

                                        <span className="font-mono text-xs text-zinc-700">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 text-sm font-bold text-zinc-200 transition-colors group-hover:text-white sm:text-base">
                                        {tech}
                                    </h3>

                                    <p className="mt-2 text-xs text-zinc-600">
                                        Development Technology
                                    </p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-16">
                    <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/[0.08] via-transparent to-transparent" />

                        <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-red-600/10 blur-[100px]" />

                        <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
                            <div>
                                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                                    <Sparkles size={14} />
                                    Explore the Project
                                </span>

                                <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">
                                    Want to see it in action?
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                                    Visit the live application or explore the source code of{" "}
                                    {project.title}.
                                </p>
                            </div>

                            <div className="flex shrink-0 flex-wrap gap-3">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 hover:bg-red-500"
                                    >
                                        Visit Website
                                        <ArrowUpRight size={17} />
                                    </a>
                                )}

                                <Link
                                    href="/#projects"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-bold text-zinc-300 transition-all duration-300 hover:border-white/25 hover:text-white"
                                >
                                    <ArrowLeft size={16} />
                                    All Projects
                                </Link>
                            </div>
                        </div>
                    </Reveal>
                </section>
            </main>

            <Footer />
        </div>
    );
}
