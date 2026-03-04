import React from 'react';

export const About: React.FC = () => {
    return (
        <section id="about" className="w-full max-w-4xl mx-auto my-20 px-4">
            <div className="border border-[var(--neon-green)] bg-black/80 p-6 md:p-10 shadow-[8px_8px_0_var(--neon-green)] relative overflow-hidden transition-all duration-300 hover:shadow-[12px_12px_0_var(--neon-green)] hover:-translate-y-1 hover:-translate-x-1">
                <div className="absolute top-0 left-0 w-full h-8 bg-[var(--neon-green)] flex items-center px-4">
                    <span className="text-black font-bold text-sm tracking-widest">~/about.txt</span>
                    <div className="ml-auto flex gap-2">
                        <div className="w-3 h-3 border border-black rounded-full" />
                        <div className="w-3 h-3 border border-black rounded-full" />
                        <div className="w-3 h-3 bg-black rounded-full" />
                    </div>
                </div>

                <div className="mt-8 space-y-6 text-sm md:text-base leading-relaxed opacity-90">
                    <p className="animate-pulse"><span className="text-white/50">{'>'}</span> SYSTEM LOG: INITIALIZING BIO...</p>
                    <p>
                        Hello. I am <span className="text-white font-bold drop-shadow-[0_0_5px_white]">Muhammad Usman</span>. I write code, build systems, and explore the boundaries of web technologies and artificial intelligence.
                    </p>
                    <p>
                        My work focuses on creating seamless, high-performance applications with unique aesthetic experiences—like this retro terminal you are currently exploring. I thrive in the intersection of robust backend engineering and immersive frontend design.
                    </p>
                    <p className="border-l-2 border-[var(--neon-green)] pl-4 italic opacity-80 mt-4">
                        "We shape our tools and thereafter our tools shape us."
                    </p>
                    <p><span className="text-white/50">{'>'}</span> STATUS: READY FOR NEW CHALLENGES <span className="animate-pulse">_</span></p>
                </div>
            </div>
        </section>
    );
};
