"use client";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        // This section is fixed at the bottom, sitting BEHIND the other content (z-0)
        // The previous section (Projects) needs a margin-bottom to allow this to be seen
        <div className="fixed bottom-0 left-0 w-full h-[70vh] bg-zinc-900 text-white z-0 flex flex-col justify-between p-10 md:p-20">

            {/* Top Content */}
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-zinc-500 text-sm tracking-widest uppercase mb-4">What's Next?</h2>
                    <h1 className="text-5xl md:text-8xl font-black leading-[0.9]">
                        LET'S WORK <br />
                        <span className="text-indigo-500">TOGETHER.</span>
                    </h1>
                </div>
            </div>

            {/* Middle Content - The Big Email */}
            <div className="flex flex-col gap-4">
                <a
                    href="mailto:bhosaleatharv2@gmail.com" // Replace with your email
                    className="text-3xl md:text-6xl font-bold hover:text-indigo-400 transition-colors cursor-pointer"
                >
                    bhosaleatharv2@gmail.com
                </a>
                <p className="text-zinc-500 max-w-xl text-lg">
                    I am currently open for internships and freelance projects.
                    If you have an idea for an AI app or an IoT system, let's build it.
                </p>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap gap-8 text-zinc-400 font-medium">
                <a href="https://www.linkedin.com/in/atharv-bhosale-1b2a09380" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/atharvb07-rgb" target="_blank" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" target="_blank" className="hover:text-white transition-colors">Twitter</a>
                <a href="https://www.instagram.com/atharv_b__07/" target="_blank" className="hover:text-white transition-colors">Instagram</a>
            </div>

        </div>
    );
};

export default Contact;