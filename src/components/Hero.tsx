import React, { useState, useEffect } from 'react';

const titles = [
    "SENIOR SOFTWARE ENGINEER",
    "PROMPT ENGINEER",
    "AI FULLSTACK ENGINEER"
];

export const Hero: React.FC = () => {
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] w-full mt-10">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 tracking-tighter drop-shadow-[0_0_15px_var(--neon-green)] text-center leading-none">
                MUHAMMAD<br />USMAN
            </h1>

            <div className="h-8 md:h-10 text-base md:text-2xl opacity-90 mb-8 min-w-[280px] text-center border-b border-[var(--neon-green)]/30 pb-2">
                <span className="animate-pulse">{'>'} </span>
                {titles[currentTitleIndex]}
                <span className="animate-pulse">_</span>
            </div>

            <div className="flex gap-4 md:gap-8 mt-12 text-sm md:text-base">
                <a href="#projects" className="border border-[var(--neon-green)] px-6 py-3 hover:bg-[var(--neon-green)] hover:text-black hover:drop-shadow-[0_0_10px_var(--neon-green)] transition-all bg-black/60 relative group overflow-hidden">
                    <span className="relative z-10">&lt;PROJECTS /&gt;</span>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-[var(--neon-green)] transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                </a>
                <a href="#contact" className="border border-[var(--neon-green)] px-6 py-3 hover:bg-[var(--neon-green)] hover:text-black hover:drop-shadow-[0_0_10px_var(--neon-green)] transition-all bg-black/60 relative group overflow-hidden">
                    <span className="relative z-10">&lt;CONTACT /&gt;</span>
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-[var(--neon-green)] transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                </a>
            </div>
        </div>
    );
};
