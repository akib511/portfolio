import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
// import Projects from "../components/Projects"
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import GitHubActivity from "@/components/GitHubActivity";
import Activities from "@/components/Activities";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-red-600/30 selection:text-white">
      {/* 1. Shared Navigation Bar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Section */}
        <About />

        {/* 4. Skills Section */}
        <Skills />

        {/* 5. Experience Section */}
        <Experience />

        {/* 6. Projects Section */}
        <Projects />

        {/* 7. Extra Activities Section */}
        <Activities />

        {/* 8. Coding Activity Section */}
        <GitHubActivity />

        {/* 9. Contact Section */}
        <Contact />
      </main>


      <Footer />
    </div >
  );
}
