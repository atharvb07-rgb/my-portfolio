"use client";
import { achievementsData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // <--- Ensure this is imported

const Achievements = () => {
    return (
        <section id="achievements" className="min-h-screen bg-zinc-950 py-20 px-6 md:px-20 relative z-20">

            <div className="max-w-6xl mx-auto mb-16">
                <h2 className="text-sm font-bold text-indigo-500 tracking-widest uppercase mb-4">
                    Hall of Fame
                </h2>
                <h1 className="text-4xl md:text-6xl font-black text-white">
                    Achievements & <br /> <span className="text-zinc-600">Certifications.</span>
                </h1>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {achievementsData.map((item, index) => (
                    <Link key={item.id} href={`/achievements/${item.id}`}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl cursor-pointer h-full"
                        >
                            {/* IMAGE SECTION */}
                            <div className="relative h-48 w-full bg-zinc-800 overflow-hidden">

                                {/* 1. This is the Real Image Component */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* 2. Gradient Overlay to make text readable */}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" />
                            </div>

                            {/* CONTENT SECTION */}
                            <div className="p-8 relative">
                                <span className="text-xs font-mono text-indigo-400 mb-2 block">{item.date}</span>
                                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-indigo-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-zinc-400 font-medium mb-4">{item.issuer}</p>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {item.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
                                    Read Story <ArrowRight size={14} />
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}

            </div>
        </section>
    );
};

export default Achievements;