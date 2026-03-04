import React from 'react';

export const Background: React.FC = () => {
    return (
        <>
            {/* Base background color */}
            <div className="fixed inset-0 z-0 bg-[var(--bg-color)]" />

            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="fixed inset-0 z-0 w-full h-full object-cover opacity-80"
            >
                <source src="/01.mp4" type="video/mp4" />
            </video>

            {/* Dither pattern / Noise overlay (placeholder until we add the actual pattern) */}
            <div
                className="fixed inset-0 z-[1] opacity-20 mix-blend-screen pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* CRT Scanline effect */}
            <div
                className="fixed inset-0 z-[2] pointer-events-none"
                style={{
                    background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                    backgroundSize: '100% 4px, 6px 100%'
                }}
            />

            {/* Vignette effect */}
            <div className="fixed inset-0 z-[3] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.6)_100%)]" />
        </>
    );
};
