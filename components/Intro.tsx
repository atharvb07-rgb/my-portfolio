"use client";
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useState } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});

export default function Intro() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <section id="home" className="relative h-screen w-full bg-zinc-950 overflow-hidden flex flex-col md:flex-row">

            {/* 1. LAPTOP TEXT */}
            <div className="relative z-10 w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-6 md:px-20 pt-20 md:pt-0 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="hidden md:block"
                >
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

            {/* 2. VISUAL AREA (Optimized) */}
            <div className="absolute inset-0 md:relative md:inset-auto w-full md:w-1/2 h-full z-0 flex items-center justify-center bg-zinc-950">

                {/* Mobile Fallback */}
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent md:hidden pointer-events-none" />

                {/* Title Overlay */}
                <div className="absolute top-[20%] md:top-[10%] left-0 w-full flex flex-col items-center justify-center z-20 pointer-events-none select-none mix-blend-difference">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-[120px] md:text-[150px] font-black text-transparent leading-none"
                        style={{ WebkitTextStroke: "2px rgba(255,255,255,0.3)" }}
                    >
                        HOLLA!
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-white font-bold text-xl md:text-3xl tracking-widest uppercase mt-[-20px] bg-zinc-950/50 backdrop-blur-sm px-4 py-1 rounded-full border border-white/10"
                    >
                        I am Atharv
                    </motion.div>
                </div>

                {/* 3D Scene - PERFORMANCE BOOST APPLIED */}
                {/* We added 'will-change-transform' and 'transform-gpu' to force hardware acceleration */}
                <div className={`hidden md:block w-full h-full transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'} will-change-transform transform-gpu`}>
                    <Spline
                        className="w-full h-full scale-100"
                        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        onLoad={() => setIsLoaded(true)}
                    />
                </div>
            </div>

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