"use client";
import { projectsData } from "@/data/portfolio";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';

const ProjectCard = ({ project }: { project: any }) => {
    return (
        // PERFORMANCE: Added 'transform-gpu' to the card container
        <div className="h-[500px] w-[85vw] md:h-[450px] md:w-[600px] bg-zinc-900 rounded-[2rem] md:rounded-[3rem] border border-zinc-800 overflow-hidden relative group shadow-2xl flex-shrink-0 mx-3 md:mx-8 transform-gpu">

            {/* PERFORMANCE: Added 'will-change-transform' to the gradient blob */}
            <div className={`absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl md:blur-[100px] rounded-full group-hover:opacity-30 transition-opacity duration-500 transform-gpu will-change-transform`} />

            <div className="relative z-10 p-6 md:p-12 flex flex-col h-full justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                        <span className="px-3 py-1 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-medium tracking-wider uppercase text-zinc-300 md:backdrop-blur-md">
                            {project.category}
                        </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3 md:mb-4">
                        {project.title}
                    </h3>
                    <p className="text-zinc-400 text-base md:text-lg leading-relaxed line-clamp-3 md:line-clamp-2 md:w-3/4">
                        {project.tagline || project.description}
                    </p>
                </div>

                <div>
                    <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                        {project.tech.map((t: string) => (
                            <span key={t} className="text-xs md:text-sm font-mono text-zinc-500">#{t}</span>
                        ))}
                    </div>

                    <Link href={`/projects/${project.id}`}>
                        <button className="px-6 py-3 md:px-8 md:py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 shadow-lg shadow-white/10 text-sm md:text-base">
                            View Project <ArrowUpRight size={18} />
                        </button>
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-[-20px] right-[10px] md:right-[20px] text-[120px] md:text-[180px] font-black text-white/5 leading-none select-none pointer-events-none z-0">
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

                <div className="absolute top-6 left-6 md:top-10 md:left-20 z-20">
                    <h2 className="text-xs md:text-sm font-bold text-indigo-500 tracking-widest uppercase mb-2">Selected Works</h2>
                    <h1 className="text-2xl md:text-3xl font-bold text-white">Project Gallery</h1>
                </div>

                {/* PERFORMANCE: Added 'will-change-transform' to the moving track */}
                <motion.div style={{ x }} className="flex pl-4 md:pl-[10vw] items-center will-change-transform">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}

                    <div className="h-[450px] w-[80vw] md:w-[400px] flex items-center justify-center flex-shrink-0 mx-4 opacity-50 border border-zinc-800 rounded-[2rem] md:rounded-[3rem]">
                        <h3 className="text-xl md:text-2xl font-bold text-zinc-700 text-center">More <br />Coming Soon...</h3>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Projects;