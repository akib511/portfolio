import Link from "next/link";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="w-full border-t border-zinc-900 bg-black py-12 text-zinc-400 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/#home"
              className="text-base font-bold text-white hover:text-zinc-200 transition-colors flex items-center justify-center md:justify-start gap-1.5"
            >
              <span>Shahariar</span>
              <span className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                Akib
              </span>
            </Link>
            <p className="text-xs text-zinc-500 mt-1">
              Frontend Developer • React &amp; Next.js
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://github.com/akib511"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              GitHub
            </a>
            <span className="text-zinc-800">•</span>
            <a
              href="https://linkedin.com/in/shahariar-hossen-akib"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-zinc-500 text-[11px] gap-2">
          <p>© {currentYear} Shahariar Hossen Akib. All rights reserved.</p>
          <p>
            Crafted with Next.js &amp;{" "}
            <span className="text-red-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}