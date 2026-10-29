
import Link from "next/link";
import Image from "next/image";
import myImage from "../../public/assets/my-img.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-20 lg:min-h-screen lg:px-8 lg:py-24"
    >
      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:56px_56px]"
      />

      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-64 w-64 rounded-full bg-red-600/20 blur-[100px] sm:h-96 sm:w-96 lg:right-0 lg:top-1/3 lg:h-[500px] lg:w-[500px]"
      />

      {/* Main Container */}
      <div className="mx-auto grid min-h-[70vh] max-w-7xl grid-cols-1 items-center gap-16 lg:min-h-[calc(100vh-12rem)] lg:grid-cols-2 lg:gap-12 xl:gap-20">

        {/* Left Content */}
        <div className="order-2 flex min-w-0 flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-red-500 sm:text-sm">
            Hello, I&apos;m
          </p>

          <h1 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl xl:text-6xl">
            SHAHARIAR{" "}
            <span className="text-red-500">AKIB</span>
          </h1>

          <h2 className="mt-4 text-xl font-bold uppercase leading-tight text-zinc-300 sm:text-2xl md:text-3xl xl:text-3xl">
            Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Transforming ideas into powerful web applications with modern
            technologies. Passionate about creating seamless user experiences
            and building responsive, user-friendly interfaces.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4 lg:justify-start">
            <Link
              href="https://linkedin.com/in/shahariar-hossen-akib"

              className="hire-me-btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl border border-red-400/50 bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300 hover:scale-[1.03] hover:bg-red-500 hover:shadow-[0_0_35px_rgba(239,68,68,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-base"


            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Hire Me
            </Link>

            <a
              href="/resume.pdf"
              download="Shahariar_Hossen_Akib_Resume.pdf"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-950 px-6 py-3 text-sm font-semibold text-red-400 transition-all duration-300 hover:border-red-500/60 hover:bg-zinc-900 hover:text-red-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-base"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center justify-center gap-6 lg:justify-start">
            {/* GitHub */}
            <a
              href="https://github.com/akib511"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-zinc-400 transition-colors duration-300 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/shahariar-hossen-akib"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-zinc-400 transition-colors duration-300 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36M5.07 18.5h2.78v-8.37H5.07v8.37Z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:akibhossen628@gmail.com"
              aria-label="Send Email"
              className="text-zinc-400 transition-colors duration-300 hover:text-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>

          {/* Scroll Indicator */}
          <Link
            href="/#about"
            aria-label="Scroll to About section"
            className="mt-10 flex h-9 w-5 items-start justify-center rounded-full border-2 border-red-500/80 p-1 transition-colors hover:border-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            <span className="h-2 w-1 animate-bounce rounded-full bg-red-500" />
          </Link>
        </div>

        {/* Right Profile Image */}
        <div className="order-1 flex min-w-0 items-center justify-center lg:order-2">
          <div className="group relative w-full max-w-[390px]">

            {/* Dotted Background */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-5 rounded-[2.5rem] opacity-30 sm:-inset-8"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(239,68,68,0.55) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
                maskImage:
                  "radial-gradient(circle at center, black 35%, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, black 35%, transparent 75%)",
              }}
            />

            {/* Ambient Glow */}
            <div
              aria-hidden="true"
              className="profile-glow pointer-events-none absolute -inset-5 rounded-[2.5rem] bg-red-600/25 blur-2xl sm:-inset-8"
            />

            {/* Animated Fire Border */}
            <div className="profile-fire-border relative mx-auto w-[min(78vw,280px)] rounded-[2rem] p-[3px] shadow-[0_0_30px_rgba(239,68,68,0.3)] sm:w-[350px] lg:w-full">
              {/* Profile Image */}
              <div className="relative aspect-[7/8] w-full overflow-hidden rounded-[calc(2rem-3px)] bg-zinc-950">
                <Image
                  src={myImage}
                  alt="Shahariar Hossen Akib"
                  fill
                  priority
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 350px, 390px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Tint */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-red-950/30 via-transparent to-orange-500/10"
                />

                {/* Shine Effect */}
                <div
                  aria-hidden="true"
                  className="profile-shine pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />

                {/* Bottom Gradient */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                />



              </div>
            </div>

            {/* Developer Badge */}
            <div className="profile-float absolute right-0 top-8 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/95 px-3 py-2 shadow-lg shadow-red-500/10 backdrop-blur-md sm:-right-4 sm:px-4">
              <span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.9)]" />

              <span className="text-[11px] font-semibold text-white sm:text-sm">
                Developer
              </span>
            </div>

            {/* Learning Badge */}
            <div className="profile-float-reverse absolute bottom-20 left-0 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/95 px-3 py-2 shadow-lg shadow-orange-500/10 backdrop-blur-md sm:-left-4 sm:px-4">
              <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.9)]" />

              <span className="text-[11px] font-semibold text-white sm:text-sm">
                Always Learning
              </span>
            </div>

            {/* Decorative Corners */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 h-14 w-14 rounded-br-[2rem] border-b-2 border-r-2 border-red-500/80 transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4 sm:-bottom-4 sm:-right-4 sm:h-20 sm:w-20"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-3 h-14 w-14 rounded-tl-[2rem] border-l-2 border-t-2 border-red-500/80 transition-all duration-300 group-hover:-left-4 group-hover:-top-4 sm:-left-4 sm:-top-4 sm:h-20 sm:w-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

