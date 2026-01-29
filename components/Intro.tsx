"use client";
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Intro() {
    return (
        <section id="home" className="relative h-screen w-full bg-zinc-950 overflow-hidden flex flex-col md:flex-row">

            {/* 1. MAIN TEXT CONTENT (Left on Laptop, Hidden on Mobile to avoid clutter) */}
            <div className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-6 md:px-20 pt-20 md:pt-0 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:block" // Hidden on mobile because we have the new title above the robot
                >
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium uppercase tracking-widest mb-6 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                        System Online
                    </div>

                    <h1 className="text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                        ATHARV <br />
                        <span className="text-zinc-600">BHOSALE.</span>
                    </h1>

                    <p className="text-xl text-zinc-400 max-w-md leading-relaxed">
                        First-year B.Tech Student & Creative Developer. <br />
                        Building the intersection of <span className="text-white font-bold">IoT, AI</span> and <span className="text-white font-bold">Design</span>.
                    </p>
                </motion.div>
            </div>

            {/* 2. ROBOT 3D SCENE & NEW TITLE (Right on Laptop, Full Screen on Mobile) */}
            <div className="absolute inset-0 md:relative md:inset-auto w-full md:w-1/2 h-full z-0">

                {/* --- NEW TITLE OVERLAY --- */}
                <div className="absolute top-[15%] md:top-[10%] left-0 w-full flex flex-col items-center justify-center z-20 pointer-events-none select-none mix-blend-difference">

                    {/* "HOLLA!" - Huge Outline Text */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-[120px] md:text-[150px] font-black text-transparent leading-none"
                        style={{ WebkitTextStroke: "2px rgba(255,255,255,0.3)" }} // Creates the hollow outline effect
                    >
                        HOLLA!
                    </motion.h1>

                    {/* "I AM ATHARV" - Bold Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-white font-bold text-xl md:text-3xl tracking-widest uppercase mt-[-20px] bg-zinc-950/50 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10"
                    >
                        I am Atharv
                    </motion.div>
                </div>

                {/* 3D Scene */}
                <Spline
                    className="w-full h-full scale-90 md:scale-100"
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-0 w-full md:w-auto md:left-20 flex justify-center md:justify-start items-center gap-3 text-zinc-500 text-xs font-mono z-20"
            >
                <span className="animate-bounce">
                    <ArrowDown size={14} />
                </span>
                SCROLL TO INITIALIZE
            </motion.div>

        </section>
    );
}