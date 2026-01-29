"use client";
import { socialWorkData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SocialWork() {
    return (
        <section id="social" className="min-h-[50vh] bg-zinc-950 py-20 px-6 md:px-20 border-t border-zinc-900">

            <div className="max-w-4xl mx-auto text-center mb-16">
                <span className="inline-block p-3 rounded-full bg-pink-500/10 text-pink-500 mb-4">
                    <Heart size={24} className="animate-pulse" />
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                    Giving <span className="text-zinc-600">Back.</span>
                </h1>
                <p className="text-zinc-400 max-w-xl mx-auto">
                    "True success is defined by the lives we touch. Here is how I dedicate my time to serve the community."
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {socialWorkData.map((item, i) => (
                    <Link key={item.id} href={`/social/${item.id}`}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10 hover:border-pink-500/30 transition-all cursor-pointer hover:bg-zinc-900/50 mb-6"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">

                                {/* Left: Date Badge */}
                                <div className="md:w-auto">
                                    <span className="text-xs font-bold text-pink-500 tracking-widest uppercase border border-pink-500/20 px-3 py-1 rounded-full whitespace-nowrap">
                                        {item.date}
                                    </span>
                                </div>

                                {/* Middle: Info */}
                                <div className="md:flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-pink-400 transition-colors">{item.role}</h3>
                                    <p className="text-zinc-500 font-medium mb-2">{item.org}</p>
                                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Right: Arrow Icon */}
                                <div className="md:w-auto flex items-center">
                                    <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-pink-500 group-hover:border-pink-500 transition-all">
                                        <ArrowRight size={20} className="text-zinc-500 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}