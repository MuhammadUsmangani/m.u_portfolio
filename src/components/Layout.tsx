import React from 'react';
import { Background } from './Background';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen text-[var(--neon-green)] font-mono selection:bg-[var(--neon-green)] selection:text-black overflow-x-hidden">
            <Background />
            <div className="relative z-10 w-full min-h-screen flex flex-col pt-12">
                {children}
            </div>
        </div>
    );
};
