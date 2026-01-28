"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { sessionStore } from "@/lib/store"; // <--- Import the memory file

const words = [
    "INITIALIZING CORE...",
    "LOADING ASSETS...",
    "ESTABLISHING CONNECTION...",
    "ACCESS GRANTED."
];

const Preloader = () => {
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 1. Check if the site has already loaded in this specific session
        if (sessionStore.hasLoaded) {
            // If true, we just came from another page (like a Project). 
            // Skip animation instantly.
            setIsLoading(false);
        } else {
            // If false, it's a Refresh or First Visit. Play the intro.
            const interval = setInterval(() => {
                setIndex((prev) => {
                    if (prev < words.length - 1) return prev + 1;

                    clearInterval(interval);
                    setTimeout(() => {
                        setIsLoading(false);
                        // 2. Mark as loaded so it doesn't play again until refresh
                        sessionStore.hasLoaded = true;
                    }, 1000);
                    return prev;
                });
            }, 700);

            return () => clearInterval(interval);
        }
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] bg-black flex items-center justify-center cursor-none"
                >
                    <div className="text-center">
                        <motion.h1
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 font-mono"
                        >
                            {words[index] === "ACCESS GRANTED." ? (
                                <span className="text-green-500">{words[index]}</span>
                            ) : (
                                words[index]
                            )}
                        </motion.h1>

                        <div className="w-64 h-1 bg-zinc-800 rounded-full mx-auto overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3.5, ease: "easeInOut" }}
                                className="h-full bg-indigo-500"
                            />
                        </div>

                        <p className="mt-4 text-xs text-zinc-600 font-mono">
                            SYSTEM_ID: ATHARV_OS_V1.0
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;