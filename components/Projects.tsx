"use client";
import { projectsData } from "@/data/portfolio";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react"; // GitHub removed as requested
import Link from 'next/link';

const ProjectCard = ({ project }: { project: any }) => {
    return (
        // Dimensions: Horizontal Card (md:w-[600px])
        <div className="h-[450px] w-[350px] md:h-[450px] md:w-[600px] bg-zinc-900 rounded-[3rem] border border-zinc-800 overflow-hidden relative group shadow-2xl flex-shrink-0 mx-4 md:mx-8">

            {/* Gradient Blob */}
            <div className={`absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br ${project.gradient} opacity-20 blur-[100px] rounded-full group-hover:opacity-30 transition-opacity duration-500`} />

            {/* Content Container - Flex Column to stack everything on the Left */}
            <div className="relative z-10 p-8 md:p-12 flex flex-col h-full justify-between">

                {/* Top Section: Title & Description */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wider uppercase text-zinc-300 backdrop-blur-md">
                            {project.category}
                        </span>
                    </div>
                    <h3 className="text-4xl font-black text-white leading-tight mb-4">
                        {project.title}
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed line-clamp-2 md:w-3/4">
                        {project.tagline || project.description}
                    </p>
                </div>

                {/* Bottom Section: Tags & Button (Aligned Left) */}
                <div>
                    {/* Tech Stack Tags - Moved to Left */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {project.tech.map((t: string) => (
                            <span key={t} className="text-sm font-mono text-zinc-500">#{t}</span>
                        ))}
                    </div>

                    {/* View Project Button Only - Moved to Left */}
                    <Link href={`/projects/${project.id}`}>
                        <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-white/10">
                            View Project <ArrowUpRight size={18} />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Decorative Number - Bottom Right */}
            <div className="absolute bottom-[-30px] right-[20px] text-[180px] font-black text-white/5 leading-none select-none pointer-events-none z-0">
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

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    return (
        <section id="projects" ref={targetRef} className="relative h-[300vh] bg-zinc-950">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                <div className="absolute top-10 left-10 md:left-20 z-20">
                    <h2 className="text-sm font-bold text-indigo-500 tracking-widest uppercase mb-2">Selected Works</h2>
                    <h1 className="text-3xl font-bold text-white">Project Gallery</h1>
                </div>

                <motion.div style={{ x }} className="flex pl-[10vw] items-center">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}

                    {/* "Coming Soon" Card */}
                    <div className="h-[450px] w-[300px] md:w-[400px] flex items-center justify-center flex-shrink-0 mx-12 opacity-50 border border-zinc-800 rounded-[3rem]">
                        <h3 className="text-2xl font-bold text-zinc-700 text-center">More <br />Coming Soon...</h3>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;