"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Home, User, Code, Mail, ExternalLink, Trophy, Heart } from "lucide-react";
import { useRef } from "react";

// 1. INDIVIDUAL DOCK ICON COMPONENT
function DockIcon({ mouseX, icon: Icon, label, href }: any) {
    // ⚠️ THE FIX: Changed <HTMLDivElement> to <HTMLAnchorElement>
    const ref = useRef<HTMLAnchorElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.a
            href={href}
            ref={ref}
            style={{ width }}
            className="aspect-square rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md flex items-center justify-center relative group shadow-lg hover:bg-zinc-800 transition-colors"
        >
            <Icon className="text-zinc-400 group-hover:text-white transition-colors w-1/2 h-1/2" />

            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-zinc-300 text-xs rounded border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {label}
            </span>
        </motion.a>
    );
}

// 2. MAIN DOCK CONTAINER
const Dock = () => {
    const mouseX = useMotionValue(Infinity);

    return (
        <div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
        >
            <div className="flex items-end gap-3 px-4 py-3 rounded-full bg-white/5 border border-white/5 backdrop-blur-lg shadow-2xl">
                <DockIcon mouseX={mouseX} icon={Home} label="Start" href="#" />
                <DockIcon mouseX={mouseX} icon={User} label="About" href="#about" />
                <DockIcon mouseX={mouseX} icon={Code} label="Projects" href="#projects" />
                <DockIcon mouseX={mouseX} icon={Trophy} label="Awards" href="#achievements" />
                <DockIcon mouseX={mouseX} icon={Heart} label="Social" href="#social" />
                <DockIcon mouseX={mouseX} icon={Mail} label="Contact" href="#contact" />
                <div className="w-[1px] h-8 bg-white/10 mx-1" />
                <DockIcon mouseX={mouseX} icon={ExternalLink} label="Resume" href="/resume.pdf" />
            </div>
        </div>
    );
};

export default Dock;