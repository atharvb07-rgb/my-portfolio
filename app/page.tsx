import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Hobbies from "@/components/Hobbies";        // <--- New
import SocialWork from "@/components/SocialWork";  // <--- New
import Contact from "@/components/Contact";
import Dock from "@/components/Dock";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen relative">
      <Preloader />
      <Dock />

      <div className="relative z-10 bg-zinc-950 mb-[50vh] md:mb-[70vh] shadow-[0_50px_100px_rgba(0,0,0,1)] rounded-b-[2rem] md:rounded-b-[3rem]">
        <Intro />
        <About />
        <Projects />
        <Achievements />

        {/* NEW SECTIONS ADDED HERE */}
        <Hobbies />
        <SocialWork />

        <div id="contact-trigger" className="h-20 bg-zinc-950 rounded-b-[3rem]"></div>
      </div>

      <Contact />
    </main>
  );
}