"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Download, Users, Zap, Globe } from "lucide-react";

export default function Community() {
    const [memberCount, setMemberCount] = useState(0);
    const targetCount = 1254890;

    useEffect(() => {
        let start = 0;
        const duration = 2500;
        const step = targetCount / (duration / 16);

        const timer = setInterval(() => {
            start += step;
            if (start >= targetCount) {
                setMemberCount(targetCount);
                clearInterval(timer);
            } else {
                setMemberCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-32 relative overflow-hidden bg-[#02040a]">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-magenta-500/5 rounded-full blur-[120px]" style={{ backgroundColor: 'rgba(255,0,255,0.05)' }} />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 text-center">
                <div className="glass-panel max-w-5xl mx-auto rounded-[3rem] p-16 border border-white/5 relative overflow-hidden bg-gradient-to-br from-white/[0.02] to-transparent">
                    <div className="relative z-10 space-y-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mb-4 animate-bounce-slow">
                            <Users className="w-10 h-10 text-cyan-400" />
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
                                JOIN THE <span className="neon-text-magenta">EVOLUTION</span>
                            </h2>
                            <p className="text-gray-400 max-w-3xl mx-auto text-lg font-light italic">
                                Welcome to the core of the Bayuverse community. Track our exponential growth as we redefine the digital frontier together. Our member count represents the bold explorers who have joined the revolution.
                            </p>
                        </div>

                        <div className="py-4">
                            <div className="text-7xl md:text-9xl font-black text-white tabular-nums tracking-tighter italic">
                                {memberCount.toLocaleString()}
                                <span className="neon-text-cyan animate-pulse">+</span>
                            </div>
                            <div className="inline-flex items-center gap-2 mt-4 text-gray-500 uppercase tracking-[0.4em] text-xs font-bold">
                                <Globe className="w-3 h-3 text-cyan-500" />
                                Citizens of Bayuverse
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                            <Link href="#" className="btn-primary flex items-center justify-center gap-3">
                                <Download className="w-5 h-5" />
                                OS ACCESS
                            </Link>
                            <Link href="#" className="btn-outline flex items-center justify-center gap-3">
                                <Zap className="w-5 h-5" />
                                JOIN NODE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

