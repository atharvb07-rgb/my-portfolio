"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

// --- THE REAL ROBOT COMPONENT ---
const RoboticHead = ({ scale = 1 }) => {
    const groupRef = useRef<THREE.Group>(null);

    // 1. LOAD YOUR MODEL
    // ⚠️ REPLACE 'robot.glb' WITH YOUR EXACT FILENAME INSIDE /public
    // Example: if your file is public/myrobot.glb, write "/myrobot.glb"
    const { scene } = useGLTF("/robot_head.glb");

    useFrame((state) => {
        if (!groupRef.current) return;

        // Mouse Tracking Logic
        const { x, y } = state.mouse;

        // Smooth Look-at movement
        // If the robot looks opposite to your mouse, remove the negative sign from '-y'
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.5, 0.2);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.5, 0.1);
    });

    return (
        <group ref={groupRef} scale={scale}>
            {/* 2. RENDER THE MODEL */}
            {/* If the model faces the wrong way initially, adjust rotation here. 
          Example: rotation={[0, Math.PI, 0]} turns it 180 degrees. */}
            <primitive object={scene} position={[0, 0.3, 0]} />
        </group>
    );
};

// --- MAIN SCENE ---
const Intro = () => {
    return (
        <section className="h-screen w-full bg-zinc-950 relative flex flex-col items-center justify-center overflow-hidden">

            <div className="absolute inset-0 z-0">
                <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 8]} />

                    {/* Lighting Setup - Adjusted to make GLB models look good */}
                    <ambientLight intensity={1.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#4f46e5" />

                    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                        {/* Adjust scale here if the robot is too big or small */}
                        <RoboticHead scale={2.5} />
                    </Float>

                    <Environment preset="city" />
                    <ContactShadows position={[0, -3.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4.5} />
                </Canvas>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                className="absolute bottom-10 z-10 text-zinc-500 text-sm tracking-widest uppercase pointer-events-none"
            >
                Scroll to Begin
            </motion.div>
        </section>
    );
};

export default Intro;