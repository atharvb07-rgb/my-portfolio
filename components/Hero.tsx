"use client";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera, Environment, Float, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import Image from "next/image";
// import { Model as RobotModel } from './Robot_head'; // <--- UNCOMMENT THIS WHEN YOU HAVE THE MODEL

// --- 3D COMPONENT (Placeholder until you link the file) ---
const RoboticHead = ({ scale = 1 }) => {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        // Aggressive tracking: Looks directly at mouse
        const { x, y } = state.mouse;
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, y * 0.8, 0.1);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, x * 0.8, 0.1);
    });

    return (
        <group ref={meshRef} scale={scale}>
            {/* TODO: Once you have your robot_head.tsx, DELETE the <mesh> below 
         and uncomment the <RobotModel /> line.
      */}
            {/* <RobotModel /> */}

            <mesh>
                <boxGeometry args={[1.5, 1.5, 1.5]} />
                <meshStandardMaterial color="#4F46E5" wireframe />
            </mesh>
        </group>
    );
};

// --- MAIN HERO ---
const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center bg-zinc-950 text-white overflow-hidden">

            {/* 1. Background Atmosphere (Glows & Grids) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </div>

            {/* 2. Left Side: THE CONTENT & PHOTO */}
            <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 pt-20 md:pt-0 h-full">

                {/* BIG PHOTO + BADGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-end gap-6 mb-10"
                >
                    {/* The Photo - Now HUGE and styled */}
                    <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(79,70,229,0.3)] bg-zinc-900">
                        <Image
                            src="/avatar.jpg" // Ensure this file exists in /public
                            alt="Atharv"
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    {/* Floating Stats/Badges next to photo */}
                    <div className="hidden md:flex flex-col gap-2 mb-4">
                        <span className="px-3 py-1 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold tracking-wider uppercase">
                            Level 1 Engineer
                        </span>
                        <span className="px-3 py-1 rounded-md bg-zinc-800/50 border border-zinc-700 text-zinc-400 text-xs font-mono">
                            System: Online
                        </span>
                    </div>
                </motion.div>

                {/* HEADLINE */}
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6"
                >
                    FUTURE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                        ARCHITECT.
                    </span>
                </motion.h1>

                {/* HIGHLIGHTED SKILLS */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-3 mb-8 text-zinc-400"
                >
                    {['UI/UX Design', 'IoT', 'Python', 'React', 'AI'].map((skill) => (
                        <span key={skill} className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 text-sm hover:border-indigo-500/50 transition-colors cursor-default">
                            {skill}
                        </span>
                    ))}
                </motion.div>

                {/* CTA BUTTONS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4"
                >
                    <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_40px_rgba(79,70,229,0.6)]">
                        Explore My Work
                    </button>
                </motion.div>
            </div>

            {/* 3. Right Side: THE MASSIVE ROBOT */}
            <div className="absolute top-0 right-0 w-full h-full md:w-[60%] z-0 md:relative pointer-events-none md:pointer-events-auto">
                <Canvas className="h-full w-full">
                    <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={2} color="#4f46e5" />
                    <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#00ffff" />

                    {/* SCALE IS KEY HERE:
             scale={2.5} makes it HUGE. 
             position={[2, 0, 0]} pushes it slightly to the right so it doesn't block text.
          */}
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        <group position={[2, 0, 0]} rotation={[0, -0.5, 0]}>
                            <RoboticHead scale={2.5} />
                        </group>
                    </Float>

                    <Environment preset="city" />
                </Canvas>
            </div>

        </section>
    );
};

export default Hero;