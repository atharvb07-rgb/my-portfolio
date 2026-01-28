"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="min-h-screen bg-zinc-900 text-white flex items-center justify-center py-20 px-6">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT: THE PHOTO (Slides in from Left) */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }} // Triggers when 100px into view
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-700"
                >
                    <Image
                        src="/avatar.jpg" // Make sure this exists!
                        alt="Atharv Profile"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                </motion.div>

                {/* RIGHT: THE CONTENT (Slides in from Right) */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-sm font-bold text-indigo-500 tracking-widest uppercase mb-4">
                        About Me
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        I Build Digital <br />
                        <span className="text-zinc-400">Experiences.</span>
                    </h1>

                    <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                        I am <b>Atharv</b>, a first-year B.Tech student obsessed with the intersection of design and logic.
                        While others just write code, I craft <b>user experiences</b>.
                    </p>
                    <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                        Currently, I'm specializing in <b>UI/UX Design</b>, <b>Python</b>, and <b>IoT systems</b>.
                        My mission is to bring intelligence to everyday objects, from smart home devices to robotic companions like <i>Wall-EVE</i>.
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-3">
                        {['Next.js', 'React', 'Python', 'IoT', 'Figma', 'Tailwind'].map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-zinc-800 rounded-full text-sm text-zinc-300 border border-zinc-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default About;