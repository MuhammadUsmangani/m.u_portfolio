import React, { useState } from 'react';
import { Play, Square, Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    return (
        <div className="flex items-center gap-3 border border-[var(--neon-green)] bg-black/60 p-2 text-xs md:text-sm">
            <div className="flex flex-col items-center justify-center w-8 h-8 cursor-pointer hover:bg-[var(--neon-green)] hover:text-black transition-colors" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Square size={16} /> : <Play size={16} className="ml-0.5" />}
            </div>

            <div className="flex-1 flex flex-col justify-center min-w-[120px]">
                <div className="flex justify-between items-center mb-1">
                    <span className="truncate max-w-[100px]">{isPlaying ? 'NOW PLAYING...' : 'STOPPED'}</span>
                    <span className="text-[10px]">00:00</span>
                </div>
                {/* EQ lines */}
                <div className="h-2 w-full flex gap-[2px] items-end">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="w-1 bg-[var(--neon-green)] opacity-80"
                            style={{
                                height: isPlaying ? `${Math.max(20, Math.random() * 100)}%` : '2px',
                                transition: 'height 0.1s ease-in-out'
                            }}
                        />
                    ))}
                </div>
            </div>

            <button onClick={() => setIsMuted(!isMuted)} className="hover:text-white transition-colors">
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
        </div>
    );
};
