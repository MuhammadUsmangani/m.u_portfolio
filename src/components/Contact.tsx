import React, { useState } from 'react';

export const Contact: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'' | 'sending' | 'sent'>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !message) return;
        setStatus('sending');
        setTimeout(() => {
            setStatus('sent');
            setEmail('');
            setMessage('');
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="w-full max-w-2xl mx-auto my-20 px-4 mb-32">
            <h2 className="text-3xl font-bold mb-8 drop-shadow-[0_0_8px_var(--neon-green)] flex items-center justify-center gap-4">
                <span className="text-white/50">&gt;</span> ./contact.sh
            </h2>

            <div className="border border-[var(--neon-green)] bg-black/80 p-6 md:p-10 shadow-[0_0_15px_rgba(57,255,20,0.1)] hover:shadow-[0_0_25px_rgba(57,255,20,0.3)] transition-shadow">
                <div className="mb-8 opacity-80 text-sm md:text-base border-b border-[var(--neon-green)]/30 pb-4">
                    <p>Please enter your transmission details below to establish connection.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-bold flex items-center gap-2 group">
                            <span className="text-white/50 group-hover:text-[var(--neon-green)] transition-colors">?</span> EMAIL_ADDRESS:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-transparent border-b border-[var(--neon-green)] focus:outline-none focus:border-white p-2 text-white font-mono placeholder:text-[var(--neon-green)]/30 transition-colors"
                            placeholder="user@domain.com"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="font-bold flex items-center gap-2 group">
                            <span className="text-white/50 group-hover:text-[var(--neon-green)] transition-colors">?</span> MESSAGE_CONTENT:
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="bg-transparent border border-[var(--neon-green)] focus:outline-none focus:border-white p-3 text-white font-mono min-h-[150px] resize-y placeholder:text-[var(--neon-green)]/30 transition-colors"
                            placeholder="TYPE YOUR MESSAGE HERE..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status !== ''}
                        className="border border-[var(--neon-green)] py-4 px-6 hover:bg-[var(--neon-green)] hover:text-black transition-all duration-300 font-bold mt-2 disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[var(--neon-green)] flex items-center justify-center gap-2"
                    >
                        {status === 'sending' ? (
                            <span className="animate-pulse">TRANSMITTING...</span>
                        ) : status === 'sent' ? (
                            'MESSAGE DELIVERED SUCCESSFULLY'
                        ) : (
                            'INITIALIZE TRANSMISSION'
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};
