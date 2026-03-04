import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Marquee } from './Marquee';
import { MusicPlayer } from './MusicPlayer';

export const Header: React.FC = () => {
    const socialLinks = [
        { icon: <Github size={20} />, href: 'https://github.com/MuhammadUsmangani', label: 'GitHub' },
        { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
        { icon: <Mail size={20} />, href: 'mailto:hello@example.com', label: 'Email' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <Marquee text="*** WELCOME TO THE TERMINAL *** SYSTEM INITIALIZED *** MUHAMMAD USMAN - SENIOR SOFTWARE ENGINEER ***" />

            <div className="w-full px-4 md:px-8 py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                {/* Social Links Box */}
                <div className="flex items-center gap-4 border border-[var(--neon-green)] bg-black/60 p-2 md:p-3">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="hover:scale-110 hover:drop-shadow-[0_0_8px_var(--neon-green)] transition-all cursor-pointer"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                {/* Music Player */}
                <MusicPlayer />
            </div>
        </header>
    );
};
