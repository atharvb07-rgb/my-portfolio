"use client";
import { hobbiesData } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hobbies() {
    return (
        <section id="hobbies" className="min-h-[50vh] bg-zinc-950 py-20 px-6 md:px-20">

            <div className="max-w-6xl mx-auto mb-12">
                <h2 className="text-sm font-bold text-indigo-500 tracking-widest uppercase mb-2">
                    Offline Mode
                </h2>
                <h1 className="text-4xl font-black text-white">
                    What I Love <span className="text-zinc-600">Doing.</span>
                </h1>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
                {hobbiesData.map((hobby, i) => (
                    <motion.div
                        key={hobby.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        // If size is large, span 2 columns. If small, span 1.
                        className={`relative group rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 ${hobby.size === "large" ? "md:col-span-2" : "md:col-span-1"
                            }`}
                    >
                        {/* Background Image (Optional - remove if you just want colors) */}
                        {hobby.image && (
                            <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                                {/* You can uncomment this when you have images */}
                                {/* <Image src={hobby.image} alt={hobby.title} fill className="object-cover" /> */}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                            </div>
                        )}

                        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 origin-bottom-left">
                                {hobby.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{hobby.title}</h3>
                            <p className="text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                {hobby.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}