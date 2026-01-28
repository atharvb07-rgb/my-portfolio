import { projectsData } from "@/data/portfolio";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return projectsData.map((p) => ({
        id: p.id.toString(),
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;
    const project = projectsData.find((p) => p.id.toString() === id);

    if (!project) return notFound();

    return (
        <main className="min-h-screen bg-zinc-950 text-white selection:bg-indigo-500/30">

            {/* 1. HERO SECTION */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                {/* Dynamic Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 blur-3xl`} />

                <Link href="/#projects" className="absolute top-10 left-10 z-20 flex items-center gap-2 px-4 py-2 bg-zinc-900/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-white hover:text-black transition-all group">
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-medium">Back to Projects</span>
                </Link>

                <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-20 max-w-6xl mx-auto">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-white/10 rounded-full border border-white/10 w-fit">
                        {project.category}
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl font-light">
                        {project.tagline || project.description}
                    </p>
                </div>
            </div>

            {/* 2. DETAILS GRID */}
            <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">

                <div className="md:col-span-2 space-y-10">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-white">Overview</h2>
                        <p className="text-zinc-400 leading-relaxed text-lg">
                            {project.description}
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                            <h3 className="text-indigo-400 font-bold mb-2">The Challenge</h3>
                            <p className="text-sm text-zinc-400">{project.challenges || "Building a seamless user experience while managing complex real-time data states."}</p>
                        </div>
                        <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
                            <h3 className="text-emerald-400 font-bold mb-2">The Solution</h3>
                            <p className="text-sm text-zinc-400">{project.solution || "Leveraging modern frameworks to create a scalable, performant architecture."}</p>
                        </div>
                    </section>

                    {/* 3. NEW GALLERY SECTION */}
                    {project.gallery && project.gallery.length > 0 && (
                        <section className="mt-12">
                            <h2 className="text-2xl font-bold mb-6 text-white border-t border-zinc-800 pt-10">Project Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.gallery.map((img, index) => (
                                    <div key={index} className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 group">
                                        <Image
                                            src={img}
                                            alt={`Gallery image ${index + 1}`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* SIDEBAR */}
                <div className="space-y-8">
                    <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Tech Stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span key={t} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-sm rounded-md border border-zinc-700">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        {project.liveLink && project.liveLink !== "#" && (
                            <a href={project.liveLink} target="_blank" className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform">
                                Live Demo <ExternalLink size={18} />
                            </a>
                        )}
                        {project.githubLink && project.githubLink !== "#" && (
                            <a href={project.githubLink} target="_blank" className="flex items-center justify-center gap-2 w-full py-4 bg-zinc-900 text-white font-bold rounded-xl border border-zinc-800 hover:bg-zinc-800 transition-colors">
                                GitHub <Github size={18} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}