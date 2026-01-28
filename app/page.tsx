import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements"; // <--- Import this
import Contact from "@/components/Contact";
import Dock from "@/components/Dock";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen relative">
      <Preloader />
      <Dock />

      {/* Main Content Curtain */}
      <div className="relative z-10 bg-zinc-950 mb-[70vh] shadow-[0_50px_100px_rgba(0,0,0,1)] rounded-b-[3rem]">
        <Intro />
        <About />
        <Projects />

        {/* ADD ACHIEVEMENTS HERE */}
        <Achievements />

        {/* This div triggers the Contact Reveal */}
        <div id="contact" className="h-20 bg-zinc-950 rounded-b-[3rem]"></div>
      </div>

      <Contact />
    </main>
  );
}