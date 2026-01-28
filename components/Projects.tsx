"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react"; // Make sure you have lucide-react installed
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: "Gyan Setu",
        category: "EdTech Platform",
        description: "A gamified productivity ecosystem for students. Features an 'Academic Atlas' for syllabus tracking and a digital pet that evolves as you complete tasks.",
        tech: ["Next.js", "Firebase", "Tailwind", "Framer Motion"],
        color: "from-violet-500 to-purple-500", // Gradient for the card
    },
    {
        id: 2,
        title: "Project Wall-EVE",
        category: "Robotics & AI",
        description: "A desktop robotic companion powered by Computer Vision. It detects user emotions and proactively offers support. Built on Raspberry Pi 5.",
        tech: ["Python", "OpenCV", "Raspberry Pi", "IoT"],
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: 3,
        title: "Panacea",
        category: "Healthcare Innovation",
        description: "Unified patient record system with AI-driven prescription auditing. Created for SpinSci hackathon to streamline after-care plans.",
        tech: ["React", "Node.js", "AI/ML", "Blockchain"],
        color: "from-emerald-500 to-green-500",
    },
];

const ProjectCard = ({ project }: { project: any }) => {
    return (
        <div className="h-[450px] w-[350px] md:h-[600px] md:w-[800px] bg-zinc-900 rounded-[3rem] border border-zinc-800 overflow-hidden relative group shadow-2xl flex-shrink-0 mx-4 md:mx-12">

            {/* Background Gradient Blob */}
            <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${project.color} opacity-20 blur-[100px] rounded-full group-hover:opacity-30 transition-opacity duration-500`} />

            <div className="relative z-10 p-8 md:p-14 flex flex-col h-full justify-between">

                {/* Header */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider uppercase text-zinc-300 backdrop-blur-md">
                            {project.category}
                        </span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                        {project.title}
                    </h3>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Footer: Tech Stack & Buttons */}
                <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((t: string) => (
                            <span key={t} className="text-sm font-mono text-zinc-500">#{t}</span>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <Link href={`/projects/${project.id}`}>
                            <button className="px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                                View Project -&gt;
                            </button>
                        </Link>
                        <button className="p-3 rounded-full border border-zinc-700 hover:bg-zinc-800 text-white transition-colors">
                            <Github size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Visual Pattern / Number (Decorative) */}
            <div className="absolute bottom-[-20px] right-[-20px] text-[200px] font-black text-white/5 leading-none select-none">
                0{project.id}
            </div>
        </div>
    );
};

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Calculate the horizontal translation
    // If we have 3 items, we want to scroll roughly 2 full widths to the left
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    return (
        <section id="projects" ref={targetRef} className="relative h-[300vh] bg-zinc-950">

            {/* Sticky Container */}
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                {/* Title (Stays static on left) */}
                <div className="absolute top-10 left-10 md:left-20 z-20">
                    <h2 className="text-sm font-bold text-indigo-500 tracking-widest uppercase mb-2">Selected Works</h2>
                    <h1 className="text-3xl font-bold text-white">Project Gallery</h1>
                </div>

                {/* Moving Track */}
                <motion.div style={{ x }} className="flex pl-[10vw]">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}

                    {/* "More Coming Soon" Card */}
                    <div className="h-[450px] w-[350px] md:h-[600px] md:w-[400px] flex items-center justify-center flex-shrink-0 mx-12">
                        <h3 className="text-3xl font-bold text-zinc-700 text-center">More in <br /> Development...</h3>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;