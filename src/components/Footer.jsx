export default function Footer() {


  return (
    <footer className="w-full border-t border-zinc-900 bg-black py-12 text-zinc-400 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Copyright notice */}
        <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-zinc-500 text-[11px] gap-2">
          <p>
            © 2026 Shahariar Hossen Akib. All rights reserved.
          </p>

          <p>
            Crafted with Next.js &amp;{" "}
            <span className="text-red-500">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
