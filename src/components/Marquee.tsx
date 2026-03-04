import React from 'react';

export const Marquee: React.FC<{ text: string }> = ({ text }) => {
    return (
        <div className="w-full h-8 border-b border-[var(--neon-green)] flex items-center overflow-hidden bg-black/50 relative z-20">
            <div className="whitespace-nowrap animate-marquee font-bold tracking-widest text-sm uppercase">
                {text}
            </div>
        </div>
    );
};
