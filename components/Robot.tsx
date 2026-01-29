"use client";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Robot() {
    // 1. Load the file from the public folder
    // Make sure your file is named "robot.glb" inside the public folder!
    const { scene } = useGLTF("/robot.glb");
    const robotRef = useRef<THREE.Group>(null);

    // 2. The "Looking" Animation
    useFrame((state) => {
        if (!robotRef.current) return;

        // Get mouse position (-1 to 1)
        const mouseX = state.mouse.x;
        const mouseY = state.mouse.y;

        // Smoothly interpolate rotation to look at the mouse
        // The numbers (0.5, 0.3) control how far the head turns.
        robotRef.current.rotation.y = THREE.MathUtils.lerp(robotRef.current.rotation.y, mouseX * 0.5, 0.1);
        robotRef.current.rotation.x = THREE.MathUtils.lerp(robotRef.current.rotation.x, -mouseY * 0.3, 0.1);
    });

    return (
        <group ref={robotRef} dispose={null}>
            {/* Scale: Adjust this number (2.5) if the robot looks too small/big.
         Position: [0, -1, 0] moves it down slightly to center the face.
      */}
            <primitive object={scene} scale={1.8} position={[0, 0, 0]} />
        </group>
    );
}

// Pre-load the model so it shows up instantly
useGLTF.preload("/robot.glb");