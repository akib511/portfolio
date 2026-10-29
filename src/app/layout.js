import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

export const metadata = {
  title: "Shahariar Hossen Akib | Frontend Developer",
  description:
    "Personal developer portfolio of Shahariar Hossen Akib - Frontend Developer specializing in JavaScript, React, Next.js, and responsive web development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-black text-zinc-100 font-sans selection:bg-red-600/30 selection:text-white">
        <CustomCursor />

        {children}
      </body>
    </html>
  );
}
