import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "AI Image Generator",
        description: "A stable-diffusion based image generation platform built with React, FastAPI, and Python.",
        tech: ["React", "TypeScript", "Python", "FastAPI"],
        link: "#",
        github: "#"
    },
    {
        title: "Terminal Portfolio",
        description: "This very website you are looking at right now. Built to emulate a CRT monitor and CLI interface.",
        tech: ["React", "TailwindCSS", "Vite"],
        link: "#",
        github: "#"
    },
    {
        title: "Data Visualization Dashboard",
        description: "Real-time analytics dashboard for monitoring IoT device metrics across global regions.",
        tech: ["Next.js", "D3.js", "WebSockets", "Node.js"],
        link: "#",
        github: "#"
    }
];

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="w-full max-w-5xl mx-auto my-20 px-4">
            <h2 className="text-3xl font-bold mb-10 drop-shadow-[0_0_8px_var(--neon-green)] flex items-center gap-4">
                <span className="text-white/50">&gt;</span> ./show_projects.sh
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <div key={idx} className="border border-[var(--neon-green)] bg-black/60 p-6 flex flex-col hover:bg-[var(--neon-green)] hover:text-black transition-colors group cursor-default">
                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                        <p className="flex-grow mb-6 text-sm opacity-90 group-hover:opacity-100">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6 text-xs font-bold">
                            {project.tech.map(t => (
                                <span key={t} className="px-2 py-1 bg-[var(--neon-green)]/20 text-[var(--neon-green)] group-hover:bg-black group-hover:text-[var(--neon-green)] border border-[var(--neon-green)]/30 group-hover:border-black/30">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 border-t border-[var(--neon-green)]/30 group-hover:border-black/30 pt-4 mt-auto">
                            <a href={project.github} className="flex items-center gap-2 text-sm font-bold hover:underline">
                                <Github size={16} /> CODE
                            </a>
                            <a href={project.link} className="flex items-center gap-2 text-sm font-bold hover:underline">
                                <ExternalLink size={16} /> LIVE
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
